const MainBtn = ({ text, handler, classNames, theme = 'blue' }) => {
    const themeClasses = {
        blue: 'bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(93deg,#1A91B9_0%,#105871_54.5%,rgba(16,88,113,0.20)_100%)] py-[24px] px-[78px] rounded-[12px] border border-[#1A91B9]',
        black: 'bg-[#0d0d0d80] py-[22px] px-[48px] rounded-[16px] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.10),0_2px_2px_-1px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.10)]',
        white: '[background-image:linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(93deg,#FFF_0%,#DFDFDF_54.5%,rgba(223,223,223,0.20)_100%)] text-black font-bold border border-white rounded-[12px] py-[13px] px-[50px]'
    }
    return (
        <button onClick={handler} className={`${classNames} ${themeClasses[theme]}`}>
            {text}
        </button>
    )
}
export default MainBtn