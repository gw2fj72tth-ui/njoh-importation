function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !message){ alert('Please enter name and message.'); return; }
  // Simple client-side handling: open WhatsApp with prefilled message
  const phone = '237654097409';
  const text = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank');
}
