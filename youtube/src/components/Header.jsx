import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../constants'
import { cacheSearch } from '../utils/searchSlice'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(state => state.search);
  const dispatcher = useDispatch();

  const handleToggleButton = () => {
    dispatcher(toggleMenu());
  }


  useEffect(() => {
    //Api call nrml
    //getSearchSuggestions()
    //Api call for every 200ms and clear old timers of each of api call when it renders for next.
    const timer = setTimeout(()=>{
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }else {
        getSearchSuggestions()
      }
    }, 200);
    //before 200ms another key strokes comes then previous Api call is destoyed.
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery]);


  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);

    //update search cache if not present in it.
    dispatcher(
      cacheSearch({
      searchQuery: json[1]
    }));
  }

  /*
  * - key pressed 
  * useEffect() calls and renders load the page.
  * start timer for 200 ms.
  * 
  * - next key is pressed
  * previous timer destroyed.
  * useEffect calls and page rerenders .
  * timer starts.
  * 
  */
  return (
    <div className='grid grid-flow-col m-2 p-3 shadow-lg'>
      <div className='flex col-span-1 '>
        <img className='h-8 p-2 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/2516/2516745.png'
          onClick={() => handleToggleButton()} />
        <img className='h-8 p-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png' />
      </div>

      <div className='col-span-8'>
        <div>
          <input className='text-sm ml-24 w-1/2 border border-gray-400 px-10 rounded-l-full py-1'
            placeholder='Search' type="text" name="search" id="searchbar"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}

          />
          <button className=' border border-gray-400 rounded-r-full p-[3px]'>🔍</button>
        </div>
        {showSuggestions && suggestions.length > 0 &&
          <div className='fixed bg-white ml-24 py-2 m-1 rounded-md border border-gray-400 w-[30rem] px-2'>
            <ul>
              {
                suggestions.map((s) => <li className='cursor-default   text-sm py-1 shadow-sm hover:bg-gray-100 '>🔍 {s}</li>)
              }

            </ul>
          </div>}
      </div>


      <div className='col-span-1'>
        <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Header profile" />
      </div>

    </div>
  )
}

export default Header