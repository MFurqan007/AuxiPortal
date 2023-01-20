import React from "react";

function FuncReducer (state = {}, action){
    switch(action.type){
        case 'ErrMessg':
            return {
                flags :{
                    iserror_Messg: true,
                }
            }; 
        case 'NoErrMessg':
            return {
                flags :{
                    iserror_Messg: false,
                }
            };
        case 'Login':
            return {
                flags: {
                    isloggedin: true,
                },
                printersid: {
                    uid: action.payload.printersid.uid,
                }
            }; 
        case 'Logout':
            return {
                flags :{
                    isloggedin: false 
                },
                printersid: {
                    uid: null,  
                }
            };
        case 'Open':
            return{
                flags: {
                        iscard_detail: true
                },
                card_detail: {
                    title : action.payload.card_detail.title,  
                    rollnum : action.payload.card_detail.rollnum, 
                    size : action.payload.card_detail.size,
                    link : action.payload.card_detail.link, 
                    timeStamp: action.payload.card_detail.timeStamp
                }
            };
        default: 
            return {
                flags:{
                    iserror_Messg: false
                } 
            };
    }
}

export default FuncReducer;