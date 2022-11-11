import { Injectable } from '@angular/core';
import {CounterService} from "./counter.service";
import {Falsy, interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoopService {
  stop = false
  inputTime : string = "";
  constructor(private counterService : CounterService) {
  }

  async startSending(inputTime : string){

    const q = interval(Number(inputTime))
   let b =  q.subscribe((d) => {
      console.log("qweqwe")
     if(this.stop)
     {
       b.unsubscribe()
     }
      this.counterService.sendRandomNumber(this.getRandomInt(100)).subscribe()
    })



    // this.inputTime = inputTime
    // await this.loopFunc()
  }

  async loopFunc(){
    this.counterService.sendRandomNumber(this.getRandomInt(100))
    if(!this.stop){
       setTimeout(this.loopFunc, Number(this.inputTime))
    }
  }

  changeStop(){
    this.stop = true
  }

  getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }
}
