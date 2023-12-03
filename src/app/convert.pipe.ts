import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, targetUnits: string): unknown {

    switch (targetUnits) {
      case 'km':
        return +value * 1.609;
      case 'm':
        return +value * 1609.34;
      case 'cm':
        return +value * 160934;
      default:
        throw new Error('Target unit not supported');
    }
  }

}
