import {Component} from "@angular/core";

@Component({
    selector:"app-navbar",
    templateUrl:"Navbar.component.html",
})

export class NavbarComponent{
    Inicio:string = "Inicio";
    Nosotros:string = "Nosotros";
    CirculoForum: string = "Circulo Forum";
    Noticias: string = "Noticias";
    Subscripcion: string = "Subcripcion";
    Contacto:string = "Contacto";
    Fecha:string = new Date().toString();
}
