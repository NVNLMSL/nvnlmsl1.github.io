import React from "react";
import image1 from '../../components/image/image1.jpg';

const Home = () => {
    return(
       <div className='home'>
        
        <main>
        <h1>Welcome to Our Vegan Restaurant</h1>
        <div class="restaurant-image">
            <img src={image1} alt="Vegan Restaurant Interior"/>
        </div>
        <p>We provide delicious vegan food to our customers. Discover the importance of veganism!</p>
        <p>Vegan restaurants play a vital role in today's culinary landscape by addressing a range of pressing concerns related to health, sustainability, and ethics. These establishments offer a haven for individuals seeking plant-based dining options, accommodating various dietary preferences and restrictions. By promoting a diet devoid of animal products, vegan restaurants contribute to improved personal well-being, as plant-based diets have been associated with lower risks of chronic diseases like heart disease, diabetes, and certain cancers. Moreover, these restaurants champion environmental sustainability by reducing the demand for resource-intensive livestock farming, which is a leading contributor to deforestation, greenhouse gas emissions, and water pollution. The shift towards vegan dining also aligns with ethical considerations, advocating for the rights and welfare of animals. Vegan restaurants thus stand as beacons of change, inspiring individuals to make mindful and conscientious choices about what they consume, ultimately fostering a healthier, more compassionate, and ecologically balanced world.</p>
        
        <p>Furthermore, vegan restaurants serve as hubs for culinary innovation, dispelling the notion that plant-based diets are bland or monotonous. Chefs in these establishments creatively use a diverse array of fruits, vegetables, grains, legumes, and plant-based proteins to craft flavorful and visually appealing dishes, challenging traditional culinary boundaries. This innovative approach not only satisfies the taste buds of vegans but also entices non-vegans to explore and appreciate the richness of plant-based cuisine. As the demand for healthier and environmentally friendly dining options continues to rise, vegan restaurants contribute to shaping a dynamic food culture that embraces both nourishment and sustainability. In essence, these establishments are more than just places to eat; they are platforms for driving positive change on personal, societal, and planetary levels, highlighting the profound importance of their role in our modern world.</p>
        </main>
       </div>
    )
}

export default Home;