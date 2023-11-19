import React, { useState } from 'react';

function GarbageCard(props) {
    function getCategoryLabel(garbage) {
      if (garbage.Recycle === 'true') {
        return 'Recycle';
      } else if (garbage.Compost === 'true') {
        return 'Compost';
      } else if (garbage.Landfill === 'true') {
        return 'Landfill';
      } else {
        return 'Uncategorized';
      }
    }
  
    const categoryLabel = getCategoryLabel(props.garbages);
    const categoryClass = getCategoryClass(props.garbages);
  
    return (
      <div className={`GarbageCard ${categoryClass}`}>
        <div className="GarbageCard-body">
          <h3 className="GarbageCard-title">{props.garbages.name}</h3>
          <p className={`GarbageCard-category ${categoryClass}`}>{categoryLabel}</p>
        </div>
        <img className="GarbageCard-img-bot" src={props.garbages.img} alt={props.garbages.name} />
      </div>
    );
  }
  
  function getCategoryClass(garbage) {
    if (garbage.Recycle === "true") {
      return "recycle";
    } else if (garbage.Compost === "true") {
      return "compost";
    } else if (garbage.Landfill === "true") {
      return "landfill";
    } else {
      return "uncategorized";
    }
  }

function GarbageBank(props) {
  const [filters, setFilters] = useState({
    Recycle: false,
    Compost: false,
    Landfill: false,
    All: true,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filter) => {
    if (filter === 'All') {
      setFilters({
        Recycle: false,
        Compost: false,
        Landfill: false,
        All: true,
      });
    } else {
      setFilters({
        Recycle: filter === 'Recycle' ? true : false,
        Compost: filter === 'Compost' ? true : false,
        Landfill: filter === 'Landfill' ? true : false,
        All: false,
      });
    }
  };

  const garbagesArray = Object.values(props.garbages);

  const filteredGarbages = garbagesArray.filter((garbage) => {
    return (
      (!filters.Recycle || garbage.Recycle === 'true') &&
      (!filters.Compost || garbage.Compost === 'true') &&
      (!filters.Landfill || garbage.Landfill === 'true') &&
      (garbage.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="bank">
      <h1>Garbage Bank</h1>
      <h2>Use the search and filters below to find information on proper disposal methods for different items.</h2>
      <section className="bank-content">
        <section id="search-box">
          <input
            type="text"
            placeholder="Search for specific item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
        <section id="filter-box">
          <h4>Disposal Guide:</h4>
          <button
            className={filters.All ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={filters.Recycle ? 'active' : ''}
            onClick={() => handleFilterChange('Recycle')}
          >
            Recycle
          </button>
          <button
            className={filters.Compost ? 'active' : ''}
            onClick={() => handleFilterChange('Compost')}
          >
            Compost
          </button>
          <button
            className={filters.Landfill ? 'active' : ''}
            onClick={() => handleFilterChange('Landfill')}
          >
            Landfill
          </button>
        </section>
        <section className="GarbageCard-deck">
          {filteredGarbages.length > 0 ? (
            filteredGarbages.map((arrayItem) => (
              <GarbageCard garbages={arrayItem} key={arrayItem.name} />
            ))
          ) : (
            <p id="noResults">No results found.</p>
          )}
        </section>
      </section>
    </div>
  );
}

export default GarbageBank;
