// Optional: Add animations or interactivity here if needed
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
});
