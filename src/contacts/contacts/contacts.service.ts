import { Injectable, Options } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Contact } from '../contact.entity';
import { ContactModel } from './contact.model';
import {ContactModelToEntityMapper} from './ContactModelToEntityMapper';
import {ContactEntityToModelMapper} from './ContactEntityToModelMapper';


@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,

        private contactModelToEntityMapper : ContactModelToEntityMapper,
        private contactEntityToModelMapper : ContactEntityToModelMapper,

    ) { }

    
    async  findAll(): Promise<Contact[]> {

        return await this.contactRepository.find();
    }

   /* async  findById(id): Promise<any> {
        //this.connection.driver['master'];
        return await this.contactRepository.findOne(id);
    }*/

    async  create(contactModel:ContactModel): Promise<ContactModel> {
         const contactEntity = await this.contactModelToEntityMapper.mapModelToEntity(contactModel);
         const returnedEntity  = await this.contactRepository.save(contactEntity);
         const returnedModel = await this.contactEntityToModelMapper.mapEntityToModel(returnedEntity);
         return returnedModel;
    }
        //,{reload:false}
        /*try{
            return await this.contactRepository.save(contact);
          }catch(exception){
            console.log("  00000000000000000  ",exception.message);
            throw new HttpException('error while creating contact in Service !!!', HttpStatus.BAD_REQUEST);
          }*/

    async update(contact: Contact): Promise<Contact> {
        const ret = await this.contactRepository.update(contact.id,contact);
        return contact;
    }

   /* async getContactById(fName): Promise<Contact>{ 
        return await this.contactRepository.findOne({
            firstName:fName
        });
    }*/

    async insertWithProcedure(contact: Contact): Promise<Contact>{
        return await this.contactRepository.query("test_procedure_insert @firstName='" + contact.firstName + 
        "', @lastName='"+contact.lastName+
        "', @email='"+contact.email+
        "', @phone='"+contact.phone+
        "', @city='"+contact.city+
        "', @country='"+contact.country+
        "';"); 
    }
}

