import React from 'react'
import coffee1 from "../images/coffee1.png"
import shopstyle from "../styles/shopitems.module.css"
import coffee2 from "../images/coffee2.png"
import coffee3 from "../images/coffee3.png"
import coffee4 from "../images/coffee4.png"
import { H2component } from '../styled-components/H2'
import { H3component, Titlecomponent } from '../styled-components/H3'
import { BuyButton, InfoButton } from '../styled-components/Buttons'
import { Pricecomponent } from '../styled-components/Price'

function ShopitemsTeamplayed({ image, price, title, description }) {
    return (
        <div className={shopstyle.shop_item}>
            <div className={shopstyle.shop_img}>
                <img src={image} alt={title} />
            </div>
            <div className={shopstyle.item_info}>
                <Pricecomponent>{price}</Pricecomponent>
                <Titlecomponent>{title}</Titlecomponent>
                <p>{description}</p>
                <div className={shopstyle.buttons}>
                    <BuyButton>MUA NGAY</BuyButton>
                    <InfoButton>CHI TIẾT</InfoButton>
                </div>
            </div>
        </div>
    )
}

function Shopitems() {
    return (
                <div div className={shopstyle.shopitems}>
                    <div className={shopstyle.name_part}>
                        <H2component>Choose Your Favorite</H2component>
                        <H3component>CHUẨN GU ĐÚNG VỊ</H3component>
                    </div>
                    <div className={shopstyle.items}>
                        <ShopitemsTeamplayed image={coffee1} price="99.000" title="REVO Morning" description="đắng, hậu ngọt, hương hoa " />
                        <ShopitemsTeamplayed image={coffee2} price="139.000" title="REVO Origin" description="hậu ngọt, ít đắng, vị chua dâu" />
                        <ShopitemsTeamplayed image={coffee3} price="85.000" title="REVO Everyday" description="cân bằng, hậu đắng, vị chocolate " />
                        <ShopitemsTeamplayed image={coffee4} price="75.000" title="REVO Đậm Đà" description="đậm đà, đắng, truyền thống" />
                    </div>
                </div>
        
    )
}

export default Shopitems