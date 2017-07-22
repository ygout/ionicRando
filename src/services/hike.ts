import { Injectable } from '@angular/core';
import{ Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HikeService {
    url: string = '../assets/api/hikes.json';

    constructor(private http:Http){

    }

    getHikes(){
        this.http.get(this.url)
                    .map(response => response.json());
    }
}