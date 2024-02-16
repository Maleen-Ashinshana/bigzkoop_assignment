import postImg from "../assets/2528051_business_envelope_letter_mail_message_icon__1_-removebg-preview.png";
import albumIMG from "../assets/3643766_album_image_landscape_photo_photos_icon.png";
import {useSelector} from "react-redux"
import {useEffect, useState} from "react";
import Post from "../compenents/post";
import Albums from "../compenents/album";

function Main() {

    useEffect(() => {
        setShowPostPane(true);
        setShowAlbumPane(false)
    }, []);

    const posts = useSelector((state) => state.posts)
    const albums = useSelector((state) => state.albums)

    const [showAlbumPane, setShowAlbumPane] = useState(true);
    const [showPostPane, setShowPostPane] = useState(true);


    function handleAlbumPane() {
        setShowAlbumPane(true);
        setShowPostPane(false);
        console.log("OK")
    }

    function handlePostPane() {
        setShowPostPane(true);
        setShowAlbumPane(false)
    }

    return <section className={'w-full h-screen bg-[#f9fafc]'}>
        <div className={'w-full h-12 bg-[#0fa2c4] fixed z-50 '}>
            <p className={'text-[25px] text-white font-bold flex justify-center items-center relative top-1'}>BIGZKOOP</p>
        </div>
        <div className={'w-[150px] h-[93.5%] bg-[#044153] fixed z-50  top-[48px]'}>
            <div className={'w-full h-12  relative top-4 hover:bg-[#105669] cursor-pointer'} onClick={handlePostPane}>
                <img src={postImg} className={'w-8 relative left-3 inline-block'}/>
                <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Post</p>
            </div>

            <div className={'w-full h-12  relative top-4 hover:bg-[#105669] cursor-pointer'} onClick={handleAlbumPane}>
                <img src={albumIMG} className={'w-8 relative left-3 inline-block'}/>
                <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Albums</p>
            </div>

           {/* <div>
                {showAlbumPage ? (
                    <div className={'w-full h-12 relative top-4 hover:bg-[#105669] cursor-pointer'} onClick={handleAlbumPage}>
                        <img src={albumIMG} className={'w-8 relative left-3 inline-block'}/>
                        <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Albums</p>
                    </div>
                ) : (
                    <div className="w-full h-full">
                         Content for the new div to be loaded
                         For example:
                        <div>
                            New content to be loaded here...
                        </div>
                    </div>
                )}
            </div>*/}

        </div>
        {/*--------------------------------------------------------------------------------------------------*/}



        {/*{
            showAlbumPane && (
                <div className={'w-full h-full bg-black'}>

                </div>
            )
        }*/}

        {
            showPostPane && (
                <div className={'w-[90.2%] h-full absolute top-12 left-[150px] bg-[#f9fafc]'}>
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
        {/*<div className={'w-[90.2%] h-full absolute top-12 left-[150px] bg-[#f9fafc] border-2 border-black '}>
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
                    -------------------MSG BOX-----------------------------------------

                    {posts.map((post) => (
                            <Post title={post.id} body={post.body}/>

                        )
                    )}
                </div>*/}

        {
            showAlbumPane && (
                <div className={'w-[90.2%] h-[93.3%] absolute top-12 left-[150px] bg-[#f9fafc] '}>
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

                    {/*------------------album card--------------------------------*/}

                    {
                        albums.map((album) => (
                            <Albums title={album.title} />

                        )
                    )}



                    {/*<div className={'w-[400px] h-36 bg-white rounded-[10px] shadow-2xl ml-10 mt-10 cursor-pointer inline-block'}>
                        <div className={'w-full h-10 border-[1px] border-b-black rounded-[10px] '}>
                            <p className={'text-[20px] font-bold relative left-5 top-2 inline-block'}>Author :</p>
                            <p className={'inline-block text-[20px] relative top-2 left-10'}>Maleen</p>

                        </div>
                        <p className={'text-[25px] font-bold text-amber-800 text-center relative top-5'}>Title</p>

                    </div>*/}

                </div>
            )
        }

    </section>
}
export default Main;