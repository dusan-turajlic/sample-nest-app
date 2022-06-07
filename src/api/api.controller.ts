import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import ResponseEntity from '../entities/response.entity';
import {
  ApiCreatedResponse,
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
  @ApiOkResponse({
    description: 'This is a response',
    type: ResponseEntity,
  })
  @Get()
  getThing() {
    return {
      property: '00000000-0000-0000-0000-000000000000',
    };
  }

  @ApiOperation({ summary: 'Its a another thing' })
  @ApiOkResponse({
    description: 'This is another response',
    type: ResponseEntity,
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find that other thing',
  })
  @Get(':id/connectToAnotherThing')
  connectToAnotherThing(@Param('id') id: string) {
    return {
      property: id,
    };
  }

  @ApiOkResponse({
    description: 'This is another response',
    type: ThingDto,
  })
  @Put()
  replaceThatThing(@Body() thingDto: ThingDto) {
    return thingDto;
  }

  @ApiCreatedResponse({
    description: 'This is a created response',
    type: AnotherThingDto,
  })
  @Post(':id/connectToAnotherThing')
  createAnotherTing(
    @Body() anotherThingDto: AnotherThingDto,
    @Param('id') id: string,
  ) {
    console.log("I'll just log this id", id);
    return anotherThingDto;
  }
}
