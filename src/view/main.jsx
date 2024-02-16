import postImg from "../assets/2528051_business_envelope_letter_mail_message_icon__1_-removebg-preview.png";
import albumIMG from "../assets/3643766_album_image_landscape_photo_photos_icon.png";
import {useSelector} from "react-redux"
import Post from "../compenents/post";
import {useEffect, useState} from "react";

function Main() {

    useEffect(() => {
        setPostPane(true)
    }, []);

    const posts = useSelector((state) => state.posts)
    const comments = useSelector((state) => state.comments)

    const [albumPane, setAlbumPane] = useState(true)
    const [PostPane, setPostPane] = useState(true)

    function handleAlbumPage() {
        setAlbumPane(true);
        setPostPane(false)
        console.log("OK")

    }

    function handlePostPane() {
        setPostPane(true);
        setAlbumPane(false)
    }

    return <section className={'w-full h-screen bg-[#f9fafc]'}>
        <div className={'w-full h-12 bg-[#0fa2c4] fixed z-50 '}>
            <p className={'text-[25px] text-white font-bold flex justify-center items-center relative top-1'}>BIGZKOOP</p>
        </div>
        <div className={'w-[150px] h-[93.5%] bg-[#044153] fixed z-50  top-[48px]'} onClick={handlePostPane}>
            <div className={'w-full h-12  relative top-4 hover:bg-[#105669] cursor-pointer'}>
                <img src={postImg} className={'w-8 relative left-3 inline-block'}/>
                <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Post</p>
            </div>
            <div className={'w-full h-12  relative top-4 hover:bg-[#105669] cursor-pointer'} onClick={handleAlbumPage}>
                <img src={albumIMG} className={'w-8 relative left-3 inline-block'}/>
                <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Albums</p>
            </div>

        </div>
        {/*--------------------------------------------------------------------------------------------------*/}
        {
            PostPane && (
                <div className={'w-[90.2%] h-full absolute top-12 left-[150px] bg-[#f9fafc] '}>
                    <div className={'w-[90%] h-14 relative left-0 right-0 top-3 m-auto'}>
                        <input
                            className={'w-[600px] h-10 border-2 border-[#d2d7e6] outline-none rounded-[10px] text-center text-[20px] absolute left-0 right-0 top-0 bottom-0 m-auto'}
                            placeholder={'Input Name...'}/>
                        <button
                            className={'w-32 h-10 bg-[#0fa2c4] relative left-[75%] top-1 rounded-[10px] text-white text-[20px] font-bold'}
                            // onClick={handlePost}
                        >Search
                        </button>

                    </div>
                    {/*-------------------MSG BOX-----------------------------------------*/}

                    {posts.map((post) => (
                            <Post title={post.id} body={post.body}/>

                        )
                    )}
                </div>
            )
        }
        {
            albumPane && (
                <div className={'w-32 h-36 bg-black'}>

                </div>
            )
        }
    </section>
}
export default Main;