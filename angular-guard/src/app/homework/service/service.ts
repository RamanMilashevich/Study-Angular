import { Injectable } from '@angular/core';
import { Observable, throwError , of, delay} from 'rxjs';

export interface Report { id: number; title: string; }

@Injectable({
  providedIn: 'root'
})
export class Service {
  getReport(id: number): Observable<Report> {
    if(Number(id) || id <=0) {
      return throwError(()=> new Error('bad id'))
    }
    return of({id, title: `Report #${id}`}).pipe(delay(200))
  }
}
