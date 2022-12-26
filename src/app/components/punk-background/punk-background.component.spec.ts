import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunkBackgroundComponent } from './punk-background.component';

describe('PunkBackgroundComponent', () => {
  let component: PunkBackgroundComponent;
  let fixture: ComponentFixture<PunkBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunkBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunkBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
