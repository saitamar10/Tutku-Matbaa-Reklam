import Link from "next/link"
import { Title } from "./title"

export const Header: React.FC = () => {
  return (
    <header
      data-aos="fade-up"
      data-aos-duration="2000"
      className="
      mt-36
      flex 
      flex-col 
      justify-center 
      items-center
      gap-10
      px-8
      ">
      <div
        className="
        header-bg-gradient 
        -z-10 
        absolute 
        h-[18rem]
        w-[18rem]
        sm:max-lg:h-[20rem]
        sm:max-lg:w-[20rem]
        lg:max-[3000px]:w-[30rem]
        lg:max-[3000px]:h-[30rem]
      " />
      <div
        className=" 
        flex 
        items-center 
        justify-center 
        flex-col 
        gap-2
      ">
        <p
          className="
          header-slogan 
          text-[16px]
          lg:max-[3000px]:text-[23px]
          ">
          Siz İsteyin Biz Tasarlayalım
        </p>
        <Title className="text-center">
          Engaging <br
            className="hidden min-[500px]:block"
          />
          <span className="title-gradient">
            İş Deneyimi
          </span>
        </Title>
      </div>
      <h2
        className="
        text-secondary
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-center
        ">
        Tutku Matbaa Reklam Gaziantep’in önde gelen reklam firmalarından biridir.
        <br
          className="hidden min-[500px]:block"
        />
        Firma olarak yaptıklarımızla yetinmiyor hep “en iyisini” yapmaya çalışıyoruz.
      </h2>
      <Link
        href={"mailto:gazianteptutku@gmail.com"}
        target="_a"
        className="
        header-button 
        text-[16px]
        lg:max-[3000px]:text-[23px]
        py-2
        px-12 
        cursor-pointer 
        rounded-full 
        font-extrabold
        ">
        Bize Ulaş
      </Link>
      <Link
        className="
        border-b
        border-transparent
        hover:border-[#99e7ff]
        header-link
        text-[16px]
        lg:max-[3000px]:text-[23px]
        text-center
        font-medium"
        href={'/#projects'}
      >
        Bizimle iletişime geçin.
      </Link>
    </header>
  )
}
