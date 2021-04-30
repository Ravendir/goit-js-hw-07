const liItem = document.querySelectorAll("li.item");
liItem.forEach((liItem) => {
  const hRef = liItem.querySelector("h2").textContent;
  const liRef = liItem.querySelectorAll("li").length;
  console.log(`Категория:${hRef}`);
  console.log(`Количество элементов:${liRef}`);
});
