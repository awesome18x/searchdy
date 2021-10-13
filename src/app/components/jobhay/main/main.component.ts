import { Round } from './main.model';
import { Component, OnInit } from '@angular/core';

export enum State {
  init, 
  view, 
  edit, 
  create, 
  wait
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public StateEnum = State;
  public state = State.init;
  public currentGender!: string;
  constructor(
  ) {
    console.log('data', this.state);
    
  }

  ngOnInit(): void {
  }

  goToRound2(gender: string) {
    this.currentGender = gender;
    this.state = State.view;
  }

}
