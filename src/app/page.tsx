"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Button from "@/components/Button";
import { fairPlayFont, interFont } from "@/constants/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className={""}>
      <Separator className={"bg-red-500"} />
      <Banner />
      <Separator className={"bg-red-500"} />
      <Catalogue />
      <Separator className={"bg-red-500"} />
      <Interlude />
      <Separator className={"bg-red-500"} />
      <Features />
      <Separator className={"bg-red-500"} />
      <Blogs />
      <Separator className={"bg-red-500"} />
    </div>
  );
};

const Blogs = () => {
  return (
    <div className={"py-20"}>
      <div className={"grid grid-cols-2 gap-[50px]"}>
        {[
          {
            othor: "Mellissa Bail",
            src: "/blog/blog1.jpg",
            edition: "Edition 290",
            description:
              "Comment arroser vos fichues plantes pour qu'elles ne meurent pas au bout d'une semaine",
          },
          {
            othor: "Jesse Rowe",
            src: "/blog/blog2.jpg",
            edition: "Edition 290",
            description:
              "Comment rempoter un Monstera sans le tuer et favoriser sa croissance",
          },
        ].map((element, index) => {
          return (
            <div className={"w-full space-y-2 "} key={index}>
              <div className={"relative h-[300px]"}>
                <Image
                  fill
                  src={element.src}
                  style={{ objectFit: "cover" }}
                  alt={"banner Rat Plant"}
                />
                <div
                  className={
                    "shadow-[0px_0px_0px_#00000014] absolute bottom-4 right-0 z-20 bg-white p-2 pr-[30px]"
                  }
                >
                  <div
                    className={clsx(
                      interFont.className,
                      " text-[12px] text-[#c1c1c1]"
                    )}
                  >
                    Ecrit par
                  </div>
                  <div className={clsx(fairPlayFont.className, "")}>
                    {element.othor}
                  </div>
                </div>
              </div>
              <div className={""}>
                <div className={"text-[#c1c1c1]"}>{element.edition}</div>
                <div className={"text-2xl leading-[28px]"}>
                  {element.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Interlude = () => {
  return (
    <div className={"p-32 text-center text-[42px] leading-[42px]"}>
      <p>
        {" "}
        L'amour et le travail sont aux êtres humains ce que l'eau et le soleil
        sont aux plantes
      </p>
    </div>
  );
};
const Catalogue = () => {
  return (
    <div className={"py-20"}>
      <div className={"text-center py-14 text-4xl"}>Catalogues</div>
      <div className={""}>
        <Swiper spaceBetween={50} slidesPerView={4} autoplay={true}>
          {[
            { title: "Jungle Plant", src: "image1.jpg" },
            { title: "Outdoor Plants", src: "image2.jpg" },
            { title: "Bedroom Plants", src: "image3.jpg" },
            { title: "Indoor Plants", src: "image4.jpg" },
            { title: "Jungle Plant", src: "image1.jpg" },
            { title: "Outdoor Plants", src: "image2.jpg" },
            { title: "Bedroom Plants", src: "image3.jpg" },
            { title: "Indoor Plants", src: "image4.jpg" },
          ].map((element, index) => {
            return (
              <SwiperSlide key={index} className={"space-y-5"}>
                <div className={" flex  relative w-full h-[400px]"}>
                  <Image
                    fill
                    src={"/catalogue/" + element.src}
                    style={{ objectFit: "cover" }}
                    alt={"banner Rat Plant"}
                  />
                </div>
                <div className={"text-2xl"}>{element.title}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={""}></div>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <div className={"py-20"}>
      <div className={""}>
        <div className={"grid grid-cols-4 gap-[50px]"}>
          <div className={"space-y-5"}>
            <div className={"    space-y-7 w-full h-[400px]"}>
              <div className={"text-4xl"}>Featured</div>
              <div
                className={clsx(
                  "space-y-7 leading-[16px]",
                  interFont.className
                )}
              >
                <p>
                  Nos plantes sont 100 % biologiques, nous n'utilisons ni
                  pesticides ni produits chimiques nocifs.
                </p>
                <p>Mais s'il vous plaît, ne les mangez pas.</p>
                <div className={""}>
                  <Link
                    className={clsx(
                      interFont.className,
                      "  bg-white text-back py-4 text-sx px-16 text-sm cursor-pointer shadow-[0_1px_0px_rgba(3,3,3)]"
                    )}
                    href={"/product"}
                  >
                    Show all Favorites
                  </Link>
                </div>
              </div>
            </div>
            <div className={"text-2xl"}></div>
          </div>
          {[
            {
              title: "Jungle Plant",
              src: "/features/features1.jpg",
              price: 150,
            },
            {
              title: "Outdoor Plants",
              src: "/features/features2.jpg",
              price: 70,
            },
            {
              title: "Bedroom Plants",
              src: "/features/features3.jpg",
              price: 50,
            },
          ].map((element, index) => {
            return (
              <div key={index} className={"space-y-5"}>
                <div className={"  relative w-full h-[400px]"}>
                  <Image
                    fill
                    src={element.src}
                    style={{ objectFit: "cover" }}
                    alt={"banner Rat Plant"}
                  />
                </div>
                <div className={""}>
                  <div className={" text-[#c1c1c1]"}>{element.title}</div>
                  <div className={"text-3xl"}>{element.price}€</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={""}></div>
      </div>
    </div>
  );
};
const Banner: ({}) => React.ReactNode = ({}): React.ReactNode => {
  return (
    <div>
      <div className={"flex py-10 justify-between items-center"}>
        <div className={"space-y-12"}>
          <div className={"space-y-8"}>
            <div>
              <p className={"text-5xl"}>Find perfect plants</p>
              <p className={"text-5xl"}>for your home</p>
            </div>
            <p className={"text-lg leading-[22px] tracking-normal"}>
              Beautiful plants that encourage you to get creative.
            </p>
          </div>
          <div className={""}>
            <Link
              className={clsx(
                interFont.className,
                " font-[700] bg-black text-white py-4 text-sx px-16 text-xs cursor-pointer shadow-[0_1px_0px_rgba(3,3,3)]"
              )}
              href={"/product"}
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className={" flex  relative w-[600px] h-[700px]"}>
          <Image
            fill
            src={"/banner/background.jpg"}
            style={{ objectFit: "cover" }}
            alt={"banner Rat Plant"}
          />
        </div>
      </div>
    </div>
  );
};

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => (
  <div className={className}></div>
);
export default Page;
