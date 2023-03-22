type Props = {
  page: number
  handlePageNext: () => void;
  handlePageBack: () => void;
}

const Pagination = ({ page, handlePageNext, handlePageBack }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="my-5 btn-group">
        <button className="btn" onClick={handlePageBack}>«</button>
        <button className="btn">{page + 1}</button>
        <button className="btn" onClick={handlePageNext}>»</button>
      </div>
    </div>
  );
};

export default Pagination;
