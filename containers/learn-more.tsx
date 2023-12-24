import { Badge } from "@/components/badge"
import { Title } from "@/components/title"
import phone from "@/assets/phone.png"
import Image from "next/image"

export const LearnMoreSection = () => {
  return (
    <section
      id="learn-more"
      className="
      p-8
      flex
      flex-col
      xl:max-[3000px]:flex-row
      justify-between
      items-center
      xl:max-[3000px]:items-start
      overflow-hidden
      gap-16
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
        xl:max-[3000px]:justify-start 
        xl:max-[3000px]:items-start
      ">
        <Badge content="Hakkımızda" />
        <Title
          className="
          w-[10ch] 
          xl:max-[3000px]:text-start 
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
          Daha fazlası için Tıkla
        </Title>
        <p
          className="
          text-secondary
          text-[16px]
          lg:max-[3000px]:text-[32px]
          w-auto
          sm:max-[3000px]:w-[25ch]
          xl:max-[3000px]:text-start
          text-center
      ">
          Firmamız 2023 yılında Ticaretin Merkezi Gaziantep'te kurulmuştur. Bünyemizdeki grafik tasarım, dijital baskı ve maliye anlaşmalı matbaalarımızla sürekli form, tabaka ofset baskı, selefon, kesim ve mücellit işlerinizde hizmetinizdeyiz.
        </p>
      </div>
      <Image
        alt="learn-more-about-me"
        src={phone}
        className="
        w-[30rem]
        sm:max-lg:w-[30rem]
        lg:max-[3000px]:w-[40rem]
        h-auto
        "/>
    </section>
  )
}
