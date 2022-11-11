import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CounterService} from "../_services/counter.service";
import {Counter} from "../_models/counter";
import {ConsoleLogger} from "@angular/compiler-cli";
import {renderSourceAndMap} from "@angular/compiler-cli/ngcc/src/rendering/source_maps";
import {LoopService} from "../_services/loop.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private counterService: CounterService, private loopService: LoopService) {
  }

  qwe: Counter = {randomNumber: 0};
  stopSending: boolean = false;
  inputTime: string = "";

  ngOnInit(): void {
    this.counterService.sendRandomNumber(123).subscribe(response => {
      console.log(response.randomNumber)
      this.qwe.randomNumber = response.randomNumber
    })
  }

  startInfiniteSending() {
    const q = interval(Number(this.inputTime))
    let b = q.subscribe((d) => {
      console.log("qweqwe")
      if (this.stopSending) {
        b.unsubscribe()
      }
      this.counterService.sendRandomNumber(this.getRandomInt(100)).subscribe()
    })
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }


  stopInfiniteSending() {
    console.log("stoped")
    this.stopSending = true
  }
}
