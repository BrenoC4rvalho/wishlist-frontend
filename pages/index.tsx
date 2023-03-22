import { useState, useEffect } from "react"
import AddModal from "../components/AddModal"
import BtnGroupOrder from "../components/BtnGroupOrder"
import EditModal from "../components/EditModal"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NotFound from "../components/NotFound"
import Pagination from "../components/Pagination"
import WishCardList from "../components/WishCardList"
import api from "../services/api"
import { Order } from "../types/Order"
import { Value } from "../types/Value"
import { Wish } from "../types/Wish"

const Home = () => {
  
  const [listWish, setListWish] = useState<Wish[]>([]); 
  const [wish, setWish] = useState<Wish>()

  const [pageSearch, setPageSearch] = useState<boolean>(false)

  const [value, setValue] = useState<Value>('wish');
  const [order, setOrder] = useState<Order>('ascending');
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    loadListWish(value, order, page);
  }, [value, order, page])

  const handlePageNext = () => {
    setPage(page + 1);
  }

  const handlePageBack = () => {
    if(page == 0) return
    setPage(page - 1);
  }

  const loadListWish =  async (value: Value , order: Order, page: number) => {
    const listWish =  await api.getAll(value, order, page);
    setListWish(listWish.content);
    setValue(value);
    setOrder(order);
  }
  
  const loadWish = async (id: number) => {
    const wish = await api.getUnique(id);
    setWish(wish);
    setPageSearch(false);
  }

  const searchWish = async (value: string) => {
    const searchWish = await api.getFindBySearch(value);
    setListWish(searchWish);
    setPageSearch(true)
  }

  return (

    <div>
      <Header onClick={searchWish}/>
      
      {!pageSearch&&
        <BtnGroupOrder onClick={loadListWish} page={page} />
      }

      <AddModal />
      
      {listWish&&
        <WishCardList onClick={loadWish} listWish={listWish}/>
      }

      {listWish?.length == 0&&
        <div className="flex justify-center my-10">
          <NotFound />
        </div>
      }

      {wish&&
        <EditModal wish={wish} />
      }

      {!pageSearch&&
        <Pagination page={page} handlePageNext={handlePageNext} handlePageBack={handlePageBack} />
      }

      <Footer />
    </div>
    
  )
}

export default Home
