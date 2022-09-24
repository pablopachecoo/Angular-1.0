import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  @Input() name: string = '';
  @Input() userInfo!: {email: string, role: string}

  canShow: boolean = false;
  size = 48;
  font = 'Arial'
  color = 'red';
  
  classes = ["green-title", "small-title"];
  constructor() { }

  ngOnInit(): void {
  }

}
