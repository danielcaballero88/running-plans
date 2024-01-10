import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  userInputForm = new FormGroup({
    hours: new FormControl(''),
    minutes: new FormControl(''),
  })

  onSubmit() {
    console.warn(this.userInputForm.value)
  }
}
