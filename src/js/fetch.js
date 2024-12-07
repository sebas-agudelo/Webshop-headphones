
import {productsHtml} from "./products";

export const fetchData = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((headphones) => {
      productsHtml(headphones)
    })
    .catch((error) => {
      alert("Error fetching data:", error);
    });
};
      
      
    

