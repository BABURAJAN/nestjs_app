import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact_1 } from './contact_1.entity';
import {ContactEntityToModelMapper} from '../contacts/contacts/ContactEntityToModelMapper';
import {ContactModelToEntityMapper} from '../contacts/contacts/ContactModelToEntityMapper';
import { Contact } from './contact.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Contact, Contact_1]),
      ],
  providers: [ContactsService, ContactModelToEntityMapper, ContactEntityToModelMapper],
  controllers: [ContactsController]
})
export class ContactsModule {}
