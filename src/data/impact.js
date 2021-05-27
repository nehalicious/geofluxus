import transport from '../assets/images/maps/transport_impact_map.png';
import treatment from '../assets/images/maps/treatment_impact_map.png'

const impact = [
    {
        id: 0,
        name: 'Transport Impact',
        indicators: ['CO2 in t/month', 'NO2 emissions'],
        map: transport
    },
    {
        id: 1,
        name: 'Treatment Impact',
        indicators: ['CO2 in t/month', 'NO2 emissions'],
        map: treatment
    }
];

export default impact