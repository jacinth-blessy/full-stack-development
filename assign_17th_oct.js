//Assignment question no. : 01

function returnFirstElement(array)
{
  return array[0]
}

let arr = [5,10,15]
let firstElement = returnFirstElement(arr)
console.log(firstElement)


//Assignment question no. : 02

function algoValue(n)
{
  let temp = 0
  for(i=1;i<=n;i= i*2)
  {
    temp ++
  }
  return temp
}

let ans = algoValue(1000)
console.log(ans)


//Assignment question no. : 03

function maxInArray(list)
{
  let max = list[0]
  for(i=0;i<list.length;i++)
  {
    if(list[i]>max)
    {
      max = list[i]
    }
  }
  return max
}

let arrayList = [4,1,7,2,9]
console.log(maxInArray(arrayList))


//Assignment question no. : 04

function evenInArray(givenArr)
{
  let count = 0
  for(i=0;i<givenArr.length;i++)
  {
    if(givenArr[i]%2==0)
    {
      count++
    }
  }
  return count
}

let countofEven = evenInArray([1,2,3,4,5])
console.log(countofEven)


//Assignment question no. : 05

function targetPairs(mainArray, tar)
{
  let temp = []
  let str = ""
  for(i=0;i<mainArray.length;i++)
  {
    for(j=i+1;j<mainArray.length;j++)
    {
      if(mainArray[i] + mainArray[j] == tar)
      {
        str += `(${mainArray[i]}, ${mainArray[j]})`
        temp.push(str)
      }
    }
  }
  return temp
}

console.log(targetPairs([1,2,3,4,5], 6))


//Assignment question no. : 07

function fibonacci(n) {
  if(n< 2)
  {
    return n
  }
  else
  {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

console.log(fibonacci(5))
console.log(fibonacci(6))


//Assignment question no. : 08

function newDupArray(originArray)
{
  let dupArray = []
  for(i=0;i<originArray.length;i++)
  {
   dupArray.push(originArray[i], originArray[i])
  }
  
  return dupArray
}

console.log(newDupArray([1,2,3]))


















