import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- import for navigation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ToolkitStore.css";

export default function ToolkitStore() {
  const navigate = useNavigate(); // <-- initialize navigate
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
   const [lang, setLang] = useState("en"); // <-- language state

  const allProducts = [
    {
      id: 1,
      name: "KONKA-Oven",
      category: "Culinary",
      price: 130190,
      img: "/src/assets/konka.jpg",
      badge: "Hot",
      rating: 4.5,
      description:[ "KONKA 800W electric oven household multifunctional mini vertical small oven 12L capacity 3layer vertical oven kitchen appliances",

"Product parameters:",

"Product name: electric oven",
"Capacity: 12L",
"Power: 800w",
"Body material: stainless iron",
"Style: vertical",
"Control method: mechanical",
"Function: Oven",
"Color: blue",
"Temperature control method: unified temperature control of upper and lower pipes",

"product properties:Home Appliances",

"Product Category:Kitchen Appliances",

"Product category:Electric oven",


"Function introduction:",
"● 1. Deep blue high-profile mini eye-catching appearance, petite figure, does not take up space",
"●2. three-tier baking position (baking cakes will not jam)",
"●3. rapid heating, precise temperature control, precise timing (100-200°C temperature controllable Degree; refracting inner pot, better baking effect)",
"●4. Galvanized inner plate, easy-to-clean inner tank, detachable slag tray (safe and sanitary)",
"●5. Mechanical knob, 0-60mins controllable heating time, with constant on function",
"●6. The upper and lower quartz tubes are heated, and the food is heated evenly,Double tube three-dimensional baking,Four-sided reflection and refraction",
"●7. Explosion-proof mirror glass panel (visualization + safety and explosion-proof)Adopt full mirror glass door",


"product details:",
"The non-slip floor mat makes the machine stable and safer.",
"Anti-scald handle.",
"Pullable crumb tray",
"Galvanized inner plate",
"Side cooling holes"],
    },
    {
      id: 2,
      name: "DUMA-Oven",
      category: "Culinary",
      price: 160020,
      img: "/src/assets/duma.jpg",
      badge: "New",
      rating: 5,
      description: [
  "Body material: stainless steel",
  "Capacity: 21-30 liters",
  "Style: Vertical",
  "Control method: Mechanical",
  "Rated voltage: 220V",
  "Rated frequency: 50Hz",
  "Rated power: 1400W",
  "Product size: 480 × 335 × 315 mm",
  "Function: Independent temperature control for upper and lower pipes",
  "Panel type: NEG panel",
  "Safety function: Overheat protection",
  "LCD display: None",
  "Intelligent type: Not supported",
  "Power: 1000W and above",
  "Weight: 4.5 kg",
  "Listing time: 2021",
  "Applicable population: 4–5 people",
  "Operation mode: Button type",
  "Energy efficiency level: Level 2",
  "Reservation/Timer function: None",
  "Number of heating tubes: 2",
  "Temperature control: Independent control (upper & lower pipes)",
  "Available colors: 12L Chinese 220V, 12L European 220V, 22L Chinese 220V, 22L European 220V, 25L European 220V",
  "Product color: Black",
  "Temperature control method: Unified temperature control for upper and lower pipes",
  "Inner liner material: Non-embroidered iron",
  "Inner liner size: 480 × 335 × 315 mm",
  "Shell material: Stainless steel"
],

    },
    {
      id: 3,
      name: "Coffee Grinder",
      category: "culinary",
      price: 30925,
      img: "/src/assets/coffee.avif",
      badge: "Sale",
      rating: 4,
      description: [
  "Product Name: Household Electric Grinder",
  "Power: 150W",
  "Voltage: 220V (EU), 110V (US)",
  "Note: Select the correct plug/voltage when ordering, based on your country.",
  "Capacity: 50–400 ml (best results around 150g of food)",
  "Product Size: Diameter 10.5 cm × Height 17 cm",
  "Color: Stainless Steel",

  "Usage Hints:",
  "1. This product is not washable; clean using a damp cloth only.",
  "2. Touch the switch indirectly. Press and hold to start, release to stop.",
  "3. Only suitable for grinding dry food (not for wet food).",
  "4. During use, press the button for about 5 seconds, pause for 1 second, then continue. Repeat until you reach your desired grind consistency."
]

    },
    {
      id: 4,
      name: "Juice blender",
      category: "culinary",
      price: 40125,
      img: "/src/assets/blender.jpg",
      rating: 4.2,
      description: [
  "Product Name: Portable Electric Juicer",
  "Function: Juicing",
  "Speed: 18000 rpm",
  "Blade Type: Vertical spiral rod",
  "Inner Liner Material: Plastic",
  "Body Material: Plastic, Stainless steel",
  "Power: 45W",
  "Voltage: ≤ 36V",
  "Capacity: 401mL – 600mL",
  "Cup Capacity: 700mL",
  "Built-in Battery: Yes (USB rechargeable)",
  "Charging Method: USB-C",
  "Usage Per Full Charge: 40+ juicing cycles",
  "Product Size (L×W×H): 110 × 110 × 230 mm",
  "Net Weight: 850g",
  "Additional Feature: Wireless & portable, laser engraved shell",
  "Color Options: Blue, Green, Yellow (randomly shipped)",

  "Features:",
  "1. One-button automatic juicing, senses fruit thickness for optimal extraction.",
  "2. Suitable for all kinds of fruits and vegetables — perfect for juices, smoothies, cocktails, desserts, and marinades.",
  "3. USB-C rechargeable — allows more than 40 uses on a full charge.",
  "4. Made with food-grade, BPA-free materials.",
  "5. Easy to clean — detachable parts with a custom cleaning brush included.",
  "6. Compact and portable — ideal for travel, gym, office, picnics, and camping.",

  "Tips:",
  "• Do not use the juicer while charging — unplug the cable before use.",
  "• Red light flashing = low battery. Red solid = charging. White solid = fully charged.",
  "• Fully charge the juicer before first use.",

  "Product Parameters:",
  "• Product Name: Portable Juice Extractor",
  "• Voltage/Current: 5V / 1A",
  "• Single Working Time: 10 minutes",
  "• Pulp Box Capacity: ≤ 500mL",
  "• Feeding Port Shape: Circular",
  "• Maximum Speed: 18000 rpm",
  "• Packaging Includes: Host, color box, etc."
]

    },
    {
      id: 5,
      name: "Silicon soap mold",
      category: "culinary",
      price: 10029,
      img: "/src/assets/mold.jpeg",
      rating: 3.8,
      description: [
  "Product Name: Silicone Soap Mold",
  "Type: DIY Handmade Craft 3D Soap Mold",
  "Shape: Rectangular (6 forms)",
  "Material: Silicone",
  "Color: Silver",

  "Features:",
  "• Ideal for making handmade soaps, bath bombs, candles, cakes, candies, and cookies.",
  "• Easy to use — pour the mixture into the mold halves and press together to form perfect soap shapes or bath bombs.",
  "• Durable, flexible, and reusable silicone material.",
  "• Heat-resistant and non-stick surface for easy demolding.",

  "Available Sizes (Sphere Diameter for soap/bath bomb use):",
  "• 8 cm",
  "• 9 cm",
  "• 10 cm",

  "Application:",
  "• Soap Making",
  "• Candle Making",
  "• Cake & Candy Molds",
  "• Cookie and DIY Crafts",

  "Package Includes:",
  "• 1 × Silicone Soap Mold (6 Rectangular Cavities)",

  "Notes:",
  "• Manual measurement may cause a 1–3mm error.",
  "• Due to monitor differences, actual colors may vary slightly from images.",
  "• The style remains consistent with product photos."
]

    },
    {
      id: 1,
      name: "Singer-Electric Sewing machine",
      category: "crafts",
      price: 740050,
      img: "/src/assets/sewing.jpg",
      badge: "Hot",
      rating: 4.5,
       description: [
    "Presser Foot Pressure Adjustment: Adjusts how much pressure the presser foot applies to the fabric for best feeding on different thicknesses.",
    "Tension Adjustment Knob: Controls the tightness of the upper thread to balance with the bobbin thread (usual setting: 4).",
    "Needle Position Adjustment: Move the needle left, center, or right. Straight stitch follows needle position; other stitches may change with width.",
    "Needle Width Adjustment (0–6mm): Changes stitch width; affects needle position for straight stitch.",
    "Stitch Length (Density) Adjustment: Controls stitch length. Set to blue S1 gear to use blue decorative stitches.",
    "Stitch Selection Dial: Rotate to choose stitch patterns. The black dot shows the selected stitch; blue stitches require S1 setting.",
    "Small Thread Spool Holder: Holds small spools (≤300 yards) and works with a spool cap.",
    "Bobbin Winder: Turn right to wind the bobbin; turn left to return to sewing mode.",
    "Reverse Sewing Lever: Press and step on the pedal to sew in reverse to lock stitches at the start/end.",
    "Fast Thread Cutter: Built-in cutter on the left side for quick trimming after sewing.",
    "Quick Needle Threader: Helps you thread the needle quickly and easily.",
    "One-step Buttonhole Lever: Use with the buttonhole presser foot to make one-step buttonholes.",
    "Presser Foot Lifter: Lifts the presser foot (two-stage lift, max ~1 cm) to place fabric; lower before sewing.",
    "Needle Clamp Screw: Secures the needle — flat side of the needle must face the back before tightening.",
    "Seven-Tooth Feed Dog: High-spec, wear-resistant 7-tooth feed dog for smooth fabric feeding.",
    "Feed Dog Drop / Thread-Dropping Device: Right = normal sewing; Left = feed dogs drop for free-motion/embroidery. Return to right and turn handwheel to raise the feed dog.",
    "Handwheel: Turn (counterclockwise) to precisely move the needle for threading or positioning.",
    "Stainless Steel Needle Plate / Table: Durable, wear-resistant surface for the sewing area.",
    "Buttonhole Left/Right Balance Adjustment: Fine-tune stitch density on buttonhole sides if needed.",
    "Power Switch & Power Interface: Main on/off switch and ports for power cord & foot pedal.",
    "Motor Cooling Vents: Ventilation holes on the motor side for heat dissipation.",
    "LED Lighting: Energy-efficient LED provides bright workspace illumination."
  ]
    },
    {
      id: 2,
      name: "U-Handsaw",
      category: "crafts",
      price: 9810,
      img: "/src/assets/handsaw .jpg",
      badge: "New",
      rating: 5,
      description: [
  "Product Name: Geepas Universal Cut Soft Grip Hand Saw",
  "Brand: Geepas",
  "Size: 18 inch",

  "Flexible Use:",
  "• Suitable for home, workshop, woodworking, DIY, site work, and general-purpose cutting.",
  "• Can be used by professionals, amateurs, hobbyists, and for maintenance tasks.",

  "High-Quality Blades:",
  "• Made of high-quality carbon steel.",
  "• Strong and durable for cutting hardwoods and softwoods easily.",

  "Comfortable TRP Handle:",
  "• Anti-slip soft grip TRP handle for better control and comfort.",
  "• Fits all hand sizes (small to extra-large).",
  "• Reduces hand fatigue during long usage.",

  "Hardened Teeth:",
  "• Specially hardened and ground teeth for long-lasting sharpness.",
  "• Cuts both along and across wood grain.",
  "• Sharp-tooth technology cuts up to 50% faster than normal saws.",

  "Polished Surface:",
  "• Polished high-carbon steel blade prevents rust and corrosion.",
  "• Ensures long service life and smooth cutting performance."
]

    },
    {
      id: 3,
      name: "Brother-electric Sewing machine",
      category: "home-care",
      price: 147785,
      img: "/src/assets/brosew.jpg",
      badge: "Sale",
      rating: 4,
      description: [
  "Product Name: Brother Electric Sewing Machine JK17B",
  "Brand: Brother",
  "Model: JK17B",
  "Color: Light Blue",
  "Material: Plastic",
  "Power: Electric",

  "Compact & Beginner-Friendly:",
  "• Designed with beginner sewers in mind.",
  "• Lightweight and easy to carry or store.",
  "• Ideal for home sewing, mending, and craft projects.",

  "Features:",
  "• Automatic four-step buttonhole function for quick buttonholes.",
  "• Easy stitch selection with 17 built-in decorative stitches.",
  "• Top-load quick-set bobbin for easy threading and minimal downtime.",
  "• Durable construction with reliable performance for regular home use."
]

    },
    {
      id: 4,
      name: "Professional Studio condenser microphone",
      category: "home-care",
      price: 72340,
      img: "/src/assets/mic.png",
      rating: 4.2,
      description: [
  "Product Name: BM-800 Professional Recording Microphone",
  "Type: Small Diaphragm Condenser Microphone",
  "Material: Steel Mesh",
  "Frequency Response: 20Hz–20kHz",
  "Sensitivity: 45 dB ± 1 dB",
  "Output Impedance: 150Ω ± 30% (1 kHz)",
  "Load Impedance: ≥1000Ω",
  "Equivalent Noise Level: 16 dBA",
  "Current: 3mA",
  "Signal to Noise Ratio: 78 dB",
  "Microphone Output Interface: 3.5 mm",
  "Cable Length: 2.5 m",

  "Features:",
  "• Ideal for computer recording, studio vocals, KTV karaoke, radio broadcasting, TV stations, voice-over studios, and stage use.",
  "• Includes scissor arm desktop microphone stand, mic boom, pop filter, and shock-proof mount.",
  "• Stable, durable, and affordable desktop-type stand; double-braced arms support more weight and foldable for easy transport and storage.",
  "• Adjustable clamp mounts on desktops easily; dual suspension springs on boom arms enhance stability.",
  "• Double audio port allows simultaneous microphone input and earphone/speaker output.",

  "Package Options:",
  "5pcs/set:",
  "• 1 X Microphone (16 x 4.5 cm)",
  "• 1 X Black Plastic Shock Frame",
  "• 1 X Black Microphone Windproof Cotton",
  "• 1 X Black Audio Cable (2.5 m)",
  "• 1 X English Instruction Manual",

  "10pcs/set:",
  "• 1 X Black/Gold Microphone (16 x 4.5 cm)",
  "• 1 X Black Anti-Spray Net (15.5 cm)",
  "• 1 X White USB Sound Card",
  "• 1 X Black Plastic Shock Frame",
  "• 1 X Black Microphone Windproof Cotton",
  "• 1 X Black Clip",
  "• 1 X Black Iron Clip Base",
  "• 1 X Black Audio Cable (2.5 m)",
  "• 1 X Black Bracket (38 x 37 cm)",
  "• 1 X English Instruction Manual",

  "BM800 with V8-Gold:",
  "• 1 X V8 Sound Card",
  "• 1 X Black/Gold Microphone (16 x 4.5 cm)",
  "• 1 X Black Anti-Spray Net (15.5 cm)",
  "• 1 X Black Plastic Shock Frame",
  "• 1 X Black Microphone Windproof Cotton",
  "• 1 X Black Clip",
  "• 1 X Black Iron Clip Base",
  "• 1 X Black Audio Cable (2.5 m)",
  "• 1 X Black Bracket (38 x 37 cm)",
  "• 1 X English Instruction Manual"
]

    },
    {
      id: 5,
      name: "Depusheng TG8 Professional Audio Mixer",
      category: "culinary",
      price: 282476,
      img: "/src/assets/mixer.jpg",
      rating: 3.8,
     description: [
  "Product Name: 8-Channel Professional Audio Mixing Console",
  "Type: Audio Mixer",
  "Connectivity: Bluetooth 5.0, USB/MP3, 6.35mm & XLR",
  "Built-in Effects: 99 DPS reverb effects",
  "Display: Large LCD for real-time sound monitoring",
  "Equalizer: 7-band adjustable EQ",
  "Power: +48V phantom power per channel",

  "Features:",
  "• 8 input channels: 5 mic mono inputs + 2 stereo inputs.",
  "• Each channel has a separate group button for independent adjustment.",
  "• Hybrid audio input interface supports both 6.35mm and XLR equipment.",
  "• Built-in 99-bit DSP digital effects: delays, reverb, and more.",
  "• Large LCD screen allows real-time monitoring of sound dynamics.",
  "• 7-band EQ for detailed music and vocal tuning.",
  "• USB/MP3 compatibility: easy connection to flash drives or other devices; control playback/pause/skip and mode switching.",
  "• Bluetooth 5.0 wireless connection for faster and stable audio transmission.",
  "• Widely compatible with wireless/wired microphones, electronic organs, guitars, amplifiers, and computers.",

  "Applications:",
  "• Ideal for bars, weddings, parties, DJ performances, stage shows, and studio recordings.",
  "• Enables professional-level sound control, music creation, and live performance enhancement."
]

    },
    {
      id: 5,
      name: "Nikon D5600 Digital SLR Camera & 18-55mm VR DX AF-P Lens",
      category: "Digital",
      price: 899500,
      img: "/src/assets/nikon.jpg",
      rating: 3.8,
     description: [
  "Product Name: Nikon D5600 Digital SLR Camera",
  "Type: Single-lens reflex digital camera (DSLR)",
  "Lens Mount: Nikon F mount with AF contacts",
  "Image Sensor: DX, CMOS, 23.5 mm x 15.6 mm",
  "Dust Reduction System: Image sensor cleaning, Image Dust Off reference data via Capture NX-D software",
  "Shutter Speed: 1/4000 to 30 s (steps of 1/3 or 1/2 EV), Bulb, Time mode",
  "ISO Sensitivity: 100–25600 (steps of 1/3 EV), Auto ISO control available",
  "Continuous Shooting: 5 FPS",
  "Screen: 3.2\" vari-angle touchscreen LCD",
  "Connectivity: Built-in Wi-Fi, SnapBridge for remote shooting via phone",
  "Video: Full HD 1080p recording",
  "Processor: EXPEED 4 Image Processor",
  "Autofocus: 39-point AF sensor",
  "Lens Included: Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR lens with pulse motor for ultra-fast, near-silent autofocus and VR image stabilization",
  
  "Key Features:",
  "• Capture 24.2MP high-quality photos and Full HD 1080p videos.",
  "• Vari-angle LCD allows shooting from creative angles.",
  "• Time-lapse movie recording supported.",
  "• Compact, lightweight, and easy to carry.",
  "• Perfect for photography enthusiasts, travel, events, and everyday shooting.",

  "Additional Benefits:",
  "• Cash/Momo/Airtel Money/POS on delivery available in Kigali, Rwanda.",
  "• Free and fast delivery in Kigali, Rwanda.",
  "• 100% genuine Nikon brand product."
]

    },
    {
      id: 5,
      name: "Sony DSC-W800 Digital Camera with 5x Optical Zoom",
      category: "Digital",
      price: 255000,
      img: "/src/assets/sony.jpg",
      rating: 3.8,
      description: [
  "Product Name: Sony DSC-W800 Digital Camera",
  "Type: Digital Camera",
  "Brand: Sony (100% Genuine)",
  "Sensor Type: 0.31 in type (7.76 mm) Super HAD CCD",
  "Effective Pixels: 20.1MP",
  "Lens: Sony Lens, Focal Length: f=4.6-23 mm",
  "Optical Zoom: 5x",
  "Digital Zoom: Up to 40x (VGA) for images, Approx. 10x for movies",
  "ISO Sensitivity: 100–3200",
  "Angle of View: 80°–19° (26–130 mm equivalent)",
  "Screen: 2.7 in (6.7 cm), 4:3 TFT LCD, 230,400 dots, Xtra Fine",
  "Brightness Control: 5 levels (1–5)",
  "Power Consumption: Approx. 1W",
  "Output/Input Terminals: Hi-Speed USB (USB 2.0), Multi (AV/USB)",
  
  "In the Box:",
  "• Battery (NP-BN)",
  "• AC Adaptor (AC-UB10C)",
  "• Wrist Strap",
  "• Multi USB Cable",

  "Key Features:",
  "• Easy to take high-quality photos and HD videos.",
  "• Multiple auto settings for simple shooting.",
  "• Compact and portable for parties, travel, and daily use.",
  
  "Additional Benefits:",
  "• Cash/Momo/Airtel Money/POS on delivery available in Kigali, Rwanda.",
  "• Free and fast delivery in Kigali, Rwanda."
]

    },
    {
      id: 5,
      name: "HP 15 CELERON LAPTOP 4GB/500GB/WIN10 10TH GEN 15 INCH",
      category: "Digital",
      price: 392000,
      img: "/src/assets/lap.jpg",
      rating: 3.8,
      description: [
  "Product Name: HP 15 Notebook",
  "Brand: HP (100% Genuine)",
  "Operating System: Windows 10",
  "Processor: 2.4 GHz",
  "RAM: 4GB DDR4",
  "Storage: 500GB",
  "Display: 15.6 inches HD LED Display",
  "Connectivity: WLAN & Bluetooth",
  "Color: Black",
  
  "Key Features:",
  "• Combines stylish design with reliable performance.",
  "• Ideal for business tasks, multimedia, and everyday computing.",
  "• Lightweight and portable for home, school, or office use.",
  "• Efficient Intel technology for smooth performance.",
  
  "Warranty & Delivery:",
  "• 1 Year Warranty included.",
  "• Cash/Momo/Airtel Money/POS on Delivery available in Kigali, Rwanda.",
  "• Free delivery in Kigali, Rwanda."
]

    },
    {
      id: 5,
      name: "Behringer Podcastudio 2 USB(USB Mixer, Microphone, Headphones)",
      category: "Digital",
      price: 395000,
      img: "/src/assets/pod.jpg",
      rating: 3.8,
      description: [
  "Product Name: Behringer Podcastudio 2 USB Bundle",
  "Type: USB Mixer & Recording Bundle",
  "Brand: Behringer",
  "USB/Audio Interface: 2-in/2-out stereo USB recording",
  "Mic Preamps: 5 inputs with XENYX legendary mic preamps",
  "Frequency Response: 50–15,000 Hz",
  "Sensitivity: 105 dB",
  "Resolution: 16 bit",
  "Compatibility: Works with most recording software including Avid Pro Tools",
  
  "Included in Bundle:",
  "• Ultravoice XM8500 Microphone",
  "• HPM1000 Stereo Headphones",
  "• USB Mixer with 5 inputs",
  "• 2 Track inputs and outputs",
  "• Stereo line input",
  "• Microphone input with 15V phantom power",
  "• Master fader and 2-band EQ",
  "• Studio-grade converters for high-quality sound",
  
  "Key Features:",
  "• High-resolution capsules provide wide frequency response and dynamic range for accurate playback and full sound.",
  "• Built-in USB/audio interface for easy recording and connectivity.",
  "• Rugged and reliable design suitable for home recordings, podcasts, and music production.",
  "• Perfect for producing professional-quality podcasts and home studio recordings.",

  "Additional Benefits:",
  "• Cash/Momo/Airtel/POS on delivery available in Kigali, Rwanda.",
  "• Free delivery in Kigali, Rwanda."
]

    },
    {
      id: 5,
      name: "HP 250 G9 CELERON Laptop 4GB RAM 256GB SSD, 15.6-Inch Screen Size",
      category: "Digital",
      price: 430000,
      img: "/src/assets/lop.jpg",
      rating: 3.8,
      description: [
  "Product Name: HP 250 G9 Laptop",
  "Brand: HP (100% Genuine)",
  "Operating System: FreeDOS (or other OS of your choice)",
  "Processor: Intel Celeron N4500, 2 cores, 2 threads, up to 2.8 GHz burst frequency, 4 MB cache",
  "RAM: 4 GB DDR4-2400 SDRAM (1 x 4 GB)",
  "Storage: 256GB SSD (PCIe NVMe M.2)",
  "Display: 15.6-inch HD",
  
  "Key Features:",
  "• Lightweight and portable, perfect for work, study, or home use.",
  "• Fast boot and data access with 256GB SSD storage.",
  "• Efficient Intel Celeron processor for everyday computing tasks.",
  "• Supports expansion and upgrades for RAM and storage.",
  
  "Warranty & Delivery:",
  "• Cash/Momo/Airtel Money/POS on delivery available in Kigali, Rwanda.",
  "• Free and fast delivery in Kigali, Rwanda."
]

    },
  ];

  useEffect(() => {
    let filtered = allProducts;
    if (category !== "all") filtered = filtered.filter((p) => p.category === category);
    if (search) filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    setProducts(filtered);
  }, [category, search]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const updateQuantity = (id, qty) => setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item));
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.02; // 10% tax
  const total = subtotal + tax;

  return (
    <>
       <Navbar />
      <div className="toolkit-store">

        {/* Language Switcher */}
        <div className="lang-switcher-container">
          <button 
            className="lang-switcher" 
            onClick={() => setLang(lang === "en" ? "rw" : "en")}
          >
            {lang === "en" ? "Kinyarwanda" : "English"}
          </button>
        </div>

        <h2>{lang === "en" ? "Toolkit Store" : "Ububiko bw'ibikoresho"}</h2>

        {/* Bilingual unlisted order button */}
        <button
          className="unlisted-btn"
          onClick={() => navigate("/order")}
        >
          {lang === "en" ? "Order unlisted product" : "Tanga icyifuzo cy'igicuruzwa kitagaragajwe"}
        </button>

        <div className="filters">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="music">Music</option>
            <option value="home-care">Home Care</option>
            <option value="culinary">Culinary</option>
            <option value="craft">Craft</option>
            <option value="digital">Digital</option>
          </select>
          <button className="cart-toggle-btn" onClick={() => setCartOpen(!cartOpen)}>
            Cart ({cart.length})
          </button>
        </div>

        <div className="products-grid">
          {products.length === 0 && <p>No products found.</p>}
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && <div className={`badge ${product.badge.toLowerCase()}`}>{product.badge}</div>}
              <div className="img-container" onClick={() => setModalProduct(product)}>
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
  <h3>{product.name}</h3>
  <p className="price">{product.price.toLocaleString()} Rwf</p>
  <p className="rating">
    {"★".repeat(Math.floor(product.rating))}
    {"☆".repeat(5 - Math.floor(product.rating))}
  </p>
  <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
</div>

            </div>
          ))}
        </div>

        {/* Sliding Cart Sidebar */}
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
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        min="1"
                      />
                      <span>{(item.price * item.qty).toFixed()}Rwf</span>
                      <button onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout-summary">
                <p>Subtotal: {subtotal.toFixed()}Rwf</p>
                <p>Transport fees: {tax.toFixed()}Rwf</p>
                <p><strong>Total: {total.toFixed()}Rwf</strong></p>
                {/* Updated checkout button */}
                <button className="checkout-btn" onClick={() => navigate("/checkout", { state: { cart } })}>
                  Checkout
                </button>
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
              <p className="price">{modalProduct.price.toFixed()}rwf</p>
              <p className="rating">{"★".repeat(Math.floor(modalProduct.rating))}{"☆".repeat(5 - Math.floor(modalProduct.rating))}</p>
              {modalProduct.description && (
  <div className="product-description">
    {Array.isArray(modalProduct.description)
      ? modalProduct.description.map((line, idx) => <p key={idx}>{line}</p>)
      : <p>{modalProduct.description}</p>}
  </div>
)}

              <div className="quantity-select">
                <input type="number" min="1" defaultValue="1" id="modalQty"/>
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
