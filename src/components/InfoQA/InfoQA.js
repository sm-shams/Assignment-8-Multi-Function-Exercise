import React from "react";

const InfoQA = () => {
  return (
    <div className="px-10 my-20 w-3/4 max-sm:w-full">
      <div>
        <h3 className="text-2xl font-bold text-white">
          1 . How does react work?
        </h3>
        <p className="text-white my-3 text-justify">
          <span className="text-xl">
            Answer : <br />
          </span>{" "}
          Image result for how does react work React now has an old tree that
          describes what it currently looks like and a new tree that represents
          how the updated page should look. React must now compare these two
          trees and provide ReactDOM with instructions to sync anything that has
          changed, which results in adding items to the UI.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">
          2. Difference between Props and State.
        </h3>
        <p className="text-white my-3 text-justify">
          <span className="text-xl">
            Answer : <br />
          </span>{" "}
          The difference comes in which component the data are owned. State is
          owned locally and the component itself updates it. Props are owned and
          read-only by a parent. Props can be changed only if an upstream shift
          is caused by a callback function passed on to the child.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">
          3 . Uses of useEffect except data load.
        </h3>
        <p className="text-white my-3 text-justify">
          <span className="text-xl">
            Answer : <br />
          </span>{" "}
          Running once on mount: fetch API data. Running on state change:
          validating input field. Running on state change: live filtering.
          Running on state change: trigger animation on new array value. Running
          on props change: update paragraph list on fetched API data update.
        </p>
      </div>
    </div>
  );
};

export default InfoQA;
