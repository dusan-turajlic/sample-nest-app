import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';

describe('MyService', () => {
  let controller: ApiController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiController],
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller.getThing()).toEqual({
      property: expect.any(String),
    });
  });
});
