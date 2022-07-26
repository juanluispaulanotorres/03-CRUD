import { Component, ViewChild } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { Usuario } from './interface/user-interface';
import { ListadoComponent } from './listado/listado.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  listadoUsuarios!: Usuario[];
  @ViewChild(FormularioComponent) formularioComponent!: FormularioComponent;
  @ViewChild(ListadoComponent) listadoComponent!: ListadoComponent;

  editarUsuario(usuario: Usuario) {
    this.formularioComponent.formulario.patchValue(usuario);     // Añade los datos del usuario al formulario para modificarlos
  }

  recibeUsuarios(usuarios: Usuario[]) {
    this.listadoUsuarios = usuarios;
    this.listadoComponent.obtenerListado();
  }

}