import pOne from '../images/car.png';
import pTwo from "../images/car (1).png";
import pThree from "../images/Car (2).png";
import rOne from "../images/Car (4).png";
import rTwo from "../images/Car (5).png";
import rThree from "../images/Car (6).png";
import red from "../images/red-heart.png";
import heart from "../images/heart.png";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TYPE = {
    name:string,
    title:string,
    icon:StaticImport,
    image:StaticImport,
    gasoline:string,
    car:string,
    capacity:string,
    dPrice:string,
    oPrice:string
}

export const Popular:TYPE[] = [
    {
        name:'Koenigsegg',
        title:'Sport',
        icon:red,
        image:pOne,
        gasoline:'90L',
        car:'Manual',
        capacity:'2 People',
        dPrice:'$99.00/',
        oPrice:''
    },
    {
        name:'Nissan GT - R',
        title:'Sport',
        icon:heart,
        image:pTwo,
        gasoline:'80L',
        car:'Manual',
        capacity:'2 People',
        dPrice:'$80.00/',
        oPrice:'100.00'
    },
    {
        name:'Rolls - Royce',
        title:'Sedan',
        icon:red,
        image:pThree,
        gasoline:'70L',
        car:'Manual',
        capacity:'4 People',
        dPrice:'$96.00/',
        oPrice:''
    },
]
export const Recommendation:TYPE[] = [
    {
        name:'All New Rush',
        title:'SUV',
        icon:red,
        image:rOne,
        gasoline:'70L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$72.00/',
        oPrice:'$80.00'
    },
    {
        name:'CR  - V',
        title:'SUV',
        icon:heart,
        image:rTwo,
        gasoline:'80L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$80.00/',
        oPrice:''
    },
    {
        name:'All New Terios',
        title:'SUV',
        icon:red,
        image:rThree,
        gasoline:'90L',
        car:'Manual',
        capacity:'6 People',
        dPrice:'$74.00/',
        oPrice:''
    }
] 