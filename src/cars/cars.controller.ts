import { Controller, Get, Res, Param, HttpStatus, Post, Req } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = [
         {
             id: 1,
             brand: 'Toyota',
             year: 2018,
             color: 'White'
         },
         {
             id: 2,
             brand: 'Mitsibushi',
             year: 2005,
             color: 'Blue'
         },
         {
             id: 3,
             brand: 'Honda',
             year: 2016, 
             color: 'Black'
         }
    ];

    @Get()
    all() {
        return this.cars;
    }

    @Get(':id')
    car(@Res() res, @Param('id') id) {
       res.status(HttpStatus.OK).json(this.cars.find(car => car.id == id));
       //$ curl localhost:3000/cars/1 | python -m json.tool
    }

    @Post()
    add(@Req() req, @Res() res) {
        const newCar = {
            id: this.cars.length + 1,
            brand: req.body.brand,
            color: req.body.color,
            year: req.body.year         
        }
        this.cars.push(newCar);
        return res.status(HttpStatus.CREATED).json(this.cars);
        //$ curl localhost:3000/cars -d  'brand=Hyunda&color=Blue&year=2015' | python -m json.tool
    }
}
