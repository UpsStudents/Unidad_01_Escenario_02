import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AssetBuilder } from './Assets/AssetBuilder';
import { AssetDirector } from './Assets/AssetDirector';
import { FixedAsset } from './FixedAsset/FixedAsset';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    const director = new AssetDirector();
    const builder = new AssetBuilder();
    director.setBuilder(builder);
    director.buildComputer();
    const computer: FixedAsset = director.getProduct();
    director.buildTable();
    const table: FixedAsset = director.getProduct();
    director.buildChair();
    const chair: FixedAsset = director.getProduct();

    console.log('Computer: ', computer);
    console.log('Table: ', table);
    console.log('Chair: ', chair);

    return { message: 'Hola mundo' };
  }
}
