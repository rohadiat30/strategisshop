import React from "react";

function Pagination() {
  return (
    <div aria-label="Page navigation example" className="my-10">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href="#"
            className="px-3 py-2 ml-0 leading-tight text-secondary bg-none border border-secondary rounded-l-lg hover:bg-secondary/50 hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-secondary bg-none border border-secondary hover:bg-secondary/50 hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-secondary bg-none border border-secondary hover:bg-secondary/50 hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="px-3 py-2 text-white border border-secondary bg-secondary hover:bg-secondary/50 hover:text-white "
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-secondary bg-none border border-secondary hover:bg-secondary/50 hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-secondary bg-none border border-secondary hover:bg-secondary/50 hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-3 py-2 leading-tight text-secondary bg-none border border-secondary rounded-r-lg hover:bg-secondary/50 hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
