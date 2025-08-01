import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
  standalone: true,
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return '';
    if(value.length <= limit) return value;
    const result = value.split('')
      .slice(0, limit)
      .join('');
    return `${result}...`;
  }

}
