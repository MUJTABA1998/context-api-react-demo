const c_reduser = (state, action) => {
    switch(action){
        case 'Increament':
            return state + 1
        case 'Decreament':
            return state - 1
        default:
            throw console.error("errror");
    }
}


export default c_reduser;