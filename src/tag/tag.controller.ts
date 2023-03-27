import { Controller, Get } from '@nestjs/common';

@Controller()
export class TagController {
  @Get()
  getTag(): { some: string } {
    return {
      some: 'string',
    };
  }
}
