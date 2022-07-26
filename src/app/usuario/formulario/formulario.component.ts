import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interface/user-interface';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: []
})
export class FormularioComponent implements OnInit {

  usuario!: Usuario;
  listadoUsuarios!: Usuario[];
  formulario!: FormGroup;
  @Output() onEmitListado = new EventEmitter<Usuario[]>();
  paises: string[] = ["España", "EEUU", "Francia", "Egipto", "México", "Portugal", "Italia", "China", "Japón", "Australia", "Gran Bretaña", "Escocia", "Irlanda"];

  constructor(private usuarioService: UsuarioService) {}


  ngOnInit(): void {

    this.formulario = new FormGroup(
      {
        id: new FormControl(""),
        nombre: new FormControl("", Validators.required),
        passwd: new FormControl("", Validators.required),
        repitePasswd: new FormControl("", [Validators.required]),
        correo: new FormControl("", [Validators.required, Validators.email]),
        ofertas: new FormControl(false),
        pais: new FormControl(""),
        ciudad: new FormControl("", Validators.required)
      }
    );
  }

  mustMatch(passwd: string, repitePasswd: string) {
    if (passwd == repitePasswd) {
      this.formulario.get('repitePasswd')?.setErrors(null);
      return true;
    } else {
      this.formulario.get('repitePasswd')?.setErrors({notEqual: true});
      return false;
    }
  }

  obtenerListado() {
    this.usuarioService.listar()
    .subscribe( (usuarios) => {
      this.listadoUsuarios = usuarios;
    })
  }

  actualizarListado() {
    // Obtengo un nuevo listado con los datos del usuario actualizados
    this.obtenerListado();

    // Emitir el listado al componente padre ya actualizado
    this.onEmitListado.emit(this.listadoUsuarios);
  }

  enviar() {
    this.usuario = this.formulario.value;

    // Si no existe "id" en el formulario (campo oculto) se da de alta al usuario
    if (this.formulario.get('id')?.value == "") {
      this.usuarioService.alta(this.usuario)
      .subscribe( () => {
        this.formulario.reset();

        this.actualizarListado();

      });

    // Si existe "id" se modifica el usuario
    } else {
      this.usuarioService.modificarUsuario(this.usuario)
      .subscribe( () => {
        this.formulario.reset();

        this.actualizarListado();
      });
    }
  }
}
