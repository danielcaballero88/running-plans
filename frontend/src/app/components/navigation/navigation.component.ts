import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav

  // ngAfterViewInit () {
  //   this.toggleSidenav()
  // }

  toggleSidenav() {
    console.log('toggleSidenav')
    console.log(this.sidenav)
    this.sidenav.toggle()
  }
}
