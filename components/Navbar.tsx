"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaPinterest, FaSearch, FaBell } from 'react-icons/fa'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import Vimg from '@/public/next.svg'
import Image from 'next/image'
import { getFirestore } from "firebase/firestore"
import app from "../app/Shared/firebaseConfig.js"
import { setDoc, doc } from "firebase/firestore"
import { useRouter } from 'next/navigation.js'


const Navbar = () => {

    const { data: session } = useSession()
    // https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=1
    const db = getFirestore(app)

    useEffect(() => {
        saveUserInfo()
    }, [session])

    const router = useRouter()

    async function saveUserInfo() {
        if (session?.user) {
            await setDoc(doc(db, "user", session?.user?.email!), {
                userName: session?.user?.name,
                email: session?.user?.email,
                userImage: session?.user?.image
            });
        }
    }

    console.log(session)

    return (
        <nav className='flex gap-3 py-5 items-center'>

            <FaPinterest className="text-4xl text-red-600"></FaPinterest>

            <div className='hidden md:flex'>
                <Link href="/" className='bg-black text-white font-semibold px-4 py-2 rounded-full'>Home</Link>
                <button className='px-4 py-2' >Create</button>
            </div>

            <div className=' w-40 lg:w-full bg-gray-100 px-4 py-3 flex gap-3 rounded-full items-center '>
                <FaSearch className="text-gray-500 "></FaSearch>
                <input type="text" placeholder='Search' className='w-[5rem] lg:w-full bg-gray-100 outline-none' />
            </div>

            <FaBell className="text-5xl text-gray-500 p-3"></FaBell>
            <BsFillChatLeftDotsFill className="text-5xl p-3 text-gray-500"></BsFillChatLeftDotsFill>
            {/* <div className='bg-teal-100 p-5 rounded-full'></div> */}
            {session?.user
                ?
                <Image
                    onClick={() => router.push(`/${session?.user?.email}`)}
                    className=" rounded-full" src={`${session?.user?.image}`} alt='image' width={50} height={50}></Image>
                :
                <button onClick={() => signIn()}>Sign in</button>
            }
            <button onClick={() => signOut()}>Sign Out</button>
        </nav>
    )
}

export default Navbar