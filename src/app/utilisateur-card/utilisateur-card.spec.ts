import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurCard } from './utilisateur-card';

describe('UtilisateurCard', () => {
  let component: UtilisateurCard;
  let fixture: ComponentFixture<UtilisateurCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateurCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateurCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
