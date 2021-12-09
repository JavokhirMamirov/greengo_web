import React, {useState} from 'react'

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const PlacesAutocomplete = ({onChange, placeholder, value2}) => {

    const [listOpen, setListOpen] = useState(false)
  const {
    ready,
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
    if(data.length > 0){
        setListOpen(true)
    }
    onChange(e.target.value)
  };

  const handleSelect = (val) => {
    setValue(val, false);
    onChange(val)
    setListOpen(false)

  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo" style={{float:'left'}}>
      <ComboboxInput value={value2} onChange={handleInput} placeholder={placeholder} disabled={!ready} style={styleInput} />
      <ComboboxPopover>
        <ComboboxList>
          {listOpen === true &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} style={styleOption} value={description}  />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};


const styleInput = {
    border: "1px solid #8a8a8a",
    height: "36px",
    fontSize: "14px",
    outline: "none",
    padding: "0px 2px 0px 10px",
    float: "left",
    margin:"0px 20px 10px 0px"
}

const  styleOption = {
    color:"#005951",
}


export default PlacesAutocomplete;