import React, {useState, useRef, useEffect, useCallback} from 'react';
import * as Icon from 'react-feather';
import {useTrail, animated, config} from 'react-spring';
import {useDebounce, useUpdateEffect} from 'react-use';
import produce from 'immer';
import {capitalize} from '../utils/commonFunctions';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {
    CITY_NAMES
} from '../constants';

const locationSuggestions = [
    "Auckland",
    "Wellington",
    "Waitakere",
    "Christchurch",
    "Queenstown",
]

function Search({
  allCentroidDestinations
}){
    const [searchValue, setSearchValue] = useState('');
    const [expand, setExpand] = useState(false);
    const [results, setResults] = useState([]);
    const searchInput = useRef(null);
    const {t} = useTranslation();

    const [engine, setEngine] = useState(null);
    // console.log("allCentroidDestinations: ", allCentroidDestinations)
    // console.log("CITY_NAMES: ", CITY_NAMES);
    // console.log("centroidData[15]: ", centroidData[15]);
    //useUpdateEffect(()=>{
    
    useEffect(()=>{
      if(allCentroidDestinations){
        import('corejs-typeahead').then(Bloodhound => {
            // console.log(Bloodhound);
            setEngine(
                // eslint-disable-next-line
                new Bloodhound.default({
                    initialize: true,
                    // Should be using remote
                    local: 
                    //Object.keys(CITY_NAMES),
                    allCentroidDestinations.map(a => a.DEPARTURE_NAME_2),
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    // queryTokenizer: Bloodhound.default.tokenizers.whitespace,
                    // datumTokenizer: Bloodhound.default.tokenizers.whitespace,
                    //datumTokenizer: Bloodhound.default.tokenizers.obj.whitespace('name'),
                })
            )
        })
      }
    }
    ,[]
    )

    const handleSearch = useCallback((searchInput)=>{
        if(!engine)
            return null;
        const results = [];

        const sync = (datums) => {
            // console.log(datums);
            datums.map((result, index) => {
                // console.log("search result: ", result);
                var obj = Object.values(allCentroidDestinations).find(o => o.DEPARTURE_NAME_2 === result);
                // console.log(destinationData)
                // var obj = allCentroidDestinations[result]
                // console.log(obj)
                results.push({name: result, ...obj});
                return null;
            })

            setResults([...results]);
        }

        engine.search(searchInput, sync);
    },[
        engine
    ]);

    useDebounce(
      ()=>{
          if(searchValue) {
              handleSearch(searchValue);
          } else {
              setResults(
                  produce(results, (draftResults) => {
                      draftResults.splice(0);
                  })
              );
          }
      },
      100,
      [searchValue]
    );

    function setNativeValue(element, value){
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(
            prototype,
            'value'
        ).set;

        if(valueSetter && valueSetter !== prototypeValueSetter){
            prototypeValueSetter.call(element, value);
        } else {
            valueSetter.call(element, value);
        }
    }

    const [trail, set] = useTrail(3, () => ({
        transform: 'translate3d(0, 10px, 0)',
        opacity: 0,
        config: config.stiff,
    }));

    set({transform: 'translate3d(0, 0px, 0)', opacity: 1});

    return (
        <div className="Search">
          <animated.label style={trail[0]}>
            {t('Search a location in NZ')}
          </animated.label>
          {/* <animated.div className="line" style={trail[1]}></animated.div> */}
    
          <animated.div className="search-input-wrapper" style={trail[2]}>
            <input
              type="text"
              value={searchValue}
              ref={searchInput}
              onFocus={(event) => {
                setExpand(true);
              }}
              onBlur={() => {
                setExpand(false);
              }}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
            <span id="search-placeholder" className="search-placeholder"></span>
    
            <div className={`search-button`}>
              <Icon.Search />
            </div>
    
            {searchValue.length > 0 && (
              <div
                className={`close-button`}
                onClick={() => {
                  setSearchValue('');
                  setResults([]);
                }}
              >
                <Icon.X />
              </div>
            )}
          </animated.div>
    
          {results.length > 0 && (
            <div className="results">
              {results.map((result, index) => {
                if (result.type === 'state' || result.type === 'district') {
                  return (
                    <Link key={index} to={`location/${result.route}`}>
                        Link to location
                      {/* <div className="result">
                        <div className="result-left">
                          <div className="result-name">
                            {`${result.name}`}
                            {result.type === 'district' &&
                              `, ${STATE_NAMES[result.route]}`}
                          </div>
                        </div>
                        <div className="result-type">
                          <span>{[result.route]}</span>
                          <Icon.ArrowRightCircle size={14} />
                        </div>
                      </div> */}
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={index}
                      //window.location.href + 
                      to={"../../location/" + result.departure_LATITUDE + "/" + result.departure_LONGITUDE}
                      // target="_noblank"
                      className="essential-result"

                      onClick={()=>{
                        setSearchValue('');
                        setResults([]);
                      }}
                    >
                      <div className="result-top">
                        <div className="result-top-left">
                          <div className="result-name">{result.DEPARTURE_NAME_2}</div>
                          <div className="result-location">
                            {result.DEPARTURE_NAME_1}
                            {/* Lng: {result.departure_LONGITUDE} */}
                          </div>
                        </div>
                        <div className="result-category">
                          <div>
                            {/* {capitalize(locationSuggestions[result.category])} */}
                            {result.cluster_count} Commutes
                          </div>
                          {/* {result.departure_LATITUDE && <Icon.ExternalLink />} */}
                        </div>
                      </div>
                      {/* <div className="result-description">{result.DEPARTURE_NAME_1}</div> */}
                      {/* <div className="result-contacts">
                        {result.contact.split('\n').map((contact) => (
                          <div key={contact} className="result-contact">
                            <Icon.Phone />
                            <a href={`tel:${contact}`}>
                              {contact.replace(',', '')}
                            </a>
                          </div>
                        ))}
                      </div> */}
                    </Link>
                  );
                }
              })}
            </div>
          )}
    
          {expand && (
            <React.Fragment>
              <div className="expanded">
                <div className="expanded-left">
                  <h3>{t('Suggested Locations')}</h3>
                  <div className="suggestions">
                    {locationSuggestions.map((suggestion, index) => (
                      <div className="suggestion" key={index}>
                        <div>-</div>
                        <h4
                          onMouseDown={(event) => {
                            event.preventDefault();
                            setNativeValue(searchInput.current, suggestion);
                            searchInput.current.dispatchEvent(
                              new Event('input', {bubbles: true})
                            );
                          }}
                        >
                          {t(suggestion)}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="expanded-right">
                  {/* <h3>{t('Locations')}</h3>
                  <div className="suggestions">
                    {locationSuggestions.map((suggestion, index) => (
                      <div className="suggestion" key={index}>
                        <div>-</div>
                        <h4
                          onMouseDown={(event) => {
                            event.preventDefault();
                            setNativeValue(searchInput.current, suggestion);
                            searchInput.current.dispatchEvent(
                              new Event('input', {bubbles: true})
                            );
                          }}
                        >
                          {t(suggestion)}
                        </h4>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
    );
}

const isEqual = () => {
    return true;
};

export default React.memo(Search, isEqual);
