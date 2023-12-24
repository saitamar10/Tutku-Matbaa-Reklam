interface SliderContentProps {
  role: string
  company: string
  date: string
}

export const SliderContent: React.FC<SliderContentProps> = ({ role, company, date }) => {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        md:max-[3000px]:justify-start
        md:max-[3000px]:items-start
        max-md:justify-center
        max-md:items-center
        transition-all
        gap-8
      ">
      <div
        className="
        flex 
        flex-col 
        gap-4
        md:max-[3000px]:justify-start
        md:max-[3000px]:items-start
        max-md:justify-center
        max-md:items-center
      ">
        <h1
          className="
          w-[60vw]
        text-[#e9ecea]
        font-extrabold
        leading-normal
        text-[23px]
        sm:max-lg:text-[32px]
        lg:max-[3000px]:text-[45px]
        max-md:text-center
        transition-all
    ">
          {role}
          <br />
          <span className="company-gradient transition-all">
            @ {company}
          </span>
        </h1>
        <h2
          className="
          text-[11px]
          sm:max-lg:text-[16px]
          lg:max-[3000px]:text-[23px]
          font-semibold
          text-[#E1F8FF]
          opacity-70
        ">
          {date}
        </h2>
      </div>
      <ul
        className="
        w-[50vw]
        max-md:w-auto
        experience-list
        flex
        flex-col
        gap-8
      ">
        <li>
          Alanında uzman kadrosuyla siz değerli müşterilerimize en iyi hizmeti vermeye çalışıyoruz.        
        </li>
        <li>
         Deneyimli grafikerlerimiz ve konusunda uzman baskı ekibimiz ve yüksek teknolojiye sahip makinelerimiz ile taleplerinizi, her defasında, tam zamanında ve istediğiniz şekilde karşılıyoruz.        
        </li>
        
      </ul>
    </section>
  )
}
