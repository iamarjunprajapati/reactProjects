import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     const data = fetch("https://api.github.com/users/iamarjunprajapati")
    //         .then(respoonse => respoonse.json())
    //         .then((result) => {
    //             console.log(result);
    //             setData(result);
    //         });
    // }, []);

    return (
        <>
            <div className='flex bg-gray-700'>
                <img src={data.avatar_url} alt="" />
                <div className='text-white text-2xl flex flex-col justify-center items-center w-full'>
                    Followers: {data.followers}
                    <div className='mt-5 flex justify-center p-5'>
                        {data.bio}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/iamarjunprajapati");
    return response.json();
}