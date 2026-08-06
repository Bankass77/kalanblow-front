import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur-service';
import { Utilisateur } from '../models/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-form',
  imports: [ReactiveFormsModule],
  templateUrl: './utilisateur-form.html',
  styleUrl: './utilisateur-form.scss',
})
export class UtilisateurForm {

  private router = inject(Router);

  private route = inject(ActivatedRoute);

  private utilisateurService = inject(UtilisateurService);
  utilisateurId: number |null = null ;

  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    numeroIne: ['', [Validators.required, Validators.maxLength(16)]],
    email: ['', [Validators.email]],
    actif: [true],
    logo: [''],
    adress: this.fb.group({
      numero: [null as number | null, [Validators.required]],
      rue: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      zipCode: [null as number | null, [Validators.required]],
      country: ['', [Validators.required]]
    })

  });

  onSubmit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();// affiche les erreurs même si l'utilisateur n'a pas encore touché le champ
      return;
    }

    const utilisateur = this.form.getRawValue() as Utilisateur;
    const operation = this.utilisateurId ? this.utilisateurService.updateUtilisateur (this.utilisateurId, utilisateur):
    this.utilisateurService.creerUtilisateur(this.form.value as Utilisateur);

    operation.subscribe({

      next: () => {
        this.form.reset();
        this.router.navigate(['/utilisateurs']);// redirection vers la liste des Utilisateurs}
      },
      error: (err) => console.log("Erreur lors de la création de l'utilisateur", err),

    });
  }

  ngOnInit(): void{

    const id= this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

      this.utilisateurId= Number(id);
      this.utilisateurService.getUtilisateur(this.utilisateurId).subscribe(utilisateur => {
        this.form.patchValue(utilisateur);
      })
      
  }
}
