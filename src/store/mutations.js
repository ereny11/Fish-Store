
export default {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.id === productData.id
      );
      if (productInCartIndex >= 0) {
        state.cart[productInCartIndex].qty++;
      } else {
        const newItem = {
          id: productData.id,
          model: productData.model,
          imgSrc: productData.imgSrc,
          description: productData.description,
          price: productData.price,
          qty: 1,
        };
        state.cart.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
      localStorage.setItem('storedState', JSON.stringify(state))
    },

    removeProductFromCart(state, payload) {
      console.log("removeProductFromCart")
      const prodId = payload.id;
      const productInCartIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === prodId
      );
      const prodData = state.cart[productInCartIndex];
      state.cart.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
      localStorage.setItem('storedState', JSON.stringify(state))
    },

    addNewProduct(state, payload) {
        payload.id = state.nextId
        state.nextId++
        console.log("addNewProduct")
        state.products.push(payload)
        localStorage.setItem('storedState', JSON.stringify(state))
    },
  };