import React from 'react'

const AppointmentForm = ({onClose}) => {
    const [text, setText] = React.useState('')
    const [dueDate, setDate] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text, dueDate)
    }
  return (
    <div>
          <div className="flex items-center justify-center max-h-[100%] m-1 rounded">
      {/* <div className="w-full max-w-xl mt-3">
        <form className="bg-zinc-800 shadow-md rounded px-2 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="todo"
            >
              Todo
            </label>
            <input
              className="shadow border border-gray-700 rounded w-full py-2 px-3 bg-zinc-900 text-gray-400"
              id="todo"
              type="text"
              placeholder="Todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="dueDate"
            >
              Due Date
            </label>
            <input
              className="shadow border border-gray-700 rounded w-full py-2 px-3 bg-zinc-900 text-gray-400"
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div> */}
      <h6 className='text-center text-gray-400 text-xl'>Sorry,Not available </h6>
    </div>
    </div>
  )
}

export default AppointmentForm