export async function sendTelegramNotification(data) {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram bot token or Chat ID is missing!");
    return;
  }

  // 1. Заголовок
  const header = '🔔 <b>Нова відповідь на запрошення!</b> 💍';

  // 2. Блок гостя
  const guestInfoLines = [
    `👤 <b>Гість / Гості:</b> ${data.guestNames}`,
    data.isAttending === 'yes' ? '✅ <b>Будуть на весіллі</b>' : '❌ <b>На жаль, не зможуть</b>',
  ];

  if (data.isAttending === 'yes') {
    guestInfoLines.push(`👥 <b>Кількість гостей:</b> ${data.guestsCount}`);
  }
  const guestBlock = guestInfoLines.join('\n');

  // 3. Побажання
  const wishesBlock = data.wishes ? `💌 <b>Побажання:</b> <i>«${data.wishes}»</i>` : '';

  // 4. Час
  const timeBlock = `⏰ <i>${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}</i>`;

  // Збираємо повідомлення з подвійними пропусками
  const fullMessage = [
    header,
    guestBlock,
    wishesBlock,
    timeBlock
  ]
    .filter(Boolean)
    .join('\n\n');

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: fullMessage,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.description || 'Помилка надсилання в Telegram');
  }

  return response.json();
}