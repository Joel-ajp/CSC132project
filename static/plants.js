// List of Plant Data
const PLANTS = [{
  id: 0,
    name: "Snake Plant",
    partDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long...",
    fullDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green color variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions. They are also renowned for their qualities that help purify the air we breathe. Since they produce oxygen mainly at night, snake plants make for a great bedroom companion.",
    maxTemp: "Max Temperature: 30",
    minTemp: "Min Temperature: 5",
    soilMois: "Suggested Soil Moisture: 50-65%",
},
{
  id: 1,
    name: "Aloe Vera",
    partDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
    fullDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...South- or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
    maxTemp: "Max Temperature: 25",
    minTemp: "Min Temperature: 10",
    soilMois: "Suggested Soil Moisture: 45-60%"

},
{
  id: 2,
    name: "Aglaonema",
    partDes: "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage...",
    fullDes: "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage and easy care requirements. These plants are native to the tropical regions of Asia and are well-suited to growing indoors because they thrive in low light and can tolerate a wide range of temperatures.",
    maxTemp: "Max Temperature: 80",
    minTemp: "Min Temperature: 60",
    soilMois: "Suggested Soil Moisture: 50-60%"

},
{   
  id: 3,
    name: "Dracaena",
    partDes: " Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges..... ",
    fullDes: "Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges. It prefers bright, indirect light and well-draining soil that is kept consistently moist..",
    maxTemp: "Max Temperature: 95",
    minTemp: "Min Temperature: 65",
    soilMois: "Suggested Soil Moisture: 50-60%"
},
{
  id: 4,
    name: "Philodendrons",
    partDes: "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements..",
    fullDes: "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements.It has heart-shaped leaves that are a deep green color. It is a trailing vine that is often grown in hanging baskets. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp: "Max Temperature: 85",
    minTemp: "Min Temperature: 60",
    soilMois: "Suggested Soil Moisture: 50-60%"
},
{
  id: 5,
    name: "Areca palm",
    partDes: "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds ...",
    fullDes: "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds and easy care requirements. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp: "Max Temperature: 75",
    minTemp: "Min Temperature: 60",
    soilMois: "Suggested Soil Moisture: 50-60%"
},
{
  id: 5,
    name: "Spathiphyllum",
    partDes: "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and....",
    fullDes: "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and air-purifying properties.They have glossy, dark green leaves and produce long-lasting, white flowers that resemble calla lilies. They are easy to care for and can thrive in low light conditions.",
    maxTemp: "Max Temperature: 85",
    minTemp: "Min Temperature: 65",
    soilMois: "Suggested Soil Moisture: 50-60%"
},
{
  id: 6,
    name: "Succulents",
    partDes: "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their...",
    fullDes: "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their unique appearance and low-maintenance care requirementsare known for their ability to store water in their leaves and stems, making them well-suited for dry environments. They come in a range of colors and textures and can be grown both indoors and outdoors.",
    maxTemp: "Max Temperature: 90",
    minTemp: "Min Temperature: 40",
    soilMois: "Suggested Soil Moisture: 30-50%"
},
{
  id: 7,
    name: "Alocasia",
    partDes: "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears...",
    fullDes: "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears.They have large, heart-shaped leaves that come in a variety of colors and patterns, making them a striking addition to any indoor or outdoor space. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp: "Max Temperature: 80",
    minTemp: "Min Temperature: 65",
    soilMois: "Suggested Soil Moisture: 30-50%"
},
{    
  id: 8,
    name: "Air Plant",
    partDes: "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil...",
    fullDes: "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil. They are native to tropical regions of the Americas and have become popular houseplants due to their unique appearance and low maintenance requirements.",
    maxTemp: "Max Temperature: 90",
    minTemp: "Min Temperature: 50",
    soilMois: "Suggested Soil Moisture: 50-60%"
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

// Function that saves a custom plant to your garden
function addCustomPlantToGarden(id) {
    



}