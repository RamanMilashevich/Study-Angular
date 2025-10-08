import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [],
  templateUrl: './child8.html',
  styleUrl: './child8.css'
})
export class starRating {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

}
