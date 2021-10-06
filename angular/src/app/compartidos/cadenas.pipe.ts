import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {
  transform(value: any, maxlen: number): any {
    return (!maxlen || maxlen < 2 || !value || value.length <= maxlen) ? value : (value.substr(0, maxlen - 1) + '\u2026');
  }
}

@Pipe({
  name: 'toComaDecimal'
})
export class ToComaDecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof (value) === 'number') {
      value = value.toString();
    }
    if (typeof (value) === 'string') {
      return value.replace(/\./g, ',');
    }
    return value;
  }
}
