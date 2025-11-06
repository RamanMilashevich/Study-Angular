import { Component } from '@angular/core';
import { OnpushStrategy } from "../onpush-strategy/onpush-strategy";

@Component({
  selector: 'app-onpush-strategy-parent',
  imports: [OnpushStrategy],
  templateUrl: './onpush-strategy-parent.html',
  styleUrl: './onpush-strategy-parent.css'
})
export class OnpushStrategyParent {
  user = { name: 'Raman' };

  sendData() {
    this.user.name = 'RamanMilashevich'
    // {name: 'RamanMilashevich'}
  }
}
