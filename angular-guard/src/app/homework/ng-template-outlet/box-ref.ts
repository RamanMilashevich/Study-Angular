import { InjectionToken } from '@angular/core';

export interface BoxHost {
  id: string;
  close(): void;
}

export class BoxRef {
  constructor(private host: BoxHost) {}

  get id(): string {
    return this.host.id;
  }

  close(): void {
    this.host.close();
  }
}

export const BOX_REF = new InjectionToken<BoxRef>('BOX_REF');

const arr = [1, 2, 2, 3, 1,5,6,2,1];
let result1 = 0;

function removeDublicates(arr: number[]): any {
  if(arr.length === 0) { return [] }

  let uniqueValues = 0;

  for(let i = 0; i < arr.length; i++) {
    let y = i + 1;
    while(y < arr.length) {
      if(arr[i] === arr[y]) {
        arr.splice(y, 1)
      } else {
        y += 1;
      }
    }
  }
  result1 = arr.length;
  return arr;
}

const result = removeDublicates(arr);
console.log(result1)
console.log(result);
