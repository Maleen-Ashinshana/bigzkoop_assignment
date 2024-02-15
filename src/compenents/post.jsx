import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";
import {useEffect, useState} from "react";


function Post(prop) {
    /*const [showPost,setPost]*/
    const [showPost, setShowPost] = useState(true)

    useEffect(() => {
        setShowPost(false)
    }, []);
    function handlePost() {
        setShowPost(true);


    }

    return (
        <div
            className={'w-[30%] h-[270px] bg-white rounded-[10px] shadow-2xl cursor-pointer inline-block ml-7 mt-4 overflow-x-hidden  '} id={'postPane'}
            onClick={handlePost}>
            {
                showPost && (
                    <div className={'w-32 h-32 bg-amber-900 absolute'}>

                    </div>
                )
            }
            <div
                className={'w-full h-16 border-[1px] border-b-black border-l-transparent border-r-transparent border-t-transparent rounded-[10px]'}>
                <img src={userIMG} className={'w-12 relative m-2 inline-block'}/>
                <p className={'inline-block ml-2 text-[#7aa6ac] text-[23px] font-bold relative top-1'}>{prop.id}
                    {/*Maleen*/}
                </p>
            </div>
            <div className={'w-[96%] h-44 rounded-[10px] shadow-md relative left-0 right-0 m-auto mt-4'}>
                <p className={'text-[18px] m-2'}>{prop.body}
                    {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias autem consequuntur
                    dolorem dolores error eveniet inventore ipsa, iste iure, labore natus, obcaecati quaerat
                    quisquam repudiandae sequi tempora ullam*/}!</p>

            </div>

        </div>


)


    /*{/!*<p className={'text-[25px] font-bold text-amber-800 relative left-5 top-5 overflow-auto'}>{prop.title}</p>

    <div
        className={'w-[95%] h-[500px] relative top-10 left-0 right-0 m-auto  rounded-[10px] shadow-2xl'}>

        <div className={'w-full h-[35%] border-2 border-black rounded-[10px]'}>
            <p className={'text-[17px] relative left-0'}>
                {prop.description}
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquam, commodi minima nemo neque
                odio optio porro praesentium rem sequi tempora?
            </p>
        </div>
        ---------------Comment---------------------------------------------
        <div
            className={'w-full h-[60%] border-2 border-amber-500 relative top-5 rounded-[10px] overflow-auto overflow-x-hidden'}>
            <p className={'text-[20px] text-amber-800 font-bold relative left-3 top-3'}>Comment...</p>
            <div
                className={'w-[80%] h-24 relative left-0 right-0 m-auto top-3 rounded-[10px] shadow-2xl'}>
                <img src={userIMG} className={'w-7 relative m-1 inline-block'}/>
                <p className={'inline-block relative left-3 font-bold'}>{prop.userId}
                    user name by commented</p>
                <div className={'w-full h-[58px]'}>
                    <p className={'mt-1 ml-2'}>
                        {prop.body}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad assumenda
                        consequatur fugit, ipsum magnam nobis quis quod ut veritatis! Explicabo?</p>

                </div>

            </div>
            <div
                className={'w-[80%] h-24 relative left-0 right-0  m-auto top-10 rounded-[10px] shadow-2xl '}>
                <img src={userIMG} className={'w-7 relative m-1 inline-block'}/>
                <p className={'inline-block relative left-3 font-bold'}>user name by commented</p>
                <div className={'w-full h-[58px]'}>
                    <p className={'mt-1 ml-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad assumenda
                        consequatur fugit, ipsum magnam nobis quis quod ut veritatis! Explicabo?</p>

                </div>

            </div>


        </div>

    </div>*!/}
*/

}

export default Post;
