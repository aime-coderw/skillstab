import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ToolkitStore.css";

// Import images
import konkaImg from "./assets/konka.jpg";
import dumaImg from "./assets/duma.jpg";
import coffeeImg from "./assets/coffee.avif";
import blenderImg from "./assets/blender.jpg";
import moldImg from "./assets/mold.jpeg";
import sewingImg from "./assets/sewing.jpg";
import handsawImg from "./assets/handsaw .jpg";
import brosewImg from "./assets/brosew.jpg";
import micImg from "./assets/mic.png";
import mixerImg from "./assets/mixer.jpg";
import nikonImg from "./assets/nikon.jpg";
import sonyImg from "./assets/sony.jpg";
import lapImg from "./assets/lap.jpg";
import podImg from "./assets/pod.jpg";
import lopImg from "./assets/lop.jpg";

export default function ToolkitStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const allProducts = [
    { id: 1, name: "KONKA-Oven", category: "Culinary", price: 130190, img: konkaImg, badge: "Hot", rating: 4.5, description: ["KONKA 800W electric oven...", "Product parameters..."] },
    { id: 2, name: "DUMA-Oven", category: "Culinary", price: 160020, img: dumaImg, badge: "New", rating: 5, description: ["Body material: stainless steel", "Capacity: 21-30 liters"] },
    { id: 3, name: "Coffee Grinder", category: "Culinary", price: 30925, img: coffeeImg, badge: "Sale", rating: 4, description: ["Product Name: Household Electric Grinder"] },
    { id: 4, name: "Juice blender", category: "Culinary", price: 40125, img: blenderImg, rating: 4.2, description: ["Product Name: Portable Electric Juicer"] },
    { id: 5, name: "Silicon soap mold", category: "Culinary", price: 10029, img: moldImg, rating: 3.8, description: ["Product Name: Silicone Soap Mold"] },
    { id: 6, name: "Singer-Electric Sewing machine", category: "Craft", price: 740050, img: sewingImg, badge: "Hot", rating: 4.5, description: ["Presser Foot Pressure Adjustment..."] },
    { id: 7, name: "U-Handsaw", category: "Craft", price: 9810, img: handsawImg, badge: "New", rating: 5, description: ["Product Name: Geepas Universal Cut Soft Grip Hand Saw"] },
    { id: 8, name: "Brother-electric Sewing machine", category: "Home Care", price: 147785, img: brosewImg, badge: "Sale", rating: 4, description: ["Product Name: Brother Electric Sewing Machine JK17B"] },
    { id: 9, name: "Professional Studio condenser microphone", category: "Home Care", price: 72340, img: micImg, rating: 4.2, description: ["Product Name: BM-800 Professional Recording Microphone"] },
    { id: 10, name: "Depusheng TG8 Professional Audio Mixer", category: "Music", price: 282476, img: mixerImg, rating: 3.8, description: ["Product Name: 8-Channel Professional Audio Mixing Console"] },
    { id: 11, name: "Nikon D5600 Digital SLR Camera & 18-55mm VR DX AF-P Lens", category: "Digital", price: 899500, img: nikonImg, rating: 3.8, description: ["Product Name: Nikon D5600 Digital SLR Camera"] },
    { id: 12, name: "Sony DSC-W800 Digital Camera with 5x Optical Zoom", category: "Digital", price: 255000, img: sonyImg, rating: 3.8, description: ["Product Name: Sony DSC-W800 Digital Camera"] },
    { id: 13, name: "HP 15 CELERON LAPTOP 4GB/500GB/WIN10 10TH GEN 15 INCH", category: "Digital", price: 392000, img: lapImg, rating: 3.8, description: ["Product Name: HP 15 Notebook"] },
    { id: 14, name: "Behringer Podcastudio 2 USB(USB Mixer, Microphone, Headphones)", category: "Music", price: 395000, img: podImg, rating: 3.8, description: ["Product Name: Behringer Podcastudio 2 USB Bundle"] },
    { id: 15, name: "HP 250 G9 CELERON Laptop 4GB RAM 256GB SSD, 15.6-Inch Screen Size", category: "Digital", price: 430000, img: lopImg, rating: 3.8, description: ["Product Name: HP 250 G9 Laptop"] },
  ];

  // Filter products based on category and search
  useEffect(() => {
    let filtered = allProducts;
    if (category !== "all") filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    setProducts(filtered);
  }, [category, search]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + qty } : item);
      return [...prev, { ...product, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const updateQuantity = (id, qty) => setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item));
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.02;
  const total = subtotal + tax;

  return (
    <>
      <Navbar />
      <div className="toolkit-store">
        {/* Language Switcher */}
        <div className="lang-switcher-container">
          <button className="lang-switcher" onClick={() => setLang(lang === "en" ? "rw" : "en")}>
            {lang === "en" ? "Kinyarwanda" : "English"}
          </button>
        </div>

        <h2>{lang === "en" ? "Toolkit Store" : "Ububiko bw'ibikoresho"}</h2>

        <button className="unlisted-btn" onClick={() => navigate("/order")}>
          {lang === "en" ? "Order unlisted product" : "Tanga icyifuzo cy'igicuruzwa kitagaragajwe"}
        </button>

        <div className="filters">
          <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="Music">Music</option>
            <option value="Home Care">Home Care</option>
            <option value="Culinary">Culinary</option>
            <option value="Craft">Craft</option>
            <option value="Digital">Digital</option>
          </select>
          <button className="cart-toggle-btn" onClick={() => setCartOpen(!cartOpen)}>
            Cart ({cart.length})
          </button>
        </div>

        <div className="products-grid">
          {products.length === 0 ? <p>No products found.</p> : products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && <div className={`badge ${product.badge.toLowerCase()}`}>{product.badge}</div>}
              <div className="img-container" onClick={() => setModalProduct(product)}>
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price.toLocaleString()} Rwf</p>
                <p className="rating">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</p>
                <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
          <h3>Cart ({cart.length})</h3>
          <button className="close-cart" onClick={() => setCartOpen(false)}>✕</button>
          {cart.length === 0 ? <p>Your cart is empty</p> :
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-controls">
                      <input type="number" value={item.qty} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} min="1" />
                      <span>{(item.price * item.qty).toFixed()} Rwf</span>
                      <button onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout-summary">
                <p>Subtotal: {subtotal.toFixed()} Rwf</p>
                <p>Transport fees: {tax.toFixed()} Rwf</p>
                <p><strong>Total: {total.toFixed()} Rwf</strong></p>
                <button className="checkout-btn" onClick={() => navigate("/checkout", { state: { cart } })}>Checkout</button>
              </div>
            </>
          }
        </div>

        {/* Quick View Modal */}
        {modalProduct && (
          <div className="modal-overlay" onClick={() => setModalProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalProduct.img} alt={modalProduct.name} />
              <h3>{modalProduct.name}</h3>
              <p className="price">{modalProduct.price.toLocaleString()} Rwf</p>
              <p className="rating">{"★".repeat(Math.floor(modalProduct.rating))}{"☆".repeat(5 - Math.floor(modalProduct.rating))}</p>
              {modalProduct.description && (
                <div className="product-description">
                  {Array.isArray(modalProduct.description) ? modalProduct.description.map((line, idx) => <p key={idx}>{line}</p>) : <p>{modalProduct.description}</p>}
                </div>
              )}
              <div className="quantity-select">
                <input type="number" min="1" defaultValue="1" id="modalQty" />
                <button onClick={() => {
                  const qty = parseInt(document.getElementById("modalQty").value);
                  addToCart(modalProduct, qty);
                  setModalProduct(null);
                }}>Add to Cart</button>
              </div>
              <button className="close-btn" onClick={() => setModalProduct(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
