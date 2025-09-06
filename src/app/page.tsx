"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {inter} from "@/components/Fonts";


function Parterns() {
    return <div className={"py-7 text-center space-y-4"}>
        <div className={clsx(inter.className, "text-[#030303ff]")}>Trusted by individuals and teams at the
            world&#39;s best companies
        </div>
        <div className={"flex items-center font-bold  gap-7 text-3xl justify-center"}>
            <div className={""}>LOGO</div>
            <div className={""}>LOGO</div>
            <div className={""}>LOGO</div>
            <div className={""}>LOGO</div>
            <div className={""}>LOGO</div>
        </div>
    </div>;
}

const Page = () => {
    return <div className={""}>
        <MainContainer>
            <Header/>
            <div className={"flex items-center justify-between"}>
                <div className={"space-y-10"}>
                    <div
                        className={clsx(inter.className, "text-[13px] font-[700]  tracking-[2px]   text-[#7f7f7fff]")}>-
                        Free 30 DAYS TRIAL
                    </div>
                    <div className={clsx("font-[600] leading-[80px] text-7xl ")}>The best way
                        <br/> to showcase<br/>
                        your project.
                    </div>
                    <div className={clsx(inter.className, "text-[#030303ff] text-xl")}>Here you can put a short
                        description about your
                        project.
                    </div>
                    <div className={"flex gap-4 items-center"}>
                        <Button type={"primary"} title={"Essayer gratuitement"}/>
                        <Button type={"secondary"} title={"Comment ça marche ?"}/>
                    </div>
                </div>
                <div className={clsx("")}>
                    <Image src={"/der.png"} alt={"ddd"} width={"699"} height={"500"}/>
                </div>
            </div>
            <Parterns/>
            <div className={"my-[200px]"}></div>
            <div className={" relative bg-white rounded-2xl  py-[100px] px-[60px]"}>
                <div className={clsx('')}>
                    <div className={"text-5xl font-[600] leading-[62px]"}>
                        Introducing <br/>good solution<br/>
                    </div>
                    <div className={clsx(inter.className, "text-xl")}>
                        Join our community and experience <br/>the benefits today!<br/>
                    </div>
                    <div>
                        <Button type={"primary"} title={"Essayer gratuitement"}/>
                    </div>
                </div>
                <div className={"absolute -right-36 bottom-0"}>
                    <div className={"relative  bg-amber-00  w-[800px] h-[600px]"}>
                        <Image src={"/der3.png"} alt={"ddd"} style={{objectFit: "cover"}}
                               fill/>
                    </div>
                </div>
            </div>
        </MainContainer>
        <div className={"flex gap-10 items-center justify-center"}>
            <div className={"w-1/2 flex justify-end"}>
                <div className={" relative w-[700px] h-[800px]"}>
                    <Image fill src={"/der4.png"} alt={"ddd"} style={{objectFit: "contain"}}
                    />
                </div>
            </div>
            <div className={"w-1/2"}>
                <div className={"max-w-[500px] space-y-7"}>
                    <div
                        className={clsx(inter.className, "text-[13px] font-[700]  tracking-[2px]   text-[#7f7f7fff]")}>-
                        Free 30 DAYS TRIAL
                    </div>
                    <div className={"text-4xl font-[600]"}>
                        All your work is safe<br/>with us<br/>
                    </div>
                    <div className={clsx(inter.className, "tracking-[-0.1px] text-[#030303ff]")}>
                        We take your data security seriously, which is why we use advanced encryption protocols to
                        protect
                        your files in the cloud. Your data is safe and secure with us.
                    </div>
                    <div>
                        <Button type={"secondary"} title={"Essayer maintenant ?"}/>
                    </div>
                </div>
            </div>
        </div>
        <MainContainer>
            <div className={"flex gap-10 items-center justify-center"}>
                <div className={"w-1/2"}>
                    <div className={"max-w-[500px] space-y-7"}>
                        <div
                            className={clsx(inter.className, "text-[13px] font-[700]  tracking-[2px]   text-[#7f7f7fff]")}>-
                            Costsaver
                        </div>
                        <div className={"text-4xl font-[600]"}>
                            Cost saving in a smart way
                        </div>
                        <div className={clsx(inter.className, "tracking-[-0.1px] text-[#030303ff]")}>
                            Powerful tool that helps you reduce costs and save money on your business operations. With
                            advanced analytics and optimization algorithms, Costsaver analyzes your existing workflows
                            and identifies areas for improvement.
                        </div>
                        <div>
                            <Button type={"secondary"} title={"Essayer maintenant ?"}/>
                        </div>
                    </div>
                </div>
                <div className={"w-1/2 flex justify-end"}>
                    <Image width={"600"} height={"600"} className={""} src={"/der5.png"} alt={"ddd"}
                           style={{objectFit: "contain"}}
                    />
                </div>
            </div>
        </MainContainer>
        <MainContainer>
            <div className={""}>
                Testimonials
            </div>
            <div className={""}>
                People love what we do and we want to let your know
            </div>
            <div className={"flex  items-center justify-center gap-x-7"}>
                {[{
                    comment: "Since implementing Lando our business has seen significant growth",
                    othor: "John Doe",
                    role: "CEO",
                    rate: 4
                },
                    {
                        comment: "I recommend Lando to any business looking for improvement.",
                        othor: "John Doe",
                        role: "CEO",
                        rate: 4
                    },
                    {
                        comment: "I can't imagine running our company without it",
                        othor: "John Doe",
                        role: "CEO",
                        rate: 4
                    },
                ].map((element, index) => {

                    return <div key={index}
                                className={clsx("shadow-[0px_0px_0px_#00000014]", "bg-white p-6 max-w-[400px] space-y-4 rounded-2xl text-center shadow")}>
                        <div className={"leading-[26px] text-xl font-semibold"}>{element.comment}</div>
                        <div className={""}>
                            <div>{element.othor}</div>
                            <div>{element.role}</div>
                        </div>
                    </div>

                })}
            </div>
        </MainContainer>
    </div>
}


const Header = () => {
    const path = usePathname()
    return <div className={"flex py-5 w-full items-center justify-between"}>
        <div className={"flex items-center  justify-between gap-10"}>
            {/*LOGO*/}
            <div className={"text-4xl font-bold"}>Lando</div>
            {/*Navigation*/}
            <nav className={"flex items-center gap-7"}>
                <Link className={path === "/" ? "text-[#3164f4] font-semibold" : ""} href={"/"}>Accueil</Link>
                <Link href={"/"}>Tarifs</Link>
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Contact</Link>
            </nav>
        </div>
        <div className={""}>

            <Link className={"py-3 px-5  font-semibold rounded-xl"} href={"/"}>Se
                connecter</Link>
            <Link className={"py-3 px-5 bg-[#3164f4] text-white font-semibold rounded-xl"} href={"/"}>S&#39;inscrire</Link>
            {/*<Button type={"primary"} title={""} variant={"solid"}/>*/}
        </div>
    </div>
}

interface MainContainerProps {
    children: React.ReactNode
}

const MainContainer = ({children}: MainContainerProps) => {
    return <div className={'max-w-[1300px] mx-auto'}>
        {children}
    </div>
}
export default Page;


const InterText = () => {
    return <div className={clsx("", inter.className)}></div>
}