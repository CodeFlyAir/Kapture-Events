
/*import React, { useState } from 'react';

const FilterComponent = () => {
  const [activeMainFilter, setActiveMainFilter] = useState('upcoming');
  const [activeSubFilter, setActiveSubFilter] = useState(null);

  const handleMainFilterClick = (filter) => {
    setActiveMainFilter(filter);
    setActiveSubFilter(null); // Reset subfilter on main filter click
    // Add logic to filter data based on the selected main filter
    // For now, let's assume you have a function filterData(filter) that filters your data
    // filterData(filter);
  };

  const handleSubFilterClick = (filter) => {
    setActiveSubFilter(filter);
    // Add logic to filter data based on the selected sub filter
    // For now, let's assume you have a function filterData(filter) that filters your data
    // filterData(filter);
  };

  return (
    <div className="m-8 flex flex-col justify-around items-center font-semibold  text-xl text-nowrap">
      <div className="flex justify-around items-center">
        <div
          className={`cursor-pointer inline-flex items-center ${
            activeMainFilter === 'past' ? 'text-pinky' : 'text-white'
          } px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('past')}
        >
          <span className="mx-12 mr-22">Past Events</span>
        </div>

        <div
          className={`cursor-pointer inline-flex items-center ${
            activeMainFilter === 'upcoming' ? 'text-pinky' : 'text-white'
          } px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('upcoming')}
        >
          <span className="mx-12">Upcoming Events</span>
        </div>

        <div
          className={`cursor-pointer inline-flex items-center ${
            activeMainFilter === 'registration' ? 'text-pinky' : 'text-white'
          } px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('registration')}
        >
          <span className="mx-12 ml-22">My Registration</span>
        </div>
      </div>

      {activeMainFilter === 'upcoming' && (
        <div className="flex justify-around items-center mt-4">
          <div
            className={`cursor-pointer inline-flex mx-4 items-center ${
              activeSubFilter === 'today' ? 'text-white bg-pinky' : 'text-white bg-slaty border-pinky'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('today')}
          >
            <span className="mr-1 border border-pinky px-6 py-2 rounded-full ">Today</span>
          </div>

          <div
            className={`cursor-pointer inline-flex mx-12 items-center ${
              activeSubFilter === 'tomorrow' ? 'text-white bg-pinky' : 'text-white bg-slaty'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('tomorrow')}
          >
            <span className="mr-1 border border-pinky px-6 py-2 rounded-full">Tomorrow</span>
          </div>

          <div
            className={`cursor-pointer inline-flex mx-4 items-center ${
              activeSubFilter === 'thisMonth' ? 'text-white bg-pinky' : 'text-white bg-slaty'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('thisMonth')}
          >
            <span className="mr-1 border border-pinky px-6 py-2 rounded-full">This Month</span>
          </div>
        </div>
      )}

      {/* Render your filtered data here based on active filters */
  /*  </div>
  );
};

export default FilterComponent;

















/*import React, { useState } from 'react';

const FilterComponent = () => {
  const [activeMainFilter, setActiveMainFilter] = useState(null);
  const [activeSubFilter, setActiveSubFilter] = useState(null);

  const handleMainFilterClick = (filter) => {
    setActiveMainFilter(filter);
    setActiveSubFilter(null); // Reset subfilter on main filter click
    // Add logic to filter data based on the selected main filter
    // For now, let's assume you have a function filterData(filter) that filters your data
    // filterData(filter);
  };

  const handleSubFilterClick = (filter) => {
    setActiveSubFilter(filter);
    // Add logic to filter data based on the selected sub filter
    // For now, let's assume you have a function filterData(filter) that filters your data
    // filterData(filter);
  };

  return (
    <div className="m-8 flex  justify-around items-center font-normal md:font-semi text-xl text-nowrap">
      <div className="flex justify-around items-center">
        <div
          className={`cursor-pointer inline-flex items-center text-${
            activeMainFilter === 'past' ?'red '
             :'white'
          } text-white px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('past')}
        >
          <span className="mr-1">Past Events</span>
        </div>

        <div
          className={`cursor-pointer inline-flex items-center ${
            activeMainFilter === 'upcoming' ? '[#EF27A6]' : 'text-white'
          } px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('upcoming')}
        >
          <span className="mr-1">Upcoming Events</span>
        </div>

        <div
          className={`cursor-pointer inline-flex items-center ${
            activeMainFilter === 'registration' ? 'text-pinky' : 'text-white'
          } px-3 py-1 rounded-full`}
          onClick={() => handleMainFilterClick('registration')}
        >
          <span className="mr-1">My Registration</span>
        </div>
      </div>

      {activeMainFilter === 'upcoming' && (
        <div className="flex justify-around items-center mt-4">
          <div
            className={`cursor-pointer inline-flex items-center ${
              activeSubFilter === 'today' ? 'text-white bg-pinky' : 'text-white bg-gray-400'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('today')}
          >
            <span className="mr-1">Today</span>
          </div>

          <div
            className={`cursor-pointer inline-flex items-center ${
              activeSubFilter === 'tomorrow' ? 'text-white bg-pinky' : 'text-white bg-gray-400'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('tomorrow')}
          >
            <span className="mr-1">Tomorrow</span>
          </div>

          <div
            className={`cursor-pointer inline-flex items-center ${
              activeSubFilter === 'thisMonth' ? 'text-white bg-pinky' : 'text-white bg-gray-400'
            } px-3 py-1 rounded-full`}
            onClick={() => handleSubFilterClick('thisMonth')}
          >
            <span className="mr-1">This Month</span>
          </div>
        </div>
      )}

      {/* Render your filtered data here based on active filters }
    </div>
  );
};

export default FilterComponent;*/
