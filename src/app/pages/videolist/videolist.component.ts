import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  providers:[AppService] 
})
export class VideolistComponent implements OnInit {
title="Video List";
jsonApiData:any;
sectionSefTitle:string;
sectionTitle:string;
id:string;
hrefUrl:string;
btvideosection:any[];
constructor(private _sectionService: AppService,private route:ActivatedRoute,private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
     this.sectionTitle = this.route.snapshot.params['sectionTitle'];
    console.log('Section ID '+ this.id);
    this.jsonApiData = 'http://localhost:8080/JWebS2/rest/videolist/json';   
    this._sectionService.getjsonData(this.jsonApiData).subscribe(data => this.btvideosection = data);    
  }) 

}


  getMyUrl(url:string,id:number){
  console.log(this.hrefUrl);
  this.hrefUrl = url.replace('.html','').concat('/1/'+id+'.html');
  return this.hrefUrl;
  }


}