import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers:[AppService]  
})
export class SectionComponent implements OnInit {
jsonApiData:any;
sectionSefTitle:string;
sectionTitle:string;
id:string;
hrefUrl:string;
btsectiondata:any[];
constructor(private _sectionService: AppService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = this.route.snapshot.params['id']; 
    this.sectionTitle = this.route.snapshot.params['sectionTitle'];
    this.sectionSefTitle = this.route.snapshot.params['sectionSefTitle']; 
    console.log('Section ID '+ this.id);
    this.jsonApiData = 'http://localhost:8080/JWebS2/rest/latest/section1/json/'+this.id;       
    this._sectionService.getjsonData(this.jsonApiData).subscribe(data => this.btsectiondata = data);    
  }) 
  }   
getMyUrl(url:string,id:number){
    console.log(this.hrefUrl);
    this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
    return url.replace('.html','').concat('-'+id+'.html');
    }
}
                    