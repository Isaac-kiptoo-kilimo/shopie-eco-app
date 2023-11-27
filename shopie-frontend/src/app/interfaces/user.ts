export interface User {
    userID: string;
    fullName: string;
    email: string;
    password: string;
    role: string;
}


  export interface LoginResponse {
    user: User | undefined;
    // userID(userID: any): unknown;
    token: string;
    userID:string
    // Add other properties if needed
  }

  export interface userLogin {
    email: string,
    password : string
}


export interface UserDetails {
  userID:string;
  fullName: string;
  email: string;
  role:string;
  // Add other user details as needed
}

export interface updatedUserData {
  userID:string,
  fullName: string,
  email: string,
};
