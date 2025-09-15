import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(3);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      // 1秒ごとにsecondsを1減らす
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    // クリーンアップ関数
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds]); // isActiveとsecondsの変化を監視

  // タイマーを開始する関数
  const startTimer = () => {
    setIsActive(true);
  };

  // タイマーをリセットする関数
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(3);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">3秒タイマー</h2>

      <div className="text-center">
        <div className="text-6xl font-bold mb-6 text-blue-600">
          {seconds}
        </div>

        {seconds === 0 ? (
          <div className="mb-4">
            <p className="text-2xl font-bold text-green-600 mb-4">時間です！</p>
            <button
              onClick={resetTimer}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              リセット
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <button
              onClick={startTimer}
              disabled={isActive}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isActive ? 'カウント中...' : 'スタート'}
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              リセット
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timer;
