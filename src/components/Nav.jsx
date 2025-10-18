import MainBtn from "../ui/MainBtn"

const Nav = ({ setIsModalOpen = () => { } }) => {

    return (
        <>
            <nav className="filter-blur-3 content-contain fixed top-5 left-0 right-0 z-50 flex h-[70px] w-full items-center justify-between p-2 bg-[rgba(255,255,255,0.05)] rounded-[16px]">
                <div className="flex gap-[90px] items-center ml-[22px]">
                    <span className="text-[28px]">Habiba</span>
                    <ul className="flex gap-[40px] items-center text-[18px] text-[#E4E4E4]">
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#landing">Home</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className="hover:scale-[1.1] duration-300 hover:text-[#41A4C5]">
                            <a href="#faqs">FAQ</a>
                        </li>
                    </ul>
                </div>
                <MainBtn
                    text="CONTACT US"
                    classNames={'!px-[33px] !py-[16px] !text-[15px]'}
                    handler={() => setIsModalOpen(true)}
                />
            </nav>
        </>
    );
};

export default Nav;