import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'ssas-webapp';
  public response: string = "";

  public constructor(
    public http: HttpClient
  ) {
  }

  public ngOnInit() : void {
    this.http.get("http://127.0.0.1:8787").toPromise().then((response: any) => {
      this.response = response.message;
    });
  }

}
