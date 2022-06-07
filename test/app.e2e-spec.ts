import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/thing (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/thing')
      .expect(HttpStatus.OK)
      .expect({
        property: '00000000-0000-0000-0000-000000000000',
      });
  });

  it('/api/thing/:id/connectToAnotherThing (GET)', () => {
    const someMockId = 'magic-uuid-here';
    return request(app.getHttpServer())
      .get(`/api/thing/${someMockId}/connectToAnotherThing`)
      .expect(HttpStatus.OK)
      .expect({
        property: someMockId,
      });
  });

  it('/api/thing (PUT)', () => {
    const someMockId = 'magic-uuid-here-but-in-put';
    return request(app.getHttpServer())
      .put(`/api/thing`)
      .send({
        property: someMockId,
      })
      .expect(HttpStatus.OK)
      .expect({
        property: someMockId,
      });
  });

  it('/api/thing/:id/connectToAnotherThing (POST)', () => {
    const someMockId = 'magic-uuid-here-but-in-put';
    return request(app.getHttpServer())
      .post(`/api/thing`)
      .send({
        anotherThingId: someMockId,
      })
      .expect(HttpStatus.CREATED)
      .expect({
        anotherThingId: someMockId,
      });
  });
});
