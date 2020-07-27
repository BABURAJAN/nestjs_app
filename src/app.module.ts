import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'
import { config } from './config.service';
import { DatabaseConfig } from './database.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    ContactsModule,
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseConfig
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}