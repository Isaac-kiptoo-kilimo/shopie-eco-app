import { TestBed, inject } from '@angular/core/testing';
// import { expect as expectJasmine } from 'jasmine';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { User, LoginResponse, UserDetails } from '../interfaces/user';
import { expect } from 'chai';

describe('AuthService', () => {
  let authservice: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    authservice = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController) as any;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

it('should register a user', () => {
  const mockUser: User = {
    userID: '',
    fullName: '',
    email: '',
    password: '',
    role: '',
    profileImage: ''
  };
  authservice.registerUser(mockUser);

   const req = httpTestingController.expectOne(
     'http://localhost:3500/users/register/'
   );
   expect(req.request.method).toEqual('POST');

  expect(req.request.method).toEqual('POST');
  req.flush({
  });
});

  it('should login a user', () => {
    const mockUser: User = {
      userID: '',
      fullName: '',
      email: '',
      password: '',
      role: '',
      profileImage: ''
    };
    const mockResponse: LoginResponse = {
      token: 'mockToken',
      user: undefined,
      userID: ''
    };

    authservice.login(mockUser).subscribe((result) => {
      expect(result.token).toBeTruthy('mockToken');
    });

    const req = httpTestingController.expectOne(`${authservice.apiUrl}/login/`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });

  it('should get user details', () => {
    authservice.getUserDetails().subscribe((userDetails: UserDetails[]) => {});

    const req = httpTestingController.expectOne(
      `${authservice.apiUrl}/userDetails/`
    );
    expect(req.request.method).toEqual('GET');
    req.flush([{}]);
  });

  it('should check if user is logged in', () => {
    localStorage.setItem('token', 'mockToken');

    const isLoggedIn = authservice.isLoggedIn();
    expect(isLoggedIn).toBeTruthy(true);
  });
});
