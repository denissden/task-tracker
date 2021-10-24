import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[]=[];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshTasks();
  }

  refreshTasks(){
    this.service.getTasks().subscribe( data =>
      {
        this.tasks = data;
      });
  }

  deteleTask(task: Task){
    this.service
    .deleteTask(task)
    .subscribe(() => 
    (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.service
    .updateTask(task)
    .subscribe();
  }

  addTask(task: Task){
    this.service
    .addTask(task)
    .subscribe(task => 
    (
      this.tasks.push(task)
    ));
  }

}
