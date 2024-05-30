import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPageComponent } from './todo-list-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('TodoListPageComponent', () => {
  let component: TodoListPageComponent;
  let fixture: ComponentFixture<TodoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListPageComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
