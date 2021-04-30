const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ref = {
  ul: document.querySelector("#gallery"),
};

const liArr = images.map((image) => {
  return `<li><img src="${image.url}" alt="${image.alt}" width="420px" height="250px"></li>`;
});

// console.log(liArr);

ref.ul.insertAdjacentHTML("beforeend", liArr.join(""));

ref.ul.style.cssText =
  "display: flex ; list-style: none; justify-content:space-between";
