function photo(prop){
    return(
<div>
   {/* <p className={'text-[27px] font-bold inline-block'}>Author :</p>*/}
    <p className={'text-amber-800 text-[27px] inline-block relative left-3 font-bold'}>
        {prop.name}
        {/*Maleen*/}
    </p>

{/*    <p className={'text-[27px] font-bold inline-block relative top-14 left-[-198px]'}>Album :</p>*/}
    <p className={'text-amber-800 text-[27px] inline-block relative top-4 left-[100px]  font-bold'}>
        {prop.title}
        {/*Lorem ipsum dolor sit amet.*/}
    </p>

    <div className={'w-full h-[500px] relative top-[70px] rounded-[10px] shadow-xl overflow-auto'}>
        <div className={'w-[230px] h-[230px] border-2 border-amber-500 m-8 inline-block'}>
            {/*{prop.url}*/}
        </div>

    </div>
</div>
    )

}
export default photo;