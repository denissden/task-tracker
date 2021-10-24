import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly apiUrl: string = "https://localhost:5001/task"

  constructor(private http: HttpClient) { }

  // api requests here
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+"/all");
  }

  deleteTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url); 
  }

  updateTask(task: Task):Observable<Task>{
    return this.http.put<Task>(this.apiUrl, task, httpOptions);
  }

  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
