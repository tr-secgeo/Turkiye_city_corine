ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([27.917284, 40.191345, 30.004638, 41.982715]);
var wms_layers = [];

var format_istanbul_il_0 = new ol.format.GeoJSON();
var features_istanbul_il_0 = format_istanbul_il_0.readFeatures(json_istanbul_il_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_istanbul_il_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_istanbul_il_0.addFeatures(features_istanbul_il_0);
var lyr_istanbul_il_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_istanbul_il_0, 
                style: style_istanbul_il_0,
                popuplayertitle: "istanbul_il",
                interactive: true,
    title: 'istanbul_il<br />\
    <img src="styles/legend/istanbul_il_0_0.png" /> Bitki Degisim Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_1.png" /> Bosaltim Sahalari<br />\
    <img src="styles/legend/istanbul_il_0_2.png" /> Celtik Tarlalari<br />\
    <img src="styles/legend/istanbul_il_0_3.png" /> Deniz ve Okyanus<br />\
    <img src="styles/legend/istanbul_il_0_4.png" /> Dogal Bitki Ortusu ile Birlikte Bulunan Tarim Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_5.png" /> Dogal Çayirliklar<br />\
    <img src="styles/legend/istanbul_il_0_6.png" /> Endustriyel Ticari Birimler<br />\
    <img src="styles/legend/istanbul_il_0_7.png" /> Genis Yaprakli Ormanlar<br />\
    <img src="styles/legend/istanbul_il_0_8.png" /> Hava Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_9.png" /> Igne Yaprakli Ormanlar<br />\
    <img src="styles/legend/istanbul_il_0_10.png" /> Insaat Sahalari<br />\
    <img src="styles/legend/istanbul_il_0_11.png" /> Karasal Batakliklar<br />\
    <img src="styles/legend/istanbul_il_0_12.png" /> Karayollari, Demiryollari ve İlgili Alanlar<br />\
    <img src="styles/legend/istanbul_il_0_13.png" /> Karisik Ormanlar<br />\
    <img src="styles/legend/istanbul_il_0_14.png" /> Karisik Tarim Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_15.png" /> Kesikli/Sureksiz Sehir Yapisi<br />\
    <img src="styles/legend/istanbul_il_0_16.png" /> Kiyi Lagunleri<br />\
    <img src="styles/legend/istanbul_il_0_17.png" /> Limanlar<br />\
    <img src="styles/legend/istanbul_il_0_18.png" /> Maden Cikarim Sahalari<br />\
    <img src="styles/legend/istanbul_il_0_19.png" /> Mera Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_20.png" /> Meyve Bahceleri<br />\
    <img src="styles/legend/istanbul_il_0_21.png" /> Sahiller, Kumsallar ve Kumluklar<br />\
    <img src="styles/legend/istanbul_il_0_22.png" /> Seyrek Bitki Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_23.png" /> Spor ve Eglence Alanlari<br />\
    <img src="styles/legend/istanbul_il_0_24.png" /> Su Kutleleri<br />\
    <img src="styles/legend/istanbul_il_0_25.png" /> Su Yollari<br />\
    <img src="styles/legend/istanbul_il_0_26.png" /> Sulanmayan Ekilebilir Alanlar<br />\
    <img src="styles/legend/istanbul_il_0_27.png" /> Surekli Sehir Yapisi<br />\
    <img src="styles/legend/istanbul_il_0_28.png" /> Sürekli Sulanan Alanlar<br />\
    <img src="styles/legend/istanbul_il_0_29.png" /> Yesil Yerlesim Alanlari<br />'
        });

lyr_istanbul_il_0.setVisible(true);
var layersList = [lyr_istanbul_il_0];
lyr_istanbul_il_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_18': 'Code_18', 'Remark': 'Remark', 'Area_Ha': 'Area_Ha', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Arazi_Ortu': 'Arazi_Ortu', });
lyr_istanbul_il_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code_18': 'TextEdit', 'Remark': 'TextEdit', 'Area_Ha': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Arazi_Ortu': 'TextEdit', });
lyr_istanbul_il_0.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Code_18': 'inline label - visible with data', 'Remark': 'inline label - visible with data', 'Area_Ha': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Arazi_Ortu': 'inline label - visible with data', });
lyr_istanbul_il_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});