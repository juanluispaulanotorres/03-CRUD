import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/user-interface';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  listadoUsuarios!: Usuario[];

  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.usuarioService.listar()
    .subscribe( (usuarios) => {
      this.listadoUsuarios = usuarios;
      //this.ngOnInit();      // De esta manera mostramos el listado al modificar la tabla con los datos de cada usuario
    })
  }

}
