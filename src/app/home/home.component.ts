import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly links = [ 
    { icon: "fas:fa-home", link: "/home" },
    { icon: "fas:fa-question", link: "/about" },
    { icon: "fab:fa-angular", link: "https://angular.io" },
    { icon: "fab:fa-github", link: "https://github.com" },
    { icon: "fab:fa-stack-overflow", link: "https://stackoverflow.com/" },
    { icon: "fab:fa-font-awesome", link: "https://fontawesome.com" },
    { icon: "fab:fa-font-awesome", link: "./whatever" },
    { icon: "fab:fa-font-awesome", link: "#whatever" }
  ];
}