export interface User{
    userID:string;
    fullName: string;
    email: string;
    password: string;
    role: string;
}


export interface Product{
    productID: string;
    name: string;
    shortDescription: string;
    price: number;
    image: string;
}