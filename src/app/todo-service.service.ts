import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http'

import { Home } from './home/home.model';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
home:Home[];
  todosUrl:string= 'https://jsonplaceholder.typicode.com/todos';
  constructor(public http:HttpClient) { }
  
  saveData(dataToSend){
    var url="https://jsonplaceholder.typicode.com/todos";
    return this.http.post(url,dataToSend,{headers:new HttpHeaders({"content-type":"application/json"})});

  }
  getUser(){
    var url="https://reqres.in/api/users";
    return this.http.get(url);
  }

  deleteRecipe(Id: any){
    var url="https://jsonplaceholder.typicode.com/todos";
    return this.http.delete(url,Id);
  }
  getUserById(uid:any){
    console.log("ahiya",uid);
    var url="https://reqres.in/api/users/"+uid;
    console.log(url);
      return this.http.get(url)
  }
}
