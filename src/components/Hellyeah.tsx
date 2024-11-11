import { useState } from "react"

type HellyeahProps = {
    text: string;
    children: React.ReactNode;
    counterFromApp: number;
    setCounterFromApp: React.Dispatch<React.SetStateAction<number>>
}

const Hellyeah =({children, text, counterFromApp, setCounterFromApp}: HellyeahProps) => {
    const [state, setState] = useState<number>(0);
    
    const LoadHot =() => {
        if(state <= (10**7)*2){
            setState(prev => prev + (10**6))
        }
        else{
            setState(prev => prev * 0)
        }
    }

    return (
        <>
            <button onClick={() => setCounterFromApp(counterFromApp + 1)}>set counter from app</button>
            <button onClick={() => LoadHot()}>add liquid</button>
            <div>
                <div>From App: {counterFromApp}</div>
                <h1>{text}: {state}</h1>
                {state >= (10**7) ? <h2>{children}</h2> : <h2 style={{ color: "red" }}>Liquid not engouth</h2>}
            </div>
        </>

    );


}



export default Hellyeah;