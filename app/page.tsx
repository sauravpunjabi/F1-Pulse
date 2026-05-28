import PageClient from '@/components/ui/PageClient'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Calendar from '@/components/sections/Calendar'
import Standings from '@/components/sections/Standings'
import Teams from '@/components/sections/Teams'
import Drivers from '@/components/sections/Drivers'
import History from '@/components/sections/History'
import Compare from '@/components/sections/Compare'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/ui/Footer'
import {
  getDriverStandings,
  getConstructorStandings,
  getRaceSchedule,
  getLastRaceResult,
} from '@/lib/api'

export default async function HomePage() {
  const [drivers, constructors, schedule, lastRace] = await Promise.all([
    getDriverStandings(),
    getConstructorStandings(),
    getRaceSchedule(),
    getLastRaceResult(),
  ])

  return (
    <PageClient>
      <Navbar />
      <main>
        <Hero nextRace={schedule.find(r => r.status === 'next') ?? null} lastRace={lastRace} />
        <Calendar races={schedule} />
        <Standings drivers={drivers} constructors={constructors} />
        <Teams drivers={drivers} constructors={constructors} />
        <Drivers />
        <History />
        <Compare />
        <CTA />
      </main>
      <Footer />
    </PageClient>
  )
}
