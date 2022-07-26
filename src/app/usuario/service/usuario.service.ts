import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/user-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  url: string = environment.url;

  constructor(private http: HttpClient) { }

  alta(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}`, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}`);
  }

  obtenerUsuario(usuarioId: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${usuarioId}`);
  }

  modificarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${usuario.id}`, usuario);
  }

  eliminarUsuario(usuarioId: string) {
    return this.http.delete(`${this.url}/${usuarioId}`);
  }
}
