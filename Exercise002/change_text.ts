
let userName = prompt("What is Your name?")

let lowerCase = userName?.toLowerCase();
let upperCase = userName?.toUpperCase();
let titleCase = userName?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if (userName !== null && userName !== ''){
    alert(`Hello ${userName}: Here is your name in
    Lower Case: ${lowerCase}
    Upper Case: ${upperCase}
    title Case: ${titleCase}`)
}else{
    alert("Correct Your name..")
}


