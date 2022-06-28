import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
})
export class FacebookComponent implements OnInit {
  mensaje: string = '';
  url:string="";
  stringimage: string = "";
  /**
   * Identificador de la página: "108359151925170"
   * Identificador de la app: "737349640802367"
   */

  constructor(private fb: FacebookService) {
    this.iniciarFb();
  }

  ngOnInit(): void {}

  postFb() {
    var apiMethod: ApiMethod = 'post';
    //aqui va el Identificador de la página
    this.fb.api('/108359151925170/feed', apiMethod, {
      message: this.mensaje,
      access_token:
        'EAAKenZAdqUD8BAJv0Q2tvQEDwKom6SojdRExulk5Ab6yi4sM7BJfZBOdUv6DHSLRHvMb7Y4f3ZCpBdfHZCn1vrEN2uuG5GQ2TNHoRwz2HZCj41DitnR9gQRGVZCPS7yyFY1EL0xA8PksSwWNjpNQGDave94FP38bkDST7KgsB5dfxlRJYsK1awMVThVT7QakZA7aVHzfeUKWgZDZD',
    });
  }
  postFbConURLFoto() {
    var apiMethod: ApiMethod = 'post';
    console.log(this.stringimage);
    //aqui va el Identificador de la página
    this.fb.api('/108359151925170/photos', apiMethod, {
      url:this.url,
      message: this.mensaje,
      access_token:
        'EAAKenZAdqUD8BAJv0Q2tvQEDwKom6SojdRExulk5Ab6yi4sM7BJfZBOdUv6DHSLRHvMb7Y4f3ZCpBdfHZCn1vrEN2uuG5GQ2TNHoRwz2HZCj41DitnR9gQRGVZCPS7yyFY1EL0xA8PksSwWNjpNQGDave94FP38bkDST7KgsB5dfxlRJYsK1awMVThVT7QakZA7aVHzfeUKWgZDZD',
    });
  }
  
  postFbConFoto() {
    var apiMethod: ApiMethod = 'post';
    console.log(this.stringimage);
    //aqui va el Identificador de la página
    this.fb.api('/108359151925170/uploads', apiMethod, {
      file_type: "image/jpeg",
      file_length: this.stringimage,
      access_token:
        'EAAKenZAdqUD8BAApNPIZBQKzsQtOg7tP8f4iHmf8MB3MXmpSjwMyAksrFITDR7dJuY1e2Wunf5vKxdisyKjMNDF39R1jMdATUVLLDPN4ysZAKgMAYrbQOfYLltbpyNZCg6gw2SVtoZCTvpIzjpKy457KrOmUIZAMEjon67MBIom6cZBteqdRImFsnc7W5j2LObhtv4I9MskoAZDZD',
    });

  }

  iniciarFb() {
    let initParams: InitParams = {
      appId: '737349640802367',  
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0',
    };
    this.fb.init(initParams);
  }

  onFileChanges(files:any){
    console.log("File has changed:", files);
    this.stringimage = files[0].base64;
    }
}
