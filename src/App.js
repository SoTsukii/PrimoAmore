import Header from "./components/header";
import MenuSlider from "./components/slider";
import RestaurantDescription from "./components/paragraphe"; 
import Footer from "./components/footer";
import Reservation from "./components/reservation";
function App() {
  return (
    <div className="App"> 
     <Header></Header>
     <section id="NosPLats"><MenuSlider items={menuItems}></MenuSlider></section>
     <section id="Apropos"><RestaurantDescription></RestaurantDescription></section>
     <section id="Reservation"><Reservation id="Reservation"></Reservation></section>
     <Footer></Footer>
    </div>
  );
}

export default App;


















const menuItems = [
  {
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic',
    image: 'https://media.istockphoto.com/id/686957124/fr/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=uCPYwIByktrh8fa9lE6t5XKAn0dDQYedgFMq3btO8_E=',
  },
  {
    name: 'Pasta Carbonara',
    description: 'Spaghetti, oeuf, fromage pecorino, guanciale',
    image: 'https://www.casa-azzurra-italia.fr/wp-content/uploads/2020/11/Spaghetti-carbonara-au-pecorino-romano-Casa-Azzurra.jpg',
  },
  {
    name: 'Bruschetta',
    description: "Tomates fraîches, Ail, Basilic, Pain grillé, Huile d'olive extra vierge",
    image: 'https://static.750g.com/images/1200-630/f9faf96b96ae30339a19a4061f3da217/bruschetta-caprese-img-2379.jpg',
  },
  {
    name: 'Carpaccio di Manzo',
    description: "Bœuf (tranche très fine), Roquette, Parmesan, Huile d'olive, Jus de citron, Sel et poivre",
    image: 'https://img.cuisineaz.com/1024x576/2022/07/06/i184576-carpaccio-boeuf.webp',
  },
  {
    name: 'Penne all\'Arrabbiata',
    description: 'Penne, Tomates concassées, Ail, Piment rouge, Huile d\'olive, Basilic',
    image: 'https://www.giallozafferano.com/images/260-26061/Penne-all-arrabbiata_1200x800.jpg',
  },
  {
    name: 'Risotto ai Funghi',
    description: 'Riz Arborio, Champignons (shiitake, champignons de Paris), Bouillon de légumes, Vin blanc, Parmesan, Oignon',
    image: 'https://images.squarespace-cdn.com/content/v1/50106d5684aed4702b7242ed/1586960457052-Q6D241245NWYJQJQ34Q8/image-asset.jpeg',
  },
  {
    name: 'Osso Buco alla Milanese',
    description: 'Jarret de veau, Vin blanc, Bouillon de veau, Tomates, Oignon, Ail, Gremolata (zeste de citron, persil, ail)',
    image: 'https://www.insidetherustickitchen.com/wp-content/uploads/2021/05/Ossobuco-1200px-inside-the-rustic-kitchen.jpg',
  },
  {
    name: 'Saltimbocca alla Romana',
    description: 'Escalopes de veau, Jambon de Parme, Feuilles de sauge, Vin blanc, Bouillon de poulet',
    image: 'https://www.giallozafferano.it/images/ricette/204/20401/foto_hd/hd650x433_wm.jpg',
  },
  {
    name: 'Insalata Caprese',
    description: 'Tomates, Mozzarella di Bufala, Basilic, Huile d\'olive, Vinaigre balsamique',
    image: 'https://images.prismic.io/eataly-us/f161512d-57c9-4a70-b9bc-c3f951b9a456_insalata-caprese-main.jpg?auto=compress,format',
  },
  {
    name: 'Caponata',
    description: 'Aubergines, Céleri, Tomates, Olives vertes et noires, Câpres, Oignon',
    image: 'https://assets.afcdn.com/recipe/20230713/144159_w1024h1024c1cx960cy540cxt0cyt0cxb1920cyb1080.webp',
  },
  {
    name: 'Tiramisu',
    description: 'Œufs, Mascarpone, Café fort, Biscuits à la cuillère, Cacao en poudre',
    image: 'https://files.meilleurduchef.com/mdc/photo/recette/tiramisu-speculoos/tiramisu-speculoos-1200.jpg',
  },
  {
    name: 'Panna Cotta',
    description: 'Crème, Sucre, Gélatine, Vanille',
    image: 'https://img.cuisineaz.com/1024x1024/2014/01/07/i12512-panna-cotta-aux-fruits-rouges-allegee.jpg',
  },
];

