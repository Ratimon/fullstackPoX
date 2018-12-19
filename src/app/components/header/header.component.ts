import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


lists = [
  {name:'YOUR ASSETS', icon: 'folder_open'},
  {name:'LATEST UPLOADS', icon: 'cloud_uploadr'},
  {name:'PENDING TX', icon: 'alarm'},
  {name:'READ ME', icon: 'alarm'}
];

  constructor() { }


  ngOnInit() {
    
  }

}
