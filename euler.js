// function foo(age){
//     this.age = age;
// }
// foo(15);
// console.log(foo.age)

// function bazm (n,sum=0){                                         euler1
//     for(let i=3; i<n; i++){
//         if(i%3==0 || i%5==0){
//             sum+=i
//         }
//     }
//     return sum;
// }
// console.log(bazm(1000))

// let sum=0,hin=0,hima=1                                          euler2
// for(let i=hin+hima;i<=4000000;i=hin+hima){
//     hin=hima;
//     hima=i;
//     if(hima%2==0) sum+=hima;
// }
// console.log(sum)



// function mecbazm(n){                                             euler3

//     let arr = [2];
//     for(let i=3;i<=Math.sqrt(n);i+=2){
//         let bool = true;
//         for(let elem of arr){
//             if(i%elem==0){
//                 bool=false;
//                 break;
//             }
//         }
//         if(bool) arr.push(i);
//     }
//     for(let j=arr.length-1;j>=0;j--){
//         if(n%arr[j]==0) return arr[j];
//     }
// }
// console.log(mecbazm(600851475143))



// function mec(){                                                euler 4
//     for(let i=998001;i>=10000;i--){
//         let str=String(i)
//         if(str.split('').reverse().join('')==str){
//             for(let j=999;j>=100;j--){
//                 if(i%j==0 && i/j<=999) return [i,j];
//             }
//         };
//     }
// }
// console.log(mec())



// function poqr(n=20){                                     euler 5
//     for(let i=2520;i>=0;i++){
//         let bool=true;
//         for(let j=1;j<=20;j++){
//             if(i%j!==0){
//                 bool=false;
//                 break;
//             }
//         }
//         if(bool){
//             return i;
//         }
//     }
// }
// console.log(poqr(20))


// function tarsum(n){                                   euler 6
//     let sqrsum=0, sumsqr=0;
//     for(let i=0; i<=n;i++){
//         sqrsum+=i**2;
//         sumsqr+=i;
//     }
//     return sumsqr**2-sqrsum
// }
// console.log(tarsum(100));



// function parz(index){                                       euler 7
//     let arr=[2,2];
//     for(let i=3;arr.length<=index;i+=2){
//         let bool = true;
//         for(let elem of arr){
//             if(i%elem==0){
//                 bool = false;
//                 break;
//             }
//         }
//         if(bool) arr.push(i);
//     }
//     return arr[index];
// }
// console.log(parz(10001))


function hajord(str, qanak){
    let bazm=1, arr=[]
    for(let i=0; i<=str.length-qanak-1; i++){
        let locbazm = 1
        for(let j=0; j<qanak; j++){
            let num = Number(str[i+j]);
            locbazm*=num;
            arr[j]=num;
        }
        if(locbazm>bazm) bazm = locbazm;
    }
    return [bazm,arr];
}
console.log(hajord(String(1234567876435797),4))