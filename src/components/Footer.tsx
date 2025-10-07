// Import all
import React from "react";
import Link from "next/link";
import { interFont } from "@/constants/fonts";

export const Footer = () => {
  return (
    <div className={""}>
      <div className={"flex py-10 justify-between "}>
        <div className={"text-3xl font-extrabold"}>
          <Link href={"/"}>Rad Plants</Link>
        </div>
        <div className={"flex gap-x-40 justify-between "}>
          <div className={"  space-y-4"}>
            <div
              className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}
            >
              Contact
            </div>
            <div className={"space-y-2"}>
              <div>
                <Link href={"/"} className={""}>
                  Instagram
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  Facebook
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  Pinterest
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  Youtube
                </Link>
              </div>
            </div>
          </div>
          <div className={" space-y-4"}>
            <div
              className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}
            >
              Resource
            </div>
            <div className={"space-y-2"}>
              <div>
                <Link href={"/"} className={""}>
                  Politique de retour
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  {" "}
                  Suivi d'une commande
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  FAQ
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  {" "}
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
          <div className={"space-y-4"}>
            <div
              className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}
            >
              About
            </div>
            <div className={"space-y-2"}>
              <div>
                <Link href={"/"} className={""}>
                  Notre Histoire
                </Link>
              </div>
              <div>
                <Link href={"/"} className={""}>
                  Notre Carrières
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"py-3"}>
        <p className={"text-[#c1c1c1ff] text-sm text-center"}>
          Designed by Radoslav Bali
        </p>
      </div>
    </div>
  );
};
