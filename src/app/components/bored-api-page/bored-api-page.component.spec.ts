import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApiPageComponent } from './bored-api-page.component';

describe('BoredApiPageComponent', () => {
  let component: BoredApiPageComponent;
  let fixture: ComponentFixture<BoredApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoredApiPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoredApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
