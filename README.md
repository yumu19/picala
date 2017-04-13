# picala
- 聴講者の感情を照明色で表現するインタラクティブなプレゼンテーションシステム
  - https://speakerdeck.com/yumu19/picala

## Usage
### hueの準備
- Phillips hue をネットワークに設置
- iPhoneアプリなどでhueブリッジのIPアドレスを取得 or 設定

### サーバPCでの準備
- インターネットで公開できるサーバを用意
- admin.html 内のhue設定(IPアドレス / ユーザ名 / 点灯時間)を書き換え
- 下記コマンドでnode.jsアプリケーションを起動

 $ node app.js

### ブリッジPCでの準備
- hueブリッジと同一のLANに設置
- Webブラウザで <Server PC's URL>/admin.html にアクセス

### 聴講者
- PCやスマートフォンのWebブラウザで <Server PC's URL> にアクセス
- ボタンを押す
