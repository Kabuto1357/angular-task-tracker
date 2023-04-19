import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TASKS } from 'src/app/mocks/mock-tasks';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
   // Girlie I told you to just use the explanation point!
  faTimes = faTimes;
  constructor() {}
    // You could also use an initializer for your interface if the explanation point is making you nervous
    // this.task = {
    //   id: undefined,
    //   text: '',
    //   day: '',
    //   reminder: false
    // }

  ngOnInit(): void {}

  onDelete(task){
    this.onDeleteTask.emit(task);
  }
}
