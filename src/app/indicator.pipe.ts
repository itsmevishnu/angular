import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indicator'
})
export class IndicatorPipe implements PipeTransform {

  transform(value: number): any {
    if( value < 18) {
      return 'bg-primary';
    } else if( value >= 18 && value <=24) {
      return 'bg-success';
    } else if( value > 24 && value <=29 ) {
      return "bg-warning";
    } else if( value >29 && value<=39) {
      return "bg-danger";
    } else {
      return "bg-secondary";
    }
  }

}
