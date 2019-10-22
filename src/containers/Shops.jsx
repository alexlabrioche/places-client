import React, { useContext, useState, useRef, useCallback, useEffect } from 'react';
import { Box } from 'grommet';
import { UserContext } from '../context/userContext';
import useYelpApiResult from '../hooks/useYelpApiResult';
import SearchComponent from '../components/SearchBar/SearchBarComponent';
import ModalSelectedLayer from '../components/Layers/ModalSelectedLayer';

function ShopContainer() {
  const [searchValue, setSearchValue] = useState('');
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showSelectedLayer, setShowSelectedLayer] = useState(false);
  const { currentUser, addComment } = useContext(UserContext);
  const { queryYelpApi, yelpApiresult, resetYelpApiResult } = useYelpApiResult();
  console.info('yelpApiresult', yelpApiresult);
  console.info('searchValue', searchValue);

  const boxRef = useRef();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, [forceUpdate]);

  const handleSelect = (event) => {
    resetYelpApiResult();
    setSearchValue(event.suggestion.value.name);
    setSelectedValue(event.suggestion.value);
    setShowSelectedLayer(true);
  };

  const handleChange = (event) => {
    const { value: newValue } = event.target;
    setSearchValue(newValue);
    if (newValue.length < 3) {
      resetYelpApiResult();
    } else {
      queryYelpApi(newValue);
    }
  };
  const handleNewComment = (comment) => {
    // setShowSelectedLayer(false);
    // addComment(currentUser.user.id, {
    //   text: comment,
    //   store: selectedValue.id,
    // });
  };

  return (
    <Box pad="medium">
      <SearchComponent
        result={yelpApiresult}
        boxRef={boxRef}
        onSelect={handleSelect}
        handleChange={handleChange}
        searchValue={searchValue}
        suggestionOpen={suggestionOpen}
        setSuggestionOpen={setSuggestionOpen}
      />
      {showSelectedLayer && (
        <ModalSelectedLayer
          {...selectedValue}
          setShowLayer={setShowSelectedLayer}
          addComment={handleNewComment}
        />
      )}
    </Box>
  );
}

export default ShopContainer;
