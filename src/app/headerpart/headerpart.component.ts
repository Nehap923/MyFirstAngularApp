import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-headerpart',
  templateUrl: './headerpart.component.html',
  styleUrls: ['./headerpart.component.scss']
})
export class HeaderpartComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
