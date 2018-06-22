import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.css']
})
export class ToggleSliderComponent {
  @Input() control: FormControl;

  toggle(e) {
    this.control.setValue(e.target.checked);
  }
}
