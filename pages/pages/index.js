import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 22, padding: '2rem'
    }}>
      <header style={{
        background: 'linear-gradient(90deg, #2e7d32 60%, #ffd700 100%)',
        color: '#fff', padding: '2rem', borderRadius: 18, textAlign: 'center'
      }}>
        <h1>Sweet Bakery</h1>
        <p>Founded in 2022 by Kashmira, Sweet Bakery brings joy through delicious, beautifully crafted cakes.</p>
        <p>We use only the finest organic ingredients sourced from local farmers whenever possible.</p>
      </header>

      <section>
        <h2>🎂 Menu & Offerings</h2>
        <ul>
          <li>Classic Layer Cakes – Ideal for birthdays, celebrations, and parties.</li>
          <li>Cupcakes – Mini treats perfect for events and giveaways.</li>
          <li>Customized Fondant Cakes – Personalized themes and designs for any occasion.</li>
          <li>Wedding Cakes – Elegant, multi-tier cakes for your special day.</li>
          <li>Cheesecakes – Creamy and rich, perfect for dessert lovers.</li>
          <li>Jar Cakes – Portable, layered delights in a jar.</li>
          <li>Eggless & Vegan Cakes – Specially crafted for dietary needs.</li>
        </ul>
      </section>

      <section>
        <h2>🍓 Flavors Available</h2>
        <ul>
          <li>Chocolate Fudge</li>
          <li>Vanilla Bean</li>
          <li>Red Velvet</li>
          <li>Strawberry Cream</li>
          <li>Caramel Crunch</li>
          <li>Coffee Mocha</li>
          <li>Cookies & Cream</li>
          <li>Mango Delight (Seasonal)</li>
          <li>Pineapple</li>
          <li>Lemon Zest</li>
          <li>Blueberry Cheesecake</li>
          <li>Black Forest / White Forest</li>
        </ul>
      </section>

      <section>
        <h2>🎨 Gallery</h2>
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center'
        }}>
          <div>
            <Image src="/image1.jpg" alt="Birthday cake" width={200} height={200} style={{borderRadius:10}} />
            <p>Pastel birthday cake</p>
          </div>
          <div>
            <Image src="/image2.jpg" alt="Green gold cake" width={200} height={200} style={{borderRadius:10}} />
            <p>Green & gold luxury cake</p>
          </div>
          <div>
            <Image src="/image3.jpg" alt="Chocolate cake" width={200} height={200} style={{borderRadius:10}} />
            <p>Chocolate overload</p>
          </div>
          <div>
            <Image src="/image4.jpg" alt="Unicorn cake" width={200} height={200} style={{borderRadius:10}} />
            <p>Unicorn fondant cake</p>
          </div>
        </div>
      </section>

      <section>
        <h2>📍 Find Us</h2>
        <p>Address: Ratnapura Road, Godakewla</p>
      </section>

      <section>
        <h2>🌱 Why Choose Us?</h2>
        <ul>
          <li>Organic, locally sourced ingredients</li>
          <li>Custom designs for every occasion</li>
          <li>Vegan & eggless options available</li>
          <li>Handcrafted with love & artistry</li>
        </ul>
      </section>

      <footer style={{
        background: '#263a29', color: '#ffd700', padding: '1.5rem',
        borderRadius: 18, textAlign: 'center', marginTop: 30
      }}>
        <h2>💚 Connect with Us</h2>
        <p>
          <a href="#" style={{ color: '#ffd700', textDecoration: 'underline', margin: '0 0.5rem' }}>Instagram</a>
          <a href="#" style={{ color: '#ffd700', textDecoration: 'underline', margin: '0 0.5rem' }}>Facebook</a>
          <a href="#" style={{ color: '#ffd700', textDecoration: 'underline', margin: '0 0.5rem' }}>WhatsApp</a>
        </p>
        <p>Experience the joy of Sweet Bakery – where every cake is a celebration!</p>
      </footer>
    </main>
  );
}
