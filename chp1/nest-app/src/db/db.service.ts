import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
    private tables = {
        books: [],
    }

    create(table: string, primaryKey: string, data: object) {
        const index = this.tables[table].length;
        const id = index + 1;
        data[primaryKey] = id;
        this.tables[table][index] = data;
        return data;
    }

    get(table: string): [] {
        return this.tables[table];
    }
}
