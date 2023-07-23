import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt'; 
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(public config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET'),
      // secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log('validate payload:: ', payload);
    return { id: payload.sub, name: payload.name };
  }
}
