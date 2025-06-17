import { useAuth } from "../context/AuthContext";

function Quizzes() {
  const { user } = useAuth();

  if (user.role === "Teacher") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Create a Quiz</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Quiz Title"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Question 1"
            className="w-full p-2 border rounded h-20"
          />
          <textarea
            placeholder="Question 2"
            className="w-full p-2 border rounded h-20"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Quiz
          </button>
        </form>
      </div>
    );
  }

  if (user.role === "Student") {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Take a Quiz</h1>
        <p className="text-gray-600 mb-4">Quiz: General Knowledge</p>
        <div className="space-y-4">
          <div>
            <p>1. What is the capital of Kenya?</p>
            <input className="border p-1 w-full rounded" />
          </div>
          <div>
            <p>2. 2 + 3 = ?</p>
            <input className="border p-1 w-full rounded" />
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Submit Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <p className="p-6 text-gray-600">
      No quiz interface available for your role.
    </p>
  );
}

export default Quizzes;
