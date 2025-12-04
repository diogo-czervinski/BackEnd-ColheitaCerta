import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './DataBase/database.module';
import { UserModule } from './User/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DataBaseModule,
    UserModule
  ],
})
export class AppModule {}
