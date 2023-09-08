import React from 'react'
import combostyle from "../styles/combos.module.css"
import combo1 from "../images/combo1.png"
import combo2 from "../images/combo2.png"
import combo3 from "../images/combo3.png"
import { H2component } from '../styled-components/H2'
import { H3component, Titlecomponent } from '../styled-components/H3'
import { BuyButton, InfoButton } from '../styled-components/Buttons'
import { Pricecomponent } from '../styled-components/Price'


function Combosteamplayed({image, price, title, description}) {
    return (
        <div className={combostyle.item}>
             <div className={combostyle.item_img}>
                <img src={image} alt={title} />
            </div>
            <div className={combostyle.item_info}>
              <Pricecomponent>{price}</Pricecomponent>
             <Titlecomponent>{title}</Titlecomponent>  
                <p>{description}</p>
                <div className={combostyle.buttons}>
                    <BuyButton>MUA NGAY</BuyButton>
                    <InfoButton>CHI TIẾT</InfoButton>
                </div>
            </div>
        </div>
    )
}


function Combos() {
  return (
    <div className={combostyle.about_combos}>
        <div className={combostyle.name_part}>
            <H2component>Your Personalized Coffee</H2component>
            <H3component>COMBO PHIN PHÊ</H3component>
        </div>
    <div className={combostyle.all_combos}>
<Combosteamplayed image={combo1} price="147.000" title="Combo Revo Đậm Đà" description="Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc..." />
<Combosteamplayed image={combo2} price="156.000" title="Combo Revo Everyday" description="Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm..." />
<Combosteamplayed image={combo3} price="275.000" title="Combo Revo Honey" description="Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica..." />
    </div>
    </div>
  )
}

export default Combos