import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent {
  @Input() control: FormControl
  @Input() refs: any

  change(e) {
    const option = e.target.value
    e.target.checked ? this.control.value.add(option) : this.control.value.delete(option)
  }
}
