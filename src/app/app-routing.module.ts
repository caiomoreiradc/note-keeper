import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notas/listar',
    pathMatch: 'full',
    title: 'Home - NoteKeeper'
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent,
    title: 'Notes - NoteKeper',
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent,
    title: 'Create - NoteKeper',
  },
  {
    path: 'notas/editar/:id',
    component: EditarNotaComponent,
    title: 'Edit - NoteKeper',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
