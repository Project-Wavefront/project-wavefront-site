import Beams from "@/components/blocks/Beams";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Mark1RDRE() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden bg-black text-white">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#bfbfbf"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="animate-fade-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">MARK I</h1>
          <p className="mx-auto text-xl md:text-2xl text-slate-300 max-w-4xl leading-relaxed">
            Mark I is Project Wavefront&apos;s inaugural design and the
            world&apos;s first long-duration rotating detonation rocket engine
            designed, built, and operated by students. As a technology
            demonstrator, it aims to enable future engine and vehicle
            development.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">2 kN</span>
              <p>Thrust</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">30 sec</span>
              <p>Burn Time</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">0.95 MW</span>
              <p>Water Cooling</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">Methagox</span>
              <p>Fuel/Oxidizer</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">255 sec</span>
              <p>Specific Impulse (sea-level)</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">6.5 cm</span>
              <p>Chamber Diameter</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">0.82 kg/s</span>
              <p>Propellant Flow Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">13.5 kHz</span>
              <p>Frequency</p>
            </div>
          </div>
        </div>
      </section>

      {/** Overview Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/r1.1.png"
          alt="Overview Render"
          width={1000}
          height={700}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">OVERVIEW</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Mark 1 is a cutting-edge rotating detonation rocket engine
            engineered by Project Wavefront. Designed to reach thermal
            equilibrium for long-duration hotfires, it pioneers detonation-wave
            combustion in a compact, reusable, reignitable platform.
          </p>
        </div>
      </section>

      {/** Key Specs Section */}
      <section className="grid md:grid-cols-2 gap-18 py-24 px-8 md:px-16 items-center bg-neutral-900 min-h-screen">
        <div>
          <h2 className="text-4xl font-bold mb-8">KEY SPECS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { label: "Target Thrust", value: "2 kN" },
              { label: "Isp (sea-level)", value: "255 sec" },
              { label: "Burn Time", value: "30 sec" },
              { label: "Propellant MFR", value: "0.82 kg/s" },
              { label: "Water Cooling", value: "0.95 MW" },
              { label: "Frequency", value: "13.5 kHz" },
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-neutral-800 p-6 rounded-xl text-center shadow-md"
              >
                <div className="text-2xl font-bold mb-2">{spec.value}</div>
                <div className="text-slate-400">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/renders/r2.1.png"
          alt="Key Specs Render"
          width={1000}
          height={700}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/** Architecture Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-black min-h-screen">
        <Image
          src="/renders/r4.1.png"
          alt="Front Render"
          width={800}
          height={700}
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">ARCHITECTURE</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Featuring an annular combustion chamber with integrated cooling
            channels, the Mark 1&apos;s architecture optimizes detonation
            propagation, heat transfer, and engine efficiency. The engine is
            being concurrently developed with an advanced electronic
            control/data collection suite and a purpose-built test stand.
          </p>
        </div>
      </section>

      {/** Detonation Innovation Section */}
      <section className="grid md:grid-cols-2 gap-12 py-24 px-8 md:px-16 items-center bg-neutral-900 min-h-screen">
        <div>
          <h2 className="text-4xl font-bold mb-4">DETONATION INNOVATION</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            The RDRE leverages continuous detonation waves to improve
            thermodynamic efficiency beyond conventional deflagration-based
            engines. This breakthrough reduces propellant consumption while
            achieving higher chamber pressures and stable thrust output.
          </p>
        </div>
        <Image
          src="/renders/r3.1.png"
          alt="Half Render"
          width={1000}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/** Testing Section */}
      <section className="py-24 px-8 md:px-16 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            MARK I TESTING & ROADMAP
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            The Mark I demonstrator is scheduled for hot-fire testing on
            Wavefront&apos;s custom-built test stand on November 5, 2026, with
            test data analysis beginning December 1. Future iterations focus on
            full-duration burn stability, cryogenic fuel integration, and
            eventual flight-qualified units for launch vehicle prototypes.
          </p>

          <Timeline
            startDate="2025-06"
            endDate="2026-12"
            milestones={[
              {
                date: "2025-06-01",
                title: "Project Kickoff",
                description:
                  "Josh and Sam found Project Wavefront with 5 engineers. Technical requirements and a project roadmap are established, with initial design work beginning.",
                completed: true,
              },
              {
                date: "2025-06-24",
                title: "Nonprofit Corporation Registration",
                description:
                  "Project Wavefront is officially registered as a nonprofit corporation in the state of Pennsylvania.",
                completed: true,
              },
              {
                date: "2025-08-11",
                title: "Converge CFD Sponsors Wavefront",
                description:
                  "Convergent Science becomes Project Wavefront's first sponsor!",
                completed: true,
              },
              {
                date: "2025-08-17",
                title: "Conceptual Design Complete",
                description:
                  "The team consults one of NASA's RDRE leads. Working on nights and weekends over the summer, the founding team finishes Mark I's conceptual design.",
                completed: true,
              },
              {
                date: "2025-09-15",
                title: "Team Expansion",
                description:
                  "Our team expands to 12 engineers to support the growing design workload. Control systems and test stand teams are established.",
                completed: true,
              },
              {
                date: "2025-10-15",
                title: "ANSYS Sponsors Wavefront",
                description:
                  "ANSYS becomes Project Wavefront's second sponsor!",
                completed: true,
              },
              {
                date: "2025-10-23",
                title: "Wavefront Meets with RDRE Community",
                description:
                  "Wavefront engineers meet with other rotating detonation student and research teams from Georgia Tech, Purdue, Embry-Riddle, UWashington, Aris Space (ETH Zurich), and more.",
                completed: true,
              },
              {
                date: "2025-11-03",
                title: "501c3 Status Approval",
                description:
                  "Project Wavefront is approved as a 509a2 category 501c3 nonprofit tax-exempt organization!",
                completed: true,
              },
              {
                date: "2025-11-22",
                title: "Preliminary Design Complete",
                description:
                  "The team completes preliminary rounds of design and analysis. Thermal, fluids, and structural simulation results will be used to inform final design changes.",
                completed: true,
              },
              {
                date: "2025-12-10",
                title: "NASA Check-In",
                description:
                  "Following delays from the government shutdown, the team tags up with a NASA RDRE lead for a final check-in before the Critical Design Review.",
                completed: true,
              },
              {
                date: "2025-12-15",
                title: "Design Freeze",
                description:
                  "The team finalizes the engine's layout and design, and begins preparing for their Critical Design Review.",
                completed: true,
              },
              {
                date: "2026-01-20",
                title: "Mark I Demonstrator is Printed",
                description:
                  "The team prints a heatsink-cooled version of Mark I to verify combustion geometry and test systems.",
                completed: true,
              },
              {
                date: "2026-01-31",
                title: "Critical Design Review",
                description:
                  "The team presents their design and analysis to a panel of engineers and experts from industry and academia to gather feedback and validate key systems.",
                completed: true,
              },
              {
                date: "2026-02-17",
                title: "Cooling Network V2 Design",
                description:
                  "The cooling network is redesigned for a ~30% efficiency improvement by utilizing a creative cooling concept.",
                completed: true,
              },
              {
                date: "2026-04-01",
                title: "Test Stand and Control Systems Build Begins",
                description:
                  "Building of the custom test stand and electronic control/data management system begins to move towards subcomponent testing.",
                completed: true,
              },
              {
                date: "2026-05-10",
                title: "Summer Break Begins",
                description:
                  "School summer break begins and Project Wavefront members spread out across the aerospace industry to complete internships.",
                completed: true,
              },
              {
                date: "2026-08-23",
                title: "Summer Break Ends",
                description:
                  "Project Wavefront members return from their summer internships, and normal Wavefront operations resume.",
                completed: true,
              },
              {
                date: "2026-11-05",
                title: "Mark I-D Hotfire",
                description:
                  "Hotfire testing of the Mark I heatsink demonstrator verifies all components and subsystems.",
                completed: false,
              },
              {
                date: "2026-12-01",
                title: "Mark I-D Data Analysis",
                description:
                  "The team analyzes data from the Mark I-D hotfire.",
                completed: false,
              },
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
