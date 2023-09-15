import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notas/listar',
    pathMatch: 'full',
    title: 'Início - NoteKeeper'
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent,
    title: 'Notas - NoteKeper',
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent,
    title: 'Criar - NoteKeper',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
