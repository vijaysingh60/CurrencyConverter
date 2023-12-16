import React, { useState } from "react";
import CInput from "./CInput";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount,setAmount] = useState(0);
    const [from , setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [convertedAmount,setConvertedAmout] = useState()
    const currencyInfo = useCurrencyInfo(from)
    const option = Object.keys(currencyInfo);

    const swap = ()=>{
        setFrom(to)
        setTo(from)
    }

    const convert = ()=>
        setConvertedAmout(amount*currencyInfo[to])
    

    return (

        <div className="App overflow-hidden" >
            <img className="absolute w-full h-screen" src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&quot" alt="nothing"/>
            <div className="main absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white/30 boder-gray-300 rounded-lg border  backdrop:blur-lg p-7 z-10">
                <h1 className="text-center justify-center font-bold text-lg mb-5">Currency | Converter</h1>

                <CInput label={"From"}
                    amount={amount}
                    currencyOptions={option}
                    onCurrencyChange={(currency)=>setFrom(currency)}
                    onAmountChange={(amount)=>setAmount(amount)}
                    currencySelected={from}
                />
                
                <div className="relative w-full h-0.5">
                    <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}
                    >swap</button>
                </div>

                <CInput 
                    label={"To"}
                    currencyOptions={option}
                    currencySelected={to}
                    amount={convertedAmount}
                    amountDisabled
                    onCurrencyChange={(currency)=>setTo(currency)}  
                />

                <button type="submit" 
                    className="w-full my-3 bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
                
                <h1 className="text-center justify-center font-bold text-lg">By Chai and Code</h1>
            </div>
        </div>
    );
}

export default App;
