import React from 'react';
import './sidebar.css';
import { BsFillCalendarWeekFill, BsFillDiscFill } from 'react-icons/bs';
const Siderbar = () => {
  return (
    <div className="">
      <div
        className="d-flex px-10px flex-column flex-shrink-0 siderbar"
        style={{ width: '4.5rem' }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item  pb-10 ">
            <a
              href="#"
              className="nav-link "
              aria-current="page"
              title="Home"
              style={{
                fontSize: '38px',
              }}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <BsFillDiscFill className="text-white" />
            </a>
          </li>
          <span className="border-bottom w-50 mx-auto"></span>
          <li className="nav-item  py-10 ">
            <a
              href="#"
              className="nav-link "
              aria-current="page"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <BsFillCalendarWeekFill className="text-white" />
            </a>
          </li>
          <span className="border-bottom w-50 mx-auto"></span>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
