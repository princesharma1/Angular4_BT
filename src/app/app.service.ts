import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {

 constructor( private _https:Http){}
    getjsonData(url:string){
        return this._https.get(url).map((res:Response) => res.json());
    }

}

