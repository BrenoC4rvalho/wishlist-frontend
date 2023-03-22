import { TbSort09, TbSort90, TbSortAZ, TbSortZA } from 'react-icons/tb'
import { Order } from '../types/Order'
import { Value } from '../types/Value'

type Props = {
    onClick: (value: Value, order: Order, page: number) => void
    page: number
}

const BtnGroupOrder = ({ onClick, page }: Props) => {
    return (
    
        <div className='flex justify-end mr-2'>
            <div className="btn-group">
                <button className="btn text-2xl" onClick={() => onClick('price', 'ascending', page)}> <TbSort09 /> </button>
                <button className="btn text-2xl" onClick={() => onClick('price', 'descending', page)}> <TbSort90 /> </button>
                <button className="btn text-2xl" onClick={() => onClick('wish', 'ascending', page)}> <TbSortAZ /> </button>
                <button className="btn text-2xl" onClick={() => onClick('wish', 'descending', page)}> <TbSortZA /> </button>
            </div>
        </div>


    )
}

export default BtnGroupOrder