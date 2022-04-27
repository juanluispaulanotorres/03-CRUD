import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from '../interface/user-interface';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  listadoUsuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService, private ruta: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioService.listar()
    .subscribe( (usuarios) => {
      this.listadoUsuarios = usuarios;
      //this.ngOnInit();      // De esta manera mostramos el listado al modificar la tabla con los datos de cada usuario
    })
  }

  // Esto debe estar en el componente "Editar"
  eliminarUsuario(idUsuario: string) {
    this.usuarioService.eliminarUsuario(idUsuario)
    .subscribe( () => {
      this.ngOnInit();
    })
  }
  
  // eliminarUsuario() {
  //   this.usuarioService.eliminarPersona(this.persona.id)
  //   .subscribe( () => {
  //     this.route.navigate(['/personas']);
  //   })
  // }
}
