// Filter the project cards
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
const count = document.getElementById('count');

function show(type) {
  let shown = 0;
  cards.forEach(card => {
    const match = type === 'all' || card.dataset.type === type;
    card.hidden = !match;
    if (match) shown++;
  });
  count.textContent = shown === 1 ? 'Showing 1 project.' : 'Showing ' + shown + ' projects.';
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.setAttribute('aria-pressed', c === chip));
    show(chip.dataset.filter);
  });
});

show('all');

// Keep the footer year up to date
document.getElementById('year').textContent = new Date().getFullYear();
