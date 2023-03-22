import axios from "axios";
import { Blob } from "buffer";
import { useRouter } from "next/router";
import { useState } from "react";
import api from "../services/api";
import InputText from "./InputText";

const AddModal = () => {

  const router = useRouter();

  const [wish, setWish] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [site, setSite] = useState<string>('');
  const [img, setImg] = useState<File>();

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setImg(e.target.files[0]);
    }
  }

  const handleWish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWish(e.target.value)
  }

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(e.target.value))
  }

  const handleSite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite(e.target.value)
  }

  const createWish = async (img: File | undefined, wish: string, price: number, site: string) => {
    if(!img) {
      return
    }
    console.log(img.name);
    let formData = new FormData();
    formData.append('file', img  )
    formData.append('wish', wish);
    formData.append('site', site);
    formData.append('price', price.toString());
    try {
      const newWish = await axios.post('http://localhost:8080/wishlist', 
        formData, {
          headers: {
								'Content-Type': 'multipart/form-data'
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

    router.push('/');
  }


  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {"Let's add a new wish to your wish list"}
          </h3>
          <div className="flex flex-col items-center my-4">
            <InputText label="wish" type="text" value={wish} setValue={handleWish} />
            <InputText label="price" type="number" value={price} setValue={handlePrice} />
            <InputText label="site" type="text" value={site} setValue={handleSite} />
            <input type="file" className="file-input file-input-bordered w-full max-w-xs my-3" 
              onChange={handleImg}
            />
            <label
              htmlFor="my-modal-3" 
              className="btn"
              onClick={() => createWish(img, wish, price, site)}
            >
              submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
