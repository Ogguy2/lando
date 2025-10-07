import React from "react";
import Link from "next/link";
import { interFont } from "@/constants/fonts";
import Page from "@/app/page";
import clsx from "clsx";
import Button from "./Button";

export const ContactForm = () => {
  return (
    <div className={"py-20 space-y-5"}>
      <div className={"text-center text-2xl leading-[28px]"}>
        Bénéficiez de 15 % de réduction sur votre prochaine commande, <br />
        Abonnez-vous à notre newsletter
      </div>
      <div className={"flex justify-center items-center"}>
        <div className={"w-[500px]  h-[50px]"}>
          <input
            type={"text"}
            placeholder={"Votre adresse e-mail"}
            className={clsx(
              "bg-[#eeeeee] px-3  w-full h-full border-0 focus:border-0 focus:ring-0 ring-0"
            )}
          />
        </div>
        <div>
          <Button
            title={"S'ABONNER"}
            className={`${interFont.className} h-[50px]  px-10! py-3! text-sm`}
            variant={"black"}
          />
        </div>
      </div>
    </div>
  );
};

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer: ({}: MainContainerProps) => React.ReactNode = ({
  children,
  className,
}: MainContainerProps): React.ReactNode => {
  return (
    <div className={clsx(className, "max-w-[1300px] px-4 mx-auto")}>{children}</div>
  );
};
