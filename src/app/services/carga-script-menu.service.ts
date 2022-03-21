import { Injectable } from '@angular/core';

declare var document: any;

interface Scripts {
  name: string;
  src: string;
}

export const ScriptConstant: Scripts[] = [{ name: "notas", src: "../assets/js/logicaMenuDesplegable.js" }];

@Injectable({
  providedIn: 'root'
})
export class CargaScriptMenuService {

  private scripts: any = {};
  
  constructor() { 

    ScriptConstant.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });   
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach(script => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadAll() {
    var promises: any[] = [];
    ScriptConstant.forEach(script => {
      promises.push(this.loadScript(script.name));
    });
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: "Script cargado exitosamente" });
      } else {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this.scripts[name].src;
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (
              script.readyState === "cargado" ||
              script.readyState === "completo"
            ) {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: "Cargado" });
            }
          };
        } else {
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: "Cargado" });
          };
        }
        script.onerror = (error: any) =>
          resolve({ script: name, loaded: false, status: "Cargado" });
        document.getElementsByTagName("body")[0].appendChild(script);
      }
    });
  }  
  
}
