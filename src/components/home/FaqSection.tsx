import { Accordion } from "../ui/Accordion";
import { faqData } from "../../data/faqData";

export function FaqSection() {
  const items = faqData.map((faq) => ({
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      {/* Subtle ambient glow behind FAQ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-ambient-glow opacity-30 pointer-events-none rounded-full blur-3xl"></div>
      
      <div className="relative max-w-3xl mx-auto lumn-rise">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Frequently Asked <span className="text-brand-gradient">Questions</span>
          </h2>
          <p className="text-content-secondary text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="glass-card p-6 md:p-10">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
