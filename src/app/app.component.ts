import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MenuComponent) trigger: MenuComponent | undefined;
  
  title = 'appEncuesta';

  toMenu (){
    if(this.trigger!=undefined){
      this.trigger.openMenu();
    }
  }
}
