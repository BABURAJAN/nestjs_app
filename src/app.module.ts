import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ContactsModule,       
  TypeOrmModule.forRoot({
    type: "mssql",
    host:"BABURAJAN",
    database: "db",
    username:"BABURAJAN",
    password:"System.exit(0)",
    domain:"BABURAJAN",
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}