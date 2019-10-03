import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Auth } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  authenticate(@Body() authenticate: Auth, @Res() response) {
    this.authService
      .localePartner(authenticate)
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(err => {
        response.status(HttpStatus.OK).json(err);
      });

    console.log(authenticate);
    return authenticate;
  }
}
