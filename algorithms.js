import {fibs} from './fibonacci.js'
import {mergeSort} from './mergeSort.js'

async function main(){

    console.log(fibs(7));
    let arr=[];
    await local(arr);


    let out=await mergeSort(arr);

    console.log("in:"+JSON.stringify(arr))
    console.log("ordered:"+JSON.stringify(out))
}
async function local(arr){
    arr.push(7);
    arr.push(12);
    arr.push(3);
    arr.push(5);
    arr.push(1);
    arr.push(22);
    arr.push(7);
    arr.push(12);
    arr.push(3);
    arr.push(5);
    arr.push(1);
    arr.push(22);
    arr.push(7);
    arr.push(12);
    arr.push(3);
    arr.push(5);
    arr.push(1);
    arr.push(22);
    arr.push(7);
    arr.push(12);
    arr.push(3);
    arr.push(5);
    arr.push(1);
    arr.push(22);
    }
main();