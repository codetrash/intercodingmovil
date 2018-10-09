import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Concursantes } from '../../models/concursantes';
import { ConcursantesService } from '../service/concursantes.service';



@IonicPage()
@Component({
  selector: 'page-concursantes-lista',
  templateUrl: 'concursantes-lista.html',
})
export class ConcursantesListaPage {

  concursantes : any[] = [];
  categoria : string ="";



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public concursantesService: ConcursantesService,
              public alert : AlertController ) {

                //this.concursantes = this.concursantesService.getAll();
                this.concursantesService.getAll().subscribe((data:any) => {
                  this.concursantes=  data;
                })
                this.categoria=this.navParams.data.categoria;

   }

  
  atras(){
    this.navCtrl.setRoot('HomePage');

  }
  
  goToDetalle(concursantes:any){
    this.navCtrl.push('ConcursantesDetallePage',{
     concursantes:concursantes
    })  

  
  }
  openAlert(concursantes:any){
    let mensaje = this.alert.create({
      title: "Mensaje del Sistema",
      message: "Esta seguro de seleccionar este concursante?",

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
          this.goToDetalle(concursantes);
          }
        }
      ]
    })
    mensaje.present();
  }
}
