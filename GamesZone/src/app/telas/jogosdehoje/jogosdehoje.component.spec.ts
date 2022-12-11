import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosdehojeComponent } from './jogosdehoje.component';

describe('JogosdehojeComponent', () => {
  let component: JogosdehojeComponent;
  let fixture: ComponentFixture<JogosdehojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosdehojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosdehojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
