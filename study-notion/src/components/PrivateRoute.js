import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLoggedIn , children}) => {
    // children main automatic child element pass hojayega PrivateRoute ka -->internal working?
    if(isLoggedIn){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
}//React automatically handles the content passed between the tags of a component and assigns it to the children prop. This is part of React's component composition mechanism.

export default PrivateRoute