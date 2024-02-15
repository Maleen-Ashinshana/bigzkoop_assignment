import postImg from "../assets/2528051_business_envelope_letter_mail_message_icon__1_-removebg-preview.png";
/*import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";
import person from "../assets/8664925_circle_user_person_icon.png";*/

import { useSelector} from "react-redux"
import Post from "../compenents/post";


function Main() {
    const posts = useSelector((state) => state.posts)


    return <section className={'w-full h-screen bg-[#f9fafc]'}>
        <div className={'w-full h-12 bg-[#0fa2c4] fixed z-50 '}>
            <p className={'text-[25px] text-white font-bold flex justify-center items-center relative top-1'}>BIGZKOOP</p>
        </div>
        <div className={'w-[150px] h-[93.5%] bg-[#044153] fixed z-50  top-[48px]'}>
            <div className={'w-full h-12  relative top-4 hover:bg-[#105669] cursor-pointer'}>
                <img src={postImg} className={'w-8 relative left-3 inline-block'}/>
                <p className={'inline-block text-[#D2D7E6] text-[25px] relative top-1 left-6'}>Post</p>
                {/*<p className={'text-white text-[25px] flex items-center justify-center relative top-1'}>Post</p>*/}

            </div>
        </div>
        {/*--------------------------------------------------------------------------------------------------*/}
        <div className={'w-[90.2%] h-[694px] absolute top-12 left-[150px] bg-[#f9fafc]'}>
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
                        <Post title={post.id} body={post.body} />

                        )
                    )}


        </div>

    </section>

}

export default Main;