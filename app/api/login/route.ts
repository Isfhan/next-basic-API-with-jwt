import { NextResponse } from 'next/server';
import * as jwt  from 'jsonwebtoken';

export async function POST(request: Request) {

    const { email, password } = await request.json();
    
   
    const guestList = [
        {
            email: "ali@gmail.com",
            password: "123456",
            type:"normal person"
        },
        {
            email: "isfhan@gmail.com",
            password: "123456abc",
            type:"vip"
        },
        {
            email: "saba@gmail.com",
            password: "1234abcd",
            type:"vip"
        }
    ];

    const secretWord = process.env.SECRET_WORD;

    const guest = guestList.find((g) => g.email == email && g.password == password);

    if (guest) {

        const token = jwt.sign(guest,secretWord as string,{
            expiresIn:'10h'
        });

        return NextResponse.json({
            message: "Sir ap vip hy ap tu jaye",
            token
        }); 

    } else {

        return NextResponse.json({
            message: "sorry you are not on the list"
        });

    }


}