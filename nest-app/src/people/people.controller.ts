import { Controller, Get, Param, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { AddPersonDto } from './dto/add-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
    private people = [
        {
            id: 1,
            name: 'Chichi',
            city: 'Lagos',
            height: 5.7
        },
        {
            id: 2,
            name: 'Chukwudi',
            city: 'Kaduna',
            height: 6.0
        },
        {
            id: 3,
            name: "Tochukwu",
            city: "CapeTown",
            height: 5.8
        },
        {
            id: 4,
            name: 'Uche',
            city: 'Lagos',
            height: 5.9
        }
    ];

    @Get()
    everyBody(){        
        return this.people;
        //$ curl localhost:3000/people | python -m json.tool
    }

    @Get('person/:name')
    person(@Param('name') name) {        
        return this.people.filter(person => person.name.toLowerCase() == name.toLowerCase());
        //$ curl localhost:3000/people/person/chichi | python -m json.tool
    }

    @Get('cities/:city')
    city(@Param() params) {       
        return this.people.filter(person => person.city.toLowerCase() == params.city.toLowerCase());
        //$ curl localhost:3000/people/cities/lagos | python -m json.tool
    }

    @Get('/person')
    id(@Query() query) {
        return this.people.find(person => person.id == query.id);
        //$ curl localhost:3000/people/person?id=1 | python -m json.tool
    }

    @Post('add')
    addPerson(@Body() addPersonDto: AddPersonDto) {
        addPersonDto.id = this.people[this.people.length-1].id + 1;
        this.people.push(addPersonDto);
        return this.people;
        //$ curl localhost:3000/people/add -d 'name=Urasi&city=Lagos&height=5.7' | python -m json.tool
    }

    @Put(':id')
    updatePerson(@Param('id') id, @Body() updatePersonDto: UpdatePersonDto) {
        Object.assign(this.people.find(person => person.id == id), updatePersonDto);
        return this.people.find(person => person.id == id);
        //$ curl -X PUT localhost:3000/people/4 -d 'city=Arizona&height=5.89' | python -m json.tool
    }

    @Delete(':id')
    deletePerson(@Param('id') id){
        this.people = this.people.filter(person => person.id != id);
        return this.people;
        //$ curl -X DELETE localhost:3000/people/1 | python -m json.tool
    }
}
