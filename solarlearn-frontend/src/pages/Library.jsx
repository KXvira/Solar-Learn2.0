import { useAuth } from "../context/AuthContext";

const dummyResources = [
  { title: "Math Form 1 Notes", type: "PDF", size: "2.3MB" },
  { title: "Physics Experiments Video", type: "MP4", size: "50MB" },
  { title: "Kiswahili Past Papers", type: "ZIP", size: "1.2MB" },
];

function Library() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Offline Library</h1>
      <p className="mb-2 text-gray-600">
        Welcome, {user.username}. Browse available materials:
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyResources.map((res, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{res.title}</h2>
            <p className="text-sm text-gray-500">Type: {res.type}</p>
            <p className="text-sm text-gray-500">Size: {res.size}</p>
            <button className="mt-2 text-blue-600 hover:underline text-sm">
              Open / Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
