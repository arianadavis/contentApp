import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../environments/environment'; 
import { Observable, fromPromise } from 'rxjs/Observable';
import * as marked from 'marked';

@Injectable()
export class ContentfulService {

    private client = contentful.createClient({
        space: environment.contentful.spaceId, 
        accessToken: environment.contentful.token
    })

    constructor() {}

    //console logs a response for debugging 
    logContent(contentId) {
        this.client.getEntry(contentId)
          .then((entry) => console.log(entry))
    }
  
    // retrieves content mapped to its data fields
    getContent(contentId) {
      const promise = this.client.getEntry(contentId)
      return Observable = fromPromise(promise).map(entry => entry.fields)
    }

    markdowntoHtml(md: string) {
      return marked(md)
    }



}
