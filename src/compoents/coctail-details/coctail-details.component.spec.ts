import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailDetailsComponent } from './coctail-details.component';

describe('CoctailDetailsComponent', () => {
  let component: CoctailDetailsComponent;
  let fixture: ComponentFixture<CoctailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctailDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoctailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
