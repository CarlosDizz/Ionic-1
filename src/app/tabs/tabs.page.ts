import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor() {}
  ngOnInit() {
    let numero = 10;
    numero = 20
    console.log(numero);
  }

}
