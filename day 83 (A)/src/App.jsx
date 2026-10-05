import { useCounterContext } from './utility/CounterContext'

function App() {

  const {count,setCount,text,setText}=useCounterContext()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">

      {/* Counter Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-5xl font-bold mb-6 text-blue-600">{count}</h1>

        <div className="flex gap-4">

          <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={()=>{ setCount(count+1) }}>
            Increment
          </button>

          <button 
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={()=>{ setCount(0) }}>
            Reset
          </button>

          <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={()=>{ setCount(count-1) }}>
            Decrement
          </button>

        </div>
      </div>


      {/* Input Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">

        <input
          className="border border-gray-300 px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>{
            setText(e.target.value)
          }}
          type="text"
          value={text}
          placeholder="Type something..."
        />

        <h4 className="mt-4 text-lg font-semibold text-gray-700">
          {text}
        </h4>

      </div>

    </div>
  )
}

export default App