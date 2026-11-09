import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceptyService, Recept } from '../../services/recepty.service';

@Component({
  selector: 'app-oblubene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oblubene.html',
  styleUrl: './oblubene.css'
})
export class Oblubene {
  otvorenyRecept: Recept | null = null;

  constructor(public receptyService: ReceptyService) {}

  otvorDetail(recept: Recept) {
    this.otvorenyRecept = recept;
  }

  zatvorDetail() {
    this.otvorenyRecept = null;
  }

  prepniHeart(event: Event, id: number) {
    event.stopPropagation();
    this.receptyService.prepniOblubeny(id);
  }
}