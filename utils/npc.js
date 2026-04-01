
export const npcs=[
 {name:"Trader Zed",msg:"I sell rare items"},
 {name:"Gambler X",msg:"Try your luck"},
 {name:"Quest Master",msg:"Complete missions"}
];
export const rnd=()=>npcs[Math.floor(Math.random()*npcs.length)];
