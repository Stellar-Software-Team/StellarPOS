import React from 'react'

function CustomModal({ open, onClose, children }) {
  if (!open) return null
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  )
}

export default CustomModal
