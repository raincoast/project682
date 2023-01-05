import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { ListComponent } from './lab/list/list.component';
import { MainComponent } from './lab/main/main.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentSelectIndex = 0
  // Current component
  currentPath: String = '';
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.currentPath = data.url.substring(1);
      }
    })
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
  logout() {
    this.auth.logout({
      returnTo: (document.location.origin.indexOf("github") != -1 ? document.location.origin + '/project682/' : document.location.origin)
    })
  }
  callTheSearch(event: any, value: string) {
    console.log("call the search");
    if (this.currentPath == "lab") {
      // invoke the corresponding search function
      (this.outlet.component as MainComponent).search(event, value);
    }
  }


}
