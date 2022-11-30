let img1 = document.getElementById("card-1");
let img2 = document.getElementById("card-2");
let img3 = document.getElementById("card-3");

const rightCardClickedHandler = (e) => {

  img3.removeEventListener("click", leftCardClickedHandler);
  img1.removeEventListener("click", rightCardClickedHandler);

  img1.className = "card middleCard";
  img2.className = "hiddenCard leftCard";
  img3.className = "hiddenCard rightCard";

  const tmp = img1;
  img1 = img3;
  img3 = img2;
  img2 = tmp; 

  img3.addEventListener("click", leftCardClickedHandler);
  img1.addEventListener("click",rightCardClickedHandler);

};

img1.addEventListener("click", rightCardClickedHandler);

const leftCardClickedHandler = (e) => {

  console.log(e);

  img3.removeEventListener("click", leftCardClickedHandler);
  img1.removeEventListener("click", rightCardClickedHandler);

  img1.className = "hiddenCard leftCard";
  img2.className = "hiddenCard rightCard";
  img3.className = "card middleCard";

  const tmp = img3;
  img3 = img1;
  img1 = img2;
  img2 = tmp; 

  img3.addEventListener("click", leftCardClickedHandler);
  img1.addEventListener("click",rightCardClickedHandler);
};

img3.addEventListener("click", leftCardClickedHandler);
