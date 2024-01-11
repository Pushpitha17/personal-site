export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex justify-center items-center space-x-1 text-sm text-gray-700'>
        <img src='/static/Images/homeloading.gif' alt='' className='' />
      </div>
    </div>
  )
}
