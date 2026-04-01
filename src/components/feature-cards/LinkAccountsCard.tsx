import { Users, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const members = [
  { name: "Алексей Петров", role: "Финансовый директор", code: "CFO", image: "/professional-man-portrait.png" },
  { name: "Мария Иванова", role: "Главный бухгалтер", code: "ACC", image: "/professional-woman-portrait.png" },
  { name: "Елена Смирнова", role: "Менеджер по закупкам", code: "PUR", initials: "ЕС", color: "bg-teal-600" },
  { name: "Дмитрий Козлов", role: "Руководитель отдела", code: "MGR", initials: "ДК", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Users className="h-5 w-5 text-violet-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Вся команда в одном месте</h3>
      <p className="mb-4 text-sm text-gray-400">Добавляйте сотрудников и распределяйте финансовые роли без лишней бюрократии</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors">
        Как это работает <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {member.image ? (
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                ) : null}
                <AvatarFallback className={`${member.color || "bg-gray-600"} text-white text-xs`}>
                  {member.initials ||
                    member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-violet-500/70 bg-violet-500/10 rounded px-1.5 py-0.5">{member.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Добавить сотрудника
        </Button>
      </div>
    </div>
  )
}