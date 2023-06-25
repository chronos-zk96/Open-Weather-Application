import React from "react";
import { SearchIcon } from "../icons/search-icon";
import "../../styles/inputs.scss";

type SearchBarProps = {
  filterText: string;
  submitFilter: (e: React.FormEvent<HTMLFormElement>) => void;
  setFilterText: (prev: string) => void;
};

const SearchBar = ({
  filterText,
  submitFilter,
  setFilterText,
}: SearchBarProps) => {
  const onFilterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitFilter(e);
  };

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterText(e.target.value);
  };

  return (
    <div style={{ marginTop: "26px" }}>
      <form
        onSubmit={onFilterSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="text"
          className="input-field text"
          value={filterText}
          placeholder="Country"
          onChange={(e) => onFilterChange(e)}
        />
        <button type="submit" className="button-search">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
