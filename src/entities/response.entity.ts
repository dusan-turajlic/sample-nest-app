import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class ResponseEntity {
  @ApiProperty({
    example: '00000000-0000-0000-0000-000000000000',
    description: 'Some property',
  })
  property: string;

  @ApiPropertyOptional({
    description: 'I am almost never here',
  })
  someTimesHere?: boolean;
}
