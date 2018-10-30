import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  route: String;
  collapsible = true;
  navbarClosed = false;

  ngOnInit() {
  }

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() === '/form') {
        this.route = location.path();
        this.navbarClosed = true;
        console.log(this.route);
      } else {
        this.navbarClosed = false;
        console.log(location.path());
      }
    });
  }
}
