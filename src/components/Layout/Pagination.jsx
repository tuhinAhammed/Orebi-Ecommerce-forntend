import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import Product from "../Layout/Product"
import Flex from '../Layout/Flex';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div className='w-[32%]'>
                        <Product badge={true}></Product>
                    </div>
                ))}
        </>
    );
}

const Pagination = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const [selectedItems , setSelectedItems] = useState(0)
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setSelectedItems(event.selected)
        console.log("p" , selectedItems);
        setItemOffset(newOffset);
    };
    return (
        <div >
            <div className='flex flex-wrap justify-between gap-y-8 '>
                <Items currentItems={currentItems} />
            </div>
            <Flex className="justify-between place-items-center mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    pageClassName=""
                    pageLinkClassName=" px-3 py-2 border-[1px] border-queaternary text-sm font-dmSans text-secondary"
                    previousClassName="page-item"
                    previousLinkClassName="page-link px-3 py-2 bg-secondary text-tertiary "
                    nextClassName="page-item"
                    nextLinkClassName="page-link page-link px-3 py-2 bg-secondary text-tertiary"
                    breakLinkClassName="page-link"
                    containerClassName="pagination flex gap-x-4 place-items-center "
                    activeClassName=" py-2 border-[1px]  text-sm font-dmSans text-tertiary bg-primary "
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            <p className='text-secondary text-sm font-dmSans '>Products from {selectedItems + 1}  to {itemOffset + itemsPerPage} of {items.length}</p>
            </Flex>
        </div>
    )
}

export default Pagination