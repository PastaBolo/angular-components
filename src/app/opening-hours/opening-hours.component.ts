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

  
  // Ajout de validateur
  // Idée : ajouter une propriété contenant tous les validateurs plutôt que isRequired ?

  // @Input() isRequired: boolean = false;

  // ngOnInit(): void {
  //   this.addValidators();
  // }

  // addValidators(): void {
  //   const openingHourValidators = [];
  //   const closingHourValidators = [];

  //   // validator
  //   const isOpeningBeforeClosing = () => {
  //     const momentOpeningHour = moment(this.controlOpeningHour.value, 'HH:mm');
  //     const momentClosingHour = moment(this.controlClosingHour.value, 'HH:mm');
  //     return moment(momentOpeningHour).isBefore(momentClosingHour) ?
  //       null :
  //       {openingNotBeforeClosing: true}
  //   };

  //   // set validators
  //   openingHourValidators.push(isOpeningBeforeClosing);
  //   if (this.isRequired) {
  //     openingHourValidators.push(Validators.required);
  //     closingHourValidators.push(Validators.required);
  //   }
  //   this.controlOpeningHour.setValidators(openingHourValidators);
  //   this.controlClosingHour.setValidators(closingHourValidators);

  //   // recall openingHour validator checking on closingHour changes
  //   this.controlClosingHour.valueChanges.subscribe(
  //     _ => this.controlOpeningHour.setValue(this.controlOpeningHour.value)
  //   )
  // }
}
