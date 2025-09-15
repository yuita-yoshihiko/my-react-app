import { useState, useEffect } from 'react';

function UserData() {
  // ユーザーデータを管理するState
  const [user, setUser] = useState(null);
  // ローディング状態を管理するState
  const [loading, setLoading] = useState(true);

  // コンポーネントがマウントされた時にAPIからデータを取得
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // 空の依存配列でマウント時のみ実行

  // ローディング中の表示
  if (loading) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <div className="text-center">
          <p className="text-lg">データを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">ユーザー情報</h2>

      {user && (
        <div className="space-y-2">
          <div className="p-3 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">名前</p>
            <p className="font-bold text-lg">{user.name}</p>
          </div>

          <div className="p-3 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">メールアドレス</p>
            <p className="font-bold">{user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserData;
