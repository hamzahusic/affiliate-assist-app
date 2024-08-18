import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; 

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        
        if (!name || !email || !password) {
            return NextResponse.json({ message: "Name, email, and password are required!" }, { status: 200 });
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Connect with MongoDB database and register user
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        await connectMongoDB();

        const isUser = await User.findOne({email : email})

        if(isUser){
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }

        const userInfo = await User.create({ name : name, email : email, password: hashedPassword, credits : 0});

        return NextResponse.json({ message: "User created" , user : userInfo}, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "An error occurred during the request." }, { status: 500 });
    }
}