
import fs from "fs";
const p="./data/users.json";
const read=()=>{if(!fs.existsSync(p))fs.writeFileSync(p,"{}");return JSON.parse(fs.readFileSync(p));};
const write=d=>fs.writeFileSync(p,JSON.stringify(d,null,2));

export function getUser(id){
 const d=read();
 if(!d[id]){
  d[id]={wallet:1000,bank:0,inventory:{},mutations:[],xp:0,level:1};
  write(d);
 }
 return d[id];
}
export function saveUser(id,u){const d=read();d[id]=u;write(d);}
export function all(){return read();}
