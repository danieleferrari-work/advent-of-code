import fs from "fs";

export default function day1() {
  console.log("DAY1");

  const input = fs.readFileSync("./day1/day1-input", "utf8");

  let elfsCalories = [0];
  let currentElfIndex = 0;
  let fatterElfIndex = 0;

  input.split("\n").forEach((element) => {

    if (element == "\r") {
      
      let currentElfCalories = elfsCalories[currentElfIndex];

      if (elfsCalories[fatterElfIndex] <= currentElfCalories)
        fatterElfIndex = currentElfIndex;

      currentElfIndex = currentElfIndex + 1;
      elfsCalories[currentElfIndex] = 0;

    } else {

      let calories = Math.floor(element);
      elfsCalories[currentElfIndex] = elfsCalories[currentElfIndex] + calories;
    
    }
  });

  console.log(fatterElfIndex, " : ", elfsCalories[fatterElfIndex])
}
