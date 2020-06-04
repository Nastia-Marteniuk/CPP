const readlineSync = require('readline-sync');

let number = [];
number[0] = `${Math.floor(Math.random() * 10)}`;
number[1] = number[0];
number[2] = number[0];
number[3] = number[0];
while (number[1] === number[0])
{
    number[1] = `${Math.floor(Math.random() * 10)}`;
}
while (number[2] === number[0] || number[2] === number[1])
{
    number[2] = `${Math.floor(Math.random() * 10)}`;
}
while (number[3] === number[0] || number[3] === number[1] || number[3] === number[2])
{
    number[3] = `${Math.floor(Math.random() * 10)}`;
}
let initial = number[0] + number[1] + number[2] + number[3];
console.log(initial);

let attempts = 1;
let bulls = 0;
let cows = 0;
while (true)
{
    const variant = readlineSync.question("Your number: ");
    let array = String(variant).split("");
    if (initial === variant)
    {
        console.log("You're right!");
        console.log("Atempts: " + attempts);
        process.exit();
    }
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            if (array[i] === number[j])
            {
                if (i === j)
                {
                    bulls++;
                    break;
                }
                else
                {
                    cows++;
                    break;
                }
            }
        }
    }
    console.log("Bulls: " + bulls + "; Cows: " + cows);
    bulls = 0;
    cows = 0;
    attempts++;
}