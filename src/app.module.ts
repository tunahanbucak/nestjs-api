import { Module } from '@nestjs/common';
import { AuthMOdule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthMOdule, UserModule, BookmarkModule],
})
export class AppModule {}
