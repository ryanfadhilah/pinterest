"use client"
import React, { useEffect } from 'react'



const Profile = ({ params }: any) => {

    useEffect(() => {
        console.log(params.userId.replace('$40', '@'))
    }, [params])

    return (
        <div className='bg-teal-500'>Profile</div>
    )
}

export default Profile