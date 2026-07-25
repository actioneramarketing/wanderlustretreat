import { Accommodations } from "@/components/sections/Accommodations";
import { Experiences } from "@/components/sections/Experiences";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { FourDimensions } from "@/components/sections/FourDimensions";
import { Hero } from "@/components/sections/Hero";
import { Host } from "@/components/sections/Host";
import { Inclusions } from "@/components/sections/Inclusions";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Investment } from "@/components/sections/Investment";
import { Leaders } from "@/components/sections/Leaders";
import { Opening } from "@/components/sections/Opening";
import { ReturnHome } from "@/components/sections/ReturnHome";
import { SignatureIntro } from "@/components/sections/SignatureIntro";
import { Timeline } from "@/components/sections/Timeline";
import { Villa } from "@/components/sections/Villa";
import { WhoFor } from "@/components/sections/WhoFor";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Opening />
      <FourDimensions />
      <SignatureIntro />
      <Experiences />
      <Timeline />
      <Villa />
      <Accommodations />
      <Leaders />
      <Host />
      <Inclusions />
      <Investment />
      <WhoFor />
      <ReturnHome />
      <FAQ />
      <InquiryForm />
      <FinalCta />
    </>
  );
}
