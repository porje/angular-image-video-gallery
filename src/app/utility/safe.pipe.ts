import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { validateConfig } from '@angular/router/src/config';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer : DomSanitizer){}
  transform(value: any, args?: any): any {
    if(value){
      return this.sanitizer.bypassSecurityTrustResourceUrl(value) ;
    }
    
  }

}
