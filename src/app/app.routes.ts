import { Routes } from '@angular/router';
import { UtilisateurList } from './utilisateur-list/utilisateur-list';
import { UtilisateurForm } from './utilisateur-form/utilisateur-form';

export const routes: Routes = [
    {path: 'utilisateurs', component: UtilisateurList},
    {path: 'utilisateur', component: UtilisateurForm},
    
];
