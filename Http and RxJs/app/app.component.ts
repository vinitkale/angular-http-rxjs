import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: any[];

  constructor(public http: Http) {
  this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
      .subscribe(res => {        
        this.posts = res;       
      })   
  }
}
