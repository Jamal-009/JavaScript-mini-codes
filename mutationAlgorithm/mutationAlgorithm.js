function mutation(arr){
  const firstEl = arr[0].toLowerCase();
  const secondEl = arr[1].toLowerCase();

  for(let char of secondEl){
    console.log(char)
    if(!firstEl.includes(char)){
      return false;
    }
  }
  return true;
}

console.log(mutation(["Hello", "hello"])); // output: true

console.log(mutation(["Hello", "hey"])); // output: false

console.log(mutation(["Alien", "line"])); //output: true