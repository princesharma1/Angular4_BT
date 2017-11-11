
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[AppService]  
})
export class GalleryComponent implements OnInit {
 public jsonApiData: any;
  public galleryData: any;
  public galleryLength;
  public stringUrl;
  public id: number;
  public cnt: number;
  public count: number = 0;
  public totCount: number;
  public domainUrl:string='';
  public urlRewr:string;
  menuState:string = 'out';
  constructor(private _appService: AppService, private route: ActivatedRoute, private router: Router) {
    let currentUrl = this.router.url;
    //console.log(currentUrl);
    this.stringUrl = currentUrl.split("/");
    this.cnt = this.stringUrl[this.stringUrl.length - 2];
    this.urlRewr = this.stringUrl[this.stringUrl.length - 3];
    this.id = this.stringUrl[this.stringUrl.length - 1].substring(0, this.stringUrl[this.stringUrl.length - 1].indexOf("."));
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(this.id);
      this.jsonApiData = 'http://localhost:8080/JWebS2/rest/photo/json/' + this.id;
    //  console.log(this.jsonApiData);
      this.getDataCall();
    })      
  }  
  public prev() {
  //  this.menuState = this.menuState === 'out' ? 'in' : 'out';
   console.log(this.menuState);
    if(this.cnt !==0)
    {
    this.cnt--;
    0 > this.cnt && (this.cnt = 0);
    console.log('counter value in Prev ' + this.cnt);
    this.getDataCall()
    }    
  }
  public next(totalCount) {  
    // this.menuState = this.menuState === 'out' ? 'in' : 'out';
    console.log(this.menuState);
  //  console.log(totalCount);
   // console.log('this.cnt value '+ this.cnt);
   // console.log(this.cnt==(totalCount));
   if(this.cnt!=(totalCount)){
     //console.log('if condition executed');     
    this.cnt > totalCount - 1 && (this.cnt = totalCount - 1);
    this.cnt++; 
    this.getDataCall()
   }else{  
    // console.log('else if executed');   
    //console.log('counter value in Next ' + this.cnt);
    //console.log('counter value in totalCount ' + totalCount);    
   }    
  }
  storeValue(totCount: number) {
    return this.totCount = totCount;
  }
  getDataCall() {
    if (this.cnt) {   
      this._appService.getjsonData(this.jsonApiData).subscribe(data => {
        this.galleryData = data[this.cnt - 1];
        this.storeValue(data.photoCount);        
        this.domainUrl = 'http://localhost:4200/gallery/'+this.urlRewr+'/'+this.cnt+'/'+data[0].galleryId+'.html';
        history.pushState({}, null, this.domainUrl);        
      });
    }
  }
}
