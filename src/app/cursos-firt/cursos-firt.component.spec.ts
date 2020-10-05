import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFirtComponent } from './cursos-firt.component';

describe('CursosFirtComponent', () => {
  let component: CursosFirtComponent;
  let fixture: ComponentFixture<CursosFirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosFirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
