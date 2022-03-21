import { Component, OnInit } from '@angular/core';
import { CargaScriptMenuService } from '../../../services/carga-script-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public tituloMenu: string;

  public menuElements = [
    "Enlace I",
    "Enlace II",
    "Enlace III"
  ];

  public ngDropdownMenu = this.menuElements[0];
  
  selected: string = "";  

  constructor(private cargaScriptMenuService: CargaScriptMenuService) {
    this.tituloMenu = "";
   }
  ngOnInit(): void {
    this.cargaScriptMenuService.loadAll();
  }

  openMenu(){
    console.log("Click relacionado con el disparador desde appcomponent");
  }

  desplegarMenu(){
    console.log("Click estando en componente");
    console.log(this.selected);
  }

}
