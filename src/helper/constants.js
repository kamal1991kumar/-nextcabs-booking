import saloon from '../assets/saloon.png';
import estate from '../assets/estate.png';
import executive1 from '../assets/executive1.png';
import mvp from '../assets/mvp.png';
import E8seater from '../assets/8seater.png';
export const tripList = {
    'SALOON': {
        title: 'Saloon Car',
        imageUrl: saloon,
        isSelected: false,
        passengers: 4,
        mediumLuggage: 2,
        small: 2,
        id: 'saloon'
    },
    'ESTATE': {
        id: 'estate',
        title: 'Estate',
        imageUrl: estate,
        isSelected: false,
        passengers: 4,
        mediumLuggage: 2,
        small: 3,
    },
    'EXECUTIVE': {
        id: 'executive',
        title: 'Executive',
        imageUrl: executive1,
        isSelected: false,
        passengers: 4,
        mediumLuggage: 2,
        small: 3,
    },
    'MPV': {
        id: 'mpv',
        title: 'MPV',
        imageUrl: mvp,
        isSelected: false,
        passengers: 6,
        mediumLuggage: 3,
        small: 3,
    },
    'EIGHTSEATER': {
        id: 'eightSeater',
        title: 'Eight Seater',
        imageUrl: E8seater,
        isSelected: false,
        passengers: 8,
        mediumLuggage: 8,
        small: 8,
    }
};