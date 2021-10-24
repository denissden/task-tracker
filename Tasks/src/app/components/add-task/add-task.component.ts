import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  date?: Date;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
                        .onToggle()
                        .subscribe( value => (
                          this.showAddTask = value
                        ));
  }

  ngOnInit(): void {
    this.showAddTask = this.uiService.showAddTask;
  }

  onSubmit(){
    if (!this.text) {
      alert("Please enter a task!")
      return;
    }

    if (this.date === undefined){
      alert("Please enter a date!")
      return;
    }

    const newTask: Task = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = "";
    this.date = undefined;
    this.reminder = false;
  }
}
