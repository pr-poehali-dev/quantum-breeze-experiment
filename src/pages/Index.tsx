import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-[#1a1a1a] mt-4">
        <p className="mb-1">
          От первого платежа до полной автоматизации финансов —{" "}
          <span className="font-medium text-white">Flowpay растёт вместе с вашим бизнесом.</span>
        </p>
        <p className="text-gray-600 text-xs mt-3">© 2025 Flowpay. Все права защищены.</p>
      </footer>
    </main>
  )
}