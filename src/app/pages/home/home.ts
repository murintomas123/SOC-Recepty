import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private router = inject(Router);
  suroviny: string = '';

  vyhladatRecepty() {
    console.log('Kliknuté, hľadám:', this.suroviny); 
    this.router.navigate(['/recepty'], { 
      queryParams: { surovina: this.suroviny } 
    });
  }
}