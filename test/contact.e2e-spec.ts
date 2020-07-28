import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ContactsModule } from './../src/contacts/contacts.module';
import { ContactsService } from '../src/contacts/contacts/contacts.service';
import { AppModule } from './../src/app.module';

describe('Contact Controller (e2e)', () => {
  let app: INestApplication;
  let contactsService: ContactsService;
  let conService = { findAll: () => ['test'] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ContactsModule],
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /*it('(GET) contacts', () => {
    return request(app.getHttpServer())
      .get('/contacts')
      .expect(200)
     // .expect('Hello World!');
     .expect({
        data: conService.findAll,
      });
  });*/

  it(`/GET contacts`, () => {
    return request(app.getHttpServer())
      .get('/contacts')
      .expect(200)
      .expect({
        data: conService.findAll,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
