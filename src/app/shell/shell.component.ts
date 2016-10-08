import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

}
