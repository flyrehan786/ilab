import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() id: string;
  @Input() backToListRoute: string; 
  @Input() data: string;
  obj = {
    id: '1',
    name: 'Rehan Shah',
    cnic: '15402-69990899',
    remarks: 'I am a full stack js-developer.'

  }
  constructor() { }

  ngOnInit(): void {
  }

}
