import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id: number;
  editMode: boolean;
  taskBeingEdit: number;
  personal_label: boolean;
  professional_label: boolean;
  tasks = [
    {
      id: 1,
      title: 'Learn about Plootoooooooooooo',
      due_date: '2018-01-01',
      completion_date: '2019-12-12',
      tags: [
        'personal', 'professional'
      ],
      author: 'Daniel',
      executor: 'Daniel',
      late: false,
      completed: false
    },
    {
      id: 2,
      title: 'Learn Angular',
      due_date: '2010-01-01',
      completion_date: '2011-12-12',
      tags: [
        'professional'
      ],
      author: 'Daniel',
      executor: 'Daniel',
      late: true,
      completed: false
    },
    {
      id: 3,
      title: 'aaa',
      due_date: '2001-01-01',
      completion_date: '',
      tags: [
        'personal'
      ],
      author: 'Daniel',
      executor: 'None',
      late: true,
      completed: false
    },
    {
      id: 4,
      title: 'bbbb',
      due_date: '2010-01-01',
      completion_date: '2011-12-12',
      tags: [
        'professional'
      ],
      author: 'Daniel',
      executor: 'Daniel',
      late: true,
      completed: false
    },
    {
      id: 5,
      title: 'cccc',
      due_date: '2001-01-01',
      completion_date: '',
      tags: [
        'personal'
      ],
      author: 'Daniel',
      executor: 'None',
      late: true,
      completed: false
    },
    {
      id: 6,
      title: 'ddd',
      due_date: '2010-01-01',
      completion_date: '2011-12-12',
      tags: [
        'professional'
      ],
      author: 'Daniel',
      executor: 'Daniel',
      late: true,
      completed: false
    },
    {
      id: 7,
      title: 'eeeee',
      due_date: '2001-01-01',
      completion_date: '',
      tags: [
        'personal'
      ],
      author: 'Daniel',
      executor: 'None',
      late: true,
      completed: false
    },
    {
      id: 8,
      title: 'ffff',
      due_date: '2010-01-01',
      completion_date: '2011-12-12',
      tags: [
        'professional'
      ],
      author: 'Daniel',
      executor: 'Daniel',
      late: true,
      completed: false
    },
    {
      id: 9,
      title: 'gggg',
      due_date: '2001-01-01',
      completion_date: '',
      tags: [
        'personal'
      ],
      author: 'Daniel',
      executor: 'None',
      late: true,
      completed: false
    }
  ];
  private todosLeft = 0;

  constructor() {
    this.todosLeft = this.tasks.length;
    console.log(this.todosLeft);
    // this.isAnyTodoLeft();
    this.editMode = false;
  }

  changeCompletion(task: any) {
    this.todosLeft !== 0 ? this.minusTodo() : console.log('No more tasks to complete!');
    task.completed = true;
  }

  getTodosLeft() {
    console.log(this.todosLeft);
    return this.todosLeft;
  }

  showMessage(message: string) {
    console.log(message);
  }

  private addTodo() {
    this.todosLeft++;
  }

  private minusTodo() {
    this.todosLeft--;
  }

  onEnableEditMode(task: any) {
    this.editMode === true ? this.editMode = false : this.editMode = true;
    this.taskBeingEdit = task.id;
  }

  onCreateTask() {
    this.addTodo();
    const newItem = {};

  }

  unarchiveTodo(task: any) {
    task.completed = false;
    this.addTodo();
  }
}
