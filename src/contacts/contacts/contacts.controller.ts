import { Controller, Get, UseFilters } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from './contacts.service';
import { Post, Body } from  '@nestjs/common';
import { HttpException} from '@nestjs/common';
import { ContactModel } from './contact.model';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService){}

    @Get()
    index(): Promise<Contact[]> {
    // console.log("controller  ", this.contactsService.findAll().then((value) => {
      //console.log(value)})); 
      return this.contactsService.findAll();
    }  

   /* @Get("callProcedure/:id")
    index1(@Param(':id') id): Promise<Contact[]> {
      return this.contactsService.find(Number(id));
    }  */

   /* @Post("findById")
    findById(): Promise<Contact> {
      return this.contactsService.getContactById('babu');
    }*/

    @Post("update")
    async update(@Body() contactData: Contact): Promise<any> {
      return await this.contactsService.update(contactData);
    }

    /*@Post("insertWithProcedure/")
    insertInDbWithProcedure(@Body() contactData: Contact): Promise<Contact[]> {
      return this.contactsService.insertWithProcedure(contactData);
    }  */
    
    @Post('create')
    // @UseFilters(new HttpErrorFilter())
     async create(@Body() contactModel: ContactModel): Promise<ContactModel> {
     return await this.contactsService.create(contactModel);
    /* try{
        return await this.contactsService.create(contactData);
      }catch(exception){
        console.log("  00000000000000000  ",exception.HttpStatus);
        throw new HttpException('error while creating contact in controller !!!', HttpStatus.BAD_REQUEST);
      }*/
      } 


    @Post('create2')
    //@UseFilters(new HttpErrorFilter())
    async create2(@Body() ContactModel: ContactModel): Promise<any> {
     try{
        return await this.contactsService.create(ContactModel);
     }catch(exception){
        console.log('===========',exception.name);
        throw new HttpException(exception, 400);
      }
   
    
  }  

}