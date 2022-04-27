import { Component, ViewChild } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { Usuario } from './interface/user-interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

  @ViewChild(FormularioComponent) formularioComponent!: FormularioComponent

  editarUsuario(usuario: Usuario){
    this.formularioComponent.formulario.patchValue(usuario)     // Añade los datos del usuario al formulario para modificarlos
    console.log(this.formularioComponent.formulario.dirty);
  }

}
