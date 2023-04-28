// List of Plant Data
const PLANTS = [{
  id: 0,
  name: "Snake Plant",
  partDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long...",
  fullDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green color variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions. They are also renowned for their qualities that help purify the air we breathe. Since they produce oxygen mainly at night, snake plants make for a great bedroom companion.",
  maxTemp: "Max Temperature: 25",
  minTemp: "Min Temperature: 15",
  soilMois: "Suggested Soil Moisture: 900-1170"

},
{
  id: 1,
  name: "Aloe Vera",
  partDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
  fullDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...South or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
  maxTemp: "Max Temperature: 25",
  minTemp: "Min Temperature: 15",
  soilMois: "Suggested Soil Moisture: 810-1000"

},
{
  id: 2,
  name: "JP plant",
  partDes: "re growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
  fullDes: "PPP e sure to put it in a spot where it will get plenty of sunlight...South- or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
  maxTemp: "Max Temperature: 25",
  minTemp: "Min Temperature:16",
  soilMois: "Suggested Soil Moisture: 8100-996"

},
{
  id: 3,
  name: "Aglaonema",
  partDes: "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage...",
  fullDes: "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage and easy care requirements. These plants are native to the tropical regions of Asia and are well-suited to growing indoors because they thrive in low light and can tolerate a wide range of temperatures.",
  maxTemp: "Max Temperature: 27",
  minTemp: "Min Temperature: 16",
  soilMois: "Suggested Soil Moisture: 900-1170"

},
{   
  id: 4,
  name: "Dracaena",
  partDes: " Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges..... ",
  fullDes: "Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges. It prefers bright, indirect light and well-draining soil that is kept consistently moist..",
  maxTemp: "Max Temperature: 35",
  minTemp: "Min Temperature: 19",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  id: 5,
  name: "Philodendrons",
  partDes: "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements..",
  fullDes: "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements.It has heart-shaped leaves that are a deep green color. It is a trailing vine that is often grown in hanging baskets. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
  maxTemp: "Max Temperature: 30",
  minTemp: "Min Temperature: 16",
  soilMois: "Suggested Soil Moisture: 900-1090"
},
{
  id: 6,
  name: "Areca palm",
  partDes: "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds ...",
  fullDes: "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds and easy care requirements. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
  maxTemp: "Max Temperature: 24",
  minTemp: "Min Temperature: 16",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  id: 7,
  name: "Spathiphyllum",
  partDes: "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and....",
  fullDes: "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and air-purifying properties.They have glossy, dark green leaves and produce long-lasting, white flowers that resemble calla lilies. They are easy to care for and can thrive in low light conditions.",
  maxTemp: "Max Temperature: 30",
  minTemp: "Min Temperature: 19",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  id: 8,
  name: "Succulents.",
  partDes: "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their...",
  fullDes: "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their unique appearance and low-maintenance care requirementsare known for their ability to store water in their leaves and stems, making them well-suited for dry environments. They come in a range of colors and textures and can be grown both indoors and outdoors.",
  maxTemp: "Max Temperature: 33",
  minTemp: "Min Temperature: 5",
  soilMois: "Suggested Soil Moisture: 540-900"
},
{
  id: 9,
  name: "Alocasia",
  partDes: "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears...",
  fullDes: "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears.They have large, heart-shaped leaves that come in a variety of colors and patterns, making them a striking addition to any indoor or outdoor space. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
  maxTemp: "Max Temperature: 27",
  minTemp: "Min Temperature: 19",
  soilMois: "Suggested Soil Moisture: 540-900"
},
{
  id: 10,
  name: "Alocasia",
  partDes: "Spider plants, also known as Chlorophytum comosum, are popular indoor plants known for their long, thin leaves that arch gracefully over",
  fullDes: "Spider plants, also known as Chlorophytum comosum, are popular indoor plants known for their long, thin leaves that arch gracefully over the sides of their containers. Here are three lines describing this plant.Spider plants are low-maintenance and easy to care for, making them a popular choice for indoor gardening. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
  maxTemp: "Max Temperature: 24",
  minTemp: "Min Temperature: 15",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  id: 11,
  name: "English Evy ",
  partDes: "English ivy, also known as Hedera helix, is a popular indoor plant known for its glossy, green leaves and trailing vines.",
  fullDes: "English ivy, also known as Hedera helix, is a popular indoor plant known for its glossy, green leaves and trailing vines.English ivy is a versatile indoor plant that can be grown as a hanging plant or trained to climb walls or trellises. It prefers bright, indirect light and well-draining soil that is kept slightly moist.",
  maxTemp: "Max Temperature: 24",
  minTemp: "Min Temperature: 10",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  
  id: 12,
  name: "Air Plant",
  partDes: "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil...",
  fullDes: "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil. They are native to tropical regions of the Americas and have become popular houseplants due to their unique appearance and low maintenance requirements.",
  maxTemp: "Max Temperature: 30",
  minTemp: "Min Temperature: 12",
  soilMois: "Suggested Soil Moisture: 900-1090"
},
{
  
  id: 13,
  name: "Majesty Palm ",
  partDes: "Majesty palm, also known as Ravenea rivularis, is a popular indoor palm plant known for its lush, tropical appearance",
  fullDes: "Majesty palm, also known as Ravenea rivularis, is a popular indoor palm plant known for its lush, tropical appearance.Majesty palms have long, graceful fronds that give them a tropical, exotic appearance. They prefer bright, indirect light and well-draining soil that is kept consistently moist. ",
  maxTemp: "Max Temperature: 29",
  minTemp: "Min Temperature: 18",
  soilMois: "Suggested Soil Moisture: 1260-1440"
},
{
  
  id: 14,
  name: "Pothos Evy  ",
  partDes: "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves",
  fullDes: "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves. Pothos plants are easy to care for and can thrive in a variety of lighting conditions, making them a great choice for indoor gardening. They prefer well-draining soil and can tolerate a range of temperatures." ,
  maxTemp: "Max Temperature: 29",
  minTemp: "Min Temperature: 18",
  soilMois: "Suggested Soil Moisture: 900-1440"
},
{
  
  id: 15,
  name: "Pothos Evy  ",
  partDes: "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves",
  fullDes: "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves. Pothos plants are easy to care for and can thrive in a variety of lighting conditions, making them a great choice for indoor gardening. They prefer well-draining soil and can tolerate a range of temperatures." ,
  maxTemp: "Max Temperature: 29",
  minTemp: "Min Temperature: 18",
  soilMois: "Suggested Soil Moisture: 900-1440"
},
{
  
  id: 16,
  name: "Amaryllis ",
  partDes: "Amaryllis is a genus of flowering plants native to South America, commonly grown for their large, showy flowers",
  fullDes: "Amaryllis is a genus of flowering plants native to South America, commonly grown for their large, showy flowers.Amaryllis plants are prized for their striking, trumpet-shaped flowers that bloom in a range of colors, from reds and pinks to whites and yellows. They prefer bright, indirect light and well-draining soil that is kept consistently moist." ,
  maxTemp: "Max Temperature: 21",
  minTemp: "Min Temperature: 15",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
{
  
  id: 17,
  name: "Emerald Gem  ",
  partDes: "Emerald Gem is a variety of ZZ plant, also known as Zamioculcas zamiifolia, a popular houseplant that is known for its attractive glossy green leaves.",
  fullDes: "Emerald Gem is a variety of ZZ plant, also known as Zamioculcas zamiifolia, a popular houseplant that is known for its attractive glossy green leaves. Emerald Gem ZZ plants have thick, waxy leaves that give them a unique appearance and make them easy to care for. They can thrive in a wide range of light conditions, from low to bright indirect light, and prefer well-draining soil." ,
  maxTemp: "Max Temperature: 24",
  minTemp: "Min Temperature: 18",
  soilMois: "Suggested Soil Moisture: 720-900"
},
{
  
  id: 18,
  name: "Emerald Ripple Peperomia",
  partDes: "Emerald Ripple Peperomia is a popular indoor plant known for its attractive, wavy leaves and compact growth habit...",
  fullDes: "Emerald Ripple Peperomia is a popular indoor plant known for its attractive, wavy leaves and compact growth habit. Emerald Ripple Peperomia prefers bright, indirect light and well-draining soil that is kept slightly moist. It is a low-maintenance plant that is well-suited for indoor gardening." ,
  maxTemp: "Max Temperature: 27",
  minTemp: "Min Temperature: 18",
  soilMois: "Suggested Soil Moisture: 720-900"
},
{
  
  id: 19,
  name: "Fishbone cactus",
  partDes: "Fishbone Cactus, also known as Epiphyllum anguliger, is a unique and striking indoor plant known for its long, flat, zig-zagging stems that resemble fishbones.",
  fullDes: "Fishbone Cactus, also known as Epiphyllum anguliger, is a unique and striking indoor plant known for its long, flat, zig-zagging stems that resemble fishbones. Fishbone cactus plants are low-maintenance and easy to care for, making them a popular choice for indoor gardening. They prefer bright, indirect light and well-draining soil that is kept slightly moist" ,
  maxTemp: "Max Temperature: 32",
  minTemp: "Min Temperature: 10",
  soilMois: "Suggested Soil Moisture: 720-1080"
},
{
  
  id: 20,
  name: "Fizzle Sizzle",
  partDes: "Fizzle Sizzle, also known as Albuca spiralis, is an indoor plant that is known for its distinctive spiral-shaped leaves that resemble corkscrews.",
  fullDes: "Fizzle Sizzle, also known as Albuca spiralis, is an indoor plant that is known for its distinctive spiral-shaped leaves that resemble corkscrews. Fizzle Sizzle is a unique and eye-catching indoor plant that is sure to make a statement in any space. It prefers bright, indirect light and well-draining soil that is kept consistently moist." ,
  maxTemp: "Max Temperature: 24",
  minTemp: "Min Temperature: 15",
  soilMois: "Suggested Soil Moisture: 900-1080"
},
] 


// Function to save the data of the plant 
function addToGarden(id) {
    let current = PLANTS.filter(e => e.id == id)[0]
    console.log(current["name"])
    let data = JSON.parse(localStorage.getItem(id)) ? JSON.parse(localStorage.getItem(id)) : [];

    data.push({
        plantName: current["name"],
        minTemp: current["minTemp"],
        maxTemp: current["maxTemp"],
        soilMois: current["soilMois"]
    });
    
    localStorage.setItem(current["name"], JSON.stringify(data));
    console.log(data)
    console.log(id)
}