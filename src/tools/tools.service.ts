import { Injectable } from '@nestjs/common';
import { Tool } from './interfaces/tool.interface'
@Injectable()
export class ToolsService {
    private readonly tools: Tool[] = [];

    add(tool: Tool) {
        this.tools.push(tool);
    }

    all() {
        return this.tools;
    }
}
