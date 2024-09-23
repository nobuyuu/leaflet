let lat = 35.7100069; // 緯度
let lng = 139.8108103; // 経度
let zoom = 16; // ズームレベル
// var map = L.map('map').setView([51.505, -0.09], 13);
// var marker = L.marker([51.5, -0.09]).addTo(map);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(map);

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
