import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApiPageComponent } from './bored-api-page.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

describe('BoredApiPageComponent', () => {
  let component: BoredApiPageComponent;
  let fixture: ComponentFixture<BoredApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoredApiPageComponent],
      imports: [HttpClientTestingModule, MatProgressSpinner],
    }).compileComponents();

    fixture = TestBed.createComponent(BoredApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
