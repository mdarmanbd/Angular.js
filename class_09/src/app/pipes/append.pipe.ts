import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string, appendText: string): string {
    // return null;
    if (value == null) return value
      return value + appendText;
  }

}
