import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
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
  //importamos el ParseIntPipe para convertir lo que viene a numero
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id)
  }
}
