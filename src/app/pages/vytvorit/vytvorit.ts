import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptyService } from '../../services/recepty.service';

@Component({
  selector: 'app-vytvorit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vytvorit.html',
  styleUrl: './vytvorit.css'
})
export class Vytvorit {
  nazov = '';
  ingrediencie = '';
  postup = '';
  casPripravy: number | null = null;

  constructor(private receptyService: ReceptyService, private router: Router) {}

  ulozitRecept() {
    if (!this.nazov || !this.ingrediencie || !this.postup) {
      alert('Prosím, vyplňte všetky povinné polia!');
      return;
    }

    this.receptyService.pridajRecept({
      nazov: this.nazov,
      ingrediencie: this.ingrediencie,
      postup: this.postup,
      casPripravy: this.casPripravy || 0
    });

    // Po vytvorení nás automaticky presmeruje na zoznam receptov
    this.router.navigate(['/recepty']);
  }
}