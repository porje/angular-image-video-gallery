import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  preventNormal(event:MouseEvent, image:any)
  {
    if(!image.prevented)
    {
      event.preventDefault();
      //console.log(image.getAttribute("href"))
      image.setAttribute("href","/videos")
      image.prevented = true;
    }    
  }
}
