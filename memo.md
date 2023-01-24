## メモ

気づき、教えていただいたいことここにメモってく

### 処理の役割は可能な限りまとめる

例えば、ある特定の文字列を探してその文字列があった時に、return するという処理を考えると

1. 文字列群を分割する
2. 分割した中から条件に応じて特定の文字列を抽出する
3. その文字列があればの return して処理を中断
   という三つのことをしたい時に
   一つ一つの工程を一つのメソッドで行うのは冗長になってしまうので、可能な限りまとめる。
   【例】
   🌟map を使用
4. map で配列をまわす
5. 配列の中のテキストのみを return する
6. if 文で map から得られた値とユーザから受け取った文字列を比較し合致すれば return で処理をそこで終了させる
   という三段階で行っていた。

🌟find を使用

1. find で配列の中にユーザからうけっとた値があるかどうかを検索
2. if 文で find から返ってきたものがあれば return して処理を中断する

後者の方が何がしたいかもぱっと見でわかりやすいし、読みやすいコードになった。どのように書いたら今後読みやすいか、そもそももっといいメソッドはないか意識して書きたい。