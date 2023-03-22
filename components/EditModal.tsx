import { useRouter } from "next/router";
import { useState } from "react";
import api from "../services/api";
import { Wish } from "../types/Wish";
import InputText from "./InputText";

type Props = {
    wish: Wish
}

const EditModal = ({ wish }: Props) => {

  const router = useRouter();

  const [price, setPrice] = useState<number>(0)
  const [site, setSite] = useState<string>('')  

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value))
  }

  const handleSite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite(e.target.value)
  }

  const editWish = async (id: number, site: string ,price: number) => {
    if(site && price) {
        await api.update(id, site, price);
        router.push('/');
    }
  }

  const deleteWish = async (id: number) => {
    await api.destroy(id);
    router.push('/');
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-center">
              {wish.wish} 
            </h3>
            <img className="w-full mx-3 mt-4" src={`/img/${wish.photo}`} />
          </div>
          <div className="flex flex-col justify-center my-4">
            <InputText label="edit site" type="text" value={site} setValue={handleSite} />
            <InputText label="edit price" type="number" value={price} setValue={handlePrice} />
          </div>
          

          <div className="card-actions justify-end">
              <label htmlFor="my-modal-4" onClick={() => editWish(wish.id, site, price)} className="btn btn-primary">Edit</label>
              <label htmlFor="my-modal-4" onClick={() => deleteWish(wish.id)} className="btn btn-primary">Delete</label>
        </div>   
        </div>
      </div>
    </div>
  );
};

export default EditModal;
