const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingRef = document.querySelector("#ingredients");

const ingItems = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  return liItem;
});

ingRef.append(...ingItems);
console.log(ingItems);
