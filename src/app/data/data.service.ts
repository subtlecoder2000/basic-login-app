import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
   public baseURL:any = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http:HttpClient,
    ) { }

  ngOnInit(): void {
    this.getAllData();
  }


  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
 }

}

