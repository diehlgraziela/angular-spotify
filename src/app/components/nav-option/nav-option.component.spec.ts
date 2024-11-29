import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptionComponent } from './nav-option.component';

describe('NavOptionComponent', () => {
  let component: NavOptionComponent;
  let fixture: ComponentFixture<NavOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
