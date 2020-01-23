import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Security } from '../shared/utils/security.util';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = environment.variables.api;
    
    constructor(private http: HttpClient) {
        
    }

    create(data: any) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data)
    }

    refreshToken() {
        return this.http.post(
            `${this.url}/accounts/refresh-token`, null, {headers: this.composeHeaders()}
        );
    }

    resetPassword(data: any) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data: any) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }

    /*
      *
      *
    */
    private composeHeaders() {
        const token = Security.getToken();

        // const headers = new HttpHeaders().set('x-access-token', token);
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return headers;
    }
}