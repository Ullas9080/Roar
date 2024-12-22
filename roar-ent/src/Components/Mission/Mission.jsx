
const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 border-b-2 background">
      {/* Mission */}
      <div className="w-full mt-1  border-r-2 mb-4 background">
        <h1 className="text-blue-300 text-4xl font-robo text-center mb-5 underline">Misson</h1>
        <p className="flex justify-center items-center text-center text-lg text-zinc-300 mt-3 mb-7 lg:mb-2">‘’To bring the big picture into focus while making sure every detail
        is just right.’’</p>
      </div>

{/* Vission */}
<div className="w-full mt-1 mb-4 background">
  <h1 className="text-blue-300 text-4xl font-robo text-center mb-5 underline">Vission</h1>
  <p className="flex justify-center items-center text-center text-lg text-zinc-300 mt-3 mb-7 lg:mb-2">‘’Our vision is a future where success has a story and we’re theAuthor of the story.’’</p>
</div>
    </div>
  )
}

export default Mission
