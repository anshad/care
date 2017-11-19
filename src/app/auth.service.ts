import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/**
 * Auth service
 */
@Injectable()
export class AuthService {
    userRef: AngularFireList<any>;

    /**
     * Construct service
     */
    constructor(private db: AngularFireDatabase) {
        this.userRef = this.db.list('users');
    }

    /**
     * Update user info
     * @param key user key
     * @param name user's full name
     * @param mobile mobile
     */
    updateUser(key: string, name: string, mobile: string) {
        this.userRef.update(key, {
            name: name,
            mobile: mobile
        });
    }
}
