import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
jest.mock('./contacts.service');
import {ContactFactory} from './contact.factory';

describe('AppController', () => {
  let module: TestingModule, contactsService: ContactsService, contactsController: ContactsController;

    beforeAll(async () => {
      module = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [
        ContactsService,
      ],
    }).compile();
  });

  beforeEach(() => {
    contactsService = module.get(ContactsService);
  });

  describe('get all  Contacts', () => {
    it('should return Contacts', async () => {
    jest.spyOn(contactsService, 'findAll').mockImplementation();
      expect(contactsService.findAll());
    });
  });

  describe(' find contact by one Id', () => {
    it('should return Contacts', async () => {
    jest.spyOn(contactsService, 'findById').mockImplementation();
      expect(contactsService.findById('babu'));
    });
  });

  describe(' create new contact ', () => {
    it('should return Contacts', async () => {
      const acc = ContactFactory.build();
     
    jest.spyOn(contactsService, 'create').mockImplementation();
      expect(contactsService.create(acc))
    });
  });

});
