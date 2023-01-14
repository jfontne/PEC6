import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): unknown {
    if(value) {return value.toFixed(2).toString() + ' €';}
    else {return null};
  }

}
