import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import {TASKS} from '../../mocks/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = TASKS;

  constructor(){}

  ngOnInit(): void{

  }

}
