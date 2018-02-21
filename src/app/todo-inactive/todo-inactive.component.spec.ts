import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoInactiveComponent} from './todo-inactive.component';

describe('TodoInactiveComponent', () => {
  let component: TodoInactiveComponent;
  let fixture: ComponentFixture<TodoInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInactiveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
