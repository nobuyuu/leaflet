let lat = 35.7100069; // 緯度
let lng = 139.8108103; // 経度
let zoom = 16; // ズームレベル

let map = L.map("map"); // 地図の生成
map.setView([lat, lng], zoom); // 緯度経度、ズームレベルを設定する

// タイルレイヤを生成し、地図に追加する
// 今回はOpenStreetMapを表示する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    // 著作物の表示
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

// アイコンを表示する
// lat, lingの順で指定する
let marker = L.marker([35.709058, 139.8136911]).addTo(map);
// ポップアップを表示する
marker.bindPopup("押上駅");
