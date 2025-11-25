"use client";

import { InlineWidget } from "react-calendly";

const CalendarSection = () => {
  return (
    <section className="pt-8 pb-8 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto text-center max-w-4xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
          Agenda tu <span className="text-[#00E676]">Asesoría Gratuita</span>
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Selecciona el horario que mejor se adapte a ti para conversar sobre tu proyecto.
        </p>
        <div className="w-full h-[750px]">
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
