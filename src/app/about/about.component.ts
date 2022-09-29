import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef } from '../dialog';

@Component({
  selector: 'wm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(readonly router: Router){}

  public doSomething(ref: DialogRef<boolean>) {

    console.log('Doing something prior to leave');
    !!ref && ref.close(true);
  }
}

