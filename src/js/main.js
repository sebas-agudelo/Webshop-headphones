import "./../scss/main.scss";

import { burgerMenuFunction } from "./module/burbermenu.js";
import { allLikeListeners } from "./module/likecart.js";
import { allCartListeners } from "./module/cart.js";
import { fetchData } from "./fetch.js";


window.onload = () => {
    if (location.pathname.includes("products.html")){
      fetchData();
  }
    }


//Open and close meny
burgerMenuFunction()

//All listeners from like cart js
allLikeListeners()

//All listeners from cart js
allCartListeners()





 