import { useEffect, useState } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import Card from "./Card.jsx";

export default function Images(props) {
  const { data, itemsPerPage, onPageChange, length } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = Math.min(itemOffset + itemsPerPage, data.length);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-1 m-auto w-20vw h-20vh text-white">
        {currentItems &&
          currentItems.map((image, index) => (
            <div key={index} className="flex flex-row flex-wrap shadow-slate-50 overflow-hidden">
              <Card
                className="flex flex-start ml-6 mr-6 p-4"
                image={image.image}
                title={image.title}
                organiser={image.organiser}
                address={image.address}
                date={image.date}
              />
            </div>
          ))}
      </div>
      <ReactPaginate
  nextLabel=">"
  onPageChange={onPageChange}
  pageRangeDisplayed={3}
  marginPagesDisplayed={2}
  pageCount={pageCount}
  previousLabel="<"
  containerClassName="pagination flex items-center justify-center text-white my-4 mx-1" 
  pageClassName="mx-1"
  pageLinkClassName="px-3 py-1 border rounded bg-slaty hover:bg-pink-500"
  previousClassName="mx-1"
  previousLinkClassName="px-3 py-1 border rounded bg-slaty hover:bg-pink-500"
  nextClassName="mx-1"
  nextLinkClassName="px-3 py-1 border rounded bg-slaty hover:bg-pink-500"
/>
    </>
  );
}
