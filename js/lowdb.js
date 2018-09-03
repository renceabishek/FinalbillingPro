const low = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
//const adapter = new FileSync('lowdb.json')

var paths = document.location.pathname;
console.log('--path '+paths);

var paths1=paths.replace('%20',' ');
while(paths1.includes('%20')){
	paths1=paths1.replace('%20',' ');
}
console.log('appdata path'+process.env.APPDATA);
var customerpath = process.env.APPDATA+'/VEGFRUIT/Customer.json';
const cusadapter1 = new FileSync(customerpath)
const db = low(cusadapter1)
db.defaults({ customer: [
{
      "customerid": "CC001",
      "customername": "RELIANCE RETAIL LTD",
      "cusarea": "SALEM JN",
      "cusmobile": "",
      "custin": "33AABCR17",
      "cusaddress": "JN MAIN ROAD",
      "cusstate": "TAMILNADU",
      "cuspincode": "636001",
      "cusemail": "",
      "cusremarks": ""
    }
]}).write();

var productpath = process.env.APPDATA+'/VEGFRUIT/Product.json';
const prodadapter1 = new FileSync(productpath)
const db1 = low(prodadapter1)
db1.defaults({ product: [
	{
      "productid": "1221",
      "productname": "Lemon",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "லெமன்"
    },
    {
      "productid": "1222",
      "productname": "Coconut",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "தேங்காய்"
    },
    {
      "productid": "1223",
      "productname": "Big Onion",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பெரிய வெங்காயம்"
    },
    {
      "productid": "1224",
      "productname": "Small Onion",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சின்ன வெங்காயம்"
    },
    {
      "productid": "1225",
      "productname": "Potato",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "உருளைக்கிழங்கு"
    },
    {
      "productid": "1226",
      "productname": "Green Chilly",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பச்சை மிளகாய்"
    },
    {
      "productid": "1227",
      "productname": "Capsicaum",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "குடை மிளகாய்"
    },
    {
      "productid": "1228",
      "productname": "Color Capsicum",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "க.குடைமிளகாய்"
    },
    {
      "productid": "1229",
      "productname": "Country Tomato",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "நா.தக்காளி"
    },
    {
      "productid": "1230",
      "productname": "Bangalore Tomato",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பெ.தக்காளி"
    },
    {
      "productid": "1231",
      "productname": "Ginger",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "இஞ்சி"
    },
    {
      "productid": "1232",
      "productname": "Carrot",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கேரட்"
    },
    {
      "productid": "1233",
      "productname": "Beans",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பீன்ஸ்"
    },
    {
      "productid": "1234",
      "productname": "Beetroot",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பீட்ரூட்"
    },
    {
      "productid": "1235",
      "productname": "Turnip",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "நூக்கோல்"
    },
    {
      "productid": "1236",
      "productname": "Cabbage",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கோஸ்"
    },
    {
      "productid": "1237",
      "productname": "Colour Cabbage",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கலர்கோஸ்"
    },
    {
      "productid": "1238",
      "productname": "Cucumber",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வெள்ளாரி"
    },
    {
      "productid": "1239",
      "productname": "Green Peas",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பச்.பட்டானி"
    },
    {
      "productid": "1240",
      "productname": "Cauli Flower",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "காளிப்பிளவர்"
    },
    {
      "productid": "1241",
      "productname": "Baby Corn",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பேபிக்கார்ன்"
    },
    {
      "productid": "1242",
      "productname": "Mushroom",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "காளான்"
    },
    {
      "productid": "1243",
      "productname": "White Radish",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வெ.முள்ளங்கி"
    },
    {
      "productid": "1244",
      "productname": "Red Radish",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சி.முள்ளங்கி"
    },
    {
      "productid": "1245",
      "productname": "Chow Chow",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சௌசௌ"
    },
    {
      "productid": "1246",
      "productname": "Yam",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சேனைக்கிழங்கு"
    },
    {
      "productid": "1247",
      "productname": "Brinjal",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கத்திரிக்கை"
    },
    {
      "productid": "1248",
      "productname": "Ladies Finger",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வெண்டைகாய்"
    },
    {
      "productid": "1249",
      "productname": "Snake Gourd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "புடலங்காய்"
    },
    {
      "productid": "1250",
      "productname": "Brood Beans",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பட்டை அவரை"
    },
    {
      "productid": "1251",
      "productname": "Bitter Ground",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பாவக்காய்"
    },
    {
      "productid": "1252",
      "productname": "Bottle Gourd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சுரைக்காய்"
    },
    {
      "productid": "1253",
      "productname": "Ridge Gourd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பீக்கங்காய்"
    },
    {
      "productid": "1254",
      "productname": "Cluster Beans",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கொத்தவரங்காய்"
    },
    {
      "productid": "1161",
      "productname": "Extra",
      "mrp": "1",
      "rate": "0",
      "prodtamil": "இதர பொருட்கள்"
    },
    {
      "productid": "1295",
      "productname": "Chips Potato",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சி.உருளைக்கிழங்கு"
    },
    {
      "productid": "1296",
      "productname": "Batji Chilly",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பஜ்ஜி மிளகாய்"
    },
    {
      "productid": "1297",
      "productname": "Ma Ginger",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மா.இஞ்சி"
    },
    {
      "productid": "1298",
      "productname": "Double Beans",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "டபுள் பீன்ஸ்"
    },
    {
      "productid": "1299",
      "productname": "Karamani",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "காராணி"
    },
		{
      "productid": "1255",
      "productname": "Ash Gourd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வெ.பூசனிக்காய்"
    },
    {
      "productid": "1256",
      "productname": "Red Gourd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சி.பூசனிக்காய்"
    },
    {
      "productid": "1257",
      "productname": "Country Garlic",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "நாட்டு பூண்டு"
    },
    {
      "productid": "1258",
      "productname": "Drum Stick",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "முருங்கை"
    },
    {
      "productid": "1259",
      "productname": "Raw Plaintain",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மாங்காய்"
    },
    {
      "productid": "1260",
      "productname": "Coriander Leaf",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மல்லி"
    },
    {
      "productid": "1261",
      "productname": "Mint",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பொதினா"
    },
    {
      "productid": "1262",
      "productname": "Curry Leaves",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கருவேப்பில்லை"
    },
    {
      "productid": "1263",
      "productname": "Sping Onion",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வெ.தாள்"
    },
    {
      "productid": "1264",
      "productname": "Pala Keerai",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பாலக்கீரை"
    },
    {
      "productid": "1265",
      "productname": "Celery",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "செல்லரி"
    },
    {
      "productid": "1266",
      "productname": "Leeks",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "லீக்ஸ்"
    },
    {
      "productid": "1267",
      "productname": "Keerai",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கீரை"
    },
    {
      "productid": "1268",
      "productname": "Lettuce",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "லெட்யூஸ்"
    },
    {
      "productid": "1269",
      "productname": "Mango",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மாங்காய்"
    },
    {
      "productid": "1270",
      "productname": "Cdocasia",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சேப்பக்கிழங்கு"
    },
    {
      "productid": "1271",
      "productname": "Elephant Yam",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கருனைக்கிழங்கு"
    },
    {
      "productid": "1272",
      "productname": "Hill Garlic",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மலைபூண்டு"
    },
    {
      "productid": "1273",
      "productname": "American Sweet Corn",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "அமெரிக்க ஸ்வீட்கான்"
    },
    {
      "productid": "1274",
      "productname": "Fresh Cream",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "ப்ரஷ் க்ரீம்"
    },
    {
      "productid": "1275",
      "productname": "Panner",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பன்னிர்"
    },
    {
      "productid": "1276",
      "productname": "Butter",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பட்டர்"
    },
    {
      "productid": "1277",
      "productname": "Khova",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "கோவா"
    },
    {
      "productid": "1278",
      "productname": "Cheese",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சீஸ்"
    },
    {
      "productid": "1279",
      "productname": "Curd",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "தயிர்"
    },
    {
      "productid": "1280",
      "productname": "Banana",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வாழைப்பழம்"
    },
    {
      "productid": "1281",
      "productname": "Apple",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "ஆப்பிள்"
    },
    {
      "productid": "1282",
      "productname": "Orange",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "ஆரஞ்ச்"
    },
    {
      "productid": "1283",
      "productname": "Mosambi",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சாத்துக்குடி"
    },
    {
      "productid": "1284",
      "productname": "Pomogranate",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மாதுளை"
    },
    {
      "productid": "1285",
      "productname": "Graps",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "திராட்சை"
    },
    {
      "productid": "1286",
      "productname": "Chikoo",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "சப்போட்டா"
    },
    {
      "productid": "1287",
      "productname": "Pineapple",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "அன்னாசி"
    },
    {
      "productid": "1288",
      "productname": "Watermelon",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "தர்பூசணி"
    },
    {
      "productid": "1289",
      "productname": "Muskmelon",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "மொழாம்பழம்"
    },
    {
      "productid": "1290",
      "productname": "Pappaya",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "பப்பாளி"
    },
    {
      "productid": "1291",
      "productname": "Banana Red",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "செவ்வாழை"
    },
    {
      "productid": "1292",
      "productname": "Banana Flower",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "வாழைப்பூ"
    },
    {
      "productid": "1293",
      "productname": "Rasthali",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "ரஸ்தாளி"
    },
    {
      "productid": "1294",
      "productname": "Sweet Banana",
      "mrp": "0",
      "rate": "0",
      "prodtamil": "தேன் வாழை"
    }
]}).write();

var settingspath = process.env.APPDATA+'/VEGFRUIT/settings.json';
const settings = new FileSync(settingspath);
const db2 = low(settings);
db2.defaults({ settings: [{
	"GST":"no",
	"ownername":"",
	"owneraddress" : "",
	"sequencenoAlpha":"A",
	"sequenceno":"1000",
	"ownerphone" :""
}]}).write();
