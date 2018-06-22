import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { MultipleOptionsComponent } from './multiple-options/multiple-options.component'
import { RadioComponent } from './radio/radio.component'
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component'
import { ToggleSliderComponent } from './toggle-slider/toggle-slider.component'
import { InputTimeComponent } from './input-time/input-time.component'

@NgModule({
  declarations: [
    AppComponent,
    MultipleOptionsComponent,
    RadioComponent,
    ToggleButtonsComponent,
    ToggleSliderComponent,
    InputTimeComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
