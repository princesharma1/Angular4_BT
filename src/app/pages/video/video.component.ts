import { Component, OnInit, ChangeDetectionStrategy,OnChanges } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { AppService } from '../../app.service';
declare var jwplayer: any;   
declare var data11: any;   
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[AppService]  
})
export class VideoComponent implements OnInit {

title="Video";
jsonApiData:any;
sectionSefTitle:string;
sectionTitle:string;
id:string;
stringUrl:any;
hrefUrl:string;

public videoTitle:string='';
public externalVideoUrl;
public videoKickerImage:string='';
public videoLargeKickerImage:string='';

btvideodetail:any[];
data11:any;
videodata: any = {};
filepath: any;
filebitrates: string = ''
videoimage: string = ''
public videoUrl: string = 'assets/videos/egghead-create-a-list-component-in-vuejs.mp4'
public seek: number = 0;

constructor(private _videoService: AppService,private route:ActivatedRoute,private router: Router) { 
let currentUrl =  this.router.url;
  console.log("CCCCCCCC: " + currentUrl);
  this.stringUrl = currentUrl.split("/");
this.id = this.stringUrl[this.stringUrl.length - 1].substring(0,this.stringUrl[this.stringUrl.length - 1].indexOf("."));

}


  ngOnInit() {
    this.route.params.subscribe(params => {
     this.sectionTitle = this.route.snapshot.params['sectionTitle'];
    console.log('Section ID '+ this.id);
    this.jsonApiData = 'http://localhost:8080/JWebS2/rest/video/json/'+this.id;   
    this._videoService.getjsonData(this.jsonApiData).subscribe(data => {
      this.btvideodetail = data
      console.log("data: " + this.btvideodetail[0].externalVideoUrl);
    let filepath = this.btvideodetail[0].externalVideoUrl;
    //this.loadplayerjw(filepath);  
                 this.storeValue(data[0].externalVideoUrl,data[0].videoLargeKickerImage,data[0].videoKickerImage,data[0].videoTitle)   
    }
    );    
    
 
 //this.loadplayerjw();
  

  }) 



  // if (this.videodata.mainData[0]['videoimage'] !== null) {
  //     this.videoimage = "http://media2.intoday.in/ideaplex/cropit-images/" + this.videodata.mainData[0].videoimage
  //   }
  //   else if (this.videodata.mainData[0]['header_image'] !== '') {
  //     this.videoimage = "http://media2.intoday.in/ideaplex/video/big/" + this.videodata.mainData[0].header_image
  //   }
  //   this.filpath = this.videodata.videos[0].file_path.replace(/\_\d+.mp4/, "_,");
  //   this.videodata.videos.forEach(element => {
  //     this.filebitrates += element.bitrate + ','
  //     console.log(element);
  //     console.log(this.filebitrates);
  //   });
  //   this.filpath += this.filebitrates + '.mp4.csmil/master.m3u8'

  


//this.filepath = "http://videodeliverys3.s3.amazonaws.com/indiatoday/video/July2014/10_budget_2014_part1.mp4";

}

  ngAfterViewInit(){
  console.log("After View Init");
  //this.filepath = (this.btvideodetail)[0].externalVideoUrl;  
  }

  getMyUrl(url:string,id:number){
  console.log(this.hrefUrl);
  this.hrefUrl = url.replace('.html','').concat('-'+id+'.html');
  return url.replace('.html','').concat('-'+id+'.html');
  }
  
  //storeValue(externalVideoUrl:string){
     storeValue(externalVideoUrl:string,videoLargeKickerImage:string,videoKickerImage:string,videoTitle:string){
      this.externalVideoUrl = externalVideoUrl;    
      this.videoLargeKickerImage = videoLargeKickerImage;
      this.videoKickerImage = videoKickerImage;
      this.videoTitle = videoTitle;
      if (this.videoKickerImage !== null) {
        this.videoimage = "http://media2.intoday.in/btmt/images/stories/" + this.videoKickerImage
      }
      else if (this.videoLargeKickerImage !== '') {
        this.videoimage = "http://media2.intoday.in/btmt/images/stories/" + this.videoLargeKickerImage
      } 
      console.log("DDDD" + this.videoimage);
      this.loadplayerjw();
    }


    
  loadplayerjw() {
  jwplayer.key = "XRiQ7SgnSBR9/smfQ9+YZsn3S7EMc/Am440mYg==";
  jwplayer('videoplayer').setup({
    playlist: [{
      "image":this.videoimage,
        "title":this.videoTitle,
      sources: [
        {  
        file:this.externalVideoUrl,
        
        //  file:"http://videodeliverys3.s3.amazonaws.com/indiatoday/video/July2014/10_budget_2014_part1.mp4"
           }
      ]
    }],
    width: "100%",
    primary: "html5",
    autostart: false,
    aspectratio: "4:3",
    "stretching": "exactfit",
    androidhls: "true",
    fallback: "false",
    
    skin: {
    name: 'custom',
    url: 'https://smedia2.intoday.in/intoday/jwplayer/build.css'
    },
    hlslabels: { "156": "lowest", "410": "low", "512": "medium", "996": "Highest" }
  });
  }


}
