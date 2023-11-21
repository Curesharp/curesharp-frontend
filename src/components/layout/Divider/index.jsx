import React from 'react'

const Divider = ({ image, children }) => {
  return (
    <div className="absolute h-[400px] top-0 right-0 left-0">
      <div
        // style={{
        //   backgroundImage: `url(${image})`,
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        // }}
        className="relative flex justify-center bg-[#055C3A] skew-y-[7px] origin-top-right w-full h-full overflow-hidden"
      >
        {children}
      </div>
    </div>
  )
}

export default Divider
