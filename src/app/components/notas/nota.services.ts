import { Injectable } from "@angular/core";
import { Nota } from "./nota";

@Injectable({
    providedIn: 'root',
})
export class NotaService{

    notas: Nota[] = [    {
        id: 0,
        titulo: 'Homework',
        conteudo: 'Math Homework',
        tema: 'dark',
      },
      {
        id: 1,
        titulo: 'Take trash out',
        conteudo: '1pm the garbageman passes',
        tema: 'warning',
      },
      {
        id: 2,
        titulo: 'QWERTY',
        conteudo: 'Testing the cards',
        tema: 'danger',
      },
    ];
    

    criar(nota: Nota){
      nota.id = this.notas.length;
      this.notas.push(nota);

      return;
    }

    editar(nota: Nota) {
      const indexParaEditar = this.notas.findIndex((n) => n.id == nota.id);

      this.notas[indexParaEditar] = nota;

      return;
    }

    selecionarPorId(id: number): Nota |undefined{
      return this.notas.find((nota) => nota.id == id);
    }

    selecionarTodos(): Nota[]{
        return this.notas;
    }
}