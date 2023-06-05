
import React, { createContext, useState } from 'react';
export const AuthContext = createContext()
const Allcontext = ({children}) => {
    const [info, setinfo]= useState({
        name:"takdir",
        email: "takdirhsho@gmail.com"
    })
    const authInfo = {
        info
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Allcontext;