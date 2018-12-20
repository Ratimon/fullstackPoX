import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


lists = [
  {name:'YOUR ASSETS', icon: 'folder_open', path: 'your-assets'},
  {name:'LATEST UPLOADS', icon: 'cloud_uploadr', path: 'upload'},
  {name:'PENDING TX', icon: 'alarm', path: '' },
  {name:'READ ME', icon: 'question_answer', path: ''}
];

  constructor() { }


  ngOnInit() {
    
  }

}
