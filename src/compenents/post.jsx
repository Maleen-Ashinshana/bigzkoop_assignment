import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";
import closeIMG from "../assets/4115230_cancel_close_delete_icon.png";
import commentIMG from "../assets/8664929_comment_chat_message_icon (1).png";
import {useState} from "react";
import Comment from "./comment.jsx";
import {useSelector} from "react-redux";

function Post(prop) {
    const comments = useSelector((state) => state.comments)
    const [showDiv, setShowDiv] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleDivClick = () => {
        setShowDiv(!showDiv);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };


    return (
        <div className={'inline-block ml-7 w-[30%] h-[270px]'}>

            <div
                className={'bg-white rounded-[10px] shadow-2xl cursor-pointer inline-block ml-7 mt-4 overflow-x-hidden'}
                onClick={handleDivClick}
            >
                <div
                    className={'w-full h-16 border-[1px] border-b-black border-l-transparent border-r-transparent border-t-transparent rounded-[10px]'}>
                    <img src={userIMG} className={'w-12 relative m-2 inline-block'} alt="User"/>
                    <p className={'inline-block ml-2 text-[#7aa6ac] text-[23px] font-bold relative top-1'}>{prop.id}</p>
                </div>
                <div className={'w-[96%] h-44 rounded-[10px] shadow-md relative left-0 right-0 m-auto mt-4'}>
                    <p className={'text-[18px] m-2'}>{prop.body}</p>
                </div>
            </div>
            {/*----------------------------------------------------------------------*/}
            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#f2f3f5] w-[90%] h-[90%] rounded-lg p-8 z-50 overflow-y-hidden">
                        {/*<button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg"></button>*/}
                        <div className={'w-10 h-24 bg-transparent absolute right-5 top-1'} onClick={closeModal}>
                            <img src={closeIMG}/>
                        </div>
                        <div
                            className={'w-[65%] h-[105%] bg-white shadow-xl relative top-[-3%] rounded-[10px] overflow-auto  overflow-x-hidden'}>
                            <p className={'text-amber-800 text-2xl font-bold relative left-5 top-3 '}>
                                {prop.title}
                            </p>

                            <div
                                className={'w-[95%] h-40 relative left-0 right-0 top-5 m-auto  rounded-[10px] '}>
                                <p className={'text-center text-[20px] font-mono'}>
                                    {prop.body}
                                </p>

                            </div>
                            {/*--------------------Comments-----------------------------------*/}
                            <div
                                className={'w-[95%] h-[380px]  relative left-0 right-0 mt-10 m-auto rounded-[10px]  overflow-auto overflow-x-hidden shadow-2xl'}>
                                <h1 className={'text-[#830c0c] text-[25px] font-bold inline-block'}>Comment</h1>
                                <img src={commentIMG} className={'inline-block w-8 relative left-3 top-[-5px]'}/>
                                {comments.map((comment) => (
                                        <Comment name={comment.name} body={comment.body}/>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Post;
