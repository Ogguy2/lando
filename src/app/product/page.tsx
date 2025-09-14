"use client";
import React from "react";
import Button from "@/components/Button";
import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [count, setCount] = useState(1);
  return (
    <div className={"py-10"}>
      <div className={"flex gap-10"}>
        <div className={"w-full"}>
          <ProductGallery />
        </div>
        <div className={"w-full space-y-20"}>
          <div className={""}>
            <Button
              title={"Sold out"}
              variant={"black"}
              className={"text-sm px-5! font-normal! py-2!"}
            />
          </div>
          <div className={"space-y-5"}>
            <p className={"text-4xl"}>Plant 3</p>
            <p className={"text-5xl"}>50€</p>
          </div>
          <div className={"space-y-8"}>
            <div className={"flex items-center gap-10 w-full"}>
              <div className={""}>Quanitté</div>
              <div
                className={
                  "flex-1 flex gap-4 justify-between items-center  border"
                }
              >
                <button
                  onClick={() => setCount((v) => v === 1 ? 1 : v - 1)}
                  className={
                      "flex-1  hover:bg-black hover:text-white cursor-pointer  text-left p-3 "
                    }
                    >
                  -
                </button>
                <div className={"text-xl"}>{count}</div>
                <button
                    onClick={() => setCount((v) => v > 9 ? 10 : v + 1)}
                  className={
                    "flex-1  hover:bg-black hover:text-white cursor-pointer  text-right p-3 "
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className={""}>
              <Button
                title={"AJOUTER AU PANNER"}
                variant={"black"}
                className={"w-full"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20"></div> 
    </div>
  );
};

const ProductGallery = () => {
  const images = [
    { title: "Vue avant", src: "/features/features1.jpg" },
    { title: "Vue arrière", src: "/features/features2.jpg" },
    { title: "Côté gauche", src: "/features/features3.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <div className="grid grid-cols-5 items-center gap-3">
      <div className="grid grid-rows-3 gap-3 h-full">
        {images.map((img, index) => (
          <div key={index} className="">
            <button
              title=""
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className={`relative w-full h-full  ${
                selectedImage === img.src
                  ? "border-blue-500"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              {""}
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
              />
            </button>
          </div>
        ))}
      </div>
      <div className="col-span-4  lg:h-[600px] h-[400px]  relative">
        <Image
          src={selectedImage}
          alt="Produit"
          fill
          className="object-cover  "
        />
      </div>
    </div>
  );
};

export default Page;
