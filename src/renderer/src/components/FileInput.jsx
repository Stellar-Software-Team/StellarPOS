import React from 'react'

function FileInput() {
  return (
    <>
      <label>
        <div class="mb-5 w-full h-11 rounded-3xl border border-gray-300 justify-between items-center inline-flex">
          <h2 class="text-gray-900 text-sm font-normal leading-snug pl-4">No file chosen</h2>
          <input type="file" hidden />
          <div
            class="flex w-28 h-11 px-2 flex-col bg-black rounded-r-3xl shadow text-white text-xs font-semibold leading-4 
                                                items-center justify-center cursor-pointer focus:outline-none"
          >
            Choose File{' '}
          </div>
        </div>
      </label>
    </>
  )
}

export default FileInput
