

import { useEffect, useState } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import Card from "./Card.jsx";
import axios from "axios";

export default function Images(props) {
  const { itemsPerPage, onPageChange, length } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios.get('https://kapture-events.onrender.com/events')
    .then((response) => {
      setSlides(response.data);
      setLoading(false); // Set loading to false once data is fetched
    })
    .catch((error) => {
      console.log(error);
      setLoading(false); // Set loading to false in case of an error
    });
  }, []);

  useEffect(() => {
    const endOffset = Math.min(itemOffset + itemsPerPage, slides.length);
    setCurrentItems(slides.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(length / itemsPerPage));
  }, [itemOffset, itemsPerPage, length, slides]);

  return (
    <>
      {loading && <div className="buffering-icon">Loading...</div>}
      <div className="flex flex-wrap items-center gap-11 m-auto w-20vw h-20vh text-white mx-auto ">
        {currentItems &&
          currentItems.map((image, index) => (
            <div key={index}  className="flex flex-row flex-wrap shadow-slate-50 overflow-hidden ">
              <Card
              className="flex flex-start ml-6 mr-6 p-4 w-1/8" 
                // className="flex flex-start ml-6 mr-6 p-4"
                eventId={image.event_id}
                image={image.thumbnail.fileUrl}
                title={image.name}
                organiser={image.organizerName}
                address="KIIT Campus-7"
                date={image.startDate}
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
