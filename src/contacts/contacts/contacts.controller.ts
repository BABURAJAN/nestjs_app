import { Controller, Get } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from './contacts.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService){}

    @Get()
    index(): Promise<Contact[]> {
      return this.contactsService.findAll();
    }  
    
    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactsService.create(contactData);
    } 

    @Post('create1')
    async create1(@Body() contactData: Contact): Promise<any> {
      return contactData;
    }
}