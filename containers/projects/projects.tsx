import { Badge } from "@/components/badge"
import { Title } from "@/components/title"
import { projects } from "./data/projectsData"

export const Projects = () => {
  return (
    <section
      id="projects"
      className="
        flex
        flex-col
        gap-8
        mt-32
        xl:max-[3000px]:mt-48
        px-8
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
        xl:max-[3000px]:justify-end 
        xl:max-[3000px]:items-end
      ">
        <Badge content="Hizmetlerimiz" />
        <Title
          className="
          xl:max-[3000px]:text-end 
          text-center
          text-[23px]
          sm:max-lg:text-[32px]
          lg:max-[3000px]:text-[45px]
        ">
          Projelerimiz ve Çalışmalarımız
        </Title>
      </div>
      {projects.map((project) => (
        <div
          key={project.name}
          className="
          mt-12
          md:max-[3000px]:mt-32
          flex
          flex-col
          md:max-[3000px]:flex-row
          justify-between
          items-center
          md:max-[3000px]:items-start
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
            md:max-[3000px]:gap-8
          ">
            <div
              className="
              flex
              flex-col
              gap-4
              justify-center
              items-center
              md:max-[3000px]:justify-start 
              md:max-[3000px]:items-start
      ">
              <div
                className="
              w-max
              py-1
              px-8 
              badge-gradient
              border
              border-[#404A47]
              rounded-full
              flex
              flex-col
              justify-center
              items-center
    ">
                <span
                  className="
                badge-text 
                text-[8px]
                sm:max-lg:text-[11px]
                lg:max-[3000px]:text-[16px]
              ">
                  {project.badge}
                </span>
              </div>
              <h1
                className="
              text-[#e9ecea]
              font-extrabold
              leading-normal
              text-[23px]
              sm:max-lg:text-[32px]
              lg:max-[3000px]:text-[45px]
              max-md:text-center
              transition-all
            ">
                {project.name}
              </h1>
            </div>
            <p
              className="
              text-secondary
              text-[11px]
              sm:max-lg:text-[16px]
              lg:max-[3000px]:text-[23px]
              w-[25ch]
              md:max-[3000px]:text-start
              text-center
          ">
              {project.description}
            </p>
            <div
              className="
              flex 
              flex-row 
              gap-2
              justify-center
              items-center
              md:max-[3000px]:justify-start 
              md:max-[3000px]:items-start
            ">
              <a
                className="
                w-min
                py-1
                px-2
                md:max-[3000px]:py-2
                md:max-[3000px]:px-4
                rounded-full
                border-[#E1F8FFB2]
                border
                md:max-[3000px]:border-2
                transition
                duration-300
                opacity-50
                hover:opacity-100
                "
                target="_a"
                href={project.githubLink}
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 lg:max-[3000px]:h-6 lg:max-[3000px]:w-6"
                  viewBox="0 0 42 41"
                  fill="none">
                  <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M21 0C9.3975 0 0 9.3975 0 21C0 30.2925 6.01125 38.1413 14.3587 40.9238C15.4087 41.1075 15.8025 40.4775 15.8025 39.9263C15.8025 39.4275 15.7763 37.7738 15.7763 36.015C10.5 36.9863 9.135 34.7287 8.715 33.5475C8.47875 32.9437 7.455 31.08 6.5625 30.5812C5.8275 30.1875 4.7775 29.2162 6.53625 29.19C8.19 29.1637 9.37125 30.7125 9.765 31.3425C11.655 34.5187 14.6738 33.6263 15.8813 33.075C16.065 31.71 16.6162 30.7912 17.22 30.2662C12.5475 29.7412 7.665 27.93 7.665 19.8975C7.665 17.6137 8.47875 15.7237 9.8175 14.2537C9.6075 13.7287 8.8725 11.5762 10.0275 8.68875C10.0275 8.68875 11.7863 8.1375 15.8025 10.8413C17.4825 10.3688 19.2675 10.1325 21.0525 10.1325C22.8375 10.1325 24.6225 10.3688 26.3025 10.8413C30.3188 8.11125 32.0775 8.68875 32.0775 8.68875C33.2325 11.5762 32.4975 13.7287 32.2875 14.2537C33.6263 15.7237 34.44 17.5875 34.44 19.8975C34.44 27.9562 29.5313 29.7412 24.8588 30.2662C25.62 30.9225 26.2763 32.1825 26.2763 34.1513C26.2763 36.96 26.25 39.2175 26.25 39.9263C26.25 40.4775 26.6438 41.1338 27.6938 40.9238C35.9888 38.1413 42 30.2662 42 21C42 9.3975 32.6025 0 21 0Z" fill="#E1F8FF" />
                </svg>
              </a>
              {project.livePreview &&
                <a
                  className="
                  w-min
                  py-1
                  px-2
                  md:max-[3000px]:py-2
                  md:max-[3000px]:px-4
                  rounded-full
                  border-[#E1F8FFB2]
                  border
                  md:max-[3000px]:border-2
                  transition
                  duration-300
                  opacity-50
                  hover:opacity-100
                  "
                  target="_a"
                  href={project.livePreview}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-4 h-4 lg:max-[3000px]:h-6 lg:max-[3000px]:w-6">
                    <path stroke="#E1F8FFB2" stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </a>}
            </div>
          </div>
          {project.image}
        </div>
      ))}
    </section>
  )
}
