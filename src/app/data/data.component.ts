import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  user: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllData().subscribe(res=>{
      console.log(res,'Assetmonk')
      this.user=res;
    })
    

  }

}
