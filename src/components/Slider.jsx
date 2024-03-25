import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth

const Slider = () => {
    const elementRef = useRef();
    const elemetRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }
    const elemetLeft = (element) => {
        element.scrollLeft += screenWidth - 110;

    }
    return (
        <div className=''>
            <HiChevronLeft

            
            />


        </div>

    )
}
export default Slider;