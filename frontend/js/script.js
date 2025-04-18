function sendData() {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error('Error:', err));
  }
  