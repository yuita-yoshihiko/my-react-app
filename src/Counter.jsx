import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // リセット機能
  const handleReset = () => {
    setCount(0);
  };

  // 増加
  const handleAdd = (number) => {
    setCount(prev => prev + number);
  };

  // 減少
  const handleSubtract = (number) => {
    setCount(prev => prev - number);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">カウンター</h2>
      <div className="text-4xl font-bold text-center mb-6 text-blue-600">
        {count}
      </div>

      {/* 基本的な増減ボタン */}
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={() => handleAdd(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          +1
        </button>
        <button
          onClick={() => handleSubtract(1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -1
        </button>
      </div>

      {/* 大きな増減ボタン */}
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={() => handleAdd(5)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          +5
        </button>
        <button
          onClick={() => handleSubtract(5)}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          -5
        </button>
      </div>

      {/* リセットボタン */}
      <div className="flex justify-center">
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          リセット
        </button>
      </div>
    </div>
  );
}

export default Counter;
