 //temperatures for the next 7 days - Assignment 1
let temperatures = [30, 33, 27, 28, 24, 31, 38]

for(i=0;i<temperatures.length;i++)
{
  if(i==4) //change temperature for 4th day alone
  {
    temperatures[i] = temperatures[i] + 2
  }
}

console.log(temperatures)

//Assignment 3
function calculateEnergyBill(unitsConsumed)
{
  let bill = 0
  if(unitsConsumed <=100)
  {
    bill = bill + unitsConsumed*5
  }
  else if(unitsConsumed >=101 && unitsConsumed<=200)
  {
    bill = bill + 100*5 + (unitsConsumed-100)*8
  }
  else if(unitsConsumed>200)
  {
    bill = bill + 100*5 + 100*8 + (unitsConsumed-200)*10
  }
  console.log(bill)
}


calculateEnergyBill(50);   // Should return 250
calculateEnergyBill(150);  // Should return 900
calculateEnergyBill(250);  


//Assignment 4
function calculateFinalPrice(orderAmount , discountCode )

{
  let amountToPay = 0
  if(discountCode == "SAVE10")
  {
    amountToPay = amountToPay + orderAmount - (orderAmount*0.1) 
    console.log(amountToPay)
  }
  else if(discountCode == "SAVE20")
  {
    amountToPay = amountToPay + orderAmount - (orderAmount*0.2)
    console.log(amountToPay)
  }
  else if(orderAmount<=500)
  {
    amountToPay = 500-orderAmount
    console.log(`Please add tems of Rs. ${amountToPay} to get discount`)
  }
  
}

calculateFinalPrice(1000, "SAVE10"); // Should return 900
calculateFinalPrice(2000, "SAVE20"); // Should return 1600
calculateFinalPrice(150);


//Assignment 5
function checkPasswordStrength(password) {
  if (password.length < 6) {
    return "Weak";
  }
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if ((hasLetter && !hasNumber && !hasSpecial) || 
      (!hasLetter && hasNumber && !hasSpecial)) {
    return "Moderate";
  }

  if (password.length >= 6 && ((hasLetter && hasNumber) || (hasSpecial))) {
    return "Strong";
  }

  // return "Weak";
}
