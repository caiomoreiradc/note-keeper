import { Component } from "@angular/core";
import { Nota } from "../nota";

@Component({
    selector:'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent {
    nota: Nota;

    constructor(){
     this.nota = new Nota(
        'Dog bath',
        'Take the shampoo',
        'dark',
        0,
        );
    }

    criarNota(){
        
    }

}



