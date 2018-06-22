import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.css']
})
export class ToggleButtonsComponent {
  @Input() control: FormControl;
  @Input() references: any;
}
