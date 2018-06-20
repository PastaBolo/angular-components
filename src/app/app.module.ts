import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component'

@NgModule({
  declarations: [AppComponent, MultipleChoiceComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
