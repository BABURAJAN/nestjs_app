import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import {ContactEntityToModelMapper} from '../contacts/contacts/ContactEntityToModelMapper';
import {ContactModelToEntityMapper} from '../contacts/contacts/ContactModelToEntityMapper';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contact]),
      ],
  providers: [ContactsService, ContactModelToEntityMapper, ContactEntityToModelMapper],
  controllers: [ContactsController]
})
export class ContactsModule {}
