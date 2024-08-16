import { NextResponse } from "next/server";

export async function POST(request) {
    
    try {
        const {name, email, password} = await request.json();
        
        if(!name || !email || !password)
            return NextResponse.json({message : "Name, email and password are required!"}, {status:200})

        console.log("Name : ", name)
        console.log("Email : ", email)
        console.log("Password : ", password)

        /* Connect with MongoDB database and register user*/

        return NextResponse.json({message : "User created"}, {status:200})

    } catch (error) {
        return NextResponse.json({message : "An error accrued during request."}, {status:500})
    }

}