import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosHojeComponent } from './jogos-hoje.component';

describe('JogosHojeComponent', () => {
  let component: JogosHojeComponent;
  let fixture: ComponentFixture<JogosHojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosHojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
