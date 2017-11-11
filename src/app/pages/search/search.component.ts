import { Component, OnInit,ElementRef } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[AppService]
})
export class SearchComponent implements OnInit {
searchword:any;
contenttype:any;
jsonApiData:any;
btsearchdata:any;
hrefUrl:any;
constructor(private _sectionService: AppService,private route:ActivatedRoute,private router: Router,private elRef:ElementRef) { 
this.searchword = this.route.snapshot.queryParams["searchword"];
this.contenttype = this.route.snapshot.queryParams["contentType"];   
   // console.log("---> " +this.searchword);
    //console.log("---> " +this.contenttype);  
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.changeTab(this.contenttype);
   
    this._sectionService.getjsonData(this.jsonApiData).subscribe(data => this.btsearchdata = data); 
   })       
  
  }

  changeTab(contentType){
    var tab1 = this.elRef.nativeElement.querySelector('.tab01');
    var tab2 = this.elRef.nativeElement.querySelector('.tab02');
    //console.log(tab1);
    //console.log(contentType);
    var tab1c = this.elRef.nativeElement.querySelector('#tab01');
    var tab2c = this.elRef.nativeElement.querySelector('#tab02');
    if(contentType=='story'){
      tab2.classList.remove('active');
      tab1.classList.add('active');  
      tab2c.classList.remove('active_cont');  
      tab1c.classList.add('active_cont');       
    }
    else{
      //console.log('else executed');
     // console.log(tab1);
      tab1.classList.remove('active');
      tab2.classList.add('active');
      tab2c.classList.add('active_cont');  
      tab1c.classList.remove('active_cont'); 
    }
      this.jsonApiData = 'http://localhost:8080/JWebS2/rest/search/json/'+contentType+'/'+this.searchword;  
     // console.log(this.jsonApiData);
     //console.log('----> ' + contentType);
    this.router.navigate(['/search'], {
      queryParams:{
       'searchword':this.searchword,
       'contentType':contentType
      }
    })
  this.getDatas(this.jsonApiData)
}
  
getDatas(url:string){
 this.route.params.subscribe(params => {   
    this._sectionService.getjsonData(url).subscribe(data => this.btsearchdata = data); 
   }) 

}

getMyUrl(url:string,id:number){
    console.log(this.hrefUrl);
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
    }

      getMyUrlphoto(url:string,id:number){
  console.log(this.hrefUrl);
  this.hrefUrl = url.replace('.html','').concat('/1/'+id+'.html');
  return this.hrefUrl;
  }

}    
   