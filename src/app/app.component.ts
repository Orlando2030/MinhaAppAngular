/*Importar a diretiva que ele é um componente */
import { Component } from '@angular/core'; 

/* "@Component" dis que ele é um componente*/ 
@Component({
  selector: 'app-root', /* como é invocado esse componente */
  templateUrl: './app.component.html', /*caminho template */
  styleUrls: ['./app.component.css']/*caminho css */
})
export class AppComponent {
  title = 'MinhaAppAngular_';
}
