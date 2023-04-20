function saveToFile(text) {
    const fileName = `users.txt`;
    const fileContent = new Blob([text], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(fileContent);
    
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  const loginButton = document.getElementById('login');
  loginButton.addEventListener('click', () => {
    const text = document.getElementById('username1').value;
    saveToFile(text);
  });