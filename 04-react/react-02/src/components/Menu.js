import React, {Fragment} from 'react'
import './menu.css'
import Mjolnir from './images/thor-mjolnir.svg'
import TicTacToe from './images/tic-tac-toe.svg'
import DollarBill from './images/dollarbill.svg'
import CitySkyline from './images/skyline-building.svg'
import StarOh from './images/star-o.svg'
import Llama from './images/llama1.svg'
import YinYang from './images/Yin_yang.svg'
import BabyYoda from './images/yoda1.svg'
import RaSymbol from './images/Ra_Symbol.svg'




const Menu = (props) => {
    
const images = [
    {
        id: 0,
        className: "Mjolnir filter-green",
        image: Mjolnir,
        alt: "Mjolnir"
    },
    {
        id: 1,
        className: "TicTacToe",
        image: TicTacToe,
        alt: "Tic-Tac-Toe"
    },
    {
        id: 2,
        className: "DollarBill filter-moneygreen",
        image: DollarBill,
        alt: "Dollar-Bill"
    },
    {
        id: 3,
        className: "CitySkyline",
        image: CitySkyline,
        alt: "City-Skyline"
    },
    {
        id: 4,
        className: "Star-O filter-red",
        image: StarOh,
        alt: "Star-O"
    },
    {
        id: 5,
        className: "CoolLlama",
        image: Llama,
        alt: "CoolLlama"
    },
    {
        id: 6,
        className: "YinYang filter-blue",
        image: YinYang,
        alt: "YinYang"
    },
    {
        id: 7,
        className: "BabyYoda",
        image: BabyYoda,
        alt: "Baby Yoda"
    },
    {
        id: 8,
        className: "Ra",
        image: RaSymbol,
        alt: "Ra"
    }
];

    const rotatingImage = images.map((image, i) => 
         <img onClick={() => {props.handleClick(i)}} key={image.id} className={image.className} src={image.image} alt={image.alt} />
        )

        return (
            <Fragment>
                {rotatingImage}
            </Fragment>
        )
    }


export default Menu;