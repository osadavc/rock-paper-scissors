export const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    return 0;
  }
  if (userHand == "paper" && cpHand == "rock") {
    return 1;
  }
  if (userHand == "paper" && cpHand == "paper") {
    return 5;
  }
  if (userHand == "rock" && cpHand == "scissors") {
    return 1;
  }
  if (userHand == "rock" && cpHand == "paper") {
    return 0;
  }
  if (userHand == "rock" && cpHand == "rock") {
    return 5;
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    return 5;
  }
  if (userHand == "scissors" && cpHand == "rock") {
    return 0;
  }
  if (userHand == "scissors" && cpHand == "paper") {
    return 1;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
