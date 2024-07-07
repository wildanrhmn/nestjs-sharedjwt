import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../strategies/jwt-auth.strategy';
import { GoogleStrategy } from '../strategies/google-oauth.strategy';
import { FacebookStrategy } from '../strategies/facebook-oauth.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.AUTH_JWT_SECRET,
      signOptions: {
        expiresIn: process.env.AUTH_JWT_TOKEN_EXPIRES_IN,
      },
    }),
  ],
  providers: [JwtStrategy, GoogleStrategy, FacebookStrategy],
  exports: [JwtStrategy, GoogleStrategy, FacebookStrategy, JwtModule],
})
export class AuthModule {}
