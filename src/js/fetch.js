
import {productsHtml} from "./module/products";

export const fetchData = () => {
  fetch("/json/products.json")
    .then((response) => response.json())
    .then((headphones) => {
      productsHtml(headphones)
    })
    .catch((error) => {
      alert("Error fetching data:", error);
    });
};
      
      
    

