// List of Plant Data
const PLANTS = [{
    id: 0,
    name: "Snake Plant",
    partDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long...",
    fullDes: "Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green color variegated with white and yellow striping. They are famous for their ability to survive in the most unsuitable growing conditions. They are also renowned for their qualities that help purify the air we breathe. Since they produce oxygen mainly at night, snake plants make for a great bedroom companion.",
    maxTemp: "Max Temperature: 69",
    minTemp: "Min Temperature: 69",
    soilMois: "Suggested Soil Moisture: 100"

},
{
    id: 1,
    name: "Aloe Vera",
    partDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
    fullDes: "Aloe vera can grow indoors and outdoors, but if you're growing it inside, make sure to put it in a spot where it will get plenty of sunlight...South- or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
    maxTemp: "Max Temperature: 123",
    minTemp: "Min Temperature: 321",
    soilMois: "Suggested Soil Moisture: 999"

},
{
    id: 2,
    name: "JP plant",
    partDes: "re growing it inside, make sure to put it in a spot where it will get plenty of sunlight...",
    fullDes: "PPP e sure to put it in a spot where it will get plenty of sunlight...South- or west-facing windows are ideal. You'll also need to water your aloe plant regularly, about once per week or when the soil is dry to the touch.",
    maxTemp: "Max Temperature: 12354",
    minTemp: "Min Temperature: 77",
    soilMois: "Suggested Soil Moisture: 123"

}]


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

