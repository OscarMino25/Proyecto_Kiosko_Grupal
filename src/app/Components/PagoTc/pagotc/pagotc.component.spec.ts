import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagotcComponent } from './pagotc.component';

describe('PagotcComponent', () => {
  let component: PagotcComponent;
  let fixture: ComponentFixture<PagotcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagotcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagotcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
