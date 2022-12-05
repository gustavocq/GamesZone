import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPesquisaComponent } from './navbar-pesquisa.component';

describe('NavbarPesquisaComponent', () => {
  let component: NavbarPesquisaComponent;
  let fixture: ComponentFixture<NavbarPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
