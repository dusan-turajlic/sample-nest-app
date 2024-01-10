import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import ResponseEntity from '../entities/response.entity';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import ThingDto from '../dtos/thing.dto';
import AnotherThingDto from '../dtos/anotherThing.dto';

@Controller('api/thing')
@ApiTags('Thing')
export class ApiController {
  @ApiOperation({ summary: 'Its a thing' })
  @Get()
  getThing(): ResponseEntity {
    return {
      property: '00000000-0000-0000-0000-000000000000',
    };
  }

  @ApiOperation({ summary: 'Its a specific thing' })
  @ApiOkResponse({ description: 'Yes!', type: ResponseEntity })
  @Get(':id')
  getSpecificThing(@Param('id') id: string): ResponseEntity {
    return {
      property: id,
    };
  }

  @ApiOperation({ summary: 'Its a another thing' })
  @ApiNotFoundResponse()
  @Get(':id/connectToAnotherThing')
  connectToAnotherThing(@Param('id') id: string): ResponseEntity {
    return {
      property: id,
    };
  }

  @Put()
  replaceThatThing(@Body() thingDto: ThingDto): ThingDto {
    return thingDto;
  }

  @Post()
  createAnotherTing(@Body() anotherThingDto: AnotherThingDto): AnotherThingDto {
    return anotherThingDto;
  }
}
