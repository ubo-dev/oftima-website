import Image from "next/image";
import Link from "next/link";
import hero from "../../public/home.png";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-36   sm:mt-32 md:mt-44 scroll-mt-52"
      id="ana sayfa"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>inşaat sektörünün </p>
          <p>dinamik ve yenilikçi yüzü</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          İnşaat sektöründe yenilikçi ve güvenilir çözümler sunan Oftima olarak,
          hayallerinizdeki yapıları gerçeğe dönüştürmek için buradayız.
          Profesyonel ekibimiz ve yıllara dayanan deneyimimizle, projelerinizi
          zamanında ve bütçenize uygun bir şekilde tamamlıyoruz. Kalite, güven
          ve müşteri memnuniyeti odaklı yaklaşımımızla hizmetinizdeyiz.
        </p>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={hero}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
