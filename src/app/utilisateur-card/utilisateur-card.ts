import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

function filtrerActifs(utilisateurs: Utilisateur[]): Utilisateur[] {
  return utilisateurs.filter(u => u.actif);
}

// Generics: réutiliser une fonction pour plusieurs types

function premierElement<T>(tableau: T[]): T | undefined {
  return tableau[0];
}

@Component({
  selector: 'app-utilisateur-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur-card.html',
  styleUrl: './utilisateur-card.scss',
})


export class UtilisateurCard {
  @Input() utilisateur!: Utilisateur;
  @Output() suppression = new EventEmitter<number>();
  @Output() update= new EventEmitter<Utilisateur> ();

  onSupprimer() {
    this.suppression.emit(this.utilisateur.id);
  }

}
