import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueSacsComponent } from './boutique-sacs.component';

describe('BoutiqueSacsComponent', () => {
  let component: BoutiqueSacsComponent;
  let fixture: ComponentFixture<BoutiqueSacsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiqueSacsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueSacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
