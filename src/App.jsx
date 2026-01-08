
import { Tooltip } from 'antd';
import { fairyDustCursor } from "cursor-effects";
import { SideBarNameAndImage } from './Components/Portfolio/SideBarNameAndImage';
import { AboutMe } from './Components/Portfolio/AboutMe';
import { useEffect, useState } from 'react';
import { Experience } from './Components/Portfolio/Experience';
import { Studies } from './Components/Portfolio/Studies';
import { NavBurger } from './Components/Portfolio/NavBurger';
new fairyDustCursor({
    colors: ["#ff4191"],
})

export default function App({ auth, laravelVersion, phpVersion, projects }) {
    const [selectPage, setSelectPage] = useState(window.location.hash)
    useEffect(() => {
        console.log(selectPage)
    }, [selectPage])

    useEffect(() => {
        window.document.title = 'Denar Padilla Gutierrez'
    }, [])

    const handleChangePage = (hash) => {
        setSelectPage(hash)
        window.location.href = hash;
    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row pt-20 py-10 lg:py-20 xl:py-24 overflow-hidden lg:h-screen m-auto container px-5 gap-5 lg:gap-10">
                <aside className='block lg:hidden'>
                    <NavBurger handleChangePage={handleChangePage} selectPage={selectPage}/>
                </aside>
                <aside className="w-full hidden lg:block lg:w-20 py-5 h-auto bg-[#181818] rounded-lg">
                    <p
                        className=" text-center block py-2.5 text-3xl cursor-pointer lg:px-4 rounded transition duration-200 text-[#ff4191]"
                    >
                        ௹
                    </p>
                    <nav className='text-white flex lg:flex-col'>
                        <Tooltip placement="right" color='#ff4191' title="SOBRE MI">
                            <p
                                onClick={() => handleChangePage('#about-me')}
                                className={`${(selectPage === '#about-me' || selectPage === '') && 'text-[#ff4191]'} text-center block py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-[#ff4191]`}
                            >
                                ⁜
                            </p>
                        </Tooltip>
                        <Tooltip placement="right" color='#ff4191' title="EXPERIENCIA">
                            <p
                                onClick={() => handleChangePage('#experience')}
                                className={`${selectPage === '#experience' && 'text-[#ff4191]'} text-center block py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-[#ff4191]`}
                            >
                                ÷
                            </p>
                        </Tooltip>
                        <Tooltip placement="right" color='#ff4191' title="ESTUDIOS">
                            <p
                                onClick={() => handleChangePage('#studies-and-skills')}
                                className={`${selectPage === '#studies-and-skills' && 'text-[#ff4191]'} text-center block py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-[#ff4191]`}
                            >
                                ℗
                            </p>
                        </Tooltip>

                    </nav>
                </aside>
                <SideBarNameAndImage />

                {(selectPage === '#about-me' || selectPage === '') && <AboutMe handleChangePage={handleChangePage} />}
                {selectPage === '#experience' && <Experience />}
                {selectPage === '#studies-and-skills' && <Studies />}
            </div>
        </div>
    );
}
