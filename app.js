function getComputerChoice() {
  const arrOfshapes = ["Rock", "Paper", "Scissors"];
  const lengthOfShapes = arrOfshapes.length;
  return arrOfshapes[Math.floor(Math.random() * lengthOfShapes)];
}
