import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.html',
  styleUrl: './for.css'
})
export class For {
  devices = [
    { id: 1, name: 'Lamp', type: 'light', online: true },
    { id: 2, name: 'Thermostat', type: 'climate', online: false },
    { id: 3, name: 'Camera', type: 'security', online: true },
    { id: 4, name: 'Speaker', type: 'audio', online: false },
  ];

  toggleOnline(id: number) {
    const device = this.devices.find(k => k.id == id)
    if(device) {
      device.online = !device.online
    }
  }
}
