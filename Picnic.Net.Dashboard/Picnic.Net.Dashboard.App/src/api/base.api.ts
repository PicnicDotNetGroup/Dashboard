import 'rxjs';
import 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from '../config.dev';

export abstract class BaseHttpService
{
    constructor(private HTTP:Http) { }

    protected get(url:String){
      return new Promise((resolve, reject) => {
        this.HTTP.get(config.url + url)
          .map(response=> response.json())
          .catch((err: any, source: Observable<any>) => new Observable(
            () => {
              console.log("Base Error");
              reject();
            }
          ))
          .subscribe(result => {
            resolve(result);
            });
        });
    }

    protected post(){

    }
}
