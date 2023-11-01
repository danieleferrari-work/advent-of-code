import fs from "fs";

export default function day1() {
  console.log("--- DAY1 ---");

  const input = fs.readFileSync("./day1/day1-input", "utf8");

  let elfsCalories = [0];
  let currentElfIndex = 0;

  input.split("\n").forEach((element) => {
    if (element == "") {
      currentElfIndex = currentElfIndex + 1;
      elfsCalories[currentElfIndex] = 0;
    } else {
      let calories = Math.floor(element);
      elfsCalories[currentElfIndex] = elfsCalories[currentElfIndex] + calories;
    }
  });

  let sortedElfsCalories = elfsCalories.sort().reverse();

  console.log("Part 1: " + sortedElfsCalories[0]);

  console.log(
    "Part 2: " + (sortedElfsCalories[0] + sortedElfsCalories[1] + sortedElfsCalories[2])
  );
}
