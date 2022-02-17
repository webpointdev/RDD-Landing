import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseComponent } from './use.component';

describe('UseComponent', () => {
  let component: UseComponent;
  let fixture: ComponentFixture<UseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
