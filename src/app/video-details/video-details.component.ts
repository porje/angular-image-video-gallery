import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit,OnDestroy {
  private routeSub : any;
  slug: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['slug'];
    })
    // this.route.params.subscribe(function(params){
    //   console.log(params)
    // })
  }
  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }
}
