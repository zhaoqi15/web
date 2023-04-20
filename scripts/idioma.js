const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', function() {
  const selectedLanguage = languageSelector.value;
  // Aquí se debe añadir el código para cambiar el idioma de la página
  const translations = {
    en: {
      greeting: 'Hello!',
      buttonText: 'Click me'
    },
    es: {
      greeting: '¡Hola!',
      buttonText: 'Haz clic aquí'
    },
    fr: {
      greeting: 'Bonjour!',
      buttonText: 'Cliquez ici'
    }
  };
  
  function changeLanguage(selectedLanguage) {
    const greeting = document.getElementById('greeting');
    const button = document.getElementById('button');
    greeting.textContent = translations[selectedLanguage].greeting;
    button.textContent = translations[selectedLanguage].buttonText;
  }
  
  languageSelector.addEventListener('change', function() {
    const selectedLanguage = languageSelector.value;
    changeLanguage(selectedLanguage);
  });
});
