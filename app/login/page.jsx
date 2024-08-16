"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidHide , BiSolidShow} from "react-icons/bi";

const LogIn = () => {

    const [showPass,setShowPass] = useState(false);
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if(!email || !password){
            setError("Please enter all information")
            return;
        }

        try {
           const res = await signIn("credentials", {
            email, password, redirect:false,
           }) 

           if(res.error){
            setError("Email/password combination error.")
            return;
           }

           router.push("/dashboard")

        } catch (error) {
            console.log(error)
            setError("Failed to log in, try again.")
        }
    }

    return ( 
        <div className=" grid place-items-center min-h-screen">
            <div className=" max-w-[424px] w-full">
                <div className=" text-center">
                    <h1 className=" text-4xl font-medium">Log in</h1>
                    <p className=" text-base mt-1">Don’t have an ccount? 
                    <Link href={"/signup"} className=" font-bold underline"> Sign up</Link>
                    </p>
                    <button className=" flex items-center mx-auto gap-4 bg-white border-[1px] border-tcolor rounded-[40px] px-20 py-3 my-10">
                        <Image
                            src={"/images/google.png"}
                            width={24}
                            height={24}
                            quality={100}
                            priority={true}
                            alt="Google icon"
                        />
                        Log in with Google
                    </button>
                </div>
                    <p className=" text-tcolor mb-4 flex items-center gap-5">
                        <span className=" content-[''] flex-[1_1_auto] border-t-[1px] border-tcolor/30"></span>
                            OR
                        <span className=" content-[''] flex-[1_1_auto] border-t-[1px] border-tcolor/30"></span>
                    </p>

                <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" className="px-4 py-3 rounded-[12px] border-[1px] border-tcolor" required onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="pass" className=" flex items-center justify-between pr-2">Your password
                        <div className=" flex items-center gap-1 text-sm cursor-pointer select-none" onClick={() => setShowPass(!showPass)}>
                            {showPass ? <BiSolidShow size={22}/> : <BiSolidHide size={22}/>}
                            {showPass ? "Hide" : "Show"}
                        </div>
                    </label>
                    <input type={showPass ? 'text' : 'password'} name="password" className="px-4 py-3 rounded-[12px] border-[1px] border-tcolor" required onChange={(e) => setPassword(e.target.value)}/>
                    {error && <div className=" bg-red-300 text-red-900 text-sm px-2 py-4">
                        <p className="max-w-[424px]">{error}</p>
                    </div>}
                    <button className=" text-xl rounded-[40px] bg-tcolor text-white py-4 mt-4">Log in</button>
                </form>
            </div>
        </div>
     );
}
 
export default LogIn;