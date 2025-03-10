import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para usar el enrutador

@Component({
  selector: 'app-root',
  standalone: true, // Marca AppComponent como standalone
  imports: [CommonModule, RouterModule], // Solo necesitas estos módulos
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario-app';
}