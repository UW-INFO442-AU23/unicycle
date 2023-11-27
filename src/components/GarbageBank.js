import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function GarbageCard(props) {
    const { t } = useTranslation();
    function getCategoryLabel(garbage) {
      if (garbage.Recycle === 'true') {
        return t('garbage-bank.recycle');
      } else if (garbage.Compost === 'true') {
        return t('garbage-bank.compost');
      } else if (garbage.Landfill === 'true') {
        return t('garbage-bank.landfill');
      } else {
        return t('garbage-bank.uncategorized');
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
  const { t } = useTranslation();
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
      <h1>{t('garbage-bank.title')}</h1>
      <h2>{t('garbage-bank.detail')}</h2>
      <section className="bank-content">
        <section id="search-box">
          <input
            type="text"
            placeholder={t('garbage-bank.search-box.placeholder')}
            value={searchTerm}
            aria-label={t('garbage-bank.search-box.aria-label')}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
        <section id="filter-box">
          <h4>{t('garbage-bank.filter-box.title')}</h4>
          <button
            className={filters.All ? 'active' : ''}
            onClick={() => handleFilterChange('All')}
            aria-label={t('garbage-bank.filter-box.aria-label1')}
          >
            {t('garbage-bank.filter-box.item1')}
          </button>
          <button
            className={filters.Recycle ? 'active' : ''}
            onClick={() => handleFilterChange('Recycle')}
            aria-label={t('garbage-bank.filter-box.aria-label2')}
          >
            {t('garbage-bank.filter-box.item2')}
          </button>
          <button
            className={filters.Compost ? 'active' : ''}
            onClick={() => handleFilterChange('Compost')}
            aria-label={t('garbage-bank.filter-box.aria-label3')}
          >
            {t('garbage-bank.filter-box.item3')}
          </button>
          <button
            className={filters.Landfill ? 'active' : ''}
            onClick={() => handleFilterChange('Landfill')}
            aria-label={t('garbage-bank.filter-box.aria-label4')}
          >
            {t('garbage-bank.filter-box.item4')}
          </button>
        </section>
        <section className="GarbageCard-deck">
          {filteredGarbages.length > 0 ? (
            filteredGarbages.map((arrayItem) => (
              <GarbageCard garbages={arrayItem} key={arrayItem.name} />
            ))
          ) : (
            <p id="noResults">{t('garbage-bank.not-found')}</p>
          )}
        </section>
      </section>
    </div>
  );
}

export default GarbageBank;
