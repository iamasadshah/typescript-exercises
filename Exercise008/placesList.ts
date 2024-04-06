/**
 * Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/

let placesList = ["Rome", "Tokyo", "Maldives","Sydney", "Bali"]

 console.log(placesList); // Print your array in its original order.

let shortedArray = placesList.sort(); //Print your array in alphabetical order without modifying the actual list.

console.log(placesList); //Show that your array is still in its original order by printing it.

let reverseArray = placesList.reverse(); // Print your array in reverse alphabetical order without changing the order of the original list.

console.log(reverseArray); //Reverse the order of your list. Print the array to show that its order has changed.

console.log(placesList); // Show that your array is still in its original order by printing it again.

let reversAgain = reverseArray.reverse(); //• Reverse the order of your list again. Print the list to show it’s back to its original order.

let sortedAgain = reversAgain.sort(); //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let sort = sortedAgain.sort();

console.log(sort);