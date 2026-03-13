type Service = {
  id: string
  title: string
  description: string
  category: string
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">

      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {service.description}
      </p>

      <span className="text-xs text-blue-600 font-medium">
        {service.category}
      </span>

    </div>
  )
}

export default ServiceCard