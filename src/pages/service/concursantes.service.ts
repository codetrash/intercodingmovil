import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConcursantesService {
     private concursantes : any[];

    constructor(public http: HttpClient) {
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
    
    getAll(){
       return this.concursantes
    }

   
}

