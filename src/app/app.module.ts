import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './usuario/listado/listado.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
