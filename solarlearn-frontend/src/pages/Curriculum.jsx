import { useAuth } from "../context/AuthContext";

function Curriculum() {
  const { user } = useAuth();

  if (user.role !== "Teacher") {
    return (
      <p className="p-6 text-red-600">Access denied: Teacher-only area.</p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Curriculum</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Subject / Topic Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Learning Objectives or Content"
          className="w-full p-2 border rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Curriculum
        </button>
      </form>
    </div>
  );
}

export default Curriculum;
