import Icon from "@/components/ui/icon"

const partners = [
  { name: "СберБизнес", icon: "Landmark" },
  { name: "Тинькофф", icon: "CreditCard" },
  { name: "Альфа-Банк", icon: "Banknote" },
  { name: "ЮKassa", icon: "Wallet" },
  { name: "1С:Бухгалтерия", icon: "BookOpen" },
  { name: "Контур", icon: "Globe" },
  { name: "МойСклад", icon: "Package" },
]

export function PartnersSection() {
  return (
    <section className="px-4 py-10">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">Интегрируется с вашими сервисами</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <Icon name={partner.icon} className="h-4 w-4" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}