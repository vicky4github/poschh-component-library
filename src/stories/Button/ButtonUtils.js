
export const setSize=(size)=>{
    switch(size){
      case 'small' : return 'sm';
      case 'large' : return 'lg';
      default : return 'md';
    }
}
 


export const toggleButtonState=(state,current)=>{
if(state==='loading' && current==='isLoading'){
    return true;
}
if(state==='disabled' && current==='isDisabled'){
    return true;
}
return false;
}



export const renderLabel=(state,label)=>{
if(state === 'loading'){
    return 'Loading';
}
return label;

}