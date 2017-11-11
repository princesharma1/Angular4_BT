import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';
   
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers:[AppService],
  encapsulation: ViewEncapsulation.None 
})
export class StoryComponent implements OnInit {
title="Story";
jsonApiData:string;
btstoryjsondata:any[];
id:string;
href:string;
stringUrl:any;
constructor(private _storyService: AppService,private route:ActivatedRoute,private router: Router)
{ 
let currentUrl = this.router.url;
console.log("Story URL: " + currentUrl);
this.stringUrl = currentUrl.split('-');
this.id = this.stringUrl[this.stringUrl.length - 1].substring(0,this.stringUrl[this.stringUrl.length - 1].indexOf("."));
console.log("Id: " + this.id);
}
   
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.jsonApiData = 'http://localhost:8080/JWebS2/rest/story/json/'+this.id;  
      this._storyService.getjsonData(this.jsonApiData).subscribe(data=>this.btstoryjsondata=data);
    })
  }


getCatURL(url:string,id:number){
//console.log("URL: " + url + " - ID: "  + id);
this.href = url.replace(".html","").concat("/1/"+id+".html");
//console.log(this.href);
return this.href;
}

}
