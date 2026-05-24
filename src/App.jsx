import './App.scss';
import {
  About,
  FirstStep,
  Footer,
  Header,
  Hero,
  MapSection,
  Services,
  Steps,
  Testimonies,
} from './components/layout';

function App() {
  const numberCta = '2213186689';
  const coordinatesMap = '';

  const WHATSAPP_URL = `https://wa.me/${numberCta}?text=Hola%2C%20quiero%20agendar%20una%20cita`;
  const HERO_IMG =
    'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/71c159dd3_generated_26402ec1.png';
  const ABOUT_IMG =
    'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/8709a7267_generated_7ffe87db.png';
  const TEXTURE_IMG =
    'https://media.base44.com/images/public/6a087a98ab3e998fa594c666/0876f3fa8_generated_26d845c1.png';

  return (
    <div>
      <Header cta={WHATSAPP_URL} />
      <Hero cta={WHATSAPP_URL} img={HERO_IMG} />
      <Services />
      <About cta={WHATSAPP_URL} img={ABOUT_IMG} />
      <Steps />
      <Testimonies />
      <FirstStep cta={WHATSAPP_URL} img={TEXTURE_IMG} />
      <MapSection coordinates={coordinatesMap} />
      <Footer name={'Dra. Laura Martinez'} />
    </div>
  );
}

export default App;
