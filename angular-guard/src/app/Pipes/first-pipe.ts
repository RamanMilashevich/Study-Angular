import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
  standalone: true
})
export class FirstPipePipe implements PipeTransform {

  transform(value: string): string {
    return `🌟 ${value.toUpperCase()} - First Pipe, Pipes change name from LowerCase to UpperCase`;
  }

}
