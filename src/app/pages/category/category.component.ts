import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[AppService]  
})
export class CategoryComponent implements OnInit {
jsonApiData:any;
sectionSefTitle:string;
sectionTitle:string;
id:string;
stringUrl:any;
hrefUrl:string;
btcategorydata:any[];
constructor(private _cateoryService: AppService,private route:ActivatedRoute,private router: Router) { 
let currentUrl = this.router.url;
console.log("Story URL: " + currentUrl);
this.stringUrl = currentUrl.split('/');
this.id = this.stringUrl[this.stringUrl.length - 1].substring(0,this.stringUrl[this.stringUrl.length - 1].indexOf("."));
console.log("Id: " + this.id);

}

  ngOnInit() {
    this.route.params.subscribe(params => {
    //this.id = this.route.snapshot.params['id']; 
    this.sectionTitle = this.route.snapshot.params['sectionTitle'];
    this.sectionSefTitle = this.route.snapshot.params['sectionSefTitle']; 
    console.log('Section ID '+ this.id);
    this.jsonApiData = 'http://localhost:8080/JWebS2/rest/latest/category/json/'+this.id;       
    this._cateoryService.getjsonData(this.jsonApiData).subscribe(data => this.btcategorydata = data);    
  }) 
  }
getMyUrl(url:string,id:number){
    console.log(this.hrefUrl);
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
    }

}



    