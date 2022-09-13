import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  display() {
    console.log("say hi to data");
    this.router.navigate(['data']);
  }

}
