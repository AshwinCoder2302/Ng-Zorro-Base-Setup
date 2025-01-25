import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class RestEndpoints {

    public BASE_URL = environment.local?environment.localBaseURL:environment.serverBaseURL;

    public LOGIN = this.BASE_URL + '/auth/login';

    public SIGN_UP = this.BASE_URL + '/auth/signup'

    public CREATE_USER = this.BASE_URL + '/users'

    public UPDATE_USER = this.BASE_URL + '/users'

    public GET_USER_PROFILE = this.BASE_URL + '/users/profile'

    public GET_USERS = this.BASE_URL + '/users'

    public DELETE_USER = this.BASE_URL + '/users'

    public GET_CATEGORY = this.BASE_URL + '/category'

    public GET_PRODUCT = this.BASE_URL + '/product'

    

}
