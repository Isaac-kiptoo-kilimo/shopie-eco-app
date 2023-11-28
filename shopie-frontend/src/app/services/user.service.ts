import { Injectable } from '@angular/core';
import { User, UserDetails, updatedUserData } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl='http://localhost:3500/users/checkUserDetails/'
  userID!:UserDetails;
   

  constructor(private http: HttpClient, private authService:AuthService
    ) { }



getUsers(): Observable<User[]> {
  const token = localStorage.getItem('token') as string;
  return this.http.get<User[]>('http://localhost:3500/users/all', {
    headers: {
      'Content-type': 'application/json',
      'token': token
    },
  });
}


  checkDetails(): Observable<string> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(map(data => data.info.role));
  }



updateUserById(updatedUser:updatedUserData): Observable<any> {
  return this.authService.getUserDetails().pipe(
    switchMap((user) => {
      console.log(user.userID);
      let userID=user.userID
      const token = localStorage.getItem('token') || '';
      console.log(token);

      const url = `http://localhost:3500/users/update/${userID}`;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token,
      });

      return this.http.put(url, updatedUser, { headers });
    })
  );
}

deleteUser(userID: string): Observable<any> {
  return this.http.delete(`http://localhost:3500/users/delete/${userID}`)
 
}
}
