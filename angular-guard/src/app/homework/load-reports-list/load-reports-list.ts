import { Component, inject, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-reports-list',
  imports: [ReactiveFormsModule],
  templateUrl: './load-reports-list.html',
  styleUrl: './load-reports-list.css'
})
export class LoadReportsList {
  value = 0;
  constructor(private ngZone: NgZone) {

  }

  runTimer() {
    setTimeout(() => {
      this.value += 1;
      console.log('[SetTimeout is finished, value updated: ]', this.value)
    }, 1000);
  }


}
