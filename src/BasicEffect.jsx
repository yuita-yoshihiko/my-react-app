import { useState, useEffect } from 'react';

function BasicEffect() {
  const [count, setCount] = useState(0);

  // コンポーネントがマウントされた時に実行される
  useEffect(() => {
    console.log('コンポーネントが表示されました');
  }, []); // 空の依存配列

  // countが変更される度に実行される
  useEffect(() => {
    console.log('countが変更されました:', count);
  }, [count]); // countを依存配列に指定

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">useEffect の基本</h2>

      <div className="text-center mb-4">
        <p className="text-lg mb-2">カウント: {count}</p>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          +1
        </button>
      </div>

      <div className="text-sm text-gray-600">
        <p>ブラウザの開発者ツールのコンソールを確認してください</p>
      </div>
    </div>
  );
}

export default BasicEffect;
