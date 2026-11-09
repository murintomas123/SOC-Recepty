import { Injectable } from '@angular/core';

export interface Recept {
  id: number;
  nazov: string;
  ingrediencie: string;
  postup: string;
  casPripravy: number;
  oblubeny: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReceptyService {
  private storageKey = 'moje_recepty';
  private recepty: Recept[] = [];

  constructor() {
    this.nacitajRecepty(); // opravený preklep z nacialajRecepty na nacitajRecepty
  }

  private nacitajRecepty() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.recepty = JSON.parse(data);
    } else {
      // Úplne prázdne, žiadne predvolené recepty
      this.recepty = [];
      this.ulozDoStorage();
    }
  }

  private ulozDoStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.recepty));
  }

  getRecepty(): Recept[] {
    return this.recepty;
  }

  getOblubeneRecepty(): Recept[] {
    return this.recepty.filter(r => r.oblubeny);
  }

  pridajRecept(recept: Omit<Recept, 'id' | 'oblubeny'>) {
    const novyRecept: Recept = {
      ...recept,
      id: Date.now(),
      oblubeny: false
    };
    this.recepty.push(novyRecept);
    this.ulozDoStorage();
  }

  // Pridaná funkcia na mazanie receptov
  vymazRecept(id: number) {
    this.recepty = this.recepty.filter(r => r.id !== id);
    this.ulozDoStorage();
  }

  prepniOblubeny(id: number) {
    const recept = this.recepty.find(r => r.id === id);
    if (recept) {
      recept.oblubeny = !recept.oblubeny;
      this.ulozDoStorage();
    }
  }
}