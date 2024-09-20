// Add to Cart Notification
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
