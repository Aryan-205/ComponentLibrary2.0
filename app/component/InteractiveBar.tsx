export default function InteractiveBar() {
  return (
    <div className="h-screen w-full flex-center">
      <div className='w-[40%] h-[60%] border grid grid-cols-[repeat(25,minmax(0,1fr))] grid-rows-10 pl-8 cursor-crosshair'>
        {Array.from({ length: 250 }).map((_, index) => (
          <div key={index} 
          className='flex w-full h-full group '>
            <div className="w-[2px] h-8 bg-black transition-all duration-0 group-hover:bg-gray-500 group-hover:delay-0 [transition-delay:0.5s] ease-in-out group-hover:rotate-90"/>
          </div>
        ))}
      </div>
    </div>
  )
}
