import { Component } from "@angular/core";
import { Nota } from "../nota";
import { NotaService } from "../nota.services";
import { Router } from "@angular/router";

@Component({
    selector:'app-criar-nota',
    templateUrl: './criar-nota.component.html',
    styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent {
    nota: Nota;

    constructor(private notaService: NotaService,
                private router: Router){
     this.nota = new Nota(
        'Dog bath',
        'Take the shampoo',
        'dark',
        0,
        );
    }

    criarNota(){
        this.notaService.criar(this.nota);
        this.router.navigate(['/notas', 'listar']);
    }

}



