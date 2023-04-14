// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  return fibonacci(num-1) + fibonacci(num - 2);
}

const nTerms = 5;  //User Input
for(let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
}


// program to find the balanced String
function solution(S) {
  let stringArr=S.split('');
  let stringCountObj=stringArr.reduce((accum,curr)=>{
      accum[curr] = (accum[curr] ? accum[curr]  : 0)+1
      return accum;
  },{});
  console.log(stringCountObj);

  let sortedArr = Object.values(stringCountObj).sort((a,b)=>b-a)
  let duplicatedValues = sortedArr.filter((item,idx)=> { return idx !== sortedArr.indexOf(item)});
  const finalArray= stringArr.filter((item,idx)=> stringCountObj[item] === duplicatedValues[0]);
  return [finalArray.toString().split(',').join('')];
}
let S='cababcc' //User Input
console.log(solution(S));