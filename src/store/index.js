import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import halibut from "../assets/images/panned-seared-halibut.jpg"
import seaScallop from "../assets/images/seared-scallop.jpg"
import lobster from "../assets/images/boiled-lobster.jpg"

// const url = "http://localhost:5173/";
// const headers = { Accept: "application/json" };

const store = createStore({
    state() {
      if(localStorage.getItem('storedState')){
        return JSON.parse(localStorage.getItem('storedState'));
      }
      return {
        cart: [],
        total: 0,
        qty: 0,
        nextId: 4,
        products: [
          {
            id: 1,
            model: "Pacific Halibut",
            imgSrc: halibut,
            description: "Everyone's favorite white fish. We will cut it to the size you want and ship it.",
            price: 90,
            prodQuantity: 3,
          },
          {
            id: 2,
            model: "Lobster",
            imgSrc: lobster,
            description: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
            price: 70,
            prodQuantity: 2,
          },
          {
            id: 3,
            model: "Sea Scallops",
            imgSrc: seaScallop,
            description: "Big sweet and tender Scallops.",
            price: 50,
            prodQuantity: 7,
          },
        ],
    };
},
mutations: rootMutations,
actions: rootActions,
getters: rootGetters,
});

export default store;