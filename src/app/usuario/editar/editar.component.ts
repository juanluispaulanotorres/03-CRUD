import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Usuario } from '../interface/user-interface';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  usuario!: Usuario;

  //@Output() emisor: EventEmitter<Usuario> = new EventEmitter();

  constructor(private usuarioService: UsuarioService,
              private rutaActiva: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    console.log(this.route.url);

    this.rutaActiva.params
    .pipe(
      switchMap( ({id}) => this.usuarioService.obtenerUsuario(id))                          // ({id}): Es el id de los parámetros de "this.rutaActiva.params"
    )
    .subscribe( (usuario) => {
        this.usuario = usuario;
        //this.activoSeleccionado = persona.activo;                                           // Al editar, aparece el valor almacenado en la base de datos en el RadioButton
    })
  }

  // emitir() {
  //   this.emisor.emit(this.usuario);
  // }
}
