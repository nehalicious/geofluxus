import circular from '../../../assets/images/icons/circular.png';
import comparison from '../../../assets/images/icons/comparison.png';
import market from '../../../assets/images/icons/market.png';
import waste from '../../../assets/images/icons/waste.png';
import impact from '../../../assets/images/icons/impact.png'

const menu = [
    {
        id: 0,
        name: "Market Demand",
        url: "/",
        icon: market
    },
    {
        id: 1,
        name: "Circular Alternatives",
        url: "/",
        icon: circular
    },
    {
        id: 2,
        name: "Comparison",
        url: "/",
        icon: comparison
    },
    {
        id: 3,
        name: "My Waste Materials",
        url: "/Reports",
        icon: waste
    },
    {
        id: 4,
        name: "My Impact",
        url: "/Impact",
        icon: impact
    },
];

export default menu;