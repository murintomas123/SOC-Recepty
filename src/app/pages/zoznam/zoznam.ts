import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

interface Polozka {
  id: number;
  nazov: string;
  kupene: boolean;
  isEditing?: boolean;
}

@Component({
  selector: 'app-zoznam',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule
  ],
  templateUrl: './zoznam.html',
  styleUrl: './zoznam.css'
})
export class Zoznam {
  novaPolozkaText: string = '';
  polozky: Polozka[] = [];

  pridatPolozku(): void {
    if (this.novaPolozkaText.trim()) {
      this.polozky.push({
        id: Date.now(),
        nazov: this.novaPolozkaText.trim(),
        kupene: false,
        isEditing: false
      });
      this.novaPolozkaText = '';
    }
  }

  zrusitKupene(): void {
    this.polozky = this.polozky.filter(p => !p.kupene);
  }

  vymazatPolozku(id: number): void {
    this.polozky = this.polozky.filter(p => p.id !== id);
  }

  upravitPolozku(polozka: Polozka): void {
    polozka.isEditing = true;
  }

  ulozitUpravu(polozka: Polozka): void {
    if (!polozka.nazov.trim()) {
      this.vymazatPolozku(polozka.id);
    } else {
      polozka.isEditing = false;
    }
  }
}