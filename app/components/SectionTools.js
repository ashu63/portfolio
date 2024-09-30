import DevelopmentButtons from "./DevelopmentButtons"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

function SectionTools() {


  return (
    <div className=" bg-zinc-950 p-4">
        <div className="flex flex-col text-gray-300 gap-4 my-8">
            <h2 className="text-3xl sm:text-5xl">My Stack</h2>
            <p className="text-gray-500">Software and tools I use on a regular basis.</p>
        </div>

        <div className="text-gray-200 border border-gray-900 rounded-sm flex flex-col p-6 ">
            <h1 className="text-2xl">Development</h1>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

           <DevelopmentButtons title="Stripe" subTitle="Payment" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStripe.b8d8381a.png&w=64&q=75" />
           <DevelopmentButtons title="React" subTitle="Library" image="https://img.icons8.com/ios-glyphs/30/FFFFFF/react.png" />
           <DevelopmentButtons title="Next Js" subTitle="Framework" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNextjs.279c88e1.png&w=64&q=75" />
           <DevelopmentButtons title="Tailwind" subTitle="Styling" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftailwindcss.c8267f14.jpeg&w=64&q=75"/>
           <DevelopmentButtons title="VS Code" subTitle="Code Editor" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVscode.f76286bd.png&w=64&q=75" />
           <DevelopmentButtons title="Vercel" subTitle="Hosting" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVercel.bd13c53b.png&w=64&q=75" />
           <DevelopmentButtons title="Figma" subTitle="Design Tool" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFigmaImage.f602c5ce.png&w=64&q=75" />
           <DevelopmentButtons title="Github" subTitle="Collabration Work" image="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" />
           <DevelopmentButtons title="Chrome" subTitle="Browser" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChrome.a24be779.png&w=64&q=75"/>
           </div>

        </div>
        <div className="text-gray-200 my-10 border border-gray-900 rounded-sm flex flex-col p-6 ">
            <h1 className="text-2xl">Productivity</h1>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

           <DevelopmentButtons title="Apple Music" subTitle="Music" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FApplemusic.5707b76d.png&w=64&q=75" />
           <DevelopmentButtons title="Chat GPT" subTitle="Ai" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChatgpt.52f96ecc.png&w=64&q=75" />
           <DevelopmentButtons title="Apple Notes" subTitle="Notes" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNotes.4445df23.png&w=64&q=75" />
           <DevelopmentButtons title="Google Calender" subTitle="Calender" image="https://janmarshal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCalender.38917e0f.png&w=64&q=75"/>
           <DevelopmentButtons title="Notion" subTitle="Todo" image="https://img.icons8.com/ios-filled/50/FFFFFF/notion.png" />
           </div>

        </div>
    </div>
  )
}

export default SectionTools