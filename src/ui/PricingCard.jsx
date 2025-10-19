import MainBtn from "./MainBtn"
import CheckIcon from "../assests/svgs/CheckIcon"
const PricingCard = ({ title, price, description, list, setIsModalOpen = () => { } }) => {
    return (
        <div className="rounded-[16px] sm:rounded-[24px] md:rounded-[32px] px-[16px] sm:px-[24px] md:px-[32px] py-[24px] sm:py-[36px] md:py-[48px] flex flex-col justify-between gap-10 shadow-[0_4px_4px_1px_rgba(26,145,185,0.20)] bg-[#ffffff0a] filter-blur-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-[16px] sm:text-[18px] md:text-[21px] font-[500] leading-[28px] sm:leading-[34px] md:leading-[42px] text-[#7ABFD6]">{title}</h3>
                <p>{price === 0 ? "Free" : 'Start from'}</p>
                <div>
                    <span className="text-[28px] sm:text-[34px] md:text-[42px] font-[500] leading-[28px] sm:leading-[34px] md:leading-[42px]">{price === 0 ? "$0" : `$${price}`}</span>
                    <span>/month</span>
                </div>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#ffffffb2]">{description}</p>
            </div>
            <div className="w-full flex flex-col gap-10">
                <MainBtn text="Get Started" handler={() => setIsModalOpen(true)} classNames={'hover:!bg-[#1A91B980] duration-300 w-full'} theme="black" />
                <div className="flex flex-col gap-4">
                    <h4 className="text-[13px] sm:text-[14px] md:text-[15px]">
                        {title === 'Full Time' ? "Standard plus:" : "Includes:"}
                    </h4>
                    {list.map((item, index) => (
                        <div key={index} className="flex gap-2 items-start">
                            <CheckIcon />
                            <p className="text-[13px] sm:text-[14px] md:text-[15px]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PricingCard