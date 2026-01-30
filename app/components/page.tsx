import Link from "next/link";

export default function page() {

  const data = [
    {
      link:"button",
      name:"Button"
    },
    {
      link:"navbar",
      name:"Navbar"
    },
    {
      link:"card",
      name:"Cards"
    },
    {
      link:"transition",
      name:"Transitions"
    },
    {
      link:"carousel",
      name:"Carousels"
    },
    {
      link:"adfga",
      name:"Button"
    },
  ]

  return (
    <div className="flex justify-center items-center w-full h-screen bg-neutral-100">
      <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 gap-4 pt-16 px-8">
        {
          data.map((i,index)=>(
            <ComponentLink key={index} link={i.link} name={i.name}/>
          ))
        }
      </div>
    </div>
  )
}

const ComponentLink = ({link,name}:{link:string,name:string}) => {
  return (
    <Link href={`/components/${link}`} className="h-full w-full rounded-2xl shadow-lg border border-neutral-200 flex-center text-2xl text-black font-light">{name}</Link>
  )
}
