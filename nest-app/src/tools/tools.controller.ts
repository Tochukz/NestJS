import { Controller, Get, Post, Body } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsDto } from './dto/tools.dto';

@Controller('tools')
export class ToolsController {
    constructor(private readonly toolsService: ToolsService){}

    @Get()
    all() {
        return this.toolsService.all();
        //$ curl localhost:3000/tools  | python -m json.tool
    }

    @Post()
    add(@Body() toolsDto: ToolsDto) {
        this.toolsService.add(toolsDto);
        return this.toolsService.all();
        //$ curl localhost:3000/tools -d 'name=Nest&type=NodeJS FrameWork&level=1&experience=10' | python -m json.tool
    }
}
