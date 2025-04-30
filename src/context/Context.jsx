import { createContext, useState } from "react";

import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");
   

    const delayPara = (index,nextWord) => {
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }

    


    const onSent = async (prompt) => {
        setLoading(true)
        setResultData("")
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev=>[...prev,input])
       const response = await run(input)
       let newResponseArray = response.split(" ")
       for (let i=0; i<newResponseArray.length; i++) {
        const nextWord = newResponseArray[i]
        delayPara(i,nextWord+" ")
       }
       setLoading(false)
       setInput("")
    }

   

    const contextValue = {
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        onSent,
        showResult,
        loading,
        resultData,
        input,
        setInput,

    }




    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
    
}

export default ContextProvider;