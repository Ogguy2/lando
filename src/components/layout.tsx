import React from "react";
import Link from "next/link";
import {interFont} from "@/constants/fonts";
import Page from "@/app/page";
import clsx from "clsx";
import Button from "./Button";



export const ContactForm = () => {
    return <div className={"py-20 space-y-5"}>
        <div className={"text-center text-2xl leading-[28px]"}>
            Bénéficiez de 15 % de réduction sur votre prochaine commande, <br/>
            Abonnez-vous à notre newsletter
        </div>
        <div className={"flex justify-center items-center"}>
            <div className={"w-[500px]  h-[50px]"}>
                <input type={"text"} placeholder={"Votre adresse e-mail"}
                       className={clsx("bg-[#eeeeee] px-3  w-full h-full border-0 focus:border-0 focus:ring-0 ring-0")}/>
            </div>
            <div>
                <Button title={"S'ABONNER"} className={`${interFont.className} h-[50px]  px-10! py-3! text-sm`}
                        variant={"black"}/>
            </div>
        </div>
    </div>
}

interface MainContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const MainContainer: ({}: MainContainerProps) => React.ReactNode = ({
                                                                               children,
                                                                               className
                                                                           }: MainContainerProps): React.ReactNode => {
    return <div className={clsx(className, "max-w-[1300px] mx-auto")}>
        {children}
    </div>
}


export const Header: () => React.ReactNode = (): React.ReactNode => {
    return <div className={"py-5"}>
        <div className={"flex w-full items-center justify-between"}>
            <div className={"text-3xl font-extrabold"}><Link href={"/"}>Rad Plants</Link></div>
            <div className={""}>
                <nav className={"space-x-8"}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/product"}>Catalogue</Link>
                    <Link href={"/product"}>Contact</Link>
                </nav>
            </div>
            <div className={"space-x-8"}>
                <Link href={"/product"}>Search</Link>
                <Link href={"/"}>Card (0)</Link>
            </div>
        </div>
    </div>
}

export const Footer = () => {
    return <div className={""}>
        <div className={"flex py-10 justify-between "}>
            <div className={"text-3xl font-extrabold"}><Link href={"/"}>Rad Plants</Link></div>
            <div className={"  flex gap-x-40 justify-between "}>
                <div className={"  space-y-4"}>
                    <div className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}>
                        Contact
                    </div>
                    <div className={"space-y-2"}>
                        <div>
                            <Link href={"/"} className={""}>Instagram</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}>Facebook</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}>Pinterest</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}>Youtube</Link>
                        </div>
                    </div>
                </div>
                <div className={" space-y-4"}>
                    <div className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}>
                        Resource
                    </div>
                    <div className={"space-y-2"}>
                        <div>
                            <Link href={"/"} className={""}>Politique de retour</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}> Suivi d'une commande</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}>FAQ</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}> Politique de confidentialité</Link>
                        </div>
                    </div>
                </div>
                <div className={"space-y-4"}>
                    <div className={`${interFont.className}   text-[#c1c1c1ff] text-[12px]`}>
                        About
                    </div>
                    <div className={"space-y-2"}>
                        <div>
                            <Link href={"/"} className={""}>Notre Histoire</Link>
                        </div>
                        <div>
                            <Link href={"/"} className={""}>Notre Carrières</Link>
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
}