import { NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';
import { type VerifyErrors } from 'jsonwebtoken';


export async function GET(request: Request) {

    try {

        const authorization = request.headers.get('authorization');

        if (!authorization) {

            return NextResponse.json({
                error: "Authorization header is missing"
            });

        }

        const token = authorization?.split(' ')[1];

        const data = jwt.verify(token, process.env.SECRET_WORD as string);

        return NextResponse.json({
            message: "working",
        });

    } catch (error: VerifyErrors | any) {

        return NextResponse.json({
            message: error.message,
        });
    }


}