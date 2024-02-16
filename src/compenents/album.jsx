import closeIMG from "../assets/4115230_cancel_close_delete_icon.png";
import Photo from "./photo.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";


function Album(prop) {
    const photos = useSelector((state) => state.photos);
    /*    const [showPhoto, setShowPhoto] = useState(true);
        const [showDiv, setShowDiv] = useState(false);*/
    const [showDiv, setShowDiv] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleAlbumClick() {
        setShowDiv(!showDiv);
        /*setShowPhoto(true);*/
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    }

    const closeModal = () => {
        /*setShowPhoto(false);*/
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={'w-[410px] h-40 ml-10 mt-10 inline-block '}>
            <div className={'w-full h-full bg-white rounded-[10px] shadow-2xl cursor-pointer relative '}
                 onClick={handleAlbumClick}>
                <div className={'w-full h-10 border-[1px] border-b-black rounded-[10px] '}>
                    <p className={'text-[20px] font-bold relative left-5 top-2 inline-block'}>Author :</p>
                    <p className={'inline-block text-[20px] relative top-2 left-10'}>
                        {prop.id}
                        {/*Maleen*/}
                    </p>
                </div>
                <div className={'w-full h-[120px] '}>
                    <p className={'relative top-3 text-center text-amber-800 text-[20px] font-bold'}>{prop.title}</p>

                </div>

            </div>

            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-auto">
                    <div className="bg-[#f2f3f5] w-[90%] h-[90%] rounded-lg p-8 z-50 overflow-y-hidden">
                        {/*<button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg"></button>*/}
                        <div className={'w-10 h-24 bg-transparent absolute right-5 top-1'} onClick={closeModal}>
                            <img src={closeIMG}/>
                        </div>

                        <p className={'text-[27px] font-bold inline-block'}>Author :</p>
                        <p className={'text-[27px] font-bold inline-block relative top-14 left-[-105px]'}>Album :</p>
                        {photos.map((photo) => (
                                <Photo title={photo.title} body={photo.url}/>
                            )
                        )}
                       {/* <p className={'text-[27px] font-bold inline-block'}>Author :</p>
                        <p className={'text-amber-800 text-[27px] inline-block relative left-3 font-bold'}>Maleen</p>

                        <p className={'text-[27px] font-bold inline-block relative top-14 left-[-198px]'}>Album :</p>
                        <p className={'text-amber-800 text-[27px] inline-block relative top-14 left-[-180px]  font-bold'}>Lorem
                            ipsum
                            dolor sit amet.</p>

                        <div className={'w-full h-[500px] relative top-[70px] rounded-[10px] shadow-xl overflow-auto'}>
                            <div className={'w-[230px] h-[230px] border-2 border-amber-500 m-8 inline-block'}>

                            </div>

                        </div>*/}
                    </div>
                </div>
            )}

            {/*{showPhoto && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#f2f3f5] w-[90%] h-[90%] rounded-lg p-8 z-50 overflow-y-hidden">
                        <div className={'w-10 h-24 bg-transparent absolute right-5 top-1'} onClick={closeModal}>
                            <img src={closeIMG}/>
                        </div>
                    </div>

                </div>
            )

            }*/}

            {/*{showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#f2f3f5] w-[90%] h-[90%] rounded-lg p-8 z-50 overflow-y-hidden">
                        <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg"></button>
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
                            --------------------Comments-----------------------------------
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
            )}*/}
            {/*<div className={'w-full h-full bg-white rounded-[10px] shadow-2xl cursor-pointer relative ml-10 mt-10 '}>
                <div className={'w-full h-10 border-[1px] border-b-black rounded-[10px] '}>
                    <p className={'text-[20px] font-bold relative left-5 top-2 inline-block'}>Author :</p>
                    <p className={'inline-block text-[20px] relative top-2 left-10'}>
                        {prop.id}
                        Maleen
                    </p>

                </div>
                <p className={'text-[25px] font-bold text-amber-800 text-center relative top-5'}>
                    {prop.title}
                    Title
                </p>

            </div>*/}
        </div>

    )

}

export default Album;