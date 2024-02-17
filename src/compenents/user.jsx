function  User(prop){
    return (
        <div className={'w-[380px] h-[300px]  m-8 bg-white rounded-[10px] inline-block shadow-2xl'}>
            {/*<img src={userIMG} className={'w-14 relative left-5 top-5'}/>*/}
            <p className={'text-[25px] font-bold text-center relative top-10 text-amber-800'}>
                {prop.name}
               {/* Maleen*/}
            </p>
            <div className={'w-full h-10  relative top-10  text-[18px] font-bold text-center mt-2'}>
                <p className={'text-[15px] inline-block'}>Email: </p>
                <p className={'inline-block'}>
                    {prop.email}
                   {/* maleen@gmail.com*/}
                </p>
            </div>
            <div className={'w-full h-10  relative top-10  text-[18px] font-bold text-center mt-2'}>
                <p className={'text-[15px] inline-block'}>Phone: </p>
                <p className={'inline-block '}>
                    {prop.phone}
                    {/*0776548547*/}
                </p>
            </div>
           {/* <div className={'w-full h-14 border-2 border-black relative top-10  text-[18px] font-bold'}>
                <p className={'text-[15px] inline-block'}>address :</p>
                <p className={'inline-block'}>
                    {prop.address}
                    address
                </p>
            </div>*/}
            <div className={'w-full h-14  relative top-10  text-[18px] font-bold text-center mt-2'}>
                <p className={'text-[15px] inline-block'}>Company Name: </p>
                <p className={'inline-block relative left-3'}>
                    {prop.company}
                    {/*Company*/}
                </p>
            </div>
            <div className={'w-full h-14  relative top-10  text-[18px] font-bold text-center mt-2'}>
                <p className={'text-[15px] inline-block'}>website: </p>
                <p className={'inline-block'}>
                    {prop.website}
                    {/*website*/}
                </p>
            </div>

        </div>
    )
}
export default User;