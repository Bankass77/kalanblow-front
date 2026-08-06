import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Utilisateur } from '../models/utilisateur';


@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {

  private url ='http://localhost:3000/utilisateurs';
  private http = inject(HttpClient);


  getUtilisateur(id: number){

    return this.http.get<Utilisateur>(`$this.url/${id}`)
  }
  
  // Récupérer la liste des Utilisateurs
  getUtilisateurs(): Observable<Utilisateur[]> {
    //return this.utilisateurs;
    return this.http.get<Utilisateur[]>(this.url)
  }

  // Créer un Utilisateur
  creerUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{

    return this.http.post<Utilisateur>(this.url, utilisateur);
  }

  // Supprimer un Utilisateur
  supprimerUtilisateur(id: number): Observable<void>{

    return this.http.delete<void>(`$this.url/${id}`);
  }

  // Update User
  updateUtilisateur(id: number,utilisateur: Utilisateur): Observable<Utilisateur>{

    return this.http.put<Utilisateur>(`$this.url/${id}`, utilisateur);
  }
}
