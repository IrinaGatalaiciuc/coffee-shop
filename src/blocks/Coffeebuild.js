import React from 'react'
import coffeestyle from "../styles/coffeebuild.module.css"
import ic from "../images/ic.png"
import ic1 from "../images/IC (1).png"
import ic2 from "../images/IC (2).png"
import ic3 from "../images/IC (3).png"
import { H2component } from '../styled-components/H2'
import { H3component, Titlecomponent } from '../styled-components/H3'

function CoffeebuildTeamplayed({image, title, descript}) {
    return (
        <div className={coffeestyle.item}>
            <div className={coffeestyle.item_img}>
                <img src={image} alt={title}/>
            </div>
            <div className={coffeestyle.item_info}>
          <Titlecomponent>{title}</Titlecomponent>
            <p>{descript}</p>
            </div>
        </div>
    )
}


export default function Coffeebuild() {
    return (
        
        <div className={coffeestyle.about}>
        <div className={coffeestyle.name_part}>
       <H2component>Your Personalized Coffee</H2component> 
        <H3component>COFFEE BUILD YOUR BASE</H3component>
        </div>
        <div className={coffeestyle.items}>
      <CoffeebuildTeamplayed image={ic}  title="Nguồn gốc" descript="Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế." />
      <CoffeebuildTeamplayed image={ic1} title="Chất lượng" descript="Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê." />
      <CoffeebuildTeamplayed image={ic2} title="Các loại hạt" descript="70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean." />
      <CoffeebuildTeamplayed image={ic3} title="Pha chế" descript="Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt." />
      </div>
      </div>
    )
}

