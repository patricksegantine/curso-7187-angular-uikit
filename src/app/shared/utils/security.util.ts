import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

export class Security {
    private static userKey = environment.variables.userKey;
    private static tokenKey = environment.variables.tokenKey;

    public static set(user: Usuario, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem(this.userKey, btoa(data));
        localStorage.setItem(this.tokenKey, token);
    }

    public static getUser(): Usuario {
        const data = localStorage.getItem(this.userKey);
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static setUser(user: Usuario) {
        const data = JSON.stringify(user);
        localStorage.setItem(this.userKey, btoa(data));
    }

    public static getToken(): string {
        const data = localStorage.getItem(this.tokenKey);
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
    }
}