export function setName(name){
    return({
        type:"SetName",
        payload:name
    })
}
export function reset(){
    return({
        type:"Reset"
      
    })
}

export function nextQuestion(){
    return({
        type:"Next"
    })
}



export function success(data){
    return({
        type:"FETCH_SUCCESS",
        payload:data
    })
}
export function failure(error){
    return({
        type:"FETCH_FAILURE",
        payload:error
    })
}
export function dinosaurRequest(){
    return({
        type:"FETCH_REQUEST"
    })
}

export const fetchData = () => dispatch => {
  dispatch(dinosaurRequest);
  return fetch("../quiz.json")
        .then(res => res.json())
        .then(json => dispatch(success(json)))
        .catch(err => dispatch(failure(err.message)));
};