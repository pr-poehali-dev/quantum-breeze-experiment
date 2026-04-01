import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <FlowpayLogo />
        <span className="text-lg font-semibold text-white tracking-tight">
          Flowpay<sup className="text-xs text-violet-400">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Платформа
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Решения <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Документация
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Попробовать бесплатно
      </Button>
    </header>
  )
}

function FlowpayLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="8" fill="#1a1a2e" />
      <path d="M7 14 C7 10, 11 7, 14 7 C17 7, 21 10, 21 14" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M7 14 C7 18, 11 21, 14 21 C17 21, 21 18, 21 14" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <circle cx="14" cy="14" r="2.5" fill="#8B5CF6" />
    </svg>
  )
}