import { Pipe, PipeTransform } from '@angular/core';
import { cityName, isAirport } from 'picton-model';

@Pipe({
  name: 'cityName',
  standalone: true,
})
export class CityNamePipe implements PipeTransform {
  transform(value?: string) {
    if (value && isAirport(value)) {
      return cityName(value);
    } else {
      return '';
    }
}
}
