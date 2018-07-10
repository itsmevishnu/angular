import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notification'
})
export class NotificationPipe implements PipeTransform {

  transform(value: any): any {
    if (value < 18) {
      return 'Underweight';
    } else if (value >= 18 && value <= 24) {
      return 'Healthy';
    } else if (value > 24 && value <= 29) {
      return "Overweight";
    } else if (value > 29 && value <= 39) {
      return "Obese";
    } else {
      return "Extreamly Obese";
    }
  }

}
