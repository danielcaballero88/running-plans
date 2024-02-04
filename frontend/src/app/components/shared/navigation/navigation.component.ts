import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { Event, NavigationEnd, Router } from '@angular/router'
import { Subject } from 'rxjs'

import { filter, takeUntil } from 'rxjs/operators'

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
        }),
      ),
      state(
        'transparent',
        style({
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }),
      ),
      transition('transparent <=> colored', [animate('200ms ease-in-out')]),
    ]),
    trigger('triggerVisibility', [
      state(
        'visible',
        style({
          visibility: 'visible',
        }),
      ),
      state(
        'hidden',
        style({
          visibility: 'hidden',
        }),
      ),
      transition('hidden => visible', [animate('0s')]),
      transition('visible => hidden', [animate('200ms')]),
    ]),
  ],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav
  isSidenavOpen: boolean
  currentUrl: string
  private ngUnsubscribe = new Subject()

  constructor(private router: Router) {
    this.isSidenavOpen = false
    this.currentUrl = router.url
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (e: Event | NavigationEnd): e is NavigationEnd =>
            e instanceof NavigationEnd,
        ),
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe((e: NavigationEnd) => {
        // Do something
        this.currentUrl = e.url
      })
  }

  ngOnDestroy(): void {
    // Unsubscribe from the router events to avoid memory leaks
    this.ngUnsubscribe.next(null)
    this.ngUnsubscribe.complete()
  }

  toggleSidenav() {
    console.log('toggleSidenav')
    console.log(this.sidenav)
    this.sidenav.toggle()
    this.isSidenavOpen = !this.isSidenavOpen
  }
}
