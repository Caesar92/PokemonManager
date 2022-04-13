import { Component, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title :string =  '';

  constructor(){};

  ngOnInit(): void {
    console.log("AppComponent => ngOnInit")
    this.title = "Welcome Pokemon !!"
  }

  ngOnDestroy(): void {
    
  }

}
