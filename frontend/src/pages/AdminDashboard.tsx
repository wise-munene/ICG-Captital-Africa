import { useEffect, useState } from "react"
import { getQuotes, updateQuoteStatus } from "../services/quoteAPI"

function AdminDashboard() {

  const [quotes, setQuotes] = useState<any[]>([])

  useEffect(() => {
    getQuotes().then(setQuotes)
  }, [])

  const handleStatusChange = async (id: string, status: string) => {
    await updateQuoteStatus(id, status)

    setQuotes(prev =>
      prev.map(q =>
        q.id === id ? { ...q, status } : q
      )
    )
  }

  return (

    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold mb-10">
        Quote Requests
      </h1>

      <div className="space-y-6">

        {quotes.map((q) => (

          <div key={q.id} className="border p-6 rounded-lg shadow-sm">

            <h2 className="font-semibold text-lg">
              {q.name} ({q.email})
            </h2>

            <p className="text-gray-600 mt-2">
              {q.message}
            </p>

            <div className="mt-4 flex items-center justify-between">

            {/* STATUS */}
            <span className={`px-3 py-1 rounded-full text-sm ${
                q.status === "pending"
                 ? "bg-yellow-100 text-yellow-700"
                 : q.status === "approved"
                 ? "bg-green-100 text-green-700"
                 : "bg-red-100 text-red-700"
          }`}>
                 {q.status}
            </span>

            {/* ACTIONS */}
            <div className="space-x-2">

             <button
                onClick={() => handleStatusChange(q.id, "approved")}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
             Approve
            </button>

            <button
             onClick={() => handleStatusChange(q.id, "rejected")}
             className="bg-red-600 text-white px-3 py-1 rounded text-sm"
         >
            Reject
            </button>

         </div>

        </div>

      </div>

        ))}

    </div>

    </div>
  )
}

export default AdminDashboard