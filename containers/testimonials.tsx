import { Badge } from "@/components/badge";
import { Title } from "@/components/title";

export const Testimonials = () => (
  <section className="

  ">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="
        flex
        flex-col
        gap-4
        justify-center
        items-center
      ">
      <Badge content="Testimonials" />
      <Title
        className="
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
     Rüyalarınızı Tasarıma Döküyoruz
      </Title>
      <p
        className="
          w-[50ch]
          text-secondary
          text-[16px]
          lg:max-[3000px]:text-[32px]
          text-center
      ">
        Hayalinizdeki projeyi 'Rüyalarınızı Tasarıma Döküyoruz' sloganıyla, tüm süreçleri yöneterek gerçeğe dönüştürüyoruz. 
      </p>
    </div>
  </section>
)
