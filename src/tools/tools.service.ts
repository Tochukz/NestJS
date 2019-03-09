import { Injectable } from '@nestjs/common';
import { Tool } from './tool.interface'
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
