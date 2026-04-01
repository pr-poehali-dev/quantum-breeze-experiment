import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-3 border border-[#2a2a2a]">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">2025</span>
        <span className="text-gray-300">Финансовая платформа нового поколения для бизнеса</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Финансы команды под полным контролем
      </h1>

      <p className="mb-8 max-w-xl text-gray-400 text-lg leading-relaxed">
        Управляйте платежами, счетами и командными расходами в одном окне — без таблиц, переписок и задержек.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white font-medium">
          Начать бесплатно <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800">
          <Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Смотреть демо
        </Button>
      </div>

      <p className="mt-4 text-xs text-gray-600">Без карты. Первые 14 дней бесплатно.</p>
    </section>
  )
}