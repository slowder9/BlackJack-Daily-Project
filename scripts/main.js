/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/
function handValue (hand) {
	let sum = 0
	let numberOfAce = 0
	let card = [];

	for(let i = 0; i < hand.length; i++){
		if ((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")){
			hand[i] = 10;
			card.push(hand[i]);
		}
		else if((hand[i] === "A")){
			numberOfAce = numberOfAce + 1;
		} else {

		card.push(parseInt(hand[i], 10));

		}
	}

	for(let x = 0; x < card.length; x++) {
		sum += card[x];
	}

	for(let a = 0; a < numberOfAce; a++) {
		if ((numberOfAce > 0) && (sum > 11)){
			let ace = 1;
			sum = ace + sum;
			
		} else if ((numberOfAce > 0) && (sum < 11)){
				ace = 11;
				sum = ace + sum;
			}
		
		}
	

	console.log(sum);
	console.log(numberOfAce);
	console.log(card);
	return sum;
}

	



	// this.hand = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];

// let cardValues = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];

// let number = "n";

// this.getNumber = function () {
// 	switch(number) {
// 		case 1:
// 			return "Ace";
// 		case 11:
// 			return "Jack";
// 		case 12:
// 			return "Queen";
// 		case 13:
// 			return "King";
// 		default:
// 			return number;	
// 	}
// };

// this.getValue = function() {
//         if(n > 9) {
//             return 10;
//         } else if(n === 1) {
//             return 11;
//         } else {
//             return n;
//         };
//     }


// 	this.hand = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ];
// 	let cards = [ ];
// 	let number = "n";
// }

// 	for (let i = 0; i< this.hand.length; i++) {
// 		// cards.push( new card( i+1, this.hand[i] ) );
	
	
// 	if(n > 9) {
//             return 10;
//         } else if(n === 1) {
//             return 11;
//         } else {
//             return n;
//         }
//     return cards;
// }

// console.log(handValue(hand));


// return;
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/