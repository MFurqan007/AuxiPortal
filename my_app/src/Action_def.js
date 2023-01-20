export function ErrorMessg(){
    return {
        type: "ErrMessg",
        payload: {
            flags :{
                iserror_Messg: true, 
            }
        }
    }
}

export function NoErrorMessg(){
    return {
        type: "NoErrMessg",
        payload: {
            flags :{
                iserror_Messg: false, 
            }
        }
    }
}
//pass data as props 
export function Login(props){
    return {
        type: "Login",
        payload: {
            flags :{
                isloggedin: true 
            },
            printersid: {
                uid: props.uid //add uid from passed data 
            }
        }
    }
}

export function Logout(){
    return {
        type: "Logout",
        payload: {
            flags :{
                isloggedin: false 
            },
            printersid: {
                uid: null  
            }
        }
    }
}

export function ChangeState(props){
    return {
        type: "Open",
        payload: {
            flags: {
                iscard_detail: false
            },
            title : props.title,  
            rollnum : props.rollnum, 
            size : props.size,
            link :props.link, 
            timeStamp: props.time
        }
    }
}


/*
        type: "ErrMessg",
        payload: {
            flags :{
                iserror_Messg: false,
                isloggedin: false, 
                iscard_detail: false 
            },
            printersid: {
                uid: null
            },
            card_Detail: {
                title : null,  
                rollnum : null, 
                size : null,
                link : null,
                timeStamp : null
            }
        }
*/ 