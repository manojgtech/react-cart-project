import React, {useState,useEffect} from 'react'
import './App.css';
export default function Chat() {
    const [msgs,setmsgs]=useState([]);
    const [branch,setbranch]=useState({cur:'welcome','next':'name'});
    const renderMsgs=()=>{
        if(msgs.length>0){
            return(
                msgs.map((msg)=>{
                    return(
                        <div className={msg.class}>
                            <p>{msg.msg}</p>
                        </div>   
                    );
                })
            );
        }else{
            return("No chat");
        }
    }
    const submitmsg=(e)=>{
        e.preventDefault();
        if (e.key === 'Enter' || e.keyCode === 13) {
            // Do something
            
            if(e.target.value!==""){
                let inp=e.target.value;
           
                setmsgs([...msgs,{msg:inp,class:'chatleft'}]);

                getReply(inp);
                e.target.value="";
               
            }
        }
    }
    const getReply=(inp)=>{
       
        if((inp.toLowerCase().trim()=="hi" || inp.toLowerCase().trim()=="hello" || inp.toLowerCase().trim()=="hey") && branch.cur=='welcome'){
            console.log(inp);    
        let  msg="Welcome to our site. how can we serve you";
         
        setmsgs((prev)=>{return [...prev, {msg:msg,class:'chatright'}]});
        setbranch({cur:'welcome',next:'name'});
        }else if((inp.toLowerCase().trim()=="website" || inp.toLowerCase().trim()=="software" || inp.toLowerCase().trim()=="web") && branch.next=="name"){
           let msg="Provide name";
           setmsgs((prev)=>{return [...prev, {msg:msg,class:'chatright'}]});
           setbranch({cur:'name',next:'email'});
           
        }else {
        if(branch.next=="name"){
            setmsgs((prev)=>{return [...prev, {msg:"i cound not understand what did you mean?",class:'chatright'}]});
            setbranch({cur:'confuse',next:'name'}); 
        }
    } 

        if(branch.next=="phone"){
            setmsgs((prev)=>{return [...prev, {msg:"provide phone",class:'chatright'}]});
            setbranch({cur:'phone',next:'end'});  
        }
        if(branch.next=="email"){
            setmsgs((prev)=>{return [...prev, {msg:"provide email",class:'chatright'}]});
            setbranch({cur:'email',next:'phone'});  
        }
        if(branch.next=="end"){
            setmsgs((prev)=>{return [...prev, {msg:"provide we will contat you",class:'chatright'}]});
            //setbranch({cur:'phone',next:'end'});
            document.querySelector(".inpc").disabled="disabled";  
        }
        if(branch.next=="confuse"){
            setmsgs((prev)=>{return [...prev, {msg:"i cound not understand what did you mean?",class:'chatright'}]});
            setbranch({cur:'confuse',next:'name'});  

        }

        return true;
        
    }
    return (
        <div className="container">
            <div className="row">
                    <div className="col-md-6 col-offset-md-3" style={{marginTop:'100px'}}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3>Chat with CR</h3>
                            </div>
                            <div className="panel-body">
                               <div className="msgarea">
                                {renderMsgs()}
                               </div>
                            </div>
                            <div className="panel-footer">
                                <input type="text" name="msginput" className="form-control inpc" onKeyUp={(e)=>submitmsg(e)}/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
