// Import link
import { fairPlayFont, interFont } from "@/constants/fonts";
import clsx from "clsx";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { IoIosMenu } from "react-icons/io";

const Header: () => React.ReactNode = (): React.ReactNode => {
  return (
    <div className={"py-5"}>
      <div className={"flex w-full items-center justify-between"}>
        <div className={"text-3xl font-extrabold"}>
          <Link href={"/"}>Rad Plants</Link>
        </div>
        <div className={"hidden lg:block"}>
          <Navigation />
        </div>
        <div className={"hidden lg:block space-x-8"}>
          <Link href={"/product"} className="p-2 rounded">
            Search
          </Link>
          <Link href={"/"} className="p-2 rounded">
            Card (0)
          </Link>
        </div>
        <div className="lg:hidden">
          <DialogDemo />
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className={""}>
      <nav className={"flex flex-col lg:flex-row  gap-5"}>
        <Link className="p-2 rounded hover:bg-gray-200 lg:hover:bg-transparent" href={"/"}>
          Home
        </Link>
        <Link className="p-2 rounded hover:bg-gray-200 lg:hover:bg-transparent" href={"/product"}>
          Catalogue
        </Link>
        <Link className="p-2 rounded hover:bg-gray-200 lg:hover:bg-transparent" href={"/product"}>
          Contact
        </Link>
      </nav>
    </div>
  );
};
const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <IoIosMenu
        size={40}
        className="p-1 hover:bg-gray-200 rounded-lg   transition-all  cursor-pointer"
      />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-dialogOverLayOpen  w-screen bg-black/30 fixed inset-0 h-screen   " />
      <Dialog.Content
        className={`  ${fairPlayFont.className} data-[state=open]:animate-dialogContentOpen  fixed left-0 top-0  h-screen bg-white  w-[300px]`}
      >
        <Dialog.Title />
        <Dialog.Description />
        <div className="px-3 py-5">
          {/* Logo */}
          <div className={clsx("text-3xl font-extrabold")}>
            <Link href={"/"}>Rad Plants</Link>
          </div>
          {/* Navigation */}
          <div className={"py-10 flex flex-col gap-5"}>
            <Navigation />
            <Link href={"/product"} className="hover:bg-gray-200 p-2 rounded">
              Search
            </Link>
            <Link href={"/"} className="hover:bg-gray-200 p-2 rounded">
              Card (0)
            </Link>
          </div>
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Header;
