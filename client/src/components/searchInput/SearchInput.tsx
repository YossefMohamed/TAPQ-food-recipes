import React, { ChangeEvent, FormEvent } from "react";

export const SearchInput = ({
  onSubmitSearchForm,
  searchValue,
  onChangeSearchInput,
}: {
  onSubmitSearchForm: (e: FormEvent<HTMLFormElement>) => void;
  searchValue: string;
  onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="search">
      <form onSubmit={onSubmitSearchForm}>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-l-2 border border-gray-300 focus:ring-main focus:border-main outline-none"
              placeholder="Search"
              value={searchValue}
              onChange={onChangeSearchInput}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-main rounded-r-lg border border-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
