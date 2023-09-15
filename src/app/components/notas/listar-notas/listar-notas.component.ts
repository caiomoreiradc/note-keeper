import { Component } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent {
  notas: Nota[] = [
    {
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
}