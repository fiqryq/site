"use client"
import { Marquee } from "@/components/marquee";
import PageWrapper from "@/components/page-wrapper";
import { tools } from "@/constant/tools";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      <div className="px-5 md:px-10 lg:px-20 pb-20">
        <div className="flex flex-col justify-center min-h-screen relative border-b-[0.5px] border-[#42433E] mb-10">
          <div className="px-5 md:px-10 lg:px-20">
            <div className="pl-2 md:pl-5 lg:pl-10 text-[60px] md:text-[120px] lg:text-[240px] font-ppmori-semi-bold text-primary tracking-tight leading-none">
              A Creative
            </div>
            <div className="pr-2 md:pr-5 lg:pr-10 text-[60px] md:text-[120px] lg:text-[240px] font-ppmori-semi-bold text-primary tracking-tight text-end leading-none">
              Developer
            </div>
          </div>
          <div className="inline-flex items-center absolute bottom-10 gap-2 md:gap-4">
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-regular text-primary">{`{`}</span>
            <p className="text-primary text-sm md:text-lg lg:text-xl font-ppmori-regular flex items-center space-x-2">
              Creative frontend developer  <span className='inline-block items-center mx-2 md:mx-5'>
                <svg width="40" height="40" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2_12)">
                    <path d="M21.204 0.73336L20.52 0.870861L20.196 0.962527L19.872 1.0542C21.096 9.62503 24.696 13.7042 28.044 15.675L1.07999 15.675L1.07999 16.0875L1.07999 16.9584L1.07999 17.3709L28.188 17.3709C24.696 19.2959 20.916 23.4209 19.836 31.9917L20.52 32.1292L20.88 32.2209L21.204 32.2667C22.824 19.1125 31.14 17.5084 33.912 17.3709C34.524 17.4167 34.884 17.3709 34.92 17.3709L34.884 16.9584L34.884 16.7292L34.92 15.6292C34.92 15.6292 34.704 15.6292 34.38 15.6292L33.48 15.6292C30.384 15.4 23.004 13.5209 21.204 0.73336Z" fill="#FEFCE1" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_12">
                      <rect width="33" height="36" fill="white" transform="translate(0 33) rotate(-90)" />
                    </clipPath>
                  </defs>
                </svg>
              </span> Turning ideas into interactive reality!
            </p>
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-extralight text-primary">{`}`}</span>
          </div>
        </div>

        <section className="border-b-[0.5px] border-[#42433E] pb-16">
          <div className="inline-flex items-center gap-2 md:gap-4 mb-5">
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-regular text-primary">{`{`}</span>
            <p className="text-primary text-lg md:text-xl font-ppmori-regular">
              About °
            </p>
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-regular text-primary">{`}`}</span>
          </div>
          <p className="text-primary text-xl md:text-3xl lg:text-5xl leading-tight font-ppmori-regular tracking-normal">
            I am a versatile engineer with over 3 years of experience as a creative frontend developer, bringing ideas to life through engaging, user-centered designs. I’m passionate about exploring new technologies and continually honing my skills to deliver impactful, innovative web experiences.          </p>
        </section>

        <section className="py-10">
          <div className="inline-flex items-center gap-2 md:gap-4 mb-5">
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-regular text-primary">{`{`}</span>
            <p className="text-primary text-lg md:text-xl font-ppmori-regular">
              Tools I use ⌘
            </p>
            <span className="text-[32px] md:text-[48px] lg:text-[64px] font-ppmori-regular text-primary">{`}`}</span>
          </div>
          <Marquee className="gap-4 md:gap-8 lg:gap-[3rem] [--duration:35s] text-white" innerClassName="gap-4 md:gap-8 lg:gap-[3rem]" fade={true} pauseOnHover>
            {tools.map((tool, index) => {
              return (
                <Image src={tool.path} alt={`image-${index}`} key={index} width={50} height={50} className="md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]" />
              )
            })}
          </Marquee>
        </section>
      </div>
    </PageWrapper>
  );
}
