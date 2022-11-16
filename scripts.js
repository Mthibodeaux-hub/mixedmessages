const monthEntry =  2;

const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let month = monthArr[monthEntry-1];

const day = 12;

const findSign = (month, day) => {
    if (month === 'January' && day >=20 || month === 'February' && day <= 18){
        return 'Aquarius';
    } else if (month === 'February' && day >= 19 || month === 'March' && day <= 20){
        return 'Pisces';
    } else if (month === 'March' && day >= 21 || month === 'April' && day <= 19){
        return 'Aries';
    } else if (month === 'April' && day >= 20 || month === 'May' && day <= 20){
        return 'Taurus';
    } else if (month === 'May' && day >= 21 || month === 'June' && day <= 20){
        return 'Gemini';
    } else if (month === 'June' && day >= 21 || month === 'July' && day <= 22){
        return 'Cancer';
    } else if (month === 'July' && day >= 23 || month === 'August' && day <= 22){
        return 'Leo';
    } else if (month === 'August' && day >= 23 || month === 'September' && day <= 22){
        return 'Virgo';
    } else if (month === 'September' && day >= 23 || month === 'October' && day <= 22){
        return 'Libra';
    } else if (month === 'October' && day >= 23 || month === 'November' && day <= 21){
        return 'Scorpio';
    } else if (month === 'November' && day >= 22 || month === 'December' && day <= 21){
        return 'Sagittarius';
    } else if (month === 'December' && day >= 22 || month === 'January' && day <= 19){
        return 'Capricorn';
    } else {
        alert ('Please enter your date again.');
    }   
}

console.log(findSign(month, day));

const generateFortune = () => {
    let fortune;
    let pick = Math.floor(Math.random() * 30);
    switch(pick) {
case 0:
    fortune = "Your eyes will change color tomorrow at noon."; 
    break;
  case 1:
    fortune = "Good fortune will shine on your dog, if you have no dog one will pee on your shoe.";
    break;
  case 2:
     fortune = "Money is coming your way. Duck."; 
    break;
  case 3:
     fortune = "Outlook is not good, don't try again."; 
    break;
  case 4:
    fortune = "That's not a rash, see a doctor."; 
    break;
  case 5:
     fortune = "You will find sticks in your bed, remember to floss your teeth."; 
    break;
  case 6:
    fortune = "Goats will think of you often."; 
  case 7:
     fortune = "Someone is thinking of you."; 
    break;
  case 8:
     fortune = "The person you are thinking of knows your feelings...and may file charges."; 
    break;
  case 9:
     fortune = "I see money in your future, it is not yours tho."; 
    break;
  case 10:
    fortune = "Come back later, I am sleeping."; 
    break;
  case 11:
    fortune = "When you wake up tomorrow roll off your bed.";
    break;
  case 12:
    fortune = "You will get money soon, and then you will lose it.";
    break;
  case 13:
    fortune = "A secret is waiting for you.";
  case 14:
   fortune = "Try again.";
    break;
  case 15:
    fortune = "You will lose money soon.";
    break;
  case 16:
     fortune = "I see a dark stranger in your future...pet him.";
    break;
  case 17:
    fortune = "Cats will think of you often after tonight.";
    break;
  case 18:
    fortune = "I can't get to your fortune right now...I left if on the bedside table.";
    break;
  case 19:
    fortune = "Sing to your fish, they are plotting.";
    break;
  case 20:
    fortune = "Next time you get popcorn stuck in your teeth a kitten will be born.";
  case 21:
    fortune = "Speak softly and carry a big stick.";
    break;
  case 22:
    fortune = "Bow before me tiny human.";
    break;
  case 23:
     fortune = "Do you have a will?";
    break;
  case 24:
    fortune = "You will receive a call...can I talk to you about your Car Insurance...";
    break;
  case 25:
    fortune = "Watch where you sit.";
    break;
  case 26:
    fortune = "There is an award in your future...it starts with Darwin.";
    break;
  case 27:
    fortune = "Beware the frog.";
  case 28:
    fortune = "You will step in gum.";
    break;
  case 29:
    fortune = 'Error 404 no Fortune Found. Well this is awkward...' ;
    break;
  case 30:
    fortune = "I predict your death, internal combustion, never hold in your farts is my warning to you.";
  default: 
    fortune = "Error, Try again";
    }
    
    return fortune;
}


console.log(generateFortune());