"use client"
import Link from "next/link";
import Particles from "./components/Particles";
import Section2 from "./components/Section2";
import SectionTools from "./components/SectionTools";


const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div>
    <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-4 animate-fade-in ">
        <ul className="flex items-center justify-center gap-4 -mt-20">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>


      {/* <img className="z-10 h-32 w-32 object-cover rounded-full" src="https://instagram.fixc4-1.fna.fbcdn.net/v/t39.30808-6/435885924_18340850785108127_2127391363868128533_n.jpg?stp=cp6_dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTMuaGRyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fixc4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5qW9woeaedcQ7kNvgE9RxMq&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzM0NjkwMzA4ODEyMzIzNjEyNw%3D%3D.3-ccb7-5&oh=00_AYAulVMqb-FbfkO657Oo-XvkWUdpsGFZ1quTBWqgYWOEwg&oe=66DAA2DE&_nc_sid=8f1549" alt="" /> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />
      

      <h1 className="py-3.5 px-0.5 z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        SAWAN 
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-4 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 max-w-[90vw] md:max-w-[50vw] leading-6 ">
      
        I'm a frontend web developer passionate about crafting impressive and modern websites. I specialize in creating visually stunning and user-friendly web interfaces that elevate the digital experience, ensuring each project stands out with both design and functionality.
        </h2>
      </div>
    </section>

    <section className="">
    {/* <Particles
        className="absolute top-[100vh] inset-0 -z-10 animate-fade-in"
        quantity={300}
      /> */}
          <Section2/>
          <SectionTools />

    </section>

    </div>
  );

}
