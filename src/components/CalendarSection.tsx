"use client";

import { InlineWidget } from "react-calendly";

const CalendarSection = () => {
  return (
    <section className="pt-16 pb-8 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
          Agenda tu <span className="text-[#00E676]">Asesoría Gratuita</span>
        </h2>
        <p className="text-white/80 mb-12 text-lg">
          Selecciona el horario que mejor se adapte a ti para conversar sobre tu proyecto.
        </p>
        <div className="w-full h-[750px] rounded-xl overflow-hidden border-2 border-[#00E676]/20 shadow-[0_0_20px_rgba(0,230,118,0.1)] hover:shadow-[0_0_40px_rgba(0,230,118,0.2)] transition-all duration-300">
          <InlineWidget
            url="https://calendly.com/hola-appsmartt/30min"
            styles={{
              height: "100%",
              width: "100%",
            }}
            pageSettings={{
              backgroundColor: "1A1A1A",
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: "00E676",
              textColor: "FFFFFF",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
