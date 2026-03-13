const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*"

function randomChar(chars){
return chars[Math.floor(Math.random()*chars.length)]
}

function makePassword(requiredSets,length){

let password=""

requiredSets.forEach(set=>{
password+=randomChar(set)
})

let all=requiredSets.join("")

for(let i=password.length;i<length;i++){
password+=randomChar(all)
}

return password.split('').sort(()=>Math.random()-0.5).join('')
}

function generate(){

document.getElementById("p1").textContent=
makePassword([upper,lower,number,symbol],12)

document.getElementById("p2").textContent=
makePassword([upper,lower,symbol],12)

document.getElementById("p3").textContent=
makePassword([upper,lower,number],12)

document.getElementById("p4").textContent=
makePassword([lower,number,symbol],12)

document.getElementById("p5").textContent=
makePassword([lower,symbol],12)

document.getElementById("p6").textContent=
makePassword([lower,number],12)

}

function copy(id,button){

const text=document.getElementById(id).textContent

navigator.clipboard.writeText(text)

const original=button.textContent

button.textContent="✔ 복사됨!"
button.classList.add("copied")

setTimeout(()=>{
button.textContent=original
button.classList.remove("copied")
},1500)

}