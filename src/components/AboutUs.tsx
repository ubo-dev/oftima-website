import Image from "next/image";
import firstImage from "../../public/1.svg";
import secondImage from "../../public/2.svg";
import thirdImage from "../../public/3.svg";
import fourthImage from "../../public/4.svg";

const QualityFeature = ({ imgSrc, title, desc }: any) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={100} height={100} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function AboutUs() {
  return (
    <section
      className="container mx-auto px-5 md:px-16 scroll-mt-52"
      id="hakkımızda"
    >
      <span className="service-name text-center block text-2xl font-bold text-gray-800">
        HAKKIMIZDA
      </span>
      <h2 className="title text-center text-4xl font-semibold text-gray-900 mt-4">
        Neler Yapıyoruz?
      </h2>

      <div className="text-center mx-auto py-5 text-lg max-w-3xl">
        Oftima İnşaat, inşaat sektöründe yılların getirdiği deneyim ve bilgi
        birikimi ile hizmet vermektedir. Projelerimizde yenilikçi ve
        sürdürülebilir çözümler sunarak, çevreye duyarlı ve estetik açıdan üstün
        yapılar inşa etmeyi amaçlıyoruz. Misyonumuz, müşteri beklentilerini
        aşarak, her projede yüksek kalite standartlarını sağlamaktır. Vizyonumuz
        ise, sektörde lider ve öncü bir firma olmaktır.
      </div>

      <span className="service-name text-center block text-2xl font-bold text-gray-800 mt-12">
        DEĞERLERİMİZ
      </span>
      <h2 className="title text-center text-4xl font-semibold text-gray-900 mt-4">
        Nelere Önem Veriyoruz?
      </h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc={firstImage}
          title="Güvenilirlik"
          desc="Müşterilerimize ve iş ortaklarımıza karşı her zaman şeffaf ve dürüst bir iletişim kuruyoruz. Her proje aşamasında verdiğimiz sözleri tutarak güven inşa ediyoruz."
        />
        <QualityFeature
          imgSrc={secondImage}
          title="Kalite"
          desc="En yüksek kalite standartlarına ulaşmayı ve bu standartları korumayı taahhüt ediyoruz. Projelerimizde en iyi malzemeleri kullanarak, dayanıklı ve estetik yapılar inşa ediyoruz."
        />
        <QualityFeature
          imgSrc={thirdImage}
          title="Yenilikçilik"
          desc="Sürekli olarak yeni teknolojileri ve metodları benimseyerek, projelerimizde inovasyonu teşvik ediyoruz. Modern inşaat tekniklerini kullanarak verimliliği artırıyoruz."
        />
        <QualityFeature
          imgSrc={fourthImage}
          title="Müşteri Odaklılık"
          desc="Müşterilerimizin ihtiyaç ve beklentilerini her zaman önceliğimiz olarak görüyoruz. Onların memnuniyeti için her detayı titizlikle ele alıyoruz."
        />
      </div>
    </section>
  );
}
