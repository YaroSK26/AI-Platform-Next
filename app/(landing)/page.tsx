import LandingContent from "@/components/LandingContent";
import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";

const LandingPage = () => {

  return (
    <div className='h-full'>
      <LandingNavbar></LandingNavbar>
      <LandingHero></LandingHero>
      <LandingContent></LandingContent>
    </div>
  );
}

export default LandingPage
