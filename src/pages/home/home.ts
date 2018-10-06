import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToConcursantes(){
    console.log("Ir a concursante");
    this.navCtrl.setRoot('ConcursantesListaPage');
  }
}
