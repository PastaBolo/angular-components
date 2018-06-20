import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup
  public refs = [{ label: 'Option1', value: 1 }, { label: 'Option2', value: 2 }, { label: 'Option3', value: 3 }]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      multiple: fb.control(new Set([3]))
    })
  }
}
