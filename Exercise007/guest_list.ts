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
console.log(`\n \n \n`)

// Changing List
let absentGuest:string = "Syed"
let newGuest:string = "Ali"

guestList[2] = newGuest;
for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message}`)
}

console.log(`${absentGuest} is not coming.`)
console.log(`\n \n \n`)

//More Guest
console.log("Good News! We found big table so we can invite three more people")

guestList.unshift('Zia Khan')
guestList.splice(2, 0, 'Saad')
guestList.push("Sajid Khan")

for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message}`)
}
console.log(`\n \n \n`)

// Shrinking Guest List
console.log("Sorry! We can Invite only Two Guest");

while(guestList.length > 2){
    let removeGuest = guestList.pop()
    console.log(`Sorry Mr, ${removeGuest} You are not invited for dinner.`)
}

console.log(`\n \n \n`)
let message2 = "You are still invited to dinner"
for (let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]} ${message2}`)
}