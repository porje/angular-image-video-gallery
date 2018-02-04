import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  todayDate;
  videoList = [
    {
      name: "item1",
      slug: "item-1",
      embed: `9AaRJ8COXdM`,
    },
    {
      name: "item2",
      slug: "item-2",
      embed: `9AaRJ8COXdM`,
    },
    {
      name: "item3",
      slug: "item-3",
      embed: null,
    }
  ]
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.todayDate = new Date();
  }
  getEmbedUrl(item)
  {
    //return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item.embed);
    return 'https://www.youtube.com/embed/'+item.embed;
  }
}
