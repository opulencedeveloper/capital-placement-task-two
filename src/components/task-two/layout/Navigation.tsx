
const navData = [
    { icon: "home-active", link: "/" },
    { icon: "group", link: "/group" },
    { icon: "calender", link: "/calender" },
    { icon: "share", link: "/calnder" },
    { icon: "docs", link: "/docs" },
    { icon: "book", link: "/book" },
    { icon: "favourite", link: "/favorite" },
    { icon: "angle-left", link: "/angel-left" },
];


const Navigation = () => {

    return <header className="hidden md:flex flex-col items-center justify-between w-[72px] py-8 h-screen overflow-auto">
        <nav className="flex flex-col justify-center mb-8 items-center space-y-5 ">
            <div className="rounded-full bg-secondary-0 flex-shrink-0 h-[32px] w-[32px]"></div>
            {navData.map((data, index) => {
                const activeLinkStyle = index === 0 ? "bg-primary-0" : "";

                return <a
                    href={data.link}
                    className={`h-[48px] w-[48px] flex justify-center items-center rounded-[8px] ${activeLinkStyle}`}
                    key={index}
                >
                    <div className="h-[17px] w-[17px]">
                        <img src={`./asset/icons/${data.icon}-icon.svg`}
                            className="h-full w-full"
                            alt={`${data.icon} icon`} />
                    </div>
                </a>
            })}
        </nav>

        <div className="flex flex-col items-center mt-10 space-y-5">
            <div className="h-[17px] w-[17px]">
                <img src={`./asset/icons/settings-icon.svg`}
                    className="h-full w-full"
                    alt="settings icon" />
            </div>
            <div className="rounded-full bg-secondary-1 flex-shrink-0 h-[24px] w-[24px]"></div>
        </div>
    </header>
}

export default Navigation;