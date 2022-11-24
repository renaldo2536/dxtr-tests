import { BEARER_TOKEN, PRODUCT, URL } from "@shared-constants";
import axios from "axios";

const fullUrl = URL + PRODUCT;

export const getProductData = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + BEARER_TOKEN,
      "Access-Control-Allow-Origin": "*",
      withCredentials: true,
    },
    credentials: "same-origin",
    mode: "no-cors",
    withCredentials: false,
  };
   let response = await axios.get(fullUrl, config);
   return response
};