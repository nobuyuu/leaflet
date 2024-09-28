let lat = 35.7100069; // 緯度
let lng = 139.8108103; // 経度
let zoom = 16; // ズームレベル

let map = L.map("map"); // 地図の生成
map.setView([33.4943712, 130.5189245], 14); // 緯度経度、ズームレベルを設定する

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
let marker = L.marker([33.4943712, 130.5189245]).addTo(map);
// ポップアップを表示する
marker.bindPopup("二日市駅");

//　円を追加
let circle = L.circle([33.5031989, 130.5065299], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("都府楼南駅");

// 三角形を表示
let polygon = L.polygon([
    [33.5083047, 130.5238172],
    [33.4945121, 130.5353455],
    [33.4959983, 130.5225263]
]).addTo(map);

polygon.bindPopup("△");


let popup = L.popup()
    .setLatLng([33.4943712, 130.5189245])
    .setContent("ポップアップウィンドウ")
    .openOn(map);

//　クリックした箇所の経度緯度を表示
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("緯度経度" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//　アイコンの作成
let LeafIcon = L.Icon.extend({
    options: {
        iconUrl: 'leaf-green.png',
        shadowUrl: 'images/leaf-shadow.png',
        iconSize: [38, 95],  // アイコンのサイズ
        shadowSize: [50, 64],  // 影の大きさ
        iconAnchor: [22, 94],  // マーカーの位置に対応するアイコンのポイント
        shadowAnchor: [4, 62],  // マーカーの位置に対応する影のポイント
        popupAnchor: [-3, -76],  // iconAnchor を基準にしてポップアップが開くポイント
    }

});
let greenIcon = new LeafIcon({iconUrl: 'images/leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'images/leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'images/leaf-orange.png'});

L.marker([33.480821, 130.527019], {icon: greenIcon}).addTo(map);
L.marker([33.48429, 130.538263], {icon: redIcon}).addTo(map);
