import { useState } from 'react';

function MessageApp() {
  // 入力されたメッセージを管理するState
  const [message, setMessage] = useState('');

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">メッセージアプリ</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          メッセージを入力してください
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="こんにちは！今日はいい天気ですね。"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-bold mb-2">入力されたメッセージ</h3>
        <p className="text-blue-600">{message}</p>
        <p className="text-sm text-gray-500 mt-2">
          文字数: {message.length}文字
        </p>
      </div>
    </div>
  );
}

export default MessageApp;
