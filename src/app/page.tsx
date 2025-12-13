import ProjectDashboardShowcase from "@/components/ProjectDashboardShowcase";
import Signin from "@/components/Signin";
import dynamic from "next/dynamic";
const TechStack = dynamic(() => import("../components/TechStack"))
const Features = dynamic(() => import("../components/Features"))
const Feedback = dynamic(() => import("../components/Feedback"))
const Footer = dynamic(() => import("../components/Footer"))

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center min-h-screen w-screen max-w-[1200px] py-6">
      <Signin />
      {/* <Features />
      <div className="lg:py-28 md:py-28">
        <ProjectDashboardShowcase />
      </div>
      <Feedback />
      <TechStack />
      <Footer /> */}
    </main>
  );
}
