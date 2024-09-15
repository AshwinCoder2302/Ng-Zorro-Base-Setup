import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class RestEndpoints {

    public BASE_URL = environment.local?environment.localBaseURL:environment.serverBaseURL;

    public AUTHENTICATION = this.BASE_URL + '/v1/auth/authenticate';

    

}
