function chunkArrayInGroups(arr, num){
  const chunkedArray = [];

  for(let i = 0; i < arr.length; i += num){
    const chunk = arr.slice(i, i + num);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
// output: [["a", "b"], ["c", "d"]]