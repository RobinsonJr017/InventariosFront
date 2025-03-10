import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component'; // Importa el componente standalone

@Component({
  selector: 'app-root',
  standalone: true, // Marca AppComponent como standalone
  imports: [CommonModule, RouterModule, AgregarProductoComponent], // Importa AgregarProductoComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario-app';
}
