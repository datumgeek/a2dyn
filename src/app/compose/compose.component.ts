import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  @Input() module: string;
  @Input() className: string;
  
  constructor() { }

  ngOnInit() {
  }

}
