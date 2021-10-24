import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly apiUrl: string = "https://localhost:5001/"

  constructor(private http: HttpClient) { }

  // api requests here
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+"task/all");
  }

}
