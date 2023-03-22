import Image from "next/image";
import { Wish } from "../types/Wish";

type Props = {
  listWish: Wish[]
  onClick: (id: number) => void
}

const WishCardList = ({ listWish, onClick }: Props) => {

  return (
    
    <div className="flex flex-wrap justify-around">
      
      {listWish.map((wish, index) => (
        
        <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl m-5">
          <figure>
            <Image width={384} height={284} alt="teste" src={`/img/${wish.photo}`} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div className="card-title text-2xl">{wish.wish}</div>
              <div className="card-title">{`R$${wish.price}`}</div>
            </div>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal-4" onClick={() => onClick(wish.id)} className="btn btn-primary">Edit</label>
              <a href={wish.site} className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>

      ))}
      
      
    </div>
  );
};

export default WishCardList;
