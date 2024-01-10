import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  constructor(private formBuilder: FormBuilder) {}

  userInputForm = this.formBuilder.group({
    distance: [''],
    hours: [''],
    minutes: [''],
  })

  onSubmit() {
    console.warn(this.userInputForm.value)
  }
}
