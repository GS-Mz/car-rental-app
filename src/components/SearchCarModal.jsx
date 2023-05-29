import React, { useRef, useState, forwardRef } from "react";

const SearchCarModal = ({ isOpen, setIsOpen }) => {


  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-900 bg-opacity-50">
          <div className=" w-[30rem]  bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="modal-content">
            <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                  >
                    Cerrar
                  </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default SearchCarModal;
