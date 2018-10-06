import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Concursantes } from '../../models/concursantes';

 
@IonicPage()
@Component({
  selector: 'page-concursantes-detalle',
  templateUrl: 'concursantes-detalle.html',
})
export class ConcursantesDetallePage {
  concursantes : Concursantes[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.concursantes=this.navParams.data.concursantes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcursantesDetallePage');
  }

}
