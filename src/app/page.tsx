import ProjectDashboardShowcase from "@/components/ProjectDashboardShowcase";
import Signin from "@/components/Signin";
import dynamic from "next/dynamic";
const TechStack = dynamic(() => import("../components/TechStack"))
const Features = dynamic(() => import("../components/Features"))
const Feedback = dynamic(() => import("../components/Feedback"))
const Footer = dynamic(() => import("../components/Footer"))

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center min-h-screen">
      <Signin />
      <Features />
      <div className="lg:py-28 md:py-28">
        <ProjectDashboardShowcase />
      </div>
      <Feedback />
      <TechStack />
      <Footer />
    </main>
  );
}
