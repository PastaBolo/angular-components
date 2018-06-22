import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-options',
  templateUrl: './multiple-options.component.html',
  styleUrls: ['./multiple-options.component.css']
})
export class MultipleOptionsComponent {
  @Input() control: FormControl;
  @Input() references: any;

  updateList(e) {
    const option = this.cast(e.target.value);
    const checkedOptions = new Set(this.control.value);
    e.target.checked ?
      checkedOptions.add(option) :
      checkedOptions.delete(option);
    this.control.setValue(Array.from(checkedOptions));
  }

  private cast(value) {
    return typeof this.references[0].value === 'number' ? +value : value;
  }
}
