import { Module } from '@nestjs/common';
import { AuthMOdule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthMOdule,
    UserModule,
    BookmarkModule,
    PrismaModule,
  ],
})
export class AppModule {}
