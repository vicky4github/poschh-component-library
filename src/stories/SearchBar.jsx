import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

export function SearchBar({ isRequired, isLoading, label, color }) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        selectorIcon={<FaSearch />}
        disableSelectorIconRotation
        isRequired={isRequired}
        loading={isLoading}
        label={label}
        color={color}
      >
      </Autocomplete>
    </div>
  );
}
