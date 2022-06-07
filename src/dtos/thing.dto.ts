import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class ThingDto {
  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
  @IsString()
  @IsNotEmpty()
  property: string;
}
