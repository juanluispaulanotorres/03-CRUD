import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './usuario/editar/editar.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';

const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    pathMatch: "full"
  },
  {
    path: "editar/:id",
    component: EditarComponent
  },
  {
    path: "eliminar/:id",
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
