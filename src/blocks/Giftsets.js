import React, { useState } from 'react'
import setsstyle from "../styles/giftsets.module.css"
import giftset1 from "../images/giftset1.png"
import icon1 from "../images/IC_coffee.png"
import icon2 from "../images/IC_Mountain.png"
import { H2component } from '../styled-components/H2'
import { H3component, Titlecomponent } from '../styled-components/H3'
// import { Buttons, RightTab } from '../styled-components/Tab'
import { BuyButton, InfoButton } from '../styled-components/Buttons'
import { Pricecomponent } from '../styled-components/Price'


function GiftsetsTeamplayed({ image, price, title, description }) {
    return (
        <div className={setsstyle.sets_section}>
            <div className={setsstyle.set_image}>
                <img src={image} alt={title} />
            </div>
            <div className={setsstyle.set_info}>
                <Pricecomponent>{price}</Pricecomponent>
                <Titlecomponent>{title}</Titlecomponent>
                <p>{description}</p>
                <div className={setsstyle.icons}>
                    <div className={setsstyle.icon}>
                        <div className={setsstyle.icon_img}>
                            <img src={icon1} alt="icon" />
                        </div>
                        <h4>Loại hạt
                            <br /><span>Fine Robusta Blend</span></h4>
                    </div>
                    <div className={setsstyle.icon}>
                        <div className={setsstyle.icon_img}>
                            <img src={icon2} alt="icon" />
                        </div>
                        <h4>Độ cao <br /><span>700 - 800m </span></h4>
                    </div>
                </div>
                <div className={setsstyle.buttons}>
                    <BuyButton>MUA NGAY</BuyButton>
                    <InfoButton>CHI TIẾT</InfoButton>
                </div>
            </div>

        </div>
    )
}


function Giftsets() {
    // const types = [1, 2, 3]
    // const [active, setActive] = useState(types[0]);

    const [toggle, setToggle] = useState(1)
function toggleTab(id) {
    setToggle(id)
}
    return (
        <div className={setsstyle.giftsets}>
            <div>
                <div className={setsstyle.name_part}>
                    <H2component>Best Gift For Best Friend</H2component>
                    <H3component>GIFTSET</H3component>
                </div>
                <div className={setsstyle.container_tabs}>
                    <div className={setsstyle.left_tab}>
                        <GiftsetsTeamplayed className={setsstyle.toggle === 1 ? "content_active" : "content"} image={giftset1} price="285.000" title='Giftset "Cà phê phin Việt Nam"' description="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." />
                        <GiftsetsTeamplayed className={setsstyle.toggle === 2 ? "content_active" : "content"} image={giftset1} price="285.000" title='Giftset "Cà phê phin Việt Nam"' description="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." />
                        <GiftsetsTeamplayed className={setsstyle.toggle === 3 ? "content_active" : "content"} image={giftset1} price="285.000" title='Giftset "Cà phê phin Việt Nam"' description="Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn." />
                    </div>
                    <ul className={setsstyle.right_tab}>

                        <li className={setsstyle.tabs} onClick={() => toggleTab(1)}>1</li>
                        <li className={setsstyle.tabs} onClick={() => toggleTab(2)}>2</li>
                        <li className={setsstyle.tabs} onClick={() => toggleTab(3)}>3</li>






                        {/* <Buttons>
                        {types.map(type => (
                            <RightTab
                                key={type}

                                active={active === type}

                                onClick={() => setActive(type)}
                            >
                                {type}
                            </RightTab>
                        )

                        )

                        }
                    </Buttons> */}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Giftsets