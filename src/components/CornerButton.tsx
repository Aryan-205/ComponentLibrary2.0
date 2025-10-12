export default function CornerButton(){
  return (
    <>
    <div className="h-full w-full flex justify-center items-center bg-white gap-8 border rounded-xl">
      <button className="py-2 px-4 bg-blue-500 text-white hover:bg-neutral-800 hover:border-neutral-100 transition-colors duration-200 relative group">Launch
        <span className="absolute -top-[2px] -left-[8px] corner-dot launch-dot-left-top" />
        <span className="absolute -bottom-[2px] -left-[8px] corner-dot launch-dot-left-bottom" />
        <span className="absolute -top-[2px] -right-[8px] corner-dot launch-dot-right-top" />
        <span className="absolute -bottom-[2px] -right-[8px] corner-dot launch-dot-right-bottom" />

        <span className="absolute -top-[8px] -left-[2px] corner-dot-v  launch-dot-left-top-v" />
        <span className="absolute -bottom-[8px] -left-[2px] corner-dot-v  launch-dot-left-bottom-v" />
        <span className="absolute -top-[8px] -right-[2px] corner-dot-v  launch-dot-right-top-v" />
        <span className="absolute -bottom-[8px] -right-[2px] corner-dot-v  launch-dot-right-bottom-v" />
      </button>
      <button className="py-2 px-4 border border-neutral-300 hover:border-neutral-800 transition-colors duration-200 relative group">Start Building
        <span className="absolute -top-[2px] -left-[8px] corner-dot2 launch-dot-left-top" />
        <span className="absolute -bottom-[2px] -left-[8px] corner-dot2 launch-dot-left-bottom" />
        <span className="absolute -top-[2px] -right-[8px] corner-dot2 launch-dot-right-top" />
        <span className="absolute -bottom-[2px] -right-[8px] corner-dot2 launch-dot-right-bottom" />
        
        <span className="absolute -top-[8px] -left-[2px] corner-dot-v2  launch-dot-left-top-v" />
        <span className="absolute -bottom-[8px] -left-[2px] corner-dot-v2  launch-dot-left-bottom-v" />
        <span className="absolute -top-[8px] -right-[2px] corner-dot-v2  launch-dot-right-top-v" />
        <span className="absolute -bottom-[8px] -right-[2px] corner-dot-v2  launch-dot-right-bottom-v" />
      </button>
    </div>
    </>
  )
}