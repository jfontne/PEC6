import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImageURL'
})
export class DefaultImageURLPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value) {return value}
    else {return 'assets/images/default.jpg'}
  }

}
