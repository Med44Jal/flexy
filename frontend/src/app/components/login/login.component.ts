import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/home']);
  }

}
