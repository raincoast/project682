import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentSelectIndex = 0
  ngOnInit(): void {

  }
  switchPage(index: number) {
    this.currentSelectIndex = index
  }
}
