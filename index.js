for (let age = 30; age < 40; age++) {

  }
  
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    }
  }
  
  wrapGifts(gifts);
  
  function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  
  module.exports = {
    countDown,
  };