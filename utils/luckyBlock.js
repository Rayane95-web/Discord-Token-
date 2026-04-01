
export const rewards=[
 {name:"money",chance:40,reward:()=>({money:5000})},
 {name:"crate",chance:20,reward:()=>({item:"mutation_crate",amount:1})},
 {name:"shield",chance:10,reward:()=>({item:"shield",amount:1})},
 {name:"OMEGA",chance:0.001,reward:()=>({omega:true})}
];
export function roll(){
 let t=rewards.reduce((a,b)=>a+b.chance,0);
 let r=Math.random()*t;
 for(const x of rewards){if(r<x.chance)return x;r-=x.chance;}
}
