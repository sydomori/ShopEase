import Navbar from "./NavBar";
import ItemCard from "./ItemCard";
import '../styles/Global.css';

function Dashboard() {
    const items = [
        {
            name: 'Wireless Pro Headphones',
            price: '$199',
            image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww'
        },

        {
            name: 'Linen Shirt Classic',
            price: '$49',
            image: 'https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
        },

        {
            name:'Cast Iron Skillet',
            price: '$65',
            image: 'https://plus.unsplash.com/premium_photo-1670963025006-3b650025442c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdCUyMGlyb24lMjBza2lsbGV0fGVufDB8fDB8fHww'
        },

    ]
  return (
    <div className="dashboard">
      <h2>Explore Our Products</h2>
      <div className="item-grid">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;