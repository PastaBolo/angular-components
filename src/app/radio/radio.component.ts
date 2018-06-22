import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input() control: FormControl;
  @Input() references: any;

  updateChoice(value) {
    this.control.setValue(this.cast(value));
  }

  private cast(value) {
    return typeof this.references[0].value === 'number' ? +value : value;
  }
}
