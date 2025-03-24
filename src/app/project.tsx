export default function Project() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Create New Project</h2>
  
          <form className="space-y-4">
            {/* Project Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Project Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
  
            {/* Project Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Project Description</label>
              <textarea
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project description"
                rows={4}
              ></textarea>
            </div>
  
            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Project
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  