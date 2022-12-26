import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractContainerComponent } from './abstract-container.component';

describe('AbstractContainerComponent', () => {
  let component: AbstractContainerComponent;
  let fixture: ComponentFixture<AbstractContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
