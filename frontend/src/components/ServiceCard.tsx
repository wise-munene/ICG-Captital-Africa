import { TrendingUp } from "lucide-react"

type Service = {
  id: string
  title: string
  description: string
  category: string
}

type Props = {
  service: Service
}

function ServiceCard({ service }: Props) {

  return (
    <div className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden">

      {/* TOP ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition"></div>

      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
        <TrendingUp size={28} />
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>

      {/* LEARN MORE */}
      <div className="mt-6 text-blue-600 font-medium group-hover:underline">
        Learn more →
      </div>

    </div>
  )
}

export default ServiceCard