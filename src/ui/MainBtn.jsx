const MainBtn = ({ text, handler, classNames, theme = 'blue' }) => {
    const themeClasses = {
        blue: 'bg-[#41A4C5] text-white',
        black: 'bg-[#0d0d0d80] py-[22px] px-[48px] rounded-[16px] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.10),0_2px_2px_-1px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.10)]'
    }
    return (
        <button onClick={handler} className={`${classNames} ${themeClasses[theme]}`}>
            {text}
        </button>
    )
}
export default MainBtn