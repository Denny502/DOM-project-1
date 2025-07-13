document.addEventListener("DOMContentLoaded", function () 
{
  function updateTotal() {
    let total = 0;
    const products = document.querySelectorAll(".card-body .card");
    products.forEach((card) => {
      const unitPriceText = card.querySelector(".unit-price").textContent;
      const unitPrice = parseFloat(unitPriceText.replace("$", ""));
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += unitPrice * quantity;
    });
    document.querySelector(".total").textContent = total + " $";
  }
  document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qtySpan = btn.nextElementSibling;
      qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
      updateTotal();
    });
  });
  document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qtySpan = btn.previousElementSibling;
      let currentQty = parseInt(qtySpan.textContent);
      if (currentQty > 0) {
        qtySpan.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });
  document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productCard = btn.closest(".card-body");
      productCard.remove();
      updateTotal();
    });
  });
  document.querySelectorAll(".fa-heart").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("text-danger");
    });
  });
  updateTotal();
});
