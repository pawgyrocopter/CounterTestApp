import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Counter} from "../_models/counter";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

   sendRandomNumber(randomNumber : number){
    return this.http.post<Counter>(this.baseUrl + 'Counter', {randomNumber})
  }

  getCurrentNumber(){
    return this.http.get(this.baseUrl + 'Counter')
  }


}
