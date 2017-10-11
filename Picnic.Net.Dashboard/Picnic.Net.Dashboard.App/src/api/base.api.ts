import 'rxjs';
import 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export abstract class BaseHttpService
{
    private baseUrl = "www.google.com";
    constructor(private HTTP:Http) { }

    protected get(url:String){
        return new Promise((resolve,reject) => {
            this.HTTP.get(this.baseUrl+url)
            .map((response: Response) => response.json().data)
            .catch((err: any, source:Observable<any>)=>new Observable(
                () =>{
                    console.log("Base Error");
                    reject();
                }
            ))
            .subscribe(res => resolve(res.json()));
        });
    }

    protected post(){

    }
}