import React from "react";
import "./index.css";
import restaurantImage from "./restaurantImage.webp"; 

const RestaurantDescription = () => {
  return (
    <div className="restaurant-description">
      <div className="description-content">
        <img src={restaurantImage} alt="Restaurant" className="restaurant-image" />
        <div className="text-content">
          <h1>Bienvenue chez Primo Amore</h1>
          <p>
            Bienvenue chez "Primo Amore" – une expérience culinaire italienne au
            cœur de la ville. Notre restaurant incarne l'essence de la gastronomie
            italienne, mêlant tradition, créativité et ingrédients authentiques.
          </p>
          <p>
            Chaque plat est une danse harmonieuse de saveurs, évoquant la chaleur
            des repas partagés en famille dans les rues pavées de l'Italie.
          </p>
          <p>
            Découvrez nos classiques revisités, des antipasti aux dolci,
            sélectionnés avec soin pour une expérience gustative inoubliable.
            Détendez-vous dans une atmosphère chaleureuse, imprégnée de l'esprit
            italien.
          </p>
          <p>
            Pour une soirée romantique, "Primo Amore" vous invite à savourer
            l'amour authentique de l'Italie à chaque bouchée. Buon Appetito!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDescription;