import React from "react";

const WishlistSummary = (props) => {
  const { wishlist } = props;
  return (
    <div
      className=" mt-3  lg:p-3 md:p-1 bg-slate-800 mb-72 rounded-b-lg"
      style={{ height: "680px" }}
    >
      <div className="flex md:flex-col lg:flex-row items-center font-bold">
        <div className="w-2/5 ">
          <img
            style={{ height: "80%", width: "80%" }}
            src="./images/header-icon.png"
            alt=""
          />
        </div>
        <div className="text-white w-3/5 md:w-full text-lg  lg:text-left md:text-center">
          <h2>Shams Rahman</h2>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      {/* ***************************** */}
      <div className="flex items-center justify-around mt-5 text-center bg-slate-500 text-white p-3 md:p-1 rounded-xl">
        <p>
          <span className="font-bold text-2xl md:text-xl">100</span>kg <br />
          Weight
        </p>
        <p>
          <span className="font-bold text-2xl md:text-xl">5.10</span> <br />
          Height
        </p>
        <p>
          <span className="font-bold text-2xl md:text-xl">28</span>yrs <br />
          Age
        </p>
      </div>
      {/* ****************************** */}
      <div className="mt-8">
        <h3
          className="text-2xl text-white font-b
          "
        >
          Add A Break
        </h3>
        <div className="flex items-center justify-around mt-5 text-center bg-slate-500 text-white py-2 rounded-xl">
          <button className="btn btn-outline btn-info btn-circle md:w-11 ">
            10s
          </button>
          <button className="btn btn-outline btn-success btn-circle md:w-11">
            20s
          </button>
          <button className="btn btn-outline btn-warning btn-circle md:w-11">
            30s
          </button>
          <button className="btn btn-outline btn-error btn-circle md:w-11">
            40s
          </button>
        </div>
      </div>
      {/* *********************** */}
      <div className="mt-8">
        <h3
          className="text-2xl text-white font-b
          "
        >
          Exercise Details
        </h3>
        <div>
          <div className="text-xl md:text-base mt-4 bg-slate-500 text-white py-3 rounded-xl flex items-center justify-around">
            <div>Exercise Time</div>
            <div>
              <span>00</span>s
            </div>
          </div>
          <div className="text-xl md:text-base mt-4 bg-slate-500 text-white py-3 rounded-xl flex items-center justify-around ">
            <div>Break Time</div>
            <div>
              <span>00</span>s
            </div>
          </div>
        </div>
      </div>
      {/* ********************* */}
      <div className="mt-10">
        <button className="btn btn-success w-full text-white text-lg md:text-sm">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default WishlistSummary;
