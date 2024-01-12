import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  constructor(private formBuilder: FormBuilder) {}

  userInputForm = this.formBuilder.group({
    distance: ['', Validators.required],
    hours: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(10),
        Validators.pattern(/[0-9]/),
      ],
    ],
    minutes: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(59),
        Validators.pattern(/[0-9]/),
      ],
    ],
  })

  onSubmit() {
    console.warn(this.userInputForm.value)
  }
}
