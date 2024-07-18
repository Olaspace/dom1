document.addEventListener('DOMContentLoaded', () => {
  const updateTotalPrice = () => {
    let total = 0;
    document.querySelectorAll('.card-body').forEach(card => {
      const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', '').trim());
      const quantity = parseInt(card.querySelector('.quantity').textContent.trim());
      total += unitPrice * quantity;
    });
    document.querySelector('.total').textContent = `${total} $`;
  };

  document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', (event) => {
      const quantityElem = event.target.nextElementSibling;
      let quantity = parseInt(quantityElem.textContent.trim());
      quantityElem.textContent = quantity + 1;
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', (event) => {
      const quantityElem = event.target.previousElementSibling;
      let quantity = parseInt(quantityElem.textContent.trim());
      if (quantity > 0) {
        quantityElem.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
  });

  document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card-body');
      card.querySelector('.quantity').textContent = '0';
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', (event) => {
      event.target.classList.toggle('liked');
      if (event.target.classList.contains('liked')) {
        event.target.style.color = 'red';
      } else {
        event.target.style.color = 'black';
      }
    });
  });

  updateTotalPrice();
});
