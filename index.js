const resultContainer = document.querySelector("#resultContainer");
const Button = document.querySelector("button[type='button']");

// Select the h5 element with the id "chance"
const resultDisplay = document.querySelector("#chance");

// Select both input fields
const nameInput1 = document.querySelector("#name1");
const nameInput2 = document.querySelector("#name2");

Button.addEventListener("click", () => {
  const existingMessageElement = resultContainer.querySelector('p');
  const existingImageElement = resultContainer.querySelector('img');
  if (existingMessageElement) {
    resultContainer.removeChild(existingMessageElement);
  }
  if (existingImageElement) {
    resultContainer.removeChild(existingImageElement);
  }
  const name1 = nameInput1.value;
  const name2 = nameInput2.value;

  if (name1 === "" || name2 === "") {
    // Display the message on the webpage
    resultDisplay.textContent = 'mag lagay ka naman ng name';
    return;
  }

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  animateNumbers(randomNumber, name1, name2);
});

function animateNumbers(targetNumber, name1, name2) {
  let currentNumber = 1;
  const intervalId = setInterval(() => {
    // Append the percentage to the existing text
    resultDisplay.textContent = `Your love compatibility is: ${currentNumber}%`; 
    currentNumber++;

    if (currentNumber > targetNumber) {
      clearInterval(intervalId);
      // Append the final percentage to the existing text
      resultDisplay.textContent = `${name1} and ${name2}, your love compatibility is: ${targetNumber}%`;

      let message;
      if (targetNumber >= 0 && targetNumber <= 33) {
        message = 'kawawa ka naman, hanap ka na lang iba. https://bumble.com';
      } else if (targetNumber > 33 && targetNumber <= 66) {
        message = 'kaya pa pagiging delulu mo te';
      } else if (targetNumber > 66 && targetNumber <= 77) {
        message = 'sure ka na di ka pa niyan gusto?';
      } else if (targetNumber > 77 && targetNumber <= 88) {
        message = 'situationship';
      } else if (targetNumber > 88 && targetNumber <= 99) {
        message = 'sige go na yan!!';
      } else if (targetNumber === 100) {
        message = 'sige na nga, kayo na talaga';
      }
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      resultContainer.appendChild(messageElement);
      const imageElement = document.createElement('img');
      imageElement.src = 'https://media.discordapp.net/attachments/731020481721008151/1202880829257293874/A_bCqDbCUAAVHix.png?ex=65cf1112&is=65bc9c12&hm=dbca133f2888ddd7f1344c28d3f408b447d91e1e4768099a056e74ff5ed83cbd&=&format=webp&quality=lossless&width=441&height=588';
      imageElement.width = 100;
      imageElement.height = 100;
      imageElement.style.display = 'block';
      imageElement.style.margin = '0 auto';
      resultContainer.appendChild(imageElement);
    }
  }, 25); // Adjust the interval for animation speed
}