 //temperatures for the next 7 days
let temperatures = [30, 33, 27, 28, 24, 31, 38]

for(i=0;i<temperatures.length;i++)
{
  if(i==4) //change temperature for 4th day alone
  {
    temperatures[i] = temperatures[i] + 2
  }
}

console.log(temperatures)
