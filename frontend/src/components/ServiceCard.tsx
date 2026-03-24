import {
  TrendingUp,
  Briefcase,
  BarChart,
  Users,
  Building2,
  Layers
} from "lucide-react"
import { useNavigate } from "react-router-dom"

type Service = {
  id: string
  title: string
  description: string
  category: string
}

type Props = {
  service: Service
}

// 🔥 ICON MAPPING (DIFFERENT ICONS)
const iconMap: any = {
  Finance: <TrendingUp size={26} />,
  Advisory: <Briefcase size={26} />,
  Strategy: <BarChart size={26} />,
  HR: <Users size={26} />,
  Investment: <Building2 size={26} />,
  Management: <Layers size={26} />,
}

function ServiceCard({ service }: Props) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/quote/${service.id}`)}
      className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer overflow-hidden"
    >

      {/* GRADIENT BACKGROUND HOVER */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition">
          {iconMap[service.category] || <TrendingUp size={26} />}
        </div>

        {/* CATEGORY */}
        <p className="text-xs uppercase tracking-wide text-blue-600 mb-1">
          {service.category}
        </p>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center text-blue-600 text-sm font-medium">
          Request Quote
          <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </div>

      </div>

    </div>
  )
}

export default ServiceCard