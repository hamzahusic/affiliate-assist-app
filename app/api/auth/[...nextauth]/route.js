import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        return user;
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