// List of Plant Data
const PLANTS = [
  {
    id: 0,
    name: "<b>Snake Plant</b>",
    partDes:
      "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long...",
    fullDes:
      "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green color variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions. They are also renowned for their qualities that help purify the air we breathe. Since they produce oxygen mainly at night, snake plants make for a great bedroom companion.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 25 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 15 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1170 </span>",
  },
  {
    id: 1,
    name: "<b>Aloe Vera</b>",
    partDes:
      "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
    fullDes:
      "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...South or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 25 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 15 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 810-1000 </span>",
  },
  {
    id: 2,
    name: "<b>Aglaonema</b>",
    partDes:
      "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage...",
    fullDes:
      "Aglaonema, also known as Chinese evergreen, is a popular indoor plant that is prized for its attractive foliage and easy care requirements. These plants are native to the tropical regions of Asia and are well-suited to growing indoors because they thrive in low light and can tolerate a wide range of temperatures.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 27 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 16 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1170 </span>",
  },
  {
    id: 3,
    name: "<b>Dracaena</b>",
    partDes:
      " Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges..... ",
    fullDes:
      "Dracaena marginata, also known as the Madagascar dragon tree, is a tall, spiky plant with long, thin leaves that are green with red edges. It prefers bright, indirect light and well-draining soil that is kept consistently moist..",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 35 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 19 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 4,
    name: "<b>Philodendrons</b>",
    partDes:
      "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements..",
    fullDes:
      "Philodendron plants are a popular choice for indoor gardens due to their attractive foliage and easy care requirements.It has heart-shaped leaves that are a deep green color. It is a trailing vine that is often grown in hanging baskets. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 30 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 16 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1090 </span>",
  },
  {
    id: 5,
    name: "<b>Areca palm</b>",
    partDes:
      "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds ...",
    fullDes:
      "The Areca palm, also known as the golden cane palm, is a popular choice for indoor gardens due to its attractive, feathery fronds and easy care requirements. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 24 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 16 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 6,
    name: "<b>Spathiphyllum</b>",
    partDes:
      "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and....",
    fullDes:
      "Spathiphyllum, also known as the peace lily, is a popular indoor plant known for its elegant, white blooms and air-purifying properties.They have glossy, dark green leaves and produce long-lasting, white flowers that resemble calla lilies. They are easy to care for and can thrive in low light conditions.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 30 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 19 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 7,
    name: "<b>Succulents</b>",
    partDes:
      "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their...",
    fullDes:
      "Succulents are a type of plant known for their fleshy, water-storing leaves and stems. They come in a variety of shapes and sizes and are popular for their unique appearance and low-maintenance care requirementsare known for their ability to store water in their leaves and stems, making them well-suited for dry environments. They come in a range of colors and textures and can be grown both indoors and outdoors.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 33 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 5 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 540-900 </span>",
  },
  {
    id: 8,
    name: "<b>Alocasia</b>",
    partDes:
      "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears...",
    fullDes:
      "Alocasia, commonly known as elephant ears due to the large, broad leaves that resemble elephant ears.They have large, heart-shaped leaves that come in a variety of colors and patterns, making them a striking addition to any indoor or outdoor space. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 27 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 19 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 540-900 </span>",
  },
  {
    id: 9,
    name: "<b>Alocasia</b>",
    partDes:
      "Spider plants, also known as Chlorophytum comosum, are popular indoor plants known for their long, thin leaves that arch gracefully over",
    fullDes:
      "Spider plants, also known as Chlorophytum comosum, are popular indoor plants known for their long, thin leaves that arch gracefully over the sides of their containers. Here are three lines describing this plant.Spider plants are low-maintenance and easy to care for, making them a popular choice for indoor gardening. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 24 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 15 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 10,
    name: "<b>English Evy</b>",
    partDes:
      "English ivy, also known as Hedera helix, is a popular indoor plant known for its glossy, green leaves and trailing vines.",
    fullDes:
      "English ivy, also known as Hedera helix, is a popular indoor plant known for its glossy, green leaves and trailing vines.English ivy is a versatile indoor plant that can be grown as a hanging plant or trained to climb walls or trellises. It prefers bright, indirect light and well-draining soil that is kept slightly moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 24 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 10 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 11,
    name: "<b>Air Plant</b>",
    partDes:
      "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil...",
    fullDes:
      "Air plants, also known as Tillandsia, are a type of epiphyte, meaning they grow on other plants or objects instead of in soil. They are native to tropical regions of the Americas and have become popular houseplants due to their unique appearance and low maintenance requirements.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 30 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 12 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1090 </span>",
  },
  {
    id: 12,
    name: "<b>Majesty Palm</b>",
    partDes:
      "Majesty palm, also known as Ravenea rivularis, is a popular indoor palm plant known for its lush, tropical appearance",
    fullDes:
      "Majesty palm, also known as Ravenea rivularis, is a popular indoor palm plant known for its lush, tropical appearance.Majesty palms have long, graceful fronds that give them a tropical, exotic appearance. They prefer bright, indirect light and well-draining soil that is kept consistently moist. ",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 29 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 18 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 1260-1440 </span>",
  },
  {
    id: 13,
    name: "<b>Pothos Evy</b>",
    partDes:
      "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves",
    fullDes:
      "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves. Pothos plants are easy to care for and can thrive in a variety of lighting conditions, making them a great choice for indoor gardening. They prefer well-draining soil and can tolerate a range of temperatures.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 29 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 18 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1440 </span>",
  },
  {
    id: 14,
    name: "<b>Pothos Evy</b>",
    partDes:
      "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves",
    fullDes:
      "Pothos, also known as Epipremnum aureum, is a popular indoor plant known for its long, trailing vines with heart-shaped leaves. Pothos plants are easy to care for and can thrive in a variety of lighting conditions, making them a great choice for indoor gardening. They prefer well-draining soil and can tolerate a range of temperatures.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 29 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 18 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1440 </span>",
  },
  {
    id: 15,
    name: "<b>Amaryllis</b>",
    partDes:
      "Amaryllis is a genus of flowering plants native to South America, commonly grown for their large, showy flowers",
    fullDes:
      "Amaryllis is a genus of flowering plants native to South America, commonly grown for their large, showy flowers.Amaryllis plants are prized for their striking, trumpet-shaped flowers that bloom in a range of colors, from reds and pinks to whites and yellows. They prefer bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 21 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 15 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
  {
    id: 16,
    name: "<b>Emerald Gem</b>",
    partDes:
      "Emerald Gem is a variety of ZZ plant, also known as Zamioculcas zamiifolia, a popular houseplant that is known for its attractive glossy green leaves.",
    fullDes:
      "Emerald Gem is a variety of ZZ plant, also known as Zamioculcas zamiifolia, a popular houseplant that is known for its attractive glossy green leaves. Emerald Gem ZZ plants have thick, waxy leaves that give them a unique appearance and make them easy to care for. They can thrive in a wide range of light conditions, from low to bright indirect light, and prefer well-draining soil.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 24 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 18 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 720-900 </span>",
  },
  {
    id: 17,
    name: "<b>Emerald Ripple Peperomia</b>",
    partDes:
      "Emerald Ripple Peperomia is a popular indoor plant known for its attractive, wavy leaves and compact growth habit...",
    fullDes:
      "Emerald Ripple Peperomia is a popular indoor plant known for its attractive, wavy leaves and compact growth habit. Emerald Ripple Peperomia prefers bright, indirect light and well-draining soil that is kept slightly moist. It is a low-maintenance plant that is well-suited for indoor gardening.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 27 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 18 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 720-900 </span>",
  },
  {
    id: 18,
    name: "<b>Fishbone cactus</b>",
    partDes:
      "Fishbone Cactus, also known as Epiphyllum anguliger, is a unique and striking indoor plant known for its long, flat, zig-zagging stems that resemble fishbones.",
    fullDes:
      "Fishbone Cactus, also known as Epiphyllum anguliger, is a unique and striking indoor plant known for its long, flat, zig-zagging stems that resemble fishbones. Fishbone cactus plants are low-maintenance and easy to care for, making them a popular choice for indoor gardening. They prefer bright, indirect light and well-draining soil that is kept slightly moist",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 32 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 10 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 720-1080 </span>",
  },
  {
    id: 19,
    name: "<b>Fizzle Sizzle</b>",
    partDes:
      "Fizzle Sizzle, also known as Albuca spiralis, is an indoor plant that is known for its distinctive spiral-shaped leaves that resemble corkscrews.",
    fullDes:
      "Fizzle Sizzle, also known as Albuca spiralis, is an indoor plant that is known for its distinctive spiral-shaped leaves that resemble corkscrews. Fizzle Sizzle is a unique and eye-catching indoor plant that is sure to make a statement in any space. It prefers bright, indirect light and well-draining soil that is kept consistently moist.",
    maxTemp:
      "<br><b>Max Temperature:</b> <span style='color: green'> 24 </span>",
    minTemp:
      "<br><b>Min Temperature: </b> <span style='color: green'> 15 </span>",
    soilMois:
      "<br><b>Suggested Soil Moisture:</b> <span style='color: green'> 900-1080 </span>",
  },
];

// Function to save the data of the plant
function addToGarden(id) {
  const btn = document.getElementById(id);
  btn.textContent = "Added to Garden";
  btn.disabled = true;
  btn.classList.add("added"); // Add the "added" class to the button
  let current = PLANTS.filter((e) => e.id == id)[0];
  console.log(current["name"]);
  let data = JSON.parse(localStorage.getItem(id))
    ? JSON.parse(localStorage.getItem(id))
    : [];

  data.push({
    plantName: current["name"],
    minTemp: current["minTemp"],
    maxTemp: current["maxTemp"],
    soilMois: current["soilMois"],
  });

  localStorage.setItem(current["name"], JSON.stringify(data));
  console.log(data);
  console.log(id);
}
