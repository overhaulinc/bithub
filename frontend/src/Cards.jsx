function Cards({year}){

    return(
        <div className="card-wrapper ">
             <div className="card flex flex-col text-black shadow-lg justify-center items-center h-56 w-56 rounded-xl text-2xl bg-white/60">
                <h1>{year}</h1>
             </div>
        </div>
    )
}

export default Cards