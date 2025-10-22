import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { concatMap, Observable, Subject } from 'rxjs';

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}


Injectable({ providedIn: 'root' })
export class PostApi {
  private base = 'https://jsonplaceholder.typicode.com';
  private save$ = new Subject<Post>
  private http = inject(HttpClient);

  constructor() {
    this.pushSave = this.pushSave.bind(this)
    this.loadList = this.loadList.bind(this)

    this.save$.pipe(concatMap(this.saveOne)).subscribe();
  }

  private pushSave(p: Post): void {
    this.save$.next(p);
  }

  private saveOne(p: Post): Observable<Post> {
    return this.http.post<Post>(`${this.base}/posts`, p)
  }

  loadList(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.base}/posts`)
  }

  save(post: Post) {
    this.save$.next(post)
  }

}
