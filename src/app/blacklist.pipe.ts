import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var word:string=""
    if(word=="stupid" || word=="idiot"){
      return "Blacklisted Word"; 
    }
    else{
      return "Ok";
    }
    return word; 
  }

}
