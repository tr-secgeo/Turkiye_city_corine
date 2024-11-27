var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
        highlightLayer.setStyle({
            color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 1
        });
    }
}
var map = L.map('map', {
    zoomControl: false, maxZoom: 28, minZoom: 1
}).fitBounds([[37.91798935983334, 33.13455118204995], [39.112844040166664, 34.526829447049934]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="">Aksaray Arazi Örtüsü</a> &middot; <a href="https://www.linkedin.com/in/se%C3%A7geo-apps-71a48118b/" target="_blank">ⓈeçGEO</a>  ');
var autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector('td.visible-with-data');
        var key = td ? td.id : '';
        if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
}
// add class to format popup if it contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    if (tempDiv.querySelector('td img')) {
        popup._contentNode.classList.add('media');
        // Delay to force the redraw
        setTimeout(function () {
            popup.update();
        }, 10);
    } else {
        popup._contentNode.classList.remove('media');
    }
}
var zoomControl = L.control.zoom({
    position: 'topleft'
}).addTo(map);
L.control.locate({ locateOptions: { maxZoom: 19 } }).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
function pop_AksarayAraziOrtusu_0(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">OBJECTID</th>\
                        <td class="visible-with-data" id="OBJECTID">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Code_18</th>\
                        <td class="visible-with-data" id="Code_18">' + (feature.properties['Code_18'] !== null ? autolinker.link(feature.properties['Code_18'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Remark</th>\
                        <td class="visible-with-data" id="Remark">' + (feature.properties['Remark'] !== null ? autolinker.link(feature.properties['Remark'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Area_Ha</th>\
                        <td class="visible-with-data" id="Area_Ha">' + (feature.properties['Area_Ha'] !== null ? autolinker.link(feature.properties['Area_Ha'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">ID</th>\
                        <td class="visible-with-data" id="ID">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Shape_Leng</th>\
                        <td class="visible-with-data" id="Shape_Leng">' + (feature.properties['Shape_Leng'] !== null ? autolinker.link(feature.properties['Shape_Leng'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Shape_Area</th>\
                        <td class="visible-with-data" id="Shape_Area">' + (feature.properties['Shape_Area'] !== null ? autolinker.link(feature.properties['Shape_Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Arazi_Ortu</th>\
                        <td class="visible-with-data" id="Arazi_Ortu">' + (feature.properties['Arazi_Ortu'] !== null ? autolinker.link(feature.properties['Arazi_Ortu'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function (e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}
var pattern_AksarayAraziOrtusu_0_0 = new L.StripePattern({
    weight: 1.0,
    spaceWeight: 7.0,
    color: '#000000',
    opacity: 1.0,
    spaceOpacity: 0,
    angle: 315
});
pattern_AksarayAraziOrtusu_0_0.addTo(map);
var pattern_AksarayAraziOrtusu_0_0 = new L.StripePattern({
    weight: 1.0,
    spaceWeight: 7.0,
    color: '#377eb8',
    opacity: 1.0,
    spaceOpacity: 0,
    angle: 315
});
pattern_AksarayAraziOrtusu_0_0.addTo(map);
function style_AksarayAraziOrtusu_0_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_AksarayAraziOrtusu_0rule0_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(26,53,205,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule1_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(99,37,215,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule2_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(148,89,64,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule3_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(55,126,184,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule4_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(148,17,109,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule5_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(53,239,162,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule6_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(146,77,163,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule7_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(128,62,0,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule8_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(56,128,54,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule9_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(183,125,212,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule10_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            stroke: false,
            fillOpacity: 1,
            fillPattern: pattern_AksarayAraziOrtusu_0_0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule11_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(22,202,43,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule12_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(195,121,78,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule13_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(110,232,86,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule14_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(186,209,58,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule15_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(179,90,42,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule16_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(145,54,104,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule17_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(247,225,55,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule18_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(247,247,247,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,0,0,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule19_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 4.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(178,68,92,1.0)',
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule20_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(153,153,30,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule21_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            stroke: false,
            fillOpacity: 1,
            fillPattern: pattern_AksarayAraziOrtusu_0_0,
            interactive: true,
        };
    }
    else if (exp_AksarayAraziOrtusu_0rule22_eval_expression(context)) {
        return {
            pane: 'pane_AksarayAraziOrtusu_0',
            opacity: 1,
            color: 'rgba(38,89,128,1.0)',
            dashArray: '',
            lineCap: 'square',
            lineJoin: 'bevel',
            weight: 4.0,
            fillOpacity: 0,
            interactive: true,
        };
    }
    else {
        return { fill: false, stroke: false };
    }
}
map.createPane('pane_AksarayAraziOrtusu_0');
map.getPane('pane_AksarayAraziOrtusu_0').style.zIndex = 400;
map.getPane('pane_AksarayAraziOrtusu_0').style['mix-blend-mode'] = 'normal';
var layer_AksarayAraziOrtusu_0 = new L.geoJson(json_AksarayAraziOrtusu_0, {
    attribution: '',
    interactive: true,
    dataVar: 'json_AksarayAraziOrtusu_0',
    layerName: 'layer_AksarayAraziOrtusu_0',
    pane: 'pane_AksarayAraziOrtusu_0',
    onEachFeature: pop_AksarayAraziOrtusu_0,
    style: style_AksarayAraziOrtusu_0_0,
});
bounds_group.addLayer(layer_AksarayAraziOrtusu_0);
map.addLayer(layer_AksarayAraziOrtusu_0);
var overlaysTree = [
    { label: 'AksarayAraziOrtusu<br /><table><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SürekliŞehirYapısı0.png" /></td><td>Sürekli Şehir Yapısı</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_KesikliSüreksizŞehirYapısı1.png" /></td><td>Kesikli/Süreksiz Şehir Yapısı</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_EndüstriyelveTicariBirimler2.png" /></td><td>Endüstriyel ve Ticari Birimler</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_MadenÇıkarımSahaları3.png" /></td><td>Maden Çıkarım Sahaları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_İnşaatSahaları4.png" /></td><td>İnşaat Sahaları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_YeşilŞehirAlanları5.png" /></td><td>Yeşil Şehir Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SporveEğlenceAlanları6.png" /></td><td>Spor ve Eğlence Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SulanmayanEkilebilirAlanlar7.png" /></td><td>Sulanmayan Ekilebilir Alanlar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SürekliSulananAlanlar8.png" /></td><td>Sürekli Sulanan Alanlar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_ÜzümBağları9.png" /></td><td>Üzüm Bağları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_MeraAlanları10.png" /></td><td>Mera Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_KarışıkTarımAlanları11.png" /></td><td>Karışık Tarım Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_DoğalBitkiÖrtüsüileBirlikteBulunanTarımAlanları12.png" /></td><td>Doğal Bitki Örtüsü ile Birlikte Bulunan Tarım Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_GenişYapraklıOrmanlar13.png" /></td><td>Geniş Yapraklı Ormanlar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_İğneYapraklıOrmanlar14.png" /></td><td>İğne Yapraklı Ormanlar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_KarışıkOrmanlar15.png" /></td><td>Karışık Ormanlar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_DoğalÇayırlıklar16.png" /></td><td>Doğal Çayırlıklar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_BitkiDeğişimAlanları17.png" /></td><td>Bitki Değişim Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_ÇıplakKayalıklar18.png" /></td><td>Çıplak Kayalıklar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SeyrekBitkiAlanları19.png" /></td><td>Seyrek Bitki Alanları</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_KarasalBataklıklar20.png" /></td><td>Karasal Bataklıklar</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_TuzBataklığı21.png" /></td><td>Tuz Bataklığı</td></tr><tr><td style="text-align: center;"><img src="legend/AksarayAraziOrtusu_0_SuKütleleri22.png" /></td><td>Su Kütleleri</td></tr></table>', layer: layer_AksarayAraziOrtusu_0 },]
var lay = L.control.layers.tree(null, overlaysTree, {
    //namedToggle: true,
    //selectorBack: false,
    //closedSymbol: '&#8862; &#x1f5c0;',
    //openedSymbol: '&#8863; &#x1f5c1;',
    //collapseAll: 'Collapse all',
    //expandAll: 'Expand all',
    collapsed: false,
});
lay.addTo(map);
document.addEventListener("DOMContentLoaded", function () {
    // set new Layers List height which considers toggle icon
    function newLayersListHeight() {
        var layerScrollbarElement = document.querySelector('.leaflet-control-layers-scrollbar');
        if (layerScrollbarElement) {
            var layersListElement = document.querySelector('.leaflet-control-layers-list');
            var originalHeight = layersListElement.style.height
                || window.getComputedStyle(layersListElement).height;
            var newHeight = parseFloat(originalHeight) - 50;
            layersListElement.style.height = newHeight + 'px';
        }
    }
    var isLayersListExpanded = true;
    var controlLayersElement = document.querySelector('.leaflet-control-layers');
    var toggleLayerControl = document.querySelector('.leaflet-control-layers-toggle');
    // toggle Collapsed/Expanded and apply new Layers List height
    toggleLayerControl.addEventListener('click', function () {
        if (isLayersListExpanded) {
            controlLayersElement.classList.remove('leaflet-control-layers-expanded');
        } else {
            controlLayersElement.classList.add('leaflet-control-layers-expanded');
        }
        isLayersListExpanded = !isLayersListExpanded;
        newLayersListHeight()
    });
    // apply new Layers List height if toggle layerstree
    if (controlLayersElement) {
        controlLayersElement.addEventListener('click', function (event) {
            var toggleLayerHeaderPointer = event.target.closest('.leaflet-layerstree-header-pointer span');
            if (toggleLayerHeaderPointer) {
                newLayersListHeight();
            }
        });
    }
    // Collapsed/Expanded at Start to apply new height
    setTimeout(function () {
        toggleLayerControl.click();
    }, 10);
    setTimeout(function () {
        toggleLayerControl.click();
    }, 10);
    // Collapsed touch/small screen
    var isSmallScreen = window.innerWidth < 650;
    if (isSmallScreen) {
        setTimeout(function () {
            controlLayersElement.classList.remove('leaflet-control-layers-expanded');
            isLayersListExpanded = !isLayersListExpanded;
        }, 500);
    }
});
setBounds();
