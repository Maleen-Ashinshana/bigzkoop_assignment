import userIMG from "../assets/172626_user_male_icon-removebg-preview.png";

function Comment(prop) {
    return (
        <div>
            <div
                className={'w-[90%] h-36 left-0 right-0  m-auto bg-transparent rounded-[10px] shadow-2xl mt-10 '}>
                <img src={userIMG} className={'w-9 relative left-4 top-3 inline-block'}/>
                <p className={'inline-block text-[#1e81b0] relative left-8 top-4 text-xl font-bold'}>
                    {prop.name}
                </p>
                <div
                    className={'w-[90%] h-[90px] relative left-0 right-0 top-4  m-auto '}>
                    <p>
                        {prop.body}
                    </p>
                </div>
            </div>

        </div>
    )

}

export default Comment;