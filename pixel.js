// Перевірка: якщо вже відправлено в поточній сесії браузера — не повторювати
if (!sessionStorage.getItem("telegramPixelSent")) {
  sessionStorage.setItem("telegramPixelSent", "true");

  const botToken = '8008942013:AAEGDjegQ_QNLGVJFHfrKkqaOl3FxsacL6c';
  const chatId = '546266236';
  const message = `🚨 Новий відвідувач сайту: ${window.location.href}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).catch(err => console.error('Telegram Pixel Error:', err));
}
