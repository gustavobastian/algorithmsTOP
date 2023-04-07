export function fibs(n){
    let output=[];
    for (let i=0;i<n;i++){
        if(i==0)
            {output.push(0);}
        if(i==1)
            {output.push(1);}    
        if(i>1)    
            {output.push(output[i-1]+output[i-2])}
    }
    return output;
}

export function fibonacci(n){    
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    else
        return fibonacci(n-1) + fibonacci(n-2)   
}
