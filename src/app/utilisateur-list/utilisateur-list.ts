import { Component, inject } from '@angular/core';
import { UtilisateurCard } from '../utilisateur-card/utilisateur-card';
import { UtilisateurService } from '../services/utilisateur-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-list',
  standalone: true,
  imports: [UtilisateurCard, AsyncPipe],
  templateUrl: './utilisateur-list.html',
  styleUrl: './utilisateur-list.scss',
})
export class UtilisateurList {
  private utilisateurService = inject(UtilisateurService);
  utilisateurs$: Observable<Utilisateur[]> = this.utilisateurService.getUtilisateurs();

  data = Observable<Utilisateur[]>;
  private router = inject(Router);

  ngOnInit() {
    this.loadUtilisateurs();
  }

  loadUtilisateurs() {

    this.utilisateurService.getUtilisateurs().subscribe(

      data => { this.utilisateurs$; }
    )

  }

  onSuppression(id: number): void {

    this.utilisateurService.supprimerUtilisateur(id).subscribe(

      () => { this.loadUtilisateurs(); }

    )
  }

  onUpdate(utilisateur: Utilisateur){
    this.router.navigate(['/utilisateurs', utilisateur.id]);
  }
}
