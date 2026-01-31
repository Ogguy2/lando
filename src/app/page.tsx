"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "motion/react";
import { fairPlayFont, interFont } from "@/constants/fonts";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Link from "next/link";
import Separator from "@/components/Seperator";
import { Pagination } from "swiper/modules";

const Page = () => {
  return (
    <div className={""}>
      <Separator />
      <Banner />
      <Separator />
      <Catalogue />
      <Separator />
      <Interlude />
      <Separator />
      <Features />
      <Separator />
      <Blogs />
      <Separator />
    </div>
  );
};

const Blogs = () => {
  return (
    <div className={"py-20"}>
      <div className={"grid md:grid-cols-2 grid-cols-1 gap-[50px]"}>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 == 1 ? +100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={"w-full space-y-2 "}>
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
            </motion.div>
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
    <div className={" py-2 lg:py-10"}>
      <div className={"text-center py-14 text-4xl"}>Catalogues</div>
      <div className={""}>
        {/* Make swiper responsive */}
        <Swiper
          // spaceBetween={50}
          autoplay={true}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            // 640: {
            //   slidesPerView: 1,
            // },
            // 768: {
            //   slidesPerView: 2,
            // },
            // 1024: {
            //   slidesPerView: 3,
            // },
            // 1280: {
            //   slidesPerView: 4,
            // },
          }}
        >
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
              <SwiperSlide key={index} className={"w-[80%]! px-5 sm:w-[50%]!  md:w-1/3! lg:w-1/4!"}>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="space-y-5">
                    <div className={"flex  relative  h-[300px] md "}>
                      <Image
                        // className="hidden"
                        fill
                        src={"/catalogue/" + element.src}
                        style={{ objectFit: "cover" }}
                        alt={"banner Rat Plant"}
                      />
                    </div>
                    <div className={"text-2xl"}>{element.title}</div>
                  </div>
                </motion.div>
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
              <motion.div
                key={index}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className={"space-y-5"}>
                  <div className={"relative w-full h-[400px]"}>
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
              </motion.div>
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
      {/* <div className={"block md:flex py-10 justify-between  items-center"}> */}
      <div
        className={
          "block space-y-10 lg:flex py-10 justify-between  items-center"
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={"flex flex-col   space-y-12"}>
            <div className={"space-y-8 text-center lg:text-left"}>
              <div>
                <p className={"text-5xl"}>Find perfect plants</p>
                <p className={"text-5xl"}>for your home</p>
              </div>
              <p className={"text-lg leading-[22px] tracking-normal"}>
                Beautiful plants that encourage you to get creative.
              </p>
            </div>
            <div className={"text-center lg:text-left"}>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex bg-amber-50 flex-col items-center justify-center"
        >
          <div
            className={
              "relative w-[100%] h-[400px] lg:w-[500px] lg:h-[600px] xl:w-[600px] xl:h-[700px]"
            }
          >
            <Image
              fill
              src={"/banner/background.jpg"}
              style={{ objectFit: "cover" }}
              alt={"banner Rat Plant"}
              className={""}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
