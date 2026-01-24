import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is Puerto Vallarta safe for tourists in 2026?",
    answer: "Yes, Puerto Vallarta remains one of Mexico's safest tourist destinations in 2026. The city has a strong tourism-based economy, which means local authorities prioritize visitor safety. You'll notice a heavy presence of tourist police throughout popular areas, and the overall crime rate affecting tourists is remarkably low compared to other Mexican resort destinations."
  },
  {
    question: "What are the safest areas to stay in Puerto Vallarta?",
    answer: "The safest neighborhoods for tourists include the Hotel Zone (Zona Hotelera), Romantic Zone (Zona Romántica), Marina Vallarta, and Nuevo Vallarta. These areas feature well-lit streets, regular police patrols, and are primarily populated by tourists and expats. The Hotel Zone is particularly safe for families, while the Romantic Zone is beloved by LGBTQ+ travelers and solo visitors."
  },
  {
    question: "Is it safe to walk around Puerto Vallarta at night?",
    answer: "Walking at night is generally safe in the main tourist areas. The Malecón (boardwalk), Romantic Zone, and Hotel Zone are all well-lit and populated until late. However, I'd recommend avoiding poorly lit residential areas or venturing too far from tourist zones after midnight. Stick to busy streets and you'll be fine."
  },
  {
    question: "Is Puerto Vallarta safer than Cancun in 2026?",
    answer: "Based on crime statistics and travel advisories, Puerto Vallarta is generally considered safer than Cancun. While both destinations are popular and mostly safe, Cancun and the Riviera Maya have experienced more cartel-related incidents in recent years. Puerto Vallarta's more contained geography and strong community policing make it a safer choice for cautious travelers."
  },
  {
    question: "Should I use Uber or taxis in Puerto Vallarta?",
    answer: "Both options are safe in Puerto Vallarta. Uber offers transparent pricing and GPS tracking, making it popular with tourists. Official taxis (white with a red stripe) are also reliable, but always agree on the price before getting in since they don't use meters. For airport transfers, both authorized taxi stands and Uber are safe choices."
  },
  {
    question: "Is the tap water safe to drink in Puerto Vallarta?",
    answer: "No, you should avoid drinking tap water in Puerto Vallarta. Always drink bottled water, which is inexpensive and available everywhere. The good news is that most hotels and reputable restaurants use purified water for ice and cooking, so you don't need to worry about those. Just ask at smaller establishments to be sure."
  },
  {
    question: "Are there any areas to avoid in Puerto Vallarta?",
    answer: "While Puerto Vallarta is generally safe, some areas warrant extra caution. Avoid wandering into unfamiliar residential neighborhoods, especially at night. The areas of Pitillal and some parts of the north end are more local and less tourist-friendly. Stick to the main tourist zones and you'll have nothing to worry about."
  },
  {
    question: "Is Puerto Vallarta safe for solo female travelers?",
    answer: "Puerto Vallarta is one of the safest destinations in Mexico for solo female travelers. The Romantic Zone, in particular, has a welcoming atmosphere and strong community. Use the same precautions you would anywhere: don't accept drinks from strangers, stay in populated areas at night, and trust your instincts. Many solo women visit annually without incident."
  },
  {
    question: "How is the healthcare in Puerto Vallarta?",
    answer: "Puerto Vallarta has excellent healthcare facilities, including modern hospitals like CMQ Premiere and Hospiten Puerto Vallarta. Many doctors speak English, and the quality of care is high. Medical tourism is actually popular here. Travel insurance is always recommended, but you can feel confident that good medical care is available if needed."
  },
  {
    question: "Is it safe to swim at the beaches in Puerto Vallarta?",
    answer: "Most beaches in Puerto Vallarta are safe for swimming, but always check local conditions. Beaches like Playa de los Muertos, Playa Camarones, and hotel zone beaches are well-monitored. Be aware of rip currents during rainy season (June-October) and follow any posted warning flags. The Pacific can have stronger currents than the Caribbean, so exercise appropriate caution."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
              {item.question}
            </h3>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </button>
          {openIndex === index && (
            <div className="pb-5 animate-fade-in">
              <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
