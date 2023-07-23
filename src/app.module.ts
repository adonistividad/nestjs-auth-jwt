import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule, AuthService } from './auth';
import { UsersModule } from './users';
import { ConfigModule } from '@nestjs/config';

@Module({  
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: ['.env'],
    }),
    JwtModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService ],
})
export class AppModule {}
