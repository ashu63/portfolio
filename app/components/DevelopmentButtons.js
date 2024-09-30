
function DevelopmentButtons({title, subTitle, image}) {
  return (
      <div className="my-3">
                <div className="flex gap-5 items-center hover:bg-gray-800/80 min-w-xl p-2 rounded-md cursor-pointer transition duration-200 pl-2 ">
                    <img className="h-10" src={image} alt="" />
                    <div>
                        <h3 className="text-xl tracking-wide">{title}</h3>
                        <p className="text-gray-500 text-sm">{subTitle}</p>
                    </div>
                </div>
                </div>
  )
}

export default DevelopmentButtons