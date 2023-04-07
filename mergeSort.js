
/**
 * based in cracking the code interview by Gayke Laakmann
 */
export function mergeSort(arr){
    let helper=[];
    let d=arr.length;
    console.log(d)
    localSort(arr,0,d,helper)    
    return arr;
}


function merge(arr, low, middle, high,helper){
    
    for (let i=low;i<=high;i++)
    {
        helper[i]=arr[i];
    }

    let helperLeft=low;
    let helperRight=middle +1;
    let current = low;

    while ((helperLeft<=middle) && (helperRight<=high)){
        if(helper[helperLeft]<=helper[helperRight]){
            arr[current]=helper[helperLeft];
            helperLeft++;
        }
        else{
            arr[current]=helper[helperRight];
            helperRight++;
        }
        current++;
    }

    let remaining=middle-helperLeft;
    for (let i=0;i<=remaining;i++){
        arr[current+i]=helper[helperLeft + i];
    }

  
}

function localSort(arr,low,high,helper){    
    
    if(low>=high){
        return;
    }
    let middle =low+ parseInt((high-low)/2);
    localSort(arr,low,middle,helper);
    localSort(arr,middle+1,high,helper);
    merge(arr,low,middle,high,helper);
}
