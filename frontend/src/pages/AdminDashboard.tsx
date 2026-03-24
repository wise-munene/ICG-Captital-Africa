import { useEffect, useState } from "react"
import { getQuotes, updateQuoteStatus } from "../services/quoteAPI"

function AdminDashboard() {

  const [quotes, setQuotes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getQuotes()
      .then((data) => {
        setQuotes(data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateQuoteStatus(id, status)

      setQuotes((prev) =>
        prev.map((q) =>
          q.id === id ? { ...q, status } : q
        )
      )
    } catch (err) {
      console.error(err)
      alert("Failed to update status")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage quote requests and client inquiries
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-gray-500">Loading quotes...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && quotes.length === 0 && (
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <p className="text-gray-500">
              No quote requests yet.
            </p>
          </div>
        )}

        {/* TABLE */}
        {!loading && quotes.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-hidden">

            <table className="w-full text-left">

              {/* HEAD */}
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="p-4">Client</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>

                {quotes.map((q) => (
                  <tr
                    key={q.id}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    {/* CLIENT */}
                    <td className="p-4">
                      <div className="font-medium">
                        {q.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {q.email}
                      </div>
                    </td>

                    {/* MESSAGE */}
                    <td className="p-4 text-gray-600">
                      {q.message}
                    </td>

                    {/* STATUS */}
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        q.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : q.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {q.status}
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="p-4 space-x-2">

                      <button
                        onClick={() => handleStatusChange(q.id, "approved")}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleStatusChange(q.id, "rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  )
}

export default AdminDashboard