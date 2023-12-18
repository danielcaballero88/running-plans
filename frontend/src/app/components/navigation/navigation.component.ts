import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('triggerColor', [
      state(
        'colored',
        style({
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        })
      ),
      state(
        'transparent',
        style({
          backgroundColor: 'rgba(0, 0, 0, 0)',
        })
      ),
      transition('transparent <=> colored', [animate('200ms ease-in-out')]),
    ]),
    trigger('triggerVisibility', [
      state(
        'visible',
        style({
          visibility: 'visible',
        })
      ),
      state(
        'hidden',
        style({
          visibility: 'hidden',
        })
      ),
      transition('hidden => visible', [animate('0s')]),
      transition('visible => hidden', [animate('200ms')]),
    ]),
  ],
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
