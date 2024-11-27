import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueBraceletsComponent } from './boutique-bracelets.component';

describe('BoutiqueBraceletsComponent', () => {
  let component: BoutiqueBraceletsComponent;
  let fixture: ComponentFixture<BoutiqueBraceletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiqueBraceletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueBraceletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
