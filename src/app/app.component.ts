import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup
  public references = {
    multipleOptions: [{ label: 'Option1', value: 1 }, { label: 'Option2', value: 2 }, { label: 'Option3', value: 3 }],
    radio: [{ label: 'Option1', value: 1 }, { label: 'Option2', value: 2 }, { label: 'Option3', value: 3 }],
    toggleButtons: {
      checked: 'Oui',
      unchecked: 'Non'
    }
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      multipleOptions: fb.control([2]),
      radio: fb.control(2),
      toggleButtons: fb.control(null),
      toggleSlider: fb.control(false)
    })
  }
}
