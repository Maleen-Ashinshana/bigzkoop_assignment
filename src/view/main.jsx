import postImg from "../assets/2528051_business_envelope_letter_mail_message_icon__1_-removebg-preview.png";
import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";
import person from "../assets/8664925_circle_user_person_icon.png";

function Main() {
    return <section className={'w-full h-screen bg-[#f9fafc]'}>
        <div className={'w-full h-12 bg-[#0fa2c4]'}>
            <p className={'text-[25px] text-white font-bold flex justify-center items-center relative top-1'}>BIGZKOOP</p>
        </div>
        <div className={'w-[150px] h-[93.5%] bg-[#044153]'}>
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
                    className={'w-32 h-10 bg-[#0fa2c4] relative left-[75%] top-1 rounded-[10px] text-white text-[20px] font-bold'}>Search
                </button>

            </div>
            {/*-------------------MSG BOX-----------------------------------------*/}
            <div
                className={'w-[60%] h-[600px] bg-white relative top-[20px] left-8 rounded-[10px] overflow-auto overflow-x-hidden inline-block'}>
                <div
                    className={'w-[95%] h-[500px] rounded-[10px] bg-transparent shadow-xl mt-4 relative left-0 right-0 m-auto overflow-auto overflow-x-hidden'}>
                    <div
                        className={'w-full h-16 border-2 border-b-blue-400 border-t-transparent border-r-transparent border-l-transparent rounded-[10px]'}>
                        <img src={userIMG} className={'w-14 inline-block relative left-5 '}/>
                        <p className={'inline-block text-[25px] font-bold relative left-10 top-1'}>Maleen</p>
                    </div>

                    {/*--------------------------------Post------------------------------------*/}
                    <p className={'text-[25px] font-bold text-amber-800 relative left-5 top-5 overflow-auto'}>Title1</p>

                    <div
                        className={'w-[95%] h-[500px] relative top-10 left-0 right-0 m-auto  rounded-[10px] shadow-2xl'}>

                        <div className={'w-full h-[35%] {/*border-2 border-black*/} rounded-[10px]'}>
                            <p className={'text-[17px] relative left-0'}>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aliquam, commodi minima nemo neque
                                odio optio porro praesentium rem sequi tempora?</p>
                        </div>
                        {/*---------------Comment---------------------------------------------*/}
                        <div className={'w-full h-[60%] {/*border-2 border-amber-500*/} relative top-5 rounded-[10px] overflow-auto overflow-x-hidden'}>
                            <p className={'text-[20px] text-amber-800 font-bold relative left-3 top-3'}>Comment...</p>
                            <div
                                className={'w-[80%] h-24 relative left-0 right-0 m-auto top-3 rounded-[10px] shadow-2xl'}>
                                <img src={userIMG} className={'w-7 relative m-1 inline-block'}/>
                                <p className={'inline-block relative left-3 font-bold'}>user name by commented</p>
                                <div className={'w-full h-[58px]'}>
                                    <p className={'mt-1 ml-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                        consequatur fugit, ipsum magnam nobis quis quod ut veritatis! Explicabo?</p>

                                </div>

                            </div>
                            <div
                                className={'w-[80%] h-24 relative left-0 right-0  m-auto top-10 rounded-[10px] shadow-2xl '}>
                                <img src={userIMG} className={'w-7 relative m-1 inline-block'}/>
                                <p className={'inline-block relative left-3 font-bold'}>user name by commented</p>
                                <div className={'w-full h-[58px]'}>
                                    <p className={'mt-1 ml-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                        consequatur fugit, ipsum magnam nobis quis quod ut veritatis! Explicabo?</p>

                                </div>

                            </div>



                        </div>

                    </div>

                </div>

            </div>

            <div className={'w-[450px] h-[500px] inline-block absolute top-[80px] right-3 rounded-[10px] bg-white shadow-2xl'}>
                <img src={person} className={'w-20 absolute left-0 right-0 m-auto  top-6'}/>
                <p className={'text-[23px] font-bold text-[#7aa5ac] flex items-center justify-center relative top-[110px]'}>Maleen</p>
                <p className={'text-[15px] font-bold text-[#7aa5ac] flex items-center justify-center relative top-[110px]'}>maleen@gmail.com</p>

            </div>

        </div>

    </section>

}

export default Main;