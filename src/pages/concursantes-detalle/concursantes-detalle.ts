import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Concursantes } from '../../models/concursantes';

 
@IonicPage()
@Component({
  selector: 'page-concursantes-detalle',
  templateUrl: 'concursantes-detalle.html',
})
export class ConcursantesDetallePage {
  concursantes : Concursantes;

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public alert : AlertController) {
    this.concursantes=this.navParams.data.concursantes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcursantesDetallePage');
  }

  abrirAlerta(){
    let mensaje = this.alert.create({
      title: "Mensaje del Sistema",
      message: "Esta seguro segurisimo?",

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    })
    mensaje.present();
  }

}
