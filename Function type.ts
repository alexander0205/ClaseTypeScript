type CallBackError = Error| null;
type CallBack = (error:any,response:object)=>void;
type SendRequest = (cb:CallBack)=>void;

const  sendRequest:SendRequest = (cb:CallBack):void=> {

    if(cb){
        cb(null,{message:'todo salio bien'});
    }
}


