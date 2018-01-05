import { Component, AfterContentInit } from '@angular/core';
import { environment } from '@env/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = environment.title;
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    const timer = setTimeout(() => {
      document.body.removeChild(document.querySelector('#bootloader'));
      clearTimeout(timer);
    }, 1000);
  }
}
