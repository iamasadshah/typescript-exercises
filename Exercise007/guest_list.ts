let guestList = ["Shah", "Khan", "Syed",]
const message:string = "You are invited to dinner"
// Inviting One By One
console.log(`${guestList[0]} ${message}`)
console.log(`${guestList[1]} ${message}`)
console.log(`${guestList[2]} ${message}`)

// Invite Using Loop
for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message}`)
}

// Changing List
let absentGuest:string = "Syed"
let newGuest:string = "Ali"

guestList[2] = newGuest;
for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message}`)
}

console.log(`${absentGuest} is not coming.`)


//Shrinking Guest List 
console.log("Good News! We found big table so we can invite three more people")

guestList.unshift('Zia Khan')
guestList.splice(2, 0, 'Saad')
guestList.push("Sajid Khan")

for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message}`)
}



