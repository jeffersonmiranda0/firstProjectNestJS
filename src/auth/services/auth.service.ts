import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from '../entitys/partner.entity';
import { Repository } from 'typeorm';
import { Auth } from '../models/auth.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Partner)
    private readonly authRepository: Repository<Partner>,
    private readonly jwtService: JwtService,
  ) {}

  async localePartner(auth: Auth) {
    const search = {
      login: '',
      password: '',
    };

    search.login = auth.login;
    search.password = auth.password;

    const user = await this.authRepository.findOne(search);

    const payload = {
      login: user.login,
      idParthner: user.idParthner,
    };

    return { token: await this.jwtService.sign(payload) };
  }
}
//
