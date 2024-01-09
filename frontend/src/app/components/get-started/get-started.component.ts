import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  hours = new FormControl('')
  minutes = new FormControl('')
}
