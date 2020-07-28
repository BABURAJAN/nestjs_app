import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import {ContactFactory} from './contact.factory';
import {Repository, UpdateResult, Any} from 'typeorm';
import {Contact} from '../contact.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import {findAllContact_Mock_data, createContact_Mock_data,
       updatedContact_Mock_data} from './mock.contact.data';

describe('ContactsService', () => {
  let contactsService: ContactsService; 
  let repository : Repository<Contact>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        ContactsService, 
        Contact,
      { 
        provide: getRepositoryToken(Contact), 
        useClass: Repository
      }
    ],
    }).compile();

    contactsService = module.get<ContactsService>(ContactsService);
    repository = module.get<Repository<Contact>>(getRepositoryToken(Contact));
  });

  it('should be defined', () => {
    expect(contactsService).toBeDefined();
  });


  it('should find all contact ', async () => {
    jest.spyOn(repository, 'find').mockResolvedValueOnce(findAllContact_Mock_data);    
    const finalResult = await contactsService.findAll();  
    expect(finalResult).toEqual(findAllContact_Mock_data);

  });

  it('should create contact ', async () => {
    jest.spyOn(repository, 'save').mockResolvedValueOnce(createContact_Mock_data);    
    const finalResult = await contactsService.create(createContact_Mock_data);  
    expect(finalResult).toEqual(createContact_Mock_data);

  });
  
  it('should return one contact on the basis of id ', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(createContact_Mock_data);    
    const finalResult = await contactsService.findById(2);
    expect(finalResult).toEqual(createContact_Mock_data);

  });

  it('should update contact on the basis of name ', async () => {
    jest.spyOn(repository, 'update').mockReturnThis();
    const finalResult = await contactsService.update(updatedContact_Mock_data);
    expect(finalResult).toEqual(updatedContact_Mock_data);

  });


  it('should return one contact on the basis of name ', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(createContact_Mock_data);    
    const finalResult = await contactsService.getContactById('babu');
    expect(finalResult).toEqual(createContact_Mock_data);
  });

  it('should return one contact which is inserted with procedure ', async () => {
    jest.spyOn(repository, 'query').mockResolvedValueOnce(createContact_Mock_data);    
    const finalResult = await contactsService.insertWithProcedure(createContact_Mock_data);
    expect(finalResult).toEqual(createContact_Mock_data);
  });
  
});
