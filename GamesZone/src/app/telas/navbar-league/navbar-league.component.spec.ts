import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeagueComponent } from './navbar-league.component';

describe('NavbarLeagueComponent', () => {
  let component: NavbarLeagueComponent;
  let fixture: ComponentFixture<NavbarLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLeagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
