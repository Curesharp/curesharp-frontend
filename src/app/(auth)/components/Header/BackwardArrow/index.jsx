import { PiArrowLeftBold } from 'react-icons/pi'

const BackwardArrow = () => {
  return (
    <div className='transition-all hover:bg-neutral-200 active:scale-[0.96] rounded-full cursor-pointer p-2 flex justify-center items-center'>
        <PiArrowLeftBold className='text-primary' size={25} />
    </div>
  )
}

export default BackwardArrow