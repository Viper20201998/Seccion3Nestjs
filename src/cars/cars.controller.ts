import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { CarsService } from './cars.service'

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }
  //como tal el id es un string para convertirlo en nuemero se puede usar el +id o el metodo Number(id)
  //tenemos un problema con este metodo cuando se manda un strin y pueden venir letras y siempre devuelve un estatus 200
  //Solucion habria que validar que pase solo numeros que si no es un numero que no lo envie.
  //pero si los id estan compuestos por hash habria que validar en el otro metodo cars.service.
  @Get(':id')
  //quitamos el ParseIntPipe por que nuestro id ya no es number es string.
  getCarById(@Param('id') id: string) {
    return this.carsService.findOneById(id)
  }

  //Crearemos un CRUD
  @Post()
  createCar(@Body() body: any) {
    return body
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    }
  }
}
