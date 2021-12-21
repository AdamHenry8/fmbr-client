const appReducer = function(state = { loggedInAdmin: {} }, action)
{
    switch(action.type)
    {
        case 'setLoggedInAdmin':
            let newLoggedAdmin = action.payload;
            return {...state, loggedInAdmin: newLoggedAdmin}
        case 'getLoggedInAdmin' :
            return {...state, loggedInUser: {}};

        default: 
            return state;
    }   

}

export default appReducer;