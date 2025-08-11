// Minimal JS for year and a mailto fallback contact form
document.getElementById('year').textContent = new Date().getFullYear();

function handleContact(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = encodeURIComponent(data.get('name'));
  const email = encodeURIComponent(data.get('email'));
  const message = encodeURIComponent(data.get('message'));
  const subject = encodeURIComponent('Website inquiry from ' + data.get('name'));
  // Update this address to your inbox
  const to = 'hello@example.com';
  window.location.href = `mailto:${to}?subject=${subject}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
  return false;
}
