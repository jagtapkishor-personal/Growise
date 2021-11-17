import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  name: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      task: this.name,
      desc: this.desc,
    }
    this.todoAdd.emit(todo);

  }

}
