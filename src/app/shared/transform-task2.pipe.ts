import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask2'
})
export class TransformTask2Pipe implements PipeTransform {

  transform(value: any, args: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}
