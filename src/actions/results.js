
export const getResults = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch('http://localhost:3001/tests')
      .then(response => response.json())
      .then(results => dispatch({ type: "SET_RESULTS", results }))
    }
  }

export const addResults = (test, history) => {
    return dispatch => {
         fetch('http://localhost:3001/tests', {
             method: 'POST', 
             headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
             },
             body: JSON.stringify({ test })
         })
         .then(response => response.json())
         .then(test => {
             dispatch({ type: "ADD_RESULT", test })
             history.push("/tests")
         })
    }
}



