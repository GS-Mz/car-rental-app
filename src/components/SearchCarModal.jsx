import React, { useRef, useState, forwardRef } from "react";

const SearchCarModal = ({ isOpen, setIsOpen }) => {


  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <button onClick={setIsOpen(false)}>
                Close
            </button>
        </div>
      )}
    </>
  );
};

export default SearchCarModal;
