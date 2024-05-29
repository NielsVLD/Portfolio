import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListModalNewComponent } from './todo-list-modal-new.component';
import { HttpClientModule } from "@angular/common/http";

describe('TodoListModalNewComponent', () => {
  let component: TodoListModalNewComponent;
  let fixture: ComponentFixture<TodoListModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListModalNewComponent],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
