import { useEffect, useState } from "react";

function Welcome(){

    const msgArr = ['Hello', 'నమస్కారం', 'নমস্কাৰ', 'ನಮಸ್ಕಾರ', 'നമസ്ക്കാരം', 'नमस्ते'];
    const [index, setIndex] = useState(0);

    useEffect(
        () => {
        const interval = setInterval(() => {
                setIndex( (prev) => (prev + 1) % msgArr.length);
            }, 1000);
            return () => clearInterval(interval)
        });
    return(

        <div>
               <h1 className="text-white text-4xl md:text-7xl">{msgArr[index]}</h1>
        </div>
    )
}

export default Welcome;