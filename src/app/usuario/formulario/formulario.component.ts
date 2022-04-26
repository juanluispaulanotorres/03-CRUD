import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private usuarioService: UsuarioService,
              private route: Router) {}

  ngOnInit(): void {
    console.log(this.route.url);

    this.formulario = new FormGroup(
      {
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
    this.usuario = this.formulario.value;

    this.usuarioService.alta(this.usuario)
    .subscribe( (nuevoUsuario) => {
      console.log(nuevoUsuario);
      this.formulario.reset();
    });
  }

  // recibirUsuario(usuario: Usuario) {
  //   console.log(usuario.ciudad);
  // }

}
