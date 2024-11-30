import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMinutes',
})
export class MsToMinutesPipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(value),
      parts = [date.getUTCMinutes(), date.getUTCSeconds()];

    return parts.map((s) => String(s).padStart(2, '0')).join(':');
  }
}
