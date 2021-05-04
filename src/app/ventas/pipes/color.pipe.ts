import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform{

  transform(value: number): string {
    if ( value === 0 ) {
      return 'rojo';
    } else if( value === 1){
      return 'negro';
    } else if( value === 2){
      return 'azul';
    } else {
      return 'verde';
    }
  }

}
