<script>
document.addEventListener('DOMContentLoaded', () => {
  const updateTotal = () => {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
      const qty = parseInt(item.querySelector('.qty').textContent);
      total += price * qty;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
  };

  document.querySelectorAll('.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const qtyElem = btn.parentElement.querySelector('.qty');
      qtyElem.textContent = parseInt(qtyElem.textContent) + 1;
      updateTotal();
    });
  });

  document.querySelectorAll('.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const qtyElem = btn.parentElement.querySelector('.qty');
      let qty = parseInt(qtyElem.textContent);
      if (qty > 1) {
        qtyElem.textContent = qty - 1;
        updateTotal();
      }
    });
  });

  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.cart-item').remove();
      updateTotal();
    });
  });

  document.querySelectorAll('.like').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
    });
  });

  updateTotal(); // initial call
});
</script>
