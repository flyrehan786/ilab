import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap'; // Import Bootstrap JavaScript

@Component({
  selector: 'core-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  _message: string;
  _success: boolean;
  _error: boolean;
  _warning: boolean;
  constructor() { }
  ngOnInit(): void {
  }
  show(message: string, success: boolean, error: boolean, warning: boolean) {
    this._message = message;
    this._success = success;
    this._error = error;
    this._warning = warning;

    const liveToast = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(liveToast); 
    toast.show(); 
  }
}
