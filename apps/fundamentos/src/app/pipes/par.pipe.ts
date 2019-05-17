import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'par'
})
export class ParPipe implements PipeTransform {

  transform(numeros: number[]): number[] {
    return numeros.filter(n => n % 2 === 0);
  }

}
