import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent {
  @Input() control: FormControl;

  selectChar(e): void {
    const start = e.target.selectionStart;
    if (start === 2) { e.target.selectionStart += 1; }
    e.target.selectionEnd = e.target.selectionStart + 1;
  }

  checkFormat(value) {
    const regExpTime = RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$');
    return !regExpTime.test(value);
  }

  onClick(e): void {
    this.selectChar(e);
  }

  onKeyUp(e): void {
    this.selectChar(e);
    this.control.setValue(e.target.value);
  }
}

