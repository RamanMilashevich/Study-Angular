import { Component, inject, signal } from '@angular/core';
import { Post, PostApi } from '../post-api/post-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-use-api-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './use-api-demo.html',
  styleUrl: './use-api-demo.css'
})
export class UseApiDemo {
  private readonly api = inject(PostApi);
  readonly posts$ = signal<Post[] | null>(null)
  draft: Post = {title: '', body: '', userId: 1}

  constructor() {
    this.refresh()
  }

  refresh(): void {
    this.api.loadList().subscribe(posts => this.posts$.set(posts))
  }

  saveDraft(): void {
    this.api.save(this.draft)
    this.draft = { title: '', body: '', userId: 1 }
  }
}
