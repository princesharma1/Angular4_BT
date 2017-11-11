import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
searchword:any;
contenttype="text";
  constructor(private elRef:ElementRef,private router: Router) { }

  ngOnInit() {
  }

   onKeyup(event){
    this.searchword = event.target.value;
    console.log(this.searchword);
  }
  searchPage(){
    var hamburger = this.elRef.nativeElement.querySelector('.hamburger');
    hamburger.classList.remove("change");
    var dropdown_nav_container = this.elRef.nativeElement.querySelector('.bt-dropdown_nav_container');
    dropdown_nav_container.classList.remove("displayToggle");
    this.router.navigate(['/search'], {
      queryParams:{
       'searchword':this.searchword,
       'contentType':this.contenttype
      }
    }
    );   



}
}
