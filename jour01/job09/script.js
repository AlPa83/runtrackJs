function tri(numbers, order) {
    for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {

/* temp = I use temp to save the numbers, allow them to be swapped, and restore them */

if (order === "asc" && numbers[i] > numbers[j]) {
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

if (order === "desc" && numbers[i] < numbers[j]) {
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
        }
    }
}
return numbers;
}

let tableau1 = [3, 1, 0, 8];
let tableau2 = [7, 5, 9, 2, 4];

console.log(tri(tableau1, "asc"));
console.log(tri(tableau2, "desc"));
