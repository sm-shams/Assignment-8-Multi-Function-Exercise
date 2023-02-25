import React from "react";
import "./WishlistSummary.css";

const WishlistSummary = (props) => {
  const { wishlist } = props;
  console.log(wishlist);
  //--------- Total time calculation--------
  let totalTime = 0;
  for (const singleWish of wishlist) {
    totalTime = totalTime + parseInt(singleWish.time);
  }

  // ------ Break time handler----

  const breakTimeAdd = (props) => {
    //   console.log(props);
    const displayTime = document.getElementById("displayBreak");
    displayTime.innerText = props;
    // console.log(timeAdded.innerText);
  };

  return (
    <div
      className="md:fixed lg:fixed top-0 mt-3  lg:p-3 md:p-1 max-sm:p-2 bg-slate-800 mb-72 max-sm:mb-16 rounded-b-lg"
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
      {/* *************Button group***************** */}
      <div className="mt-8">
        <h3
          className="text-2xl text-white font-b
          "
        >
          Add A Break
        </h3>
        <div className="flex items-center justify-around mt-5 text-center bg-slate-500 text-white py-2 rounded-xl">
          <button
            onClick={() => breakTimeAdd(10)}
            className="btn btn-outline btn-info btn-circle md:w-11 "
          >
            <span id="break1">10</span>s
          </button>
          <button
            onClick={() => breakTimeAdd(20)}
            className="btn btn-outline btn-success btn-circle md:w-11"
          >
            <span id="break1">20</span>s
          </button>
          <button
            onClick={() => breakTimeAdd(30)}
            className="btn btn-outline btn-warning btn-circle md:w-11"
          >
            <span id="break1">30</span>s
          </button>
          <button
            onClick={() => breakTimeAdd(40)}
            className="btn btn-outline btn-error btn-circle md:w-11"
          >
            <span id="break1">40</span>s
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
              <span>{totalTime}</span>s
            </div>
          </div>
          <div className="text-xl md:text-base mt-4 bg-slate-500 text-white py-3 rounded-xl flex items-center justify-around ">
            <div>Break Time</div>
            <div>
              <span id="displayBreak">0</span>s
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
