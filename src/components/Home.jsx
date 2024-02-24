import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardDefault } from './Card'

function Home() {
    const [videos, setVideos] = useState([])
    const getAllVideos = async () => {
        let response = await axios.get("/api/v1/videos")
            .then((response) => { setVideos(response.data.data), console.log(response.data.data) })
            // .then((response) => { console.log(values.data))}
            .catch((error) => console.log(error))
        // console.log("response", response);
    }
    useEffect(() => {
        getAllVideos();

    }, [])
    return (
        <>
            <div>Home</div>
            {console.log("videos", videos)}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map((video) => {
                    return <CardDefault title={video.title} thumbnail={video.thumbnail} key={video._id} />;
                    // <div className='w-50 border-solid border-red-50' >
                    //     <h2>{video.title}</h2>
                    //     <h3>{video.thumbnail}</h3>
                    // </div>
                })}
            </div>
        </>

    )
}

export default Home