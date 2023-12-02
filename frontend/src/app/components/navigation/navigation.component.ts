import { Component, ViewChild } from '@angular/core'
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav
  isSidenavOpen: boolean = false

  // ngAfterViewInit () {
  //   this.toggleSidenav()
  // }

  toggleSidenav() {
    console.log('toggleSidenav')
    console.log(this.sidenav)
    this.sidenav.toggle()
    this.isSidenavOpen = !this.isSidenavOpen
  }
}
