import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiteComponent } from './infite.component';

describe('InfiteComponent', () => {
  let component: InfiteComponent;
  let fixture: ComponentFixture<InfiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
