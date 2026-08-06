export interface Profil {
    id: number;
    name: string;
    uid: string; // ADMINISTRATEUR, USER
    heriteDe?: number | null; // id of role to be extends
}
