import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        
        try {
          const {email, password} = credentials;

          await connectMongoDB()
          const userInfo = await User.findOne({email : email})

          if(!userInfo) {
            return null
          }

          const checkPassword = await bcrypt.compare(password, userInfo.password);

          if(checkPassword)
            return userInfo 
          else 
            return null
        } catch (error) {
          return null
        }

      }
    })
  ],
  session:{
    strategy:"jwt"
  },
  secret:process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:"/login"
  }
  
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};