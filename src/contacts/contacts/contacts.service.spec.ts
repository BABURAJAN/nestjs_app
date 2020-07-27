import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
jest.mock('./contacts.service');
import {ContactFactory} from './contact.factory';

describe('ContactsService', () => {
  let service: ContactsService; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService],
    }).compile();

    service = module.get(ContactsService);
  });

  it('should add new contact ', async () => {
    const acc = ContactFactory.build();
    jest.spyOn(service, 'create').mockResolvedValue(acc);
    expect(await service.create(ContactFactory.build())).toEqual(acc);
  });

  it('should return all contact', async () => {
    const con = ContactFactory.buildList(10)
    jest.spyOn(service, 'findAll').mockResolvedValue(con);
    expect(await service.findAll()).toEqual(con);
  });

  it('should return contact filtered by id ', async () => {
    const con = ContactFactory.build();
    jest.spyOn(service, 'findById').mockResolvedValue(con);
    expect(await service.findById('babu')).toEqual(con);
  })
});
