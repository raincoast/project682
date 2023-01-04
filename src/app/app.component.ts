import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentSelectIndex = 0
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
  ngOnInit(): void {
  }
  switchPage(index: number) {
    this.currentSelectIndex = index
  }
  login() {
    this.auth.loginWithPopup().subscribe(val => {
      console.log(val);
      // 登陆后需要刷新下页面
      location.reload();
    })
  }

}
