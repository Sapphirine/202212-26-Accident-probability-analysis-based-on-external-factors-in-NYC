let map
let markers = []

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(40.730610, -73.935242),
    zoom:11,
  };
  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function setCenter1() {
  map.setCenter({lat:40.730610, lng:-73.935242});
  map.setZoom(11);
}

function setCenter2() {
  map.setCenter({lat:40.790278, lng:-73.959722});
  map.setZoom(12);
}

function setCenter3() {
  map.setCenter({lat:40.650002, lng: -73.949997});
  map.setZoom(12);
}

function setCenter4() {
  map.setCenter({lat:40.742054, lng: -73.769417});
  map.setZoom(12);
}

function setCenter5() {
  map.setCenter({lat:40.837048, lng:-73.865433});
  map.setZoom(12);
}

function setCenter6() {
  map.setCenter({lat:40.579021, lng: -74.151535});
  map.setZoom(12);
}

// function addMarker() {  
//   m = new google.maps.Marker({
//     position: new google.maps.LatLng(40.730610, -73.935242),
//     map,
//     animation: google.maps.Animation.DROP,
//   })
//   markers.push(m);

//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// } 

// function removeMarker() {  
//   for (let i = 0; i < markers.length; i++) {
//     markers[i].setMap(null);
//   }
//   markers = [];
// } 

// ============================= functions for Manhattan =============================

let manhattan_spring_centers = []

function check_m_1() {
  var decider = document.getElementById('switch1');
  if(decider.checked){
    for (var i = 0; i < manhattan_spring.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#51803e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#8fbc8f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(manhattan_spring[i][0], manhattan_spring[i][1]),
        radius: manhattan_spring[i][2]/5,
      });
      manhattan_spring_centers.push(c);
    }
    
    for (let i = 0; i < manhattan_spring_centers.length; i++) {
      manhattan_spring_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < manhattan_spring_centers.length; i++) {
      manhattan_spring_centers[i].setMap(null);
    }
    manhattan_spring_centers = [];
  }
}

let manhattan_spring = [
  [ 40.81338717, -73.9414936, 1148],
  [ 40.73732848, -74.00291764, 1653],
  [ 40.76101836, -73.96693218, 2748],
  [ 40.86481068, -73.92146385, 866],
  [ 40.78847445, -73.97364905, 1129],
  [ 40.71453987, -74.00703148, 2803],
  [ 40.71949113, -73.99173329, 3184],
  [ 40.80796738, -73.95561813, 1429],
  [ 40.7310417, -73.98310714, 1784],
  [ 40.80017432, -73.93829445, 1693],
  [ 40.75768794, -73.98437931, 2181],
  [ 40.75626257, -73.99660841, 2709],
  [ 40.74460592, -73.99048801, 2288],
  [ 40.78712164, -73.94828221, 1334],
  [ 40.84677472, -73.93650584, 1390],
  [ 40.70431217, -73.81189308, 12],
  [ 40.8285031, -73.9439853, 1258],
  [ 40.77031754, -73.98394352, 1628],
  [ 40.74760717, -73.97680405, 2279],
  [ 40.77328222, -73.95682569, 1570],
];


let manhattan_summer_centers = []

function check_m_2() {
  var decider = document.getElementById('switch2');
  if(decider.checked){
    for (var i = 0; i < manhattan_summer.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f44336",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(manhattan_summer[i][0], manhattan_summer[i][1]),
        radius: manhattan_summer[i][2]/5,
      });
      manhattan_summer_centers.push(c);
    }
    
    for (let i = 0; i < manhattan_summer_centers.length; i++) {
      manhattan_summer_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < manhattan_summer_centers.length; i++) {
      manhattan_summer_centers[i].setMap(null);
    }
    manhattan_summer_centers = [];
  }
}

let manhattan_summer = [
  [40.78073219209485, -73.97880333517784, 1286],
  [40.86337800268576, -73.92350338854074, 1114],
  [40.72001876535987, -73.9846382995904, 1714],
  [40.81873954018913, -73.94638768360915, 2488],
  [40.75911233053221, -73.99461363795521, 2859],
  [40.76133370983721, -73.96597329723991, 2813],
  [40.70710845951416, -74.01172104048584, 996],
  [40.80270821759968, -73.93939608429321, 2520],
  [40.74440152192983, -74.00145404550437, 1827],
  [40.74902689913319, -73.97621330141847, 2540],
  [40.84233324645892, -73.93874535174692, 2112],
  [40.762483577248254, -73.9827727394312, 2581],
  [40.726763286274505, -74.00421034901962, 1504],
  [40.789474216271195, -73.94746787661018, 1469],
  [40.73510661404408, -73.98531339979499, 1949],
  [40.77429648551069, -73.95572331520191, 1671],
  [40.719289052134506, -73.9954553792973, 2650],
  [40.79955957586513, -73.96393384383317, 1158],
  [40.71489168241042, -74.00662779560261, 1248],
  [40.74860843435692, -73.9892325425011, 2254]
];


let manhattan_fall_centers = []

function check_m_3() {
  var decider = document.getElementById('switch3');
  if(decider.checked){
    for (var i = 0; i < manhattan_fall.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#b7410e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb90f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(manhattan_fall[i][0], manhattan_fall[i][1]),
        radius: manhattan_fall[i][2]/5,
      });
      manhattan_fall_centers.push(c);
    }
    
    for (let i = 0; i < manhattan_fall_centers.length; i++) {
      manhattan_fall_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < manhattan_fall_centers.length; i++) {
      manhattan_fall_centers[i].setMap(null);
    }
    manhattan_fall_centers = [];
  }
}

let manhattan_fall = [
  [40.71975763854128, -73.98819779299251, 2818],
  [40.795503673019525, -73.96826912766934, 871],
  [40.824987576876666, -73.94318401930296, 1490],
  [40.721288677597045, -74.00132348103513, 2684],
  [40.76123219242946, -73.96416323206329, 2032],
  [40.8637005489118, -73.92292918384881, 873],
  [40.74209941256182, -74.00081044460927, 2019],
  [40.79461250179415, -73.94451576959398, 1059],
  [40.75462567421582, -73.99409059887769, 3477],
  [40.74830995023819, -73.97793764063759, 2731],
  [40.81001463615236, -73.95215066191089, 1551],
  [40.782358333932955, -73.95070380686835, 1223],
  [40.73613899937667, -73.98554047226176, 2247],
  [40.71007575035099, -74.00975571193366, 1564],
  [40.771976908269636, -73.95795765872133, 1439],
  [40.845113993503006, -73.93762825666444, 1493],
  [40.76044429480861, -73.9743531116938, 1897],
  [40.780132247873226, -73.9794209271059, 1199],
  [40.80339902852835, -73.93675773648977, 1658],
  [40.76392743723545, -73.98665567676025, 2315]
];


let manhattan_winter_centers = []

function check_m_4() {
  var decider = document.getElementById('switch4');
  if(decider.checked){
    for (var i = 0; i < manhattan_winter.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#003153",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#77ccee",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(manhattan_winter[i][0], manhattan_winter[i][1]),
        radius: manhattan_winter[i][2]/5,
      });
      manhattan_winter_centers.push(c);
    }
    
    for (let i = 0; i < manhattan_winter_centers.length; i++) {
      manhattan_winter_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < manhattan_winter_centers.length; i++) {
      manhattan_winter_centers[i].setMap(null);
    }
    manhattan_winter_centers = [];
  }
}

let manhattan_winter = [
  [40.74994629863577, -73.97697440924287, 2932],
  [40.84437358298837, -73.93793756435963, 1545],
  [40.78182143115141, -73.95119869345426, 1273],
  [40.80852340014204, -73.95487797365058, 1410],
  [40.71912421738088, -73.99613852446936, 2508],
  [40.73577053383059, -73.98520968002887, 2082],
  [40.72054037882489, -73.9851328788249, 1713],
  [40.75818063282847, -73.9930355693906, 2839],
  [40.76807154798243, -73.983261233114, 2280],
  [40.760768995488995, -73.9673201013085, 2904],
  [40.823822086, -73.94343705941931, 1549],
  [40.86385927916666, -73.92280828991227, 912],
  [40.74759196268657, -73.98996002228512, 1943],
  [40.770763722515625, -73.95831959388465, 1435],
  [40.793063902229314, -73.94512121677283, 952],
  [40.788577481915716, -73.97342872352493, 1305],
  [40.72623957993827, -74.00467859621914, 1285],
  [40.744001161738616, -74.00182389562387, 1692],
  [40.71044812348947, -74.00947889490838, 1474],
  [40.803677651911016, -73.9378734045636, 1742]
];


// ============================= functions for Brooklyn =============================

let brooklyn_spring_centers = []

function check_bn_1() {
  var decider = document.getElementById('switch5');
  if(decider.checked){
    for (var i = 0; i < brooklyn_spring.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#51803e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#8fbc8f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(brooklyn_spring[i][0], brooklyn_spring[i][1]),
        radius: brooklyn_spring[i][2]/5,
      });
      brooklyn_spring_centers.push(c);
    }
    
    for (let i = 0; i < brooklyn_spring_centers.length; i++) {
      brooklyn_spring_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < brooklyn_spring_centers.length; i++) {
      brooklyn_spring_centers[i].setMap(null);
    }
    brooklyn_spring_centers = [];
  }
}

let brooklyn_spring = [
  [40.6626809781325, -73.92760872455592, 4169],
  [40.689490507056036, -73.99265028953408, 2969],
  [40.624846713765805, -74.02500723354433, 1896],
  [40.5834133873346, -73.98144279867675, 1587],
  [40.590289478156016, -73.95087464775413, 2115],
  [40.69735491358575, -73.92510615564744, 3177],
  [40.71841454001966, -73.95105614972955, 4053],
  [40.620752932942146, -73.92477200906515, 2470],
  [40.67823365281635, -73.97855480636623, 3786],
  [40.65773775210191, -73.95456468789804, 3144],
  [40.65847840710659, -73.88790668058377, 2365],
  [40.67499766671167, -73.90577250901731, 3706],
  [40.61246067482871, -73.96238407536963, 2773],
  [40.61123698430795, -73.99507732604124, 2377],
  [40.63563690257298, -73.94791757066052, 2604],
  [40.642271619985976, -74.00656145203368, 2837],
  [40.67606429659643, -73.87373192508105, 2468],
  [40.63703365137067, -73.97727975160906, 2515],
  [40.69010466344998, -73.95164231976487, 3670],
  [40.64253056226099, -73.90671374213352, 2982]
];


let brooklyn_summer_centers = []

function check_bn_2() {
  var decider = document.getElementById('switch6');
  if(decider.checked){
    for (var i = 0; i < brooklyn_summer.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f44336",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(brooklyn_summer[i][0], brooklyn_summer[i][1]),
        radius: brooklyn_summer[i][2]/5,
      });
      brooklyn_summer_centers.push(c);
    }
    
    for (let i = 0; i < brooklyn_summer_centers.length; i++) {
      brooklyn_summer_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < brooklyn_summer_centers.length; i++) {
      brooklyn_summer_centers[i].setMap(null);
    }
    brooklyn_summer_centers = [];
  }
}

let brooklyn_summer = [
  [40.65775914622339, -73.92445538510867, 4612],
  [40.64603559764012, -73.89762103097345, 3389],
  [40.703239603722544, -73.93719574667516, 3141],
  [40.58271510165247, -73.98120707961941, 2003],
  [40.65055388359789, -74.00413525925927, 2282],
  [40.67168478406863, -73.90247327818632, 4066],
  [40.621637833474225, -73.9194225756551, 2369],
  [40.62857020361916, -74.02009976729703, 3044],
  [40.68353391409224, -73.9858419048855, 6201],
  [40.63730749565218, -73.97863629262761, 2632],
  [40.672316148113474, -73.87553554020931, 3628],
  [40.62970242430124, -73.93920923641308, 2601],
  [40.68838172561122, -73.91999365825878, 3331],
  [40.6734879245283, -73.9475223409018, 3186],
  [40.691870378406705, -73.96091918448636, 2835],
  [40.61086054693013, -73.99565203634441, 2851],
  [40.59025058399366, -73.95062101030112, 2528],
  [40.613923693607624, -73.96247739125641, 2720],
  [40.719247274979125, -73.95309391205119, 3602],
  [40.649021031605564, -73.95487114361566, 3962]
];


let brooklyn_fall_centers = []

function check_bn_3() {
  var decider = document.getElementById('switch7');
  if(decider.checked){
    for (var i = 0; i < brooklyn_fall.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#b7410e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb90f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(brooklyn_fall[i][0], brooklyn_fall[i][1]),
        radius: brooklyn_fall[i][2]/5,
      });
      brooklyn_fall_centers.push(c);
    }
    
    for (let i = 0; i < brooklyn_fall_centers.length; i++) {
      brooklyn_fall_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < brooklyn_fall_centers.length; i++) {
      brooklyn_fall_centers[i].setMap(null);
    }
    brooklyn_fall_centers = [];
  }
}

let brooklyn_fall = [
  [40.70245655278727, -73.95762018619642, 2643],
  [40.622078293562645, -73.92733154644995, 3177],
  [40.58896756302153, -73.95605793812248, 2972],
  [40.629564317133145, -74.01799079029558, 3823],
  [40.59806892911821, -73.99118566521577, 2665],
  [40.67287258668265, -73.90389458077391, 3329],
  [40.63368016828879, -73.98694573346053, 3144],
  [40.64496225984233, -73.95475570605146, 4314],
  [40.70372599301717, -73.93517076303209, 2691],
  [40.658014039757205, -73.92613606267071, 3953],
  [40.673651127853546, -73.94940547943284, 2786],
  [40.676234636402015, -73.87465794662165, 2366],
  [40.65801660392339, -73.88657293148061, 2137],
  [40.687306036448604, -73.920687746046, 2768],
  [40.667962628952054, -73.99785311047957, 2252],
  [40.679945016580504, -73.97434360124096, 2901],
  [40.61541810080814, -73.96134750290334, 3332],
  [40.692455169224516, -73.98796037023953, 2463],
  [40.6415747386425, -73.90446112718855, 2595],
  [40.72311380243802, -73.9500873298445, 2384]
];


let brooklyn_winter_centers = []

function check_bn_4() {
  var decider = document.getElementById('switch8');
  if(decider.checked){
    for (var i = 0; i < brooklyn_winter.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#003153",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#77ccee",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(brooklyn_winter[i][0], brooklyn_winter[i][1]),
        radius: brooklyn_winter[i][2]/5,
      });
      brooklyn_winter_centers.push(c);
    }
    
    for (let i = 0; i < brooklyn_winter_centers.length; i++) {
      brooklyn_winter_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < brooklyn_winter_centers.length; i++) {
      brooklyn_winter_centers[i].setMap(null);
    }
    brooklyn_winter_centers = [];
  }
}

let brooklyn_winter = [
  [40.58993682048492, -73.95326263992476, 2392],
  [40.69772755401162, -73.92794056302324, 3452],
  [40.611298400616796, -73.993848207633, 2594],
  [40.63767629169497, -73.91961042378252, 2656],
  [40.68923629176874, -73.98280855069034, 3937],
  [40.66223560426783, -73.92539025213391, 3936],
  [40.67252918190135, -73.87545110303824, 3061],
  [40.649673179954505, -73.89516124402218, 3092],
  [40.671218545310616, -73.99133515395857, 2448],
  [40.67559510667861, -73.90503780207271, 3867],
  [40.69569816495823, -73.95738357205772, 2650],
  [40.64419842373817, -73.95193461776606, 4009],
  [40.636846605996816, -73.9779440681096, 2516],
  [40.640418254204654, -74.00728838443092, 2961],
  [40.672879525623514, -73.94946732388108, 2897],
  [40.6144831188926, -73.96159913432886, 2979],
  [40.71809768113262, -73.9505829533864, 3431],
  [40.58498400933969, -73.9819524512195, 1680],
  [40.61530490077452, -73.92774280756264, 2191],
  [40.62453412768359, -74.02407545649717, 2124]
];



// ============================= functions for Queens =============================

let queens_spring_centers = []

function check_q_1() {
  var decider = document.getElementById('switch9');
  if(decider.checked){
    for (var i = 0; i < queens_spring.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#51803e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#8fbc8f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(queens_spring[i][0], queens_spring[i][1]),
        radius: queens_spring[i][2]/4,
      });
      queens_spring_centers.push(c);
    }
    
    for (let i = 0; i < queens_spring_centers.length; i++) {
      queens_spring_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < queens_spring_centers.length; i++) {
      queens_spring_centers[i].setMap(null);
    }
    queens_spring_centers = [];
  }
}

let queens_spring = [
  [40.708181761312765, -73.79185302713249, 3304],
  [40.75338556264312, -73.8677763810599, 3057],
  [40.70240227083336, -73.99541554166666, 96],
  [40.74684401865159, -73.93480514171802, 2920],
  [40.5959326064168, -73.78231135905736, 1761],
  [40.7670525245188, -73.91710115879927, 2183],
  [40.681062586889404, -73.84659565827289, 3170],
  [40.76733513572669, -73.80660615425592, 1721],
  [40.74534518321529, -73.72163238066572, 1432],
  [40.76503766347616, -73.83229639920526, 2891],
  [40.702567341068345, -73.89610139850659, 1741],
  [40.669334949681776, -73.74206690604616, 2514],
  [40.67370123967611, -73.77357628468897, 2720],
  [40.75518659032086, -73.77284636967914, 1860],
  [40.716793552675334, -73.82008932404194, 2767],
  [40.68108256607361, -73.81468327223926, 3258],
  [40.720037836602124, -73.9068805534666, 1601],
  [40.72404525496183, -73.86158477693333, 3013],
  [40.749881904239004, -73.89155848036982, 3516],
  [40.71056966706428, -73.74881386686549, 3020]
];


let queens_summer_centers = []

function check_q_2() {
  var decider = document.getElementById('switch10');
  if(decider.checked){
    for (var i = 0; i < queens_summer.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f44336",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(queens_summer[i][0], queens_summer[i][1]),
        radius: queens_summer[i][2]/4,
      });
      queens_summer_centers.push(c);
    }
    
    for (let i = 0; i < queens_summer_centers.length; i++) {
      queens_summer_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < queens_summer_centers.length; i++) {
      queens_summer_centers[i].setMap(null);
    }
    queens_summer_centers = [];
  }
}

let queens_summer = [
  [40.59993761636364, -73.761085224, 1375],
  [40.74879284234694, -73.89230454617348, 3920],
  [40.745550500908536, -73.72213704482132, 1651],
  [40.723782746920804, -73.86230313343111, 3410],
  [40.681153623056304, -73.84603411099194, 3731],
  [40.768007622722415, -73.80641626259377, 1872],
  [40.75429376022496, -73.77373507566465, 1960],
  [40.669201826853794, -73.74190246195425, 2886],
  [40.67305141146335, -73.77355552513609, 3117],
  [40.715151032998705, -73.81918480310878, 3089],
  [40.58678738444444, -73.82451116777779, 900],
  [40.76616901813045, -73.91717324947825, 2300],
  [40.68160400973379, -73.81351476894321, 3719],
  [40.70735001878077, -73.78989333128081, 3253],
  [40.746658193052966, -73.93487948545173, 3210],
  [40.624134999999995, -74.03755, 6],
  [40.7098841218198, -73.90202056779407, 3341],
  [40.70989028115857, -73.74817043417201, 3418],
  [40.76445567940013, -73.8322218214488, 3523],
  [40.753054205230136, -73.8678002054655, 3824]
];


let queens_fall_centers = []

function check_q_3() {
  var decider = document.getElementById('switch11');
  if(decider.checked){
    for (var i = 0; i < queens_fall.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#b7410e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb90f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(queens_fall[i][0], queens_fall[i][1]),
        radius: queens_fall[i][2]/4,
      });
      queens_fall_centers.push(c);
    }
    
    for (let i = 0; i < queens_fall_centers.length; i++) {
      queens_fall_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < queens_fall_centers.length; i++) {
      queens_fall_centers[i].setMap(null);
    }
    queens_fall_centers = [];
  }
}

let queens_fall = [
  [40.75199121218523, -73.93104832576441, 4446],
  [40.76648573599129, -73.82606184474062, 4162],
  [40.592942317796606, -73.80409501983051, 590],
  [40.70129914829887, -73.79656949199463, 3166],
  [40.719876816176466, -73.74424465141807, 1898],
  [40.71107167382183, -73.90157860760107, 3294],
  [40.665992884654386, -73.74220644211984, 2149],
  [40.75496346743302, -73.89536211921872, 4460],
  [40.747739265753424, -73.72117539502526, 1389],
  [40.67697203128883, -73.84553179010089, 2578],
  [40.76203807377681, -73.77820291473336, 1818],
  [40.69355383916119, -73.74977942612429, 1974],
  [40.74535531704948, -73.8674742642376, 5057],
  [40.710007800377944, -73.85397042596372, 2635],
  [40.67099973301744, -73.77687694037151, 2588],
  [40.5783939612245, -73.84697739714285, 245],
  [40.60139282403178, -73.75654117130087, 1007],
  [40.72654256221374, -73.81556793110684, 2067],
  [40.720807480035425, -73.77891466922625, 1705],
  [40.68471199928154, -73.81884731346457, 3671]
];


let queens_winter_centers = []

function check_q_4() {
  var decider = document.getElementById('switch12');
  if(decider.checked){
    for (var i = 0; i < queens_winter.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#003153",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#77ccee",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(queens_winter[i][0], queens_winter[i][1]),
        radius: queens_winter[i][2]/4,
      });
      queens_winter_centers.push(c);
    }
    
    for (let i = 0; i < queens_winter_centers.length; i++) {
      queens_winter_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < queens_winter_centers.length; i++) {
      queens_winter_centers[i].setMap(null);
    }
    queens_winter_centers = [];
  }
}

let queens_winter = [
  [40.75159181533936, -73.87258527726244, 4422],
  [40.669223886135704, -73.769573845217, 2377],
  [40.71975853409943, -73.74643319179174, 2132],
  [40.686215489553476, -73.85082940680047, 2418],
  [40.76957530218933, -73.80795148532543, 1689],
  [40.66621028042782, -73.73890349721924, 1871],
  [40.74676418576226, -73.72087815097382, 1489],
  [40.71089422174694, -73.90122088653901, 3343],
  [40.72938288956955, -73.81167636986754, 1811],
  [40.75707522564811, -73.77418351042469, 1818],
  [40.75577793519348, -73.90165904311657, 3802],
  [40.694325687506485, -73.74882228895798, 1929],
  [40.75101276223376, -73.93240811676576, 4032],
  [40.672592412433204, -73.82977838931515, 2084],
  [40.70166168780933, -73.8216944253639, 2734],
  [40.725572187511034, -73.86081093835053, 3385],
  [40.76431931249999, -73.83220930196663, 3001],
  [40.680221244906946, -73.80006412477958, 2034],
  [40.70823406173097, -73.78801871897814, 2899],
  [40.595644603210005, -73.78292644254626, 1838]
];


// ============================= functions for Bronx =============================

let bronx_spring_centers = []

function check_bx_1() {
  var decider = document.getElementById('switch13');
  if(decider.checked){
    for (var i = 0; i < bronx_spring.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#51803e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#8fbc8f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(bronx_spring[i][0], bronx_spring[i][1]),
        radius: bronx_spring[i][2]/3,
      });
      bronx_spring_centers.push(c);
    }
    
    for (let i = 0; i < bronx_spring_centers.length; i++) {
      bronx_spring_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < bronx_spring_centers.length; i++) {
      bronx_spring_centers[i].setMap(null);
    }
    bronx_spring_centers = [];
  }
}

let bronx_spring = [
  [40.82921564104661, -73.84911742338512, 1226],
  [40.8341589509975, -73.92047634657108, 1604],
  [40.698995225806456, -74.00593867741935, 31],
  [40.88451229941254, -73.90395188198433, 1527],
  [40.87624534745677, -73.83659551002036, 1961],
  [40.857687403588336, -73.86227441861882, 1481],
  [40.691668333333325, -73.783601, 12],
  [40.68706722222222, -73.90215405555556, 18],
  [40.87774871213705, -73.87319026742162, 1705],
  [40.84136751473501, -73.88488102486895, 1722],
  [40.85156854604811, -73.90754210807559, 2319],
  [40.819440036449436, -73.8890263888989, 2228],
  [40.81275937258847, -73.90795895260233, 1443],
  [40.84707668020654, -73.83880152392427, 1194],
  [40.89314936802687, -73.85541194969007, 1942],
  [40.861474393228704, -73.8930332318386, 2231],
  [40.8311041040083, -73.9036422282654, 1445],
  [40.83109810639205, -73.81661301349432, 705],
  [40.812731921201404, -73.92301604760219, 1981],
  [40.829443177076406, -73.86693789662237, 1787]
];


let bronx_summer_centers = []

function check_bx_2() {
  var decider = document.getElementById('switch14');
  if(decider.checked){
    for (var i = 0; i < bronx_summer.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f44336",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(bronx_summer[i][0], bronx_summer[i][1]),
        radius: bronx_summer[i][2]/3,
      });
      bronx_summer_centers.push(c);
    }
    
    for (let i = 0; i < bronx_summer_centers.length; i++) {
      bronx_summer_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < bronx_summer_centers.length; i++) {
      bronx_summer_centers[i].setMap(null);
    }
    bronx_summer_centers = [];
  }
}

let bronx_summer = [
  [40.8613640909434, -73.89821160264151, 2652],
  [40.88008578058406, -73.90482859352804, 1267],
  [40.87795442443502, -73.87845307768362, 1414],
  [40.837914571141276, -73.86945212468576, 2017],
  [40.811431118384384, -73.91995376149026, 2872],
  [40.88287558599138, -73.83632427966955, 1393],
  [40.81982867679559, -73.8877941767956, 2515],
  [40.696828999999994, -73.80823857142857, 7],
  [40.658424249999996, -73.98548762499999, 8],
  [40.84429744392304, -73.88862288315345, 2127],
  [40.83163216349384, -73.8175045431131, 895],
  [40.844347365058674, -73.8455243363755, 1529],
  [40.8641623931624, -73.83094395192308, 943],
  [40.824576803268755, -73.85473072639225, 1637],
  [40.90470762190813, -73.9005686254417, 283],
  [40.82264233569834, -73.90477413636769, 2241],
  [40.868327785388125, -73.86037265093861, 1967],
  [40.83318869416414, -73.92127049525837, 1645],
  [40.89380066299032, -73.85608563059527, 2172],
  [40.846860037654054, -73.90845520977473, 2357]
];


let bronx_fall_centers = []

function check_bx_3() {
  var decider = document.getElementById('switch15');
  if(decider.checked){
    for (var i = 0; i < bronx_fall.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#b7410e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb90f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(bronx_fall[i][0], bronx_fall[i][1]),
        radius: bronx_fall[i][2]/3,
      });
      bronx_fall_centers.push(c);
    }
    
    for (let i = 0; i < bronx_fall_centers.length; i++) {
      bronx_fall_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < bronx_fall_centers.length; i++) {
      bronx_fall_centers[i].setMap(null);
    }
    bronx_fall_centers = [];
  }
}

let bronx_fall = [
  [40.82997002271427, -73.86688615580952, 2114],
  [40.89298415034326, -73.85532417446225, 2185],
  [40.84150520488347, -73.88707196947833, 1799],
  [40.81662992513573, -73.92314958279044, 1841],
  [40.83869196765329, -73.91936700422833, 1419],
  [40.85313671876146, -73.90663742192662, 2180],
  [40.861696942817815, -73.89279536851768, 2179],
  [40.70213944444444, -73.96382055555556, 9],
  [40.590488, -74.146468, 2],
  [40.88499659864866, -73.904180971835, 1406],
  [40.85127553641976, -73.8359477288066, 987],
  [40.8781167763341, -73.83570659704174, 1727],
  [40.82845200924423, -73.9055860237352, 1603],
  [40.826504031746026, -73.82394012683982, 677],
  [40.86261422214451, -73.8624991074592, 1722],
  [40.85329258780489, -73.79192077804878, 82],
  [40.81924906528252, -73.88972951104452, 2322],
  [40.808456642544165, -73.91261276134274, 1413],
  [40.878796557372475, -73.87635621586307, 1433],
  [40.835727735500654, -73.84985567756827, 1532]
];


let bronx_winter_centers = []

function check_bx_4() {
  var decider = document.getElementById('switch16');
  if(decider.checked){
    for (var i = 0; i < bronx_winter.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#003153",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#77ccee",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(bronx_winter[i][0], bronx_winter[i][1]),
        radius: bronx_winter[i][2]/3,
      });
      bronx_winter_centers.push(c);
    }
    
    for (let i = 0; i < bronx_winter_centers.length; i++) {
      bronx_winter_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < bronx_winter_centers.length; i++) {
      bronx_winter_centers[i].setMap(null);
    }
    bronx_winter_centers = [];
  }
}

let bronx_winter = [
  [40.86100944339839, -73.89090217215845, 1743],
  [40.84575301461115, -73.84077361453261, 1279],
  [40.8937895545938, -73.85480644956479, 2059],
  [40.82693312473683, -73.8230850631579, 751],
  [40.806947702972735, -73.91376328670518, 1279],
  [40.818812607221915, -73.8943167714813, 1892],
  [40.84077502501695, -73.91888596298301, 1477],
  [40.867960675030986, -73.8607351807311, 1592],
  [40.87920143830947, -73.87683511458762, 1460],
  [40.84214907704502, -73.86409817920105, 1588],
  [40.84200819455629, -73.90103883616703, 1335],
  [40.82326040227773, -73.87917996759731, 1316],
  [40.81509579883482, -73.92448306305688, 1459],
  [40.85881249716921, -73.90640223636925, 1624],
  [40.87589642815636, -73.83479900301109, 1887],
  [40.840811005007694, -73.88449494583973, 1288],
  [40.825567059279045, -73.91230262036046, 1513],
  [40.88555588713335, -73.90384550200001, 1500],
  [40.82526091256391, -73.8535470942294, 1386],
  [40.85200406491228, -73.7891882245614, 57]
];


// ============================= functions for Staten Island =============================

let si_spring_centers = []

function check_s_1() {
  var decider = document.getElementById('switch17');
  if(decider.checked){
    for (var i = 0; i < si_spring.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#51803e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#8fbc8f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(si_spring[i][0], si_spring[i][1]),
        radius: si_spring[i][2],
      });
      si_spring_centers.push(c);
    }
    
    for (let i = 0; i < si_spring_centers.length; i++) {
      si_spring_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < si_spring_centers.length; i++) {
      si_spring_centers[i].setMap(null);
    }
    si_spring_centers = [];
  }
}

let si_spring = [
  [40.534075029166665, -74.19278130416666, 168],
  [40.605413094221106, -74.06849466130653, 399],
  [40.58114825281172, -74.1017844410758, 414],
  [40.51686907827716, -74.23797769325843, 267],
  [40.567906564575644, -74.13279876752767, 271],
  [40.544348818620676, -74.21675714482758, 145],
  [40.6311563820296, -74.12205765687105, 474],
  [40.63551190034602, -74.1045036249135, 288],
  [40.73140924999999, -73.94789354166666, 24],
  [40.6093748357143, -74.12068553376625, 308],
  [40.55419699127907, -74.18838187790699, 172],
  [40.522588285542156, -74.2091557674699, 166],
  [40.54781823745021, -74.14651916733068, 251],
  [40.539989589552235, -74.16536875522387, 268],
  [40.616197171979856, -74.08353521845639, 596],
  [40.6156998475, -74.10282970785714, 280],
  [40.55834681768488, -74.16567105016078, 311],
  [40.59277020871459, -74.08828027102398, 454],
  [40.63771566445698, -74.08170184132581, 708],
  [40.56991926946902, -74.11267705619467, 452]
];


let si_summer_centers = []

function check_s_2() {
  var decider = document.getElementById('switch18');
  if(decider.checked){
    for (var i = 0; i < si_summer.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#f44336",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(si_summer[i][0], si_summer[i][1]),
        radius: si_summer[i][2],
      });
      si_summer_centers.push(c);
    }
    
    for (let i = 0; i < si_summer_centers.length; i++) {
      si_summer_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < si_summer_centers.length; i++) {
      si_summer_centers[i].setMap(null);
    }
    si_summer_centers = [];
  }
}

let si_summer = [
  [40.55000810559006, -74.14603666770185, 323],
  [40.632802442067735, -74.12000077896613, 561],
  [40.57656400337838, -74.1046690793919, 590],
  [40.5348454516129, -74.21029853079177, 341],
  [40.612963479704796, -74.06983055719556, 271],
  [40.610788444444445, -74.08872513114753, 549],
  [40.559010606469, -74.17066546091644, 370],
  [40.724851400000006, -73.968884, 5],
  [40.54328092613637, -74.18870855113637, 352],
  [40.527273753333326, -74.23396606666667, 150],
  [40.62567962461539, -74.10435830461537, 325],
  [40.64037573775672, -74.08336500157978, 633],
  [40.511675791666654, -74.2401837962963, 216],
  [40.540338099397594, -74.16206521686748, 332],
  [40.57007572527473, -74.13515909523811, 273],
  [40.5965616925795, -74.07077449469965, 283],
  [40.589880396460174, -74.09110720176992, 565],
  [40.61005322625699, -74.1206354329609, 358],
  [40.62572228370221, -74.08029737625753, 497],
  [40.56696157828283, -74.11703787878788, 398]
];


let si_fall_centers = []

function check_s_3() {
  var decider = document.getElementById('switch19');
  if(decider.checked){
    for (var i = 0; i < si_fall.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#b7410e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb90f",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(si_fall[i][0], si_fall[i][1]),
        radius: si_fall[i][2],
      });
      si_fall_centers.push(c);
    }
    
    for (let i = 0; i < si_fall_centers.length; i++) {
      si_fall_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < si_fall_centers.length; i++) {
      si_fall_centers[i].setMap(null);
    }
    si_fall_centers = [];
  }
}

let si_fall = [
  [40.56789354599999, -74.13419318085714, 350],
  [40.52723650216451, -74.2015039012987, 231],
  [40.63579060062501, -74.08076417075, 797],
  [40.63622511895911, -74.10250823903344, 269],
  [40.632123958898305, -74.12118275508475, 472],
  [40.55912918163264, -74.16618579591835, 294],
  [40.56930289415204, -74.11364135808965, 513],
  [40.751378333333335, -73.92851116666667, 6],
  [40.59369458305084, -74.09983285381358, 236],
  [40.61293574581674, -74.11643133904383, 502],
  [40.547926339175255, -74.1467408419244, 291],
  [40.55500206708074, -74.1918596658385, 161],
  [40.61359307445573, -74.08839666574747, 692],
  [40.51713940166113, -74.23794633953489, 301],
  [40.545065214375, -74.21678964, 160],
  [40.590524831662265, -74.08604190923482, 379],
  [40.577987363882066, -74.10198137027028, 407],
  [40.54034608344371, -74.17986556291392, 151],
  [40.54092050703125, -74.16155076015626, 256],
  [40.60615634864864, -74.06899409977478, 444]
];


let si_winter_centers = []

function check_s_4() {
  var decider = document.getElementById('switch20');
  if(decider.checked){
    for (var i = 0; i < si_winter.length; i++) {
      c = new google.maps.Circle({
        strokeColor: "#003153",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#77ccee",
        fillOpacity: 0.8,
        map,
        center: new google.maps.LatLng(si_winter[i][0], si_winter[i][1]),
        radius: si_winter[i][2],
      });
      si_winter_centers.push(c);
    }
    
    for (let i = 0; i < si_winter_centers.length; i++) {
      si_winter_centers[i].setMap(map);
    }
  }else{
    for (let i = 0; i < si_winter_centers.length; i++) {
      si_winter_centers[i].setMap(null);
    }
    si_winter_centers = [];
  }
}

let si_winter = [
  [40.63493498522013, -74.10753989276729, 319],
  [40.54757135048077, -74.20940589567309, 208],
  [40.570315362521576, -74.11324104024179, 579],
  [40.54252324547283, -74.15659257927565, 497],
  [40.638783201169595, -74.08261496637428, 685],
  [40.56667145785714, -74.13430046023811, 420],
  [40.52850567398843, -74.22013069942196, 173],
  [40.603254160794044, -74.06816963523575, 403],
  [40.7309915, -73.818397, 2],
  [40.908127, -73.896576, 1],
  [40.62092007182411, -74.08063715618891, 618],
  [40.61057846743591, -74.11982689846155, 389],
  [40.515422623754795, -74.2389785340996, 261],
  [40.61254761185681, -74.09611976957497, 442],
  [40.630699520366136, -74.12289156475973, 437],
  [40.59326964511277, -74.0871529731203, 532],
  [40.52877368214286, -74.19295863973213, 224],
  [40.558840831286545, -74.16523517309942, 342],
  [40.55159596267605, -74.18225334049298, 284],
  [40.58191882224449, -74.10081148316634, 499]
];