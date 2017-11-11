import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService]
})
export class HomeComponent implements OnInit {
title = "Business today";
bthomejsondata:any[];
jsonApiData:any;
hrefUrl:string;
constructor(private _homeService: AppService,private route:ActivatedRoute,private router: Router)
{ }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jsonApiData = "http://localhost:8080/JWebS2/rest/home/json";
      this._homeService.getjsonData(this.jsonApiData).subscribe(data=>this.bthomejsondata=data);
    })
  }

  getMyUrl(url:string,id:number){
    console.log(this.hrefUrl);
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
    }


}
   