(function () {
  // Захист: не надсилати повідомлення більше одного разу
  if (window.__telegramPixelSent) return;
  window.__telegramPixelSent = true;

  // Ваші дані
  const botToken = '8008942013:AAEGDjegQ_QNLGVJFHfrKkqaOl3FxsacL6c';
  const chatId = '546266236';
  const message = `🚨 Новий відвідувач сайту`;

  // Відправка POST-запиту до Telegram API
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).then(response => {
    if (!response.ok) {
      console.error('❌ Не вдалося надіслати повідомлення до Telegram');
    }
  }).catch(error => {
    console.error('⚠️ Помилка під час відправки повідомлення:', error);
  });
})();
