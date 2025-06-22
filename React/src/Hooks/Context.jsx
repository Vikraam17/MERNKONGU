import { createContext } from "react";

export const Context=createContext();

export const UserContext =({children})=>{
    const user = {name:"viky",phn:"9876543210",email:"vikraam17@gmail.com"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
