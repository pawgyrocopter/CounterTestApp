import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: HubConnection;
  signalRNumber : number = 0;
  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .configureLogging(LogLevel.Information)
      .withUrl(environment.hubUrl + 'value')
      .build();
  }

  startConnection(){


    this.hubConnection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  addValueListener(){
    this.hubConnection.on("SendIncrementedValue", (value) => {
      this.signalRNumber = value
    });
  }
}
