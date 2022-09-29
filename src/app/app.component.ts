import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { filter, map, startWith } from 'rxjs/operators';

const $timing = '200ms ease-out';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 

  private menuItems = [ 
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },
    { label: "Popup", link: "/popup" },
    { label: "Test", link: "/test" },
  ];

  constructor(private router: Router, private icon: MatIconRegistry) {}

  ngOnInit() {

    // Registers font awesome among the available sets of icons for mat-icon component
    this.icon.registerFontClassAlias('fontawesome', 'fa');

    //this.router.events.subscribe( e => console.log(e) );
  }

  @HostListener('window:unload', ['$event']) private unload(ev: Event) {

    debugger;

  }
}
