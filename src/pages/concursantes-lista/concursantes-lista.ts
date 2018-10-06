import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              public concursantesService: ConcursantesService ) {

                this.concursantes = this.concursantesService.getAll();
                this.categoria=this.navParams.data.categoria;

   }

  
  atras(){
    this.navCtrl.setRoot('HomePage');

  }
  
  goToDetalle(concursantes:any){
    this.navCtrl.push('ConcursantesDetallePage',{
     concursantes:concursantes
    })  

  
  }}
