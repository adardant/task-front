import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        console.log("Hey");
        return this.http.get('http://localhost:3000/task')
    }

    getTask(id: String) {
        return this.http.get('http://localhost:3000/task/' + id);
    }

    deleteTask(id: any) {
        console.log("HEINNNNNN")
        return this.http.get('http://localhost:3000/deleteTask/' + id);
    }

    addTask(date: String, description: String) {
        console.log("HEINNNNNN2222")
        return this.http.post('http://localhost:3000/task', { date: date, description: description });

    }
}
