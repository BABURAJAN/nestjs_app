import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../contact.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import {  HttpStatus, HttpException, UseFilters} from '@nestjs/common';
import {HttpErrorFilter} from './http-exception.filter';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }


    async  findAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async  findById(id): Promise<Contact> {
        return await this.contactRepository.findOne(id);
    }

    async  create(contact:Contact): Promise<Contact> {
       
        return await this.contactRepository.save(contact);
  
        /*try{
            return await this.contactRepository.save(contact);
          }catch(exception){
            console.log("  00000000000000000  ",exception.message);
            throw new HttpException('error while creating contact in Service !!!', HttpStatus.BAD_REQUEST);
          }*/
    }

    async update(contact: Contact): Promise<any> {
        const ret = await this.contactRepository.update(contact.id, contact);

        return contact;
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }

    async getContactById(fName): Promise<Contact>{ 
        
        return await this.contactRepository.findOne({
            firstName:fName
        });
    }

    async insertWithProcedure(contact: Contact): Promise<Contact[]>{
        return await this.contactRepository.query("test_procedure_insert @firstName='" + contact.firstName + 
        "', @lastName='"+contact.lastName+
        "', @email='"+contact.email+
        "', @phone='"+contact.phone+
        "', @city='"+contact.city+
        "', @country='"+contact.country+
        "';"); 
    }
}

