import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListModalNewComponent } from './todo-list-modal-new.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoListModalNewComponent', () => {
  let component: TodoListModalNewComponent;
  let fixture: ComponentFixture<TodoListModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListModalNewComponent],
      imports: [HttpClientModule],
      providers: [{ provide: NgbActiveModal, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
