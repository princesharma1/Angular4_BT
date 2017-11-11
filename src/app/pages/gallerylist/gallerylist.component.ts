
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  styleUrls: ['./gallerylist.component.css'],
  providers:[AppService]  
})
export class GallerylistComponent implements OnInit {
title="Gallery List";
jsonApiData:any;
sectionSefTitle:string;
sectionTitle:string;
id:string;
hrefUrl:string;
btgallerysection:any[];
constructor(private _sectionService: AppService,private route:ActivatedRoute,private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
     this.sectionTitle = this.route.snapshot.params['sectionTitle'];
    console.log('Section ID '+ this.id);
    this.jsonApiData = 'http://localhost:8080/JWebS2/rest/gallerylist/json';   
    this._sectionService.getjsonData(this.jsonApiData).subscribe(data => this.btgallerysection = data);    
  }) 

}


  getMyUrl(url:string,id:number){
  console.log(this.hrefUrl);
  this.hrefUrl = url.replace('.html','').concat('/1/'+id+'.html');
  return this.hrefUrl;
  }


}