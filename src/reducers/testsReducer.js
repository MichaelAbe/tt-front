const initialState = {
    results: [],
    loading: true
}



const testReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return{
                ...state,
                loading: true
            }
            case "SET_RESULTS":
                console.log(action.results)
                return{
                    ...state,
                    loading: false,
                    results: action.results
                }
        default:
            return state;
    }
}

export default testReducer


