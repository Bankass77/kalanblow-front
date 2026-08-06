import { Adress } from "./adress";
import { Profil } from "./profil";

export interface Utilisateur {
  id: number,
  nom: string,
  prenom: string,
  email: string,
  numeroIne: string,
  adress: Adress,
  actif: boolean,
  profil?: Profil,
  logo: string;
}
