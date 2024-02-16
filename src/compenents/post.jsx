import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";
import closeIMG from "../assets/4115230_cancel_close_delete_icon.png";
import commentIMG from "../assets/8664929_comment_chat_message_icon (1).png";
import {useEffect, useState} from "react";

function Post(prop) {
    /*  useEffect(() => {
          /!*document.body.style.filter = 'blur(5px)';*!/
      }, []);

      const [showDiv, setShowDiv] = useState(false);

      const handleDivClick = () => {
          // Apply blur effect to the page
          setShowDiv(true);
          document.body.style.filter = 'blur(5px)';
          document.body.style.display='block';
      };*/

    const [showDiv, setShowDiv] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleDivClick = () => {
        setShowDiv(!showDiv);
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
    };


    return (
        <div className={'inline-block ml-7 w-[30%] h-[270px]'}>
            {/*{showDiv && (
                <div className='w-32 h-24 bg-blue-700 absolute z-50'>
                    Content of the blue div
                </div>
            )}*/}
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
            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#f2f3f5] w-[90%] h-[90%] rounded-lg p-8 z-50">
                        {/*<button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg"></button>*/}
                        <div className={'w-10 h-24 bg-transparent absolute right-5 top-1'} onClick={closeModal}>
                            <img src={closeIMG}/>
                        </div>
                        <div
                            className={'w-[65%] h-[105%] bg-white shadow-xl relative top-[-3%] rounded-[10px] overflow-auto '}>

                            <div
                                className={'w-[95%] h-44 relative left-0 right-0 top-5 m-auto  rounded-[10px] border-2 border-black'}>
                                <p className={'text-center text-[20px] font-mono'}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Ab cupiditate eos error eum
                                    hic illum magnam ratione recusandae sequi, soluta!</p>

                            </div>

                            <div
                                className={'w-[95%] h-[400px]  relative left-0 right-0 mt-10 m-auto rounded-[10px]'}>
                                <h1 className={'text-[#830c0c] text-[25px] font-bold inline-block'}>Comment</h1>
                                <img src={commentIMG} className={'inline-block w-8 relative left-3 top-[-5px]'}/>
                                <div
                                    className={'w-[90%] h-36 left-0 right-0  m-auto mt-4 bg-transparent rounded-[10px] shadow-2xl'}>
                                    <img src={userIMG} className={'w-9 relative left-4 top-3 inline-block'}/>
                                    <p className={'inline-block text-[#1e81b0] relative left-8 top-4 text-xl font-bold'}>
                                        Maleen</p>
                                    <div
                                        className={'w-[90%] h-[90px] relative left-0 right-0 top-4  m-auto'}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa
                                            dolores doloribus exercitationem iste optio quae quia ullam. Dolorem,
                                            qui.</p>

                                    </div>
                                </div>
                                <div
                                    className={'w-[90%] h-36 left-0 right-0  m-auto mt-4 bg-transparent rounded-[10px] shadow-2xl'}>
                                    <img src={userIMG} className={'w-9 relative left-4 top-3 inline-block'}/>
                                    <p className={'inline-block text-[#1e81b0] relative left-8 top-4 text-xl font-bold'}>Maleen</p>
                                    <div
                                        className={'w-[90%] h-[90px] relative left-0 right-0 top-4  m-auto'}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa
                                            dolores doloribus exercitationem iste optio quae quia ullam. Dolorem,
                                            qui.</p>

                                    </div>
                                </div>
                                <div
                                    className={'w-[90%] h-36 left-0 right-0  m-auto mt-4 bg-transparent rounded-[10px] shadow-2xl'}>
                                    <img src={userIMG} className={'w-9 relative left-4 top-3 inline-block'}/>
                                    <p className={'inline-block text-[#1e81b0] relative left-8 top-4 text-xl font-bold'}>Maleen</p>
                                    <div
                                        className={'w-[90%] h-[90px] relative left-0 right-0 top-4  m-auto'}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa
                                            dolores doloribus exercitationem iste optio quae quia ullam. Dolorem,
                                            qui.</p>

                                    </div>
                                </div>
                                <div
                                    className={'w-[90%] h-36 left-0 right-0  m-auto mt-4 bg-transparent rounded-[10px] shadow-2xl'}>
                                    <img src={userIMG} className={'w-9 relative left-4 top-3 inline-block'}/>
                                    <p className={'inline-block text-[#1e81b0] relative left-8 top-4 text-xl font-bold'}>Maleen</p>
                                    <div
                                        className={'w-[90%] h-[90px] relative left-0 right-0 top-4  m-auto'}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa
                                            dolores doloribus exercitationem iste optio quae quia ullam. Dolorem,
                                            qui.</p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>

        /*<div className={'inline-block ml-7 w-[30%] h-[270px]'}>
            {showDiv && (
                <div className='w-32 h-24 bg-blue-700 absolute z-50'>
                    Content of the blue div
                </div>
            )}
            <div
                className={'/!*w-[30%] h-[270px]*!/ bg-white rounded-[10px] shadow-2xl cursor-pointer inline-block ml-7 mt-4 overflow-x-hidden'}
                onClick={handleDivClick}
            >
                <div className={'w-full h-16 border-[1px] border-b-black border-l-transparent border-r-transparent border-t-transparent rounded-[10px]'}>
                    <img src={userIMG} className={'w-12 relative m-2 inline-block'} alt="User" />
                    <p className={'inline-block ml-2 text-[#7aa6ac] text-[23px] font-bold relative top-1'}>{prop.id}</p>
                </div>
                <div className={'w-[96%] h-44 rounded-[10px] shadow-md relative left-0 right-0 m-auto mt-4'}>
                    <p className={'text-[18px] m-2'}>{prop.body}</p>
                </div>
            </div>
        </div>*/




        /*<div
            className={'w-[30%] h-[270px] bg-white rounded-[10px] shadow-2xl cursor-pointer inline-block ml-7 mt-4 overflow-x-hidden '}
            id={'postPane'}
            onClick={handlePost}
        >
            {showPost && (
                <div className={'w-32 h-32 bg-amber-900 absolute'}>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
            <div className={'w-full h-16 border-[1px] border-b-black border-l-transparent border-r-transparent border-t-transparent rounded-[10px]'}>
                <img src={userIMG} className={'w-12 relative m-2 inline-block'} alt="User" />
                <p className={'inline-block ml-2 text-[#7aa6ac] text-[23px] font-bold relative top-1'}>
                    {prop.id}
                </p>
            </div>
            <div className={'w-[96%] h-44 rounded-[10px] shadow-md relative left-0 right-0 m-auto mt-4'}>
                <p className={'text-[18px] m-2'}>{prop.body}</p>
            </div>
        </div>*/

        /*<div
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
                    {/!*Maleen*!/}
                </p>
            </div>
            <div className={'w-[96%] h-44 rounded-[10px] shadow-md relative left-0 right-0 m-auto mt-4'}>
                <p className={'text-[18px] m-2'}>{prop.body}
                    {/!*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias autem consequuntur
                    dolorem dolores error eveniet inventore ipsa, iste iure, labore natus, obcaecati quaerat
                    quisquam repudiandae sequi tempora ullam*!/}!</p>

            </div>


        </div>*/


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
