import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CounterService} from "../_services/counter.service";
import {Counter} from "../_models/counter";
import {ConsoleLogger} from "@angular/compiler-cli";
import {renderSourceAndMap} from "@angular/compiler-cli/ngcc/src/rendering/source_maps";
import {interval} from "rxjs";
import {SignalRService} from "../_services/signal-r.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private counterService: CounterService, public signalRService : SignalRService) {
  }

  stopSending: boolean = false;
  inputTime: string = "";
  signalrNumber: string = "";

  ngOnInit(): void {
    this.signalRService.startConnection()
    this.signalRService.addValueListener()
  }

  startInfiniteSending($event: MouseEvent) {
    this.changeDisability("startButton", true);
    this.changeDisability("inputTime", true);
    this.stopSending = false
    const infiniteRequests = interval(Number(this.inputTime))
    let subscriberInfiniteRequests = infiniteRequests.subscribe((d) => {


      if (this.stopSending) {
        subscriberInfiniteRequests.unsubscribe();

        this.changeDisability("startButton", false);
        this.changeDisability("inputTime", false);
      }
      this.counterService.sendRandomNumber(this.getRandomInt(10000)).subscribe()
    })
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  changeDisability(elementId : string, state : boolean){
    (<HTMLInputElement> document.getElementById(elementId)).disabled = state;
  }

  stopInfiniteSending() {
    this.stopSending = true
  }
}
