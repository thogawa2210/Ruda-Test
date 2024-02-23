function raceResult(Duck, Name) {
  let currentOrder = Duck.slice();

  for (let i = 0; i < Name.length; i++) {
    const duckName = Name[i];
    const index = currentOrder.indexOf(duckName);

    const temp = currentOrder[index - 1];
    currentOrder[index - 1] = duckName;
    currentOrder[index] = temp;
  }

  return currentOrder;
}

const Duck = ["red", "black", "yellow", "pink", "green"];
const Name = ["pink", "pink", "black", "yellow", "green", "green"];
const result = raceResult(Duck, Name);
console.log(result);
