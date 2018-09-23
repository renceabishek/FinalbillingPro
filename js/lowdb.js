const low = require('lowdb');
const path = require('path');
const FileSync = require('lowdb/adapters/FileSync');
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
      "buyerscode" : "GK001235",
      "cusarea": "SALEM JN",
      "cusmobile": "",
      "custin": "33AABCR17",
      "cusaddress": "JN MAIN ROAD",
      "cusstate": "Tamil Nadu",
      "cuspincode": "636001",
      "cusemail": "",
      "cusremarks": ""
    },
		{
		      "customerid": "CC002",
		      "customername": "GK Fruits",
		      "buyerscode" : "GK001236",
		      "cusarea": "SALEM GUGAI",
		      "cusmobile": "",
		      "custin": "33AABCR11",
		      "cusaddress": "JN MAIN ROAD",
		      "cusstate": "Tamil Nadu",
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
			"quantity":"35",
			"producthsn" : "1413",
      "prodtamil": "லெமன்"
    },
    {
      "productid": "1222",
      "productname": "Coconut",
      "mrp": "0",
      "rate": "0",
			"quantity":"53",
			"producthsn" : "46462",
      "prodtamil": "தேங்காய்"
    },
    {
      "productid": "1223",
      "productname": "Big Onion",
      "mrp": "0",
      "rate": "0",
			"quantity":"33",
			"producthsn" : "24624",
      "prodtamil": "பெரிய வெங்காயம்"
    },
    {
      "productid": "1224",
      "productname": "Small Onion",
      "mrp": "0",
      "rate": "0",
			"quantity":"25",
			"producthsn" : "5452",
      "prodtamil": "சின்ன வெங்காயம்"
    },
    {
      "productid": "1225",
      "productname": "Potato",
      "mrp": "0",
      "rate": "0",
			"quantity":"252",
			"producthsn" : "45246",
      "prodtamil": "உருளைக்கிழங்கு"
    },
    {
      "productid": "1226",
      "productname": "Green Chilly",
      "mrp": "0",
      "rate": "0",
			"quantity":"58",
			"producthsn" : "4624",
      "prodtamil": "பச்சை மிளகாய்"
    },
    {
      "productid": "1227",
      "productname": "Capsicaum",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "78767",
      "prodtamil": "குடை மிளகாய்"
    },
    {
      "productid": "1228",
      "productname": "Color Capsicum",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "8657",
      "prodtamil": "க.குடைமிளகாய்"
    },
    {
      "productid": "1229",
      "productname": "Country Tomato",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "857",
      "prodtamil": "நா.தக்காளி"
    },
    {
      "productid": "1230",
      "productname": "Bangalore Tomato",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "87985",
      "prodtamil": "பெ.தக்காளி"
    },
    {
      "productid": "1231",
      "productname": "Ginger",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "8675",
      "prodtamil": "இஞ்சி"
    },
    {
      "productid": "1232",
      "productname": "Carrot",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "39353",
      "prodtamil": "கேரட்"
    },
    {
      "productid": "1233",
      "productname": "Beans",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "2222",
      "prodtamil": "பீன்ஸ்"
    },
    {
      "productid": "1234",
      "productname": "Beetroot",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "246357",
      "prodtamil": "பீட்ரூட்"
    },
    {
      "productid": "1235",
      "productname": "Turnip",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "86746",
      "prodtamil": "நூக்கோல்"
    },
    {
      "productid": "1236",
      "productname": "Cabbage",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "46957",
      "prodtamil": "கோஸ்"
    },
    {
      "productid": "1237",
      "productname": "Colour Cabbage",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "3695",
      "prodtamil": "கலர்கோஸ்"
    },
    {
      "productid": "1238",
      "productname": "Cucumber",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "795674",
      "prodtamil": "வெள்ளாரி"
    },
    {
      "productid": "1239",
      "productname": "Green Peas",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "358",
      "prodtamil": "பச்.பட்டானி"
    },
    {
      "productid": "1240",
      "productname": "Cauli Flower",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "35735",
      "prodtamil": "காளிப்பிளவர்"
    },
    {
      "productid": "1241",
      "productname": "Baby Corn",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "0766",
      "prodtamil": "பேபிக்கார்ன்"
    },
    {
      "productid": "1242",
      "productname": "Mushroom",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "68000",
      "prodtamil": "காளான்"
    },
    {
      "productid": "1243",
      "productname": "White Radish",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "08686",
      "prodtamil": "வெ.முள்ளங்கி"
    },
    {
      "productid": "1244",
      "productname": "Red Radish",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "68686",
      "prodtamil": "சி.முள்ளங்கி"
    },
    {
      "productid": "1245",
      "productname": "Chow Chow",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "77777",
      "prodtamil": "சௌசௌ"
    },
    {
      "productid": "1246",
      "productname": "Yam",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "5555",
      "prodtamil": "சேனைக்கிழங்கு"
    },
    {
      "productid": "1247",
      "productname": "Brinjal",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "25975",
      "prodtamil": "கத்திரிக்கை"
    },
    {
      "productid": "1248",
      "productname": "Ladies Finger",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "95685",
      "prodtamil": "வெண்டைகாய்"
    },
    {
      "productid": "1249",
      "productname": "Snake Gourd",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "6957",
      "prodtamil": "புடலங்காய்"
    },
    {
      "productid": "1250",
      "productname": "Brood Beans",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "5785",
      "prodtamil": "பட்டை அவரை"
    },
    {
      "productid": "1251",
      "productname": "Bitter Ground",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "பாவக்காய்"
    },
    {
      "productid": "1252",
      "productname": "Bottle Gourd",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "சுரைக்காய்"
    },
    {
      "productid": "1253",
      "productname": "Ridge Gourd",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "பீக்கங்காய்"
    },
    {
      "productid": "1254",
      "productname": "Cluster Beans",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "கொத்தவரங்காய்"
    },
    {
      "productid": "1161",
      "productname": "Extra",
      "mrp": "1",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "இதர பொருட்கள்"
    },
    {
      "productid": "1295",
      "productname": "Chips Potato",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "சி.உருளைக்கிழங்கு"
    },
    {
      "productid": "1296",
      "productname": "Batji Chilly",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "பஜ்ஜி மிளகாய்"
    },
    {
      "productid": "1297",
      "productname": "Ma Ginger",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "மா.இஞ்சி"
    },
    {
      "productid": "1298",
      "productname": "Double Beans",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "டபுள் பீன்ஸ்"
    },
    {
      "productid": "1299",
      "productname": "Karamani",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "காராணி"
    },
		{
      "productid": "1255",
      "productname": "Ash Gourd",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "வெ.பூசனிக்காய்"
    },
    {
      "productid": "1256",
      "productname": "Red Gourd",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "சி.பூசனிக்காய்"
    },
    {
      "productid": "1257",
      "productname": "Country Garlic",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "நாட்டு பூண்டு"
    },
    {
      "productid": "1258",
      "productname": "Drum Stick",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "முருங்கை"
    },
    {
      "productid": "1259",
      "productname": "Raw Plaintain",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "மாங்காய்"
    },
    {
      "productid": "1260",
      "productname": "Coriander Leaf",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "மல்லி"
    },
    {
      "productid": "1261",
      "productname": "Mint",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "பொதினா"
    },
    {
      "productid": "1262",
      "productname": "Curry Leaves",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "",
      "prodtamil": "கருவேப்பில்லை"
    },
    {
      "productid": "1263",
      "productname": "Sping Onion",
      "mrp": "0",
      "rate": "0",
			"quantity":"89",
			"producthsn" : "",
      "prodtamil": "வெ.தாள்"
    },
    {
      "productid": "1264",
      "productname": "Pala Keerai",
      "mrp": "0",
      "rate": "0",
			"quantity":"100",
			"producthsn" : "",
      "prodtamil": "பாலக்கீரை"
    },
    {
      "productid": "1265",
      "productname": "Celery",
      "mrp": "0",
      "rate": "0",
			"quantity":"43",
			"producthsn" : "468",
      "prodtamil": "செல்லரி"
    },
    {
      "productid": "1266",
      "productname": "Leeks",
      "mrp": "0",
      "rate": "0",
			"quantity":"38",
			"producthsn" : "468",
      "prodtamil": "லீக்ஸ்"
    },
    {
      "productid": "1267",
      "productname": "Keerai",
      "mrp": "0",
      "rate": "0",
			"quantity":"92",
			"producthsn" : "468",
      "prodtamil": "கீரை"
    },
    {
      "productid": "1268",
      "productname": "Lettuce",
      "mrp": "0",
      "rate": "0",
			"quantity":"36",
			"producthsn" : "468",
      "prodtamil": "லெட்யூஸ்"
    },
    {
      "productid": "1269",
      "productname": "Mango",
      "mrp": "0",
      "rate": "0",
			"quantity":"88",
			"producthsn" : "468",
      "prodtamil": "மாங்காய்"
    },
    {
      "productid": "1270",
      "productname": "Cdocasia",
      "mrp": "0",
      "rate": "0",
			"quantity":"44",
			"producthsn" : "468",
      "prodtamil": "சேப்பக்கிழங்கு"
    },
    {
      "productid": "1271",
      "productname": "Elephant Yam",
      "mrp": "0",
      "rate": "0",
			"quantity":"55",
			"producthsn" : "4684",
      "prodtamil": "கருனைக்கிழங்கு"
    },
    {
      "productid": "1272",
      "productname": "Hill Garlic",
      "mrp": "0",
      "rate": "0",
			"quantity":"40",
			"producthsn" : "4684",
      "prodtamil": "மலைபூண்டு"
    },
    {
      "productid": "1273",
      "productname": "American Sweet Corn",
      "mrp": "0",
      "rate": "0",
			"quantity":"50",
			"producthsn" : "4684",
      "prodtamil": "அமெரிக்க ஸ்வீட்கான்"
    },
    {
      "productid": "1274",
      "productname": "Fresh Cream",
      "mrp": "0",
      "rate": "0",
			"quantity":"60",
			"producthsn" : "468",
      "prodtamil": "ப்ரஷ் க்ரீம்"
    },
    {
      "productid": "1275",
      "productname": "Panner",
      "mrp": "0",
      "rate": "0",
			"quantity":"70",
			"producthsn" : "875",
      "prodtamil": "பன்னிர்"
    },
    {
      "productid": "1276",
      "productname": "Butter",
      "mrp": "0",
      "rate": "0",
			"quantity":"80",
			"producthsn" : "485548",
      "prodtamil": "பட்டர்"
    },
    {
      "productid": "1277",
      "productname": "Khova",
      "mrp": "0",
      "rate": "0",
			"quantity":"90",
			"producthsn" : "4585",
      "prodtamil": "கோவா"
    },
    {
      "productid": "1278",
      "productname": "Cheese",
      "mrp": "0",
      "rate": "0",
			"quantity":"89",
			"producthsn" : "5484",
      "prodtamil": "சீஸ்"
    },
    {
      "productid": "1279",
      "productname": "Curd",
      "mrp": "0",
      "rate": "0",
			"quantity":"12",
			"producthsn" : "458",
      "prodtamil": "தயிர்"
    },
    {
      "productid": "1280",
      "productname": "Banana",
      "mrp": "0",
      "rate": "0",
			"quantity":"22",
			"producthsn" : "758",
      "prodtamil": "வாழைப்பழம்"
    },
    {
      "productid": "1281",
      "productname": "Apple",
      "mrp": "0",
      "rate": "0",
			"quantity":"22",
			"producthsn" : "5733",
      "prodtamil": "ஆப்பிள்"
    },
    {
      "productid": "1282",
      "productname": "Orange",
      "mrp": "0",
      "rate": "0",
			"quantity":"44",
			"producthsn" : "795",
      "prodtamil": "ஆரஞ்ச்"
    },
    {
      "productid": "1283",
      "productname": "Mosambi",
      "mrp": "0",
      "rate": "0",
			"quantity":"24",
			"producthsn" : "579",
      "prodtamil": "சாத்துக்குடி"
    },
    {
      "productid": "1284",
      "productname": "Pomogranate",
      "mrp": "0",
      "rate": "0",
			"quantity":"42",
			"producthsn" : "579557",
      "prodtamil": "மாதுளை"
    },
    {
      "productid": "1285",
      "productname": "Graps",
      "mrp": "0",
      "rate": "0",
			"quantity":"46",
			"producthsn" : "795",
      "prodtamil": "திராட்சை"
    },
    {
      "productid": "1286",
      "productname": "Chikoo",
      "mrp": "0",
      "rate": "0",
			"quantity":"65",
			"producthsn" : "879",
      "prodtamil": "சப்போட்டா"
    },
    {
      "productid": "1287",
      "productname": "Pineapple",
      "mrp": "0",
      "rate": "0",
			"quantity":"80",
			"producthsn" : "2334",
      "prodtamil": "அன்னாசி"
    },
    {
      "productid": "1288",
      "productname": "Watermelon",
      "mrp": "0",
      "rate": "0",
			"quantity":"33",
			"producthsn" : "6464",
      "prodtamil": "தர்பூசணி"
    },
    {
      "productid": "1289",
      "productname": "Muskmelon",
      "mrp": "0",
      "rate": "0",
			"quantity":"45",
			"producthsn" : "464",
      "prodtamil": "மொழாம்பழம்"
    },
    {
      "productid": "1290",
      "productname": "Pappaya",
      "mrp": "0",
      "rate": "0",
			"quantity":"45",
			"producthsn" : "4635",
      "prodtamil": "பப்பாளி"
    },
    {
      "productid": "1291",
      "productname": "Banana Red",
      "mrp": "0",
      "rate": "0",
			"quantity":"462",
			"producthsn" : "59",
      "prodtamil": "செவ்வாழை"
    },
    {
      "productid": "1292",
      "productname": "Banana Flower",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "3535",
      "prodtamil": "வாழைப்பூ"
    },
    {
      "productid": "1293",
      "productname": "Rasthali",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "646",
      "prodtamil": "ரஸ்தாளி"
    },
    {
      "productid": "1294",
      "productname": "Sweet Banana",
      "mrp": "0",
      "rate": "0",
			"quantity":"",
			"producthsn" : "35",
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
	"ownerphone" :"",
	"gststreetname":"",
	"gstcity" :"",
	"gststate" : "",
	"gstpinno" : "",
	"gstphno" : "",
	"gsttinno": "",
	"gstmail" : "",
	"gstinvoiceno":"1000",
	"tamilEnglish":"tamil",
	"currentdate":"09/22/2018"
}]}).write();



var spath;
var mastersavepath = process.env.APPDATA+'/VEGFRUIT/savedata.json';
spath = new FileSync(mastersavepath);

const db3 = low(spath);
db3.defaults({ savemaster: [
	{
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Brinjal",
          "prodqty": "24",
          "prodvalue": "53.76"
        },
        {
          "productname": "Lemon",
          "prodqty": "22",
          "prodvalue": "44.00"
        },
        {
          "productname": "Small Onion",
          "prodqty": "244",
          "prodvalue": "5856.00"
        }
      ],
      "totalAmount": "6073.00",
      "invoiceno": "1000",
      "date": "09/13/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Lemon",
          "prodqty": "24",
          "prodvalue": "576.00"
        }
      ],
      "totalAmount": "588.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Lemon",
          "prodqty": "2",
          "prodvalue": "4.00"
        }
      ],
      "totalAmount": "4.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Brinjal",
          "prodqty": "24",
          "prodvalue": "576.00"
        },
        {
          "productname": "Lemon",
          "prodqty": "24",
          "prodvalue": "528.00"
        },
        {
          "productname": "Small Onion",
          "prodqty": "2",
          "prodvalue": "4.00"
        }
      ],
      "totalAmount": "1130.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Snake Gourd",
          "prodqty": "24",
          "prodvalue": "48.00"
        },
        {
          "productname": "Capsicaum",
          "prodqty": "42",
          "prodvalue": "1008.00"
        }
      ],
      "totalAmount": "1077.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Lemon",
          "prodqty": "7",
          "prodvalue": "63.00"
        }
      ],
      "totalAmount": "67.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Potato",
          "prodqty": "24",
          "prodvalue": "5808.00"
        },
        {
          "productname": "Lemon",
          "prodqty": "21",
          "prodvalue": "42.00"
        }
      ],
      "totalAmount": "5967.00",
      "invoiceno": "1000",
      "date": "09/11/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Potato",
          "prodqty": "90",
          "prodvalue": "270.00"
        },
        {
          "productname": "Lemon",
          "prodqty": "24",
          "prodvalue": "48.00"
        },
        {
          "productname": "Brinjal",
          "prodqty": "142",
          "prodvalue": "3408.00"
        }
      ],
      "totalAmount": "3854.00",
      "invoiceno": "1000",
      "date": "09/12/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Lemon",
          "prodqty": "3",
          "prodvalue": "93.39"
        }
      ],
      "totalAmount": "96.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Lemon",
          "prodqty": "24",
          "prodvalue": "576.00"
        },
        {
          "productname": "Yam",
          "prodqty": "24",
          "prodvalue": "48.00"
        }
      ],
      "totalAmount": "763.00",
      "invoiceno": "1000",
      "date": "09/14/2018"
    },
    {
      "customerid": "RELIANCE RETAIL LTD",
      "productList": [
        {
          "productname": "Coconut",
          "prodqty": "24",
          "prodvalue": "53.28"
        },
        {
          "productname": "Small Onion",
          "prodqty": "90",
          "prodvalue": "810.00"
        },
        {
          "productname": "Brinjal",
          "prodqty": "24",
          "prodvalue": "528.00"
        },
        {
          "productname": "Colour Cabbage",
          "prodqty": "44",
          "prodvalue": "176.00"
        },
        {
          "productname": "Bangalore Tomato",
          "prodqty": "4",
          "prodvalue": "176.00"
        }
      ],
      "totalAmount": "1803.00",
      "invoiceno": "1000",
      "date": "09/15/2018"
    }
]}).write();

var spath;
var mastersavepath = process.env.APPDATA+'/VEGFRUIT/saveinvoice.json';
spath = new FileSync(mastersavepath);
const db4 = low(spath);
db4.defaults({ invoice: [
	]}).write();
