import {useState, useEffect} from 'react'

function YoutubeFunctionality() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [youtubeVideos, setVideos] = useState([]);
    useEffect(()=>{
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=${API_KEY}`
        ).then((response)=>response.json()).then((data)=> {
            const youtubeVideosdata = data.items;
            setVideos(youtubeVideosdata);
        });
    },[])
    console.log(youtubeVideos);
  return (
    <section className='youtube'>
        <div className='text-center headY'>
            <h2>Latest videos</h2>
        </div>
        <div className='container'>
            <div className='row justify-content-center'>
                {youtubeVideos?.map((singleVideo)=> {
                    let vidId=singleVideo.id.videoId;
                    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                    let videoWrapper = (
                        <div key={vidId} className='single-video col-12 col-md-6 col-lg-4'>
                            <div className='snip'>
                                <a href={vidLink} target='_blank'>
                                    <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                                </a>
                            </div>
                            <div className='title'>
                                <a href={vidLink} target='_blank'>
                                    <div>{singleVideo.snippet.title}</div>
                                </a>
                            </div>
                            <div className='descr'>
                                <p>{singleVideo.snippet.description}</p>
                            </div>
                        </div>
                    );
                    return videoWrapper;
                })}
            </div>
        </div>

    </section>
  )
}

export default YoutubeFunctionality;