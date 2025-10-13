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
calculateEnergyBill(250);  // should return 1800
