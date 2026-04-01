
export function f(n){
 const u=["","k","M","B","T","Qa","Qi","Sx"];
 let i=0;
 while(n>=1000){n/=1000;i++;}
 return n.toFixed(1)+u[i];
}
