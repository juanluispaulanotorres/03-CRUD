import { Component, OnInit } from '@angular/core';
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
  formulario!: FormGroup;
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
    if (passwd == repitePasswd)
      return true;
    else
      return false;
  }

  enviar() {

    // Si no existe "id" en el formulario (campo oculto) se da de alta al usuario
    if (this.formulario.get('id')?.value == "") {
      this.usuario = this.formulario.value;

      this.usuarioService.alta(this.usuario)
      .subscribe( (nuevoUsuario) => {
        console.log(nuevoUsuario);
        this.formulario.reset();
      });

    // Si existe "id" se modifica el usuario
    } else {
      this.usuario = this.formulario.value;

      this.usuarioService.modificarUsuario(this.usuario)
      .subscribe( (nuevoUsuario) => {
        console.log(nuevoUsuario);
        this.formulario.reset();
      });
    }
  }
}
