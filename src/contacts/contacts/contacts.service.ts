import { Injectable, Options } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Contact_1 } from '../contact_1.entity';
import { ContactModel } from './contact.model';
import {ContactModelToEntityMapper} from './ContactModelToEntityMapper';
import {ContactEntityToModelMapper} from './ContactEntityToModelMapper';
import { Contact } from '../contact.entity';


@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact_1)
        private contact_1Repository: Repository<Contact>,

        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,

        private contactModelToEntityMapper : ContactModelToEntityMapper,
        private contactEntityToModelMapper : ContactEntityToModelMapper,

    ) { }

    
    async  findAll(): Promise<Contact[]> {

        return await this.contact_1Repository.find();
    }

   /* async  findById(id): Promise<any> {
        //this.connection.driver['master'];
        return await this.contactRepository.findOne(id);
    }*/

    async  create(contactModel:ContactModel): Promise<ContactModel> {
         const contactEntity = await this.contactModelToEntityMapper.mapModelToEntity(contactModel);
         const returnedEntity  = await this.contact_1Repository.save(contactEntity);
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
        const ret = await this.contact_1Repository.update(contact.id,contact);
        return contact;
    }

   /* async getContactById(fName): Promise<Contact>{ 
        return await this.contactRepository.findOne({
            firstName:fName
        });
    }*/

    async insertWithProcedure(contact: Contact): Promise<Contact>{
        return await this.contact_1Repository.query("test_procedure_insert @firstName='" + contact.firstName + 
        "', @lastName='"+contact.lastName+
        "', @email='"+contact.email+
        "', @phone='"+contact.phone+
        "', @city='"+contact.city+
        "', @country='"+contact.country+
        "';"); 
    }

    async  create2(contacts: [Contact_1, Contact]): Promise<any[]> {
        var returnedEntity = [];
        console.log("contacts[0] >>>>>>>>>> ", contacts[0]);
        console.log("contacts[1] >>>>>>>>>> ", contacts[1]);
        const returnedContact_1  = await this.contact_1Repository.save(contacts[0]);
        returnedEntity.push(returnedContact_1);
        const returnedContact  = await this.contactRepository.save(contacts[1]);
        returnedEntity.push(returnedContact);

        return returnedEntity;
   }
}

