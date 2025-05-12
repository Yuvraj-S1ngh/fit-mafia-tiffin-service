import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryAreasPage } from './delivery-areas.page';

describe('DeliveryAreasPage', () => {
  let component: DeliveryAreasPage;
  let fixture: ComponentFixture<DeliveryAreasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
