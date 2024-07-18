import { Cards } from '../components/Cards';
import img1 from '../assets/images/img1.jfif';
import img2 from '../assets/images/img1.webp';
import img3 from '../assets/images/img2.jfif';
import img4 from '../assets/images/img2.jpg';
import img5 from '../assets/images/img3.jfif';
import img6 from '../assets/images/img3.jpg';
import img7 from '../assets/images/img4.jpeg';
import img8 from '../assets/images/img4.webp';
import img9 from '../assets/images/img2.jfif';

export const Home = ({ img, desc, price }) => {
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap gap-3 other:justify-evenly'>
          <Cards img={img1} desc='SonicSurge X300 Wirelesst' price='$149' />
          <Cards
            img={img2}
            desc='PulseBeat Pro 500 Noise-Canceling'
            price='$99'
          />
          <Cards
            img={img3}
            desc='EchoPods BT200 Bluetooth Earphones'
            price='$70.9'
          />
          <Cards img={img4} desc='NovaTune HD400 Over-Ear ' price='$99' />
          <Cards
            img={img5}
            desc='SparkWave TWS900 True Wireless '
            price='$125'
          />
          <Cards
            img={img6}
            desc='AeroBass GX700 Gaming Headset'
            price='$87.99'
          />
          <Cards img={img7} desc='ZenithX Hi-Fi 360 Headphones' price='$160' />
          <Cards img={img8} desc='StealthSync S200 Studio' price='$99' />
          <Cards img={img9} desc='TitanTech Sport SE600' price='$150' />
        </div>
      </section>
    </main>
  );
};
