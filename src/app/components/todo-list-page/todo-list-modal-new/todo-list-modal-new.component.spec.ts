import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListModalNewComponent } from './todo-list-modal-new.component';

describe('TodoListModalNewComponent', () => {
  let component: TodoListModalNewComponent;
  let fixture: ComponentFixture<TodoListModalNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListModalNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
