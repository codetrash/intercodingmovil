import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Concursantes } from '../../models/concursantes';



@IonicPage()
@Component({
  selector: 'page-concursantes-lista',
  templateUrl: 'concursantes-lista.html',
})
export class ConcursantesListaPage {

  concursantes : any[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.concursantes=[
      {
      cod_concursante: 1,
      nombre: 'parapencio pericarpio'
      },

      {
        cod_concursante: 2,
        nombre: 'malercia malindra'
        },

        {
          cod_concursante: 3,
          nombre: 'plutarco pasterindo'
          },
    ]

    
  
  }

  



  atras(){
    this.navCtrl.setRoot('HomePage');

  }
  
  goToDetalle(concursantes:any){
    this.navCtrl.push('ConcursantesDetallePage',{
     concursantes:concursantes
    })  

  
  }}
