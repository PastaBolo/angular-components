import { Component, OnInit, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.css']
})
export class OpeningHoursComponent implements OnInit {
  @Input() controlOpeningHour: FormControl
  @Input() controlClosingHour: FormControl
  @Input() placeholderOpeningHour: string = '08:00'
  @Input() placeholderClosingHour: string = '20:00'

  ngOnInit() {}
}
