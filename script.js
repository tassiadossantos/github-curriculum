// Selecting elements
const headerTitle = document.querySelector('header h1');
const headerImage = document.querySelector('header img');

// Hover effect on header elements
headerTitle.addEventListener('mouseover', () => {
  headerTitle.style.color = '#a2a2a2';
});

headerTitle.addEventListener('mouseout', () => {
  headerTitle.style.color = '#333';
});

headerImage.addEventListener('mouseover', () => {
  headerImage.style.transform = 'scale(1.1)';
});

headerImage.addEventListener('mouseout', () => {
  headerImage.style.transform = 'scale(1)';
});

// Hover effect on nav links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#c3c3c3';
    link.style.color = '#fff';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '';
    link.style.color = '#fff';
  });
});

// Hover effect on section headings
const sectionHeadings = document.querySelectorAll('section h2');
sectionHeadings.forEach((heading) => {
  heading.addEventListener('mouseover', () => {
    heading.style.color = '#a2a2a2';
  });

  heading.addEventListener('mouseout', () => {
    heading.style.color = '#333';
  });
});