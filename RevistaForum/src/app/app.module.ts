import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./Components/Header/Header.component"
import {NavbarComponent} from "./Components/NavBarComponent/Navbar.component"
import {ImagenForumComponent} from "./Components/RectanguloForum/ImagenForum.component"
import {TarjetasComponents } from "./Components/TarjetasComponentes/Tarjetas.component"
import {TarjetaMorada} from "./Components/TarjetaMorada/TarjetaMorada.component"
import {TarjetaGris} from "./Components/TarjetaGris/TarjetaGris.component"
import {TarjetaBlanca} from "./Components/TarjetaBlanca/TarjetaBlanca.component"
import { TarjetaVerde } from "./Components/TarjetaVerde/TarjetaVerde.component"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    NavbarComponent,
    ImagenForumComponent,
    TarjetasComponents,
    TarjetaMorada,
    TarjetaGris,
    TarjetaBlanca,
    TarjetaVerde
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
