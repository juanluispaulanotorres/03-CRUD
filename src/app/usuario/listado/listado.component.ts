import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from '../interface/user-interface';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  listadoUsuarios!: Usuario[];

  @Output() onEditarUsuario = new EventEmitter<Usuario>()

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listar()
    .subscribe( (usuarios) => {
      this.listadoUsuarios = usuarios;
    })
  }

  modificarUsuario(idUsuario: string) {
    this.usuarioService.obtenerUsuario(idUsuario)
    .subscribe( (usuario) => {
      this.onEditarUsuario.emit(usuario)
    })
  }

  eliminarUsuario(idUsuario: string) {
    this.usuarioService.eliminarUsuario(idUsuario)
    .subscribe( () => {
      this.ngOnInit();    // Muestro el listado actualizado
    })
  }

}
