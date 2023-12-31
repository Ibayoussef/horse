import IntroSection from "../components/IntroSection";
import Container from "../components/Container";
import BannerSection from "../components/BannerSection";
import BenefitsSection from "../components/BenefitsSection";
import JoinSection from "../components/JoinSection";
function Home() {
  return (
    <Container>
      <IntroSection />
      <BannerSection />
      <BenefitsSection />
      <JoinSection />
    </Container>
  );
}

export default Home;
