import './App.scss';
import { Header, Hero, Services } from './components/layout';

function App() {

  const WHATSAPP_URL = 'https://wa.me/2213186889?text=Hola%2C%20quiero%20agendar%20una%20cita';
  const HERO_IMG = 'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/71c159dd3_generated_26402ec1.png';
  const ABOUT_IMG = 'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/8709a7267_generated_7ffe87db.png';
  const TEXTURE_IMG = 'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/0876f3fa8_generated_26d845c1.png';

  return (
    <div>
      <Header toWhatsApp={WHATSAPP_URL} />
      <Hero toWhatsApp={WHATSAPP_URL} img={HERO_IMG} />
      <Services />
    </div>
  );
}

export default App;
