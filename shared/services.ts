import hullCleaningImg from "@assets/stock_images/professional_commerc_fe47fda8.jpg";
import inspectionImg from "@assets/stock_images/underwater_boat_hull_a2ba17a3.jpg";
import zincImg from "@assets/stock_images/professional_commerc_90fd6021.jpg";
import mooringImg from "@assets/stock_images/underwater_boat_hull_5ed3bff6.jpg";
import retrievalImg from "@assets/stock_images/commercial_diver_oce_e582419b.jpg";
import commercialImg from "@assets/stock_images/commercial_diver_oce_4aae3a08.jpg";

export interface Service {
  title: string;
  description: string;
  image: string;
  slug: string;
  metaDescription: string;
  benefits: string[];
  process: { step: string; description: string }[];
  serviceAreas: string[];
  faqs: { question: string; answer: string }[];
  pricing: string;
  comparisonSection?: {
    title: string;
    content: string;
    differences: { service: string; description: string }[];
  };
  h1Title?: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    title: "Hull Cleaning Victoria BC",
    h1Title: "Professional Hull Cleaning Victoria - Underwater Barnacle Removal & Marine Growth Cleaning",
    description: "Professional underwater hull cleaning services in Victoria and Vancouver Island. Expert commercial diver removes barnacles, algae, and marine growth to improve vessel performance and fuel efficiency. Serving all Victoria marinas including Oak Bay, Sidney, and Brentwood Bay.",
    image: hullCleaningImg,
    imageAlt: "Professional underwater hull cleaning service in Victoria BC showing commercial diver removing barnacles and marine growth from boat hull",
    slug: "hull-cleaning",
    metaDescription: "Expert underwater hull cleaning Victoria BC. Barnacle removal, marine growth cleaning. Improve fuel efficiency 20%. Commercial diver. Oak Bay, Sidney, Victoria marinas. Call (778) 535-4506",
    benefits: [
      "Improve fuel efficiency by up to 20%",
      "Increase vessel speed and performance",
      "Prevent hull damage from marine growth",
      "Extend the life of your antifouling paint",
      "Eco-friendly cleaning methods safe for marine life",
      "Video documentation of every cleaning"
    ],
    process: [
      { step: "Initial Assessment", description: "We inspect your hull underwater to assess marine growth and identify any areas requiring special attention." },
      { step: "Safe Cleaning", description: "Using professional diving equipment and eco-friendly techniques, we carefully remove barnacles, algae, and marine growth without damaging your hull or antifouling paint." },
      { step: "Video Documentation", description: "Every cleaning is recorded on video so you can see the before and after condition of your hull." },
      { step: "Final Report", description: "We provide a detailed report with recommendations for ongoing maintenance and any issues discovered during cleaning." }
    ],
    serviceAreas: [
      "Victoria Inner Harbour",
      "Oak Bay Marina",
      "Sidney Marina",
      "Canoe Cove Marina",
      "Van Isle Marina",
      "Westport Marina",
      "Brentwood Bay",
      "All Vancouver Island marinas"
    ],
    faqs: [
      {
        question: "How often should I have my hull cleaned in Victoria?",
        answer: "Most boats in Victoria waters benefit from hull cleaning every 3-4 months during warmer months (April-October) and every 4-6 months in winter. Boats kept in warmer areas like Oak Bay may need more frequent cleaning due to faster marine growth."
      },
      {
        question: "Will hull cleaning damage my antifouling paint?",
        answer: "No. Our experienced commercial divers use proper techniques and tools that safely remove marine growth without damaging your antifouling paint or gelcoat."
      },
      {
        question: "How long does hull cleaning take?",
        answer: "Most recreational vessels (25-45 feet) take 1-2 hours. Larger vessels or boats with heavy growth may require additional time. We'll provide an accurate estimate when we inspect your vessel."
      },
      {
        question: "Do you provide hull cleaning in Sidney and Brentwood Bay?",
        answer: "Yes! We service all marinas throughout Victoria and Vancouver Island, including Sidney, Brentwood Bay, Oak Bay, and beyond."
      },
      {
        question: "What's the difference between hull cleaning and boat detailing?",
        answer: "Hull cleaning is underwater barnacle and marine growth removal from below the waterline by a commercial diver. Boat detailing is topside washing, waxing, and cosmetic cleaning. We specialize in underwater hull cleaning, not boat washing or detailing services."
      }
    ],
    pricing: "Pricing varies based on vessel size and fouling level. Contact us for a free quote specific to your boat in Victoria.",
    comparisonSection: {
      title: "Hull Cleaning vs Boat Detailing: Understanding the Difference",
      content: "Many boat owners in Victoria search for hull cleaning when they actually need underwater barnacle removal. It's important to understand that hull cleaning and boat detailing are completely different services.",
      differences: [
        {
          service: "Underwater Hull Cleaning (Our Service)",
          description: "Professional commercial diver goes underwater to scrub and remove barnacles, algae, zebra mussels, and marine growth from the underwater portion of your hull. This improves fuel efficiency, vessel speed, and prevents corrosion. Performed while your boat stays in the water at your marina in Victoria, Oak Bay, Sidney, or anywhere on Vancouver Island."
        },
        {
          service: "Boat Detailing / Boat Washing",
          description: "Topside cosmetic cleaning of your boat's exterior surfaces above the waterline. Includes washing, waxing, polishing gelcoat, cleaning upholstery, and making your boat look shiny. Does NOT involve diving or underwater work. Does NOT remove barnacles or marine growth."
        },
        {
          service: "Why the Confusion?",
          description: "Some boat cleaning companies in Victoria offer both washing/detailing AND claim to do 'hull cleaning' - but they're washing the sides of the boat, not diving underwater. True underwater hull cleaning requires a commercial diver with proper equipment to scrub barnacles off the bottom of your boat while it's in the water."
        }
      ]
    }
  },
  {
    title: "Underwater Inspections Victoria BC",
    h1Title: "Professional Underwater Boat Inspections Victoria - Hull Damage Assessment & Marine Surveys",
    description: "Comprehensive underwater hull inspections in Victoria and Vancouver Island. Professional commercial diver inspections of hulls, propellers, shafts, rudders, and through-hulls with detailed video documentation. Assess damage below the waterline without hauling out. Serving all Victoria marinas.",
    image: inspectionImg,
    imageAlt: "Underwater boat inspection in Victoria BC showing commercial diver examining hull damage and marine components",
    slug: "underwater-inspections",
    metaDescription: "Professional underwater boat inspections Victoria. Hull damage assessment, propeller checks, through-hull examination. Video documentation. Commercial diver. Victoria marinas. Call (778) 535-4506",
    benefits: [
      "Assess damage below the waterline without hauling out",
      "Complete video documentation of underwater surfaces",
      "Visual inspection before purchasing a vessel",
      "Identify problems before they become expensive",
      "Detailed observation reports with photos and video",
      "Faster and more affordable than dry dock"
    ],
    process: [
      { step: "Consultation", description: "Discuss your inspection needs - whether checking a vessel before purchase, routine maintenance, or assessing suspected damage." },
      { step: "Underwater Inspection", description: "Our commercial diver performs a thorough underwater visual inspection of your hull, running gear, through-hulls, and other submerged components." },
      { step: "Video Recording", description: "Every inch of your underwater surfaces is recorded in high-definition video for your records and documentation." },
      { step: "Observation Report", description: "Receive a detailed written observation report with video footage, photographs, and notes about what was found during the inspection." }
    ],
    serviceAreas: [
      "Victoria Harbour marinas",
      "Oak Bay Marina",
      "Sidney and North Saanich",
      "Esquimalt Harbour",
      "Sooke Basin",
      "Cowichan Bay",
      "Nanaimo Harbour",
      "All Vancouver Island locations"
    ],
    faqs: [
      {
        question: "When should I get an underwater inspection in Victoria?",
        answer: "Annual inspections help catch problems early. Also consider inspections before purchasing a used boat, after grounding or collision incidents, if you notice unusual vibrations or performance issues, or to assess any suspected damage below the waterline."
      },
      {
        question: "What do you inspect during an underwater inspection?",
        answer: "We visually inspect the hull for damage or blistering, all through-hull fittings, propeller and shaft condition, rudder and steering components, zincs, trim tabs, transducers, and any other underwater components. Everything is recorded on video."
      },
      {
        question: "Can I use your inspection reports for insurance or surveys?",
        answer: "We provide detailed visual documentation and observation reports. We are not licensed marine surveyors and do not provide insurance-approved surveys. For official survey requirements, contact a licensed marine surveyor. Our inspections help you see your boat's underwater condition."
      },
      {
        question: "How long does an underwater inspection take?",
        answer: "Most inspections take 1-3 hours depending on vessel size. You'll receive your detailed observation report with video within 24-48 hours."
      }
    ],
    pricing: "Inspection pricing based on vessel length and scope of work. Contact us for a detailed quote for your Victoria BC boat inspection."
  },
  {
    title: "Zinc Anode Replacement Victoria BC",
    h1Title: "Professional Zinc Anode Replacement Victoria - Prevent Corrosion on Your Boat",
    description: "Professional zinc anode inspection and replacement services in Victoria and Vancouver Island. Protect your vessel from galvanic corrosion with proper sacrificial anode maintenance. Expert commercial diver service for all Victoria marinas.",
    image: zincImg,
    imageAlt: "Zinc anode replacement service Victoria BC showing commercial diver installing new sacrificial anodes on boat propeller and shaft",
    slug: "zinc-changes",
    metaDescription: "Zinc anode replacement & inspection Victoria. Prevent corrosion on shafts, props, rudders. Commercial diver. Oak Bay, Sidney, Victoria marinas. Call (778) 535-4506",
    benefits: [
      "Prevent expensive corrosion damage to shafts and props",
      "Extend the life of your running gear",
      "Properly sized and positioned zincs for BC waters",
      "Save thousands in potential repair costs",
      "Expert assessment of galvanic corrosion protection",
      "Video documentation before and after"
    ],
    process: [
      { step: "Zinc Assessment", description: "Underwater inspection of all existing zincs to check wear and effectiveness. We assess if they're properly sized and positioned for Victoria BC waters." },
      { step: "Safe Removal", description: "Carefully remove old, depleted zinc anodes without damaging mounting surfaces or threads." },
      { step: "Professional Installation", description: "Install new, properly-sized zinc anodes with correct hardware. We ensure proper contact with base metal for maximum protection." },
      { step: "Documentation", description: "Provide photos and video of old and new zincs, along with recommendations for ongoing maintenance schedule." }
    ],
    serviceAreas: [
      "Victoria and Esquimalt harbours",
      "Oak Bay and Cadboro Bay",
      "Sidney and Canoe Cove",
      "Brentwood Bay marinas",
      "Sooke and Pedder Bay",
      "Gulf Islands",
      "Nanaimo and surrounding areas",
      "All Vancouver Island waters"
    ],
    faqs: [
      {
        question: "How often should zincs be replaced in Victoria BC waters?",
        answer: "In Victoria BC saltwater, inspect zincs every 3-4 months. Most boat zincs need replacement every 6-12 months depending on water conditions and electrical systems. Boats in marinas with shore power may need more frequent changes."
      },
      {
        question: "What happens if I don't replace my zincs?",
        answer: "Without proper zinc protection, your expensive bronze and stainless steel components (propellers, shafts, rudders, through-hulls) will corrode instead. This can lead to thousands of dollars in damage and potential safety issues."
      },
      {
        question: "Do different boats need different zinc sizes?",
        answer: "Yes. Zinc size depends on your vessel's metal surface area, electrical systems, and water conditions. We'll ensure you have properly sized zincs for optimal protection in BC waters."
      },
      {
        question: "Can you replace zincs on sailboat keels?",
        answer: "Absolutely. We service all types of vessels including sailboats with keel-mounted zincs, power boats, and commercial vessels throughout Victoria and Vancouver Island."
      }
    ],
    pricing: "Zinc replacement pricing depends on the number and size of anodes. Contact us for a free assessment and quote for your Victoria BC vessel."
  },
  {
    title: "Mooring Services Victoria BC",
    h1Title: "Professional Mooring Services Victoria - Inspection, Maintenance & Installation",
    description: "Professional mooring inspection, maintenance, and installation services in Victoria and Vancouver Island. Ensure your vessel stays secure in all weather conditions with expert mooring solutions. Commercial diver service for all Victoria marinas.",
    image: mooringImg,
    imageAlt: "Mooring inspection service Victoria BC showing commercial diver examining mooring chain and anchor underwater",
    slug: "mooring-services",
    metaDescription: "Expert mooring services Victoria & Vancouver Island. Inspection, maintenance, installation. Keep your boat secure. Commercial diver. Victoria marinas. Call (778) 535-4506",
    benefits: [
      "Peace of mind in storm season",
      "Prevent vessel damage from mooring failure",
      "Expert knowledge of local bottom conditions",
      "Video documentation of underwater components",
      "Proper sizing for BC weather conditions",
      "Annual inspection programs available"
    ],
    process: [
      { step: "Mooring Assessment", description: "Underwater inspection of your existing mooring system including chain, shackles, swivels, and anchor. We assess wear, proper sizing, and bottom conditions." },
      { step: "Maintenance or Installation", description: "Replace worn components, adjust chain length, or install new mooring systems designed for Victoria BC's tides and weather patterns." },
      { step: "Load Testing", description: "Verify mooring components are properly sized for your vessel and local conditions including winter storms." },
      { step: "Documentation & Schedule", description: "Provide detailed report with photos/video and recommend ongoing inspection schedule based on your mooring usage and location." }
    ],
    serviceAreas: [
      "Victoria Harbour mooring buoys",
      "Oak Bay and Cadboro Bay",
      "Brentwood Bay moorings",
      "Sidney and Tsehum Harbour",
      "Sooke Basin",
      "Gulf Islands anchorages",
      "Cowichan Bay",
      "All Vancouver Island mooring locations"
    ],
    faqs: [
      {
        question: "How often should moorings be inspected in Victoria BC?",
        answer: "We recommend annual inspections before winter storm season (September-October). Moorings in high-current areas or exposed locations may benefit from twice-yearly inspections."
      },
      {
        question: "What size mooring do I need for Victoria BC waters?",
        answer: "Mooring size depends on your vessel weight, windage, and location exposure. Victoria BC winter storms require robust systems. We'll assess your specific needs and ensure proper sizing for local conditions."
      },
      {
        question: "Can you install new mooring systems?",
        answer: "Yes. We install complete mooring systems including anchors, chain, swivels, and buoys. We're familiar with seabed conditions throughout Victoria and Vancouver Island and will recommend the right anchor type for your location."
      },
      {
        question: "Do you service private moorings and marina moorings?",
        answer: "Yes. We service both private mooring buoys and marina mooring systems throughout the Victoria area and Vancouver Island."
      }
    ],
    pricing: "Mooring service pricing varies by scope of work. Contact us to discuss your Victoria BC mooring needs and receive a detailed quote."
  },
  {
    title: "Underwater Recovery Victoria BC",
    h1Title: "Professional Underwater Recovery Victoria - Lost Item Retrieval & Search Diving",
    description: "Professional underwater search and recovery services in Victoria and Vancouver Island. Recover lost items, tools, equipment, and valuable belongings from the ocean floor with experienced commercial divers. Serving all Victoria waterfront locations.",
    image: retrievalImg,
    imageAlt: "Underwater recovery service Victoria BC showing commercial diver searching for and retrieving lost items from ocean floor",
    slug: "lost-item-retrieval",
    metaDescription: "Underwater recovery services Victoria. Lost items, tools, equipment retrieval. Professional search diving. Commercial diver. Victoria waterfront. Call (778) 535-4506",
    benefits: [
      "Recover valuable items thought to be lost forever",
      "Professional search patterns and techniques",
      "Experience in Victoria BC waters and currents",
      "Modern underwater metal detection equipment",
      "Success stories recovering phones, keys, jewelry, tools",
      "No recovery, no charge on many searches"
    ],
    process: [
      { step: "Loss Assessment", description: "Discuss what was lost, approximate location, water depth, and bottom conditions. We assess search feasibility and develop a recovery plan." },
      { step: "Search Dive", description: "Using systematic search patterns, underwater metal detection, and professional diving techniques, we search the area methodically." },
      { step: "Recovery", description: "Once located, we safely recover your lost item and bring it to the surface." },
      { step: "Return", description: "Your recovered item is returned to you, often in better condition than expected despite time underwater." }
    ],
    serviceAreas: [
      "Victoria Inner and Outer Harbour",
      "Oak Bay waterfront",
      "Sidney piers and marinas",
      "Brentwood Bay and Tod Inlet",
      "Esquimalt Lagoon",
      "Sooke basin and harbour",
      "Popular swimming beaches",
      "All Vancouver Island dive locations"
    ],
    faqs: [
      {
        question: "What items can you recover in Victoria BC waters?",
        answer: "We've successfully recovered phones, cameras, jewelry, keys, wallets, fishing gear, tools, boat parts, outboard motors, and even personal items of sentimental value. If it sank in Victoria waters, we can likely find it."
      },
      {
        question: "How long after losing something can you recover it?",
        answer: "The sooner the better, but we've successfully recovered items weeks or even months after they were lost. Electronics work best when recovered quickly, but metal items, jewelry, and tools can be recovered long after loss."
      },
      {
        question: "What are your success rates for recovery?",
        answer: "Success depends on several factors: accurate loss location, water conditions, time since loss, and bottom type. With good information, our success rate is high. We'll provide an honest assessment before beginning any search."
      },
      {
        question: "How much does underwater recovery cost in Victoria?",
        answer: "Pricing depends on search difficulty, depth, and time required. Simple recoveries with known locations may be very affordable. Contact us with details of your lost item for a quote. Many searches are no recovery, no charge."
      }
    ],
    pricing: "Recovery pricing varies based on search complexity and location. Many simple recoveries are affordable. Contact us immediately to discuss your lost item in Victoria BC."
  },
  {
    title: "Commercial Diving Victoria BC",
    h1Title: "Professional Commercial Diving Services Victoria - Marine Construction & Infrastructure Inspection",
    description: "Professional commercial diving services in Victoria and Vancouver Island. Expert underwater construction, marine surveys, infrastructure inspection, and specialized underwater projects for commercial and industrial clients. Fully insured commercial diver.",
    image: commercialImg,
    imageAlt: "Commercial diving services Victoria BC showing professional diver performing marine infrastructure inspection and underwater construction work",
    slug: "commercial-diving",
    metaDescription: "Professional commercial diving services Victoria. Marine construction, infrastructure inspection, underwater surveys. Vancouver Island. Fully insured. Call (778) 535-4506",
    benefits: [
      "Commercial diver with full insurance coverage",
      "Experience with marine infrastructure projects",
      "Video documentation for records and compliance",
      "Safe diving practices and equipment",
      "Knowledge of local regulations and requirements",
      "Available for emergency call-outs"
    ],
    process: [
      { step: "Project Consultation", description: "Discuss your commercial diving needs, project scope, timelines, and any regulatory requirements specific to Victoria BC." },
      { step: "Planning & Safety", description: "Develop comprehensive dive plan including safety procedures, equipment needs, and coordination with other contractors." },
      { step: "Professional Execution", description: "Execute diving operations with commercial diver following all safety protocols and industry best practices." },
      { step: "Documentation & Reporting", description: "Provide detailed reports, video documentation, and any required certifications or compliance paperwork." }
    ],
    serviceAreas: [
      "Victoria and Esquimalt harbours",
      "BC Ferries terminals",
      "Marina infrastructure",
      "Municipal docks and piers",
      "Industrial waterfront facilities",
      "Aquaculture operations",
      "Bridge and wharf inspection",
      "All Vancouver Island commercial sites"
    ],
    faqs: [
      {
        question: "What commercial diving services do you offer in Victoria BC?",
        answer: "We provide underwater construction assistance, infrastructure inspection, marine surveys, salvage operations, debris removal, underwater photography/video, hull and pier damage assessment, and custom commercial diving projects throughout Victoria and Vancouver Island."
      },
      {
        question: "Are you insured for commercial work?",
        answer: "Yes. We carry $2M liability insurance coverage and maintain all required certifications for commercial diving operations in British Columbia."
      },
      {
        question: "Can you handle emergency commercial diving calls?",
        answer: "Yes. We offer emergency response services for urgent commercial diving needs including infrastructure damage, sunken vessels, or unexpected underwater issues."
      },
      {
        question: "Do you work with other contractors and marine construction companies?",
        answer: "Absolutely. We regularly partner with marine contractors, engineering firms, municipalities, and commercial property owners throughout Victoria BC and Vancouver Island on various underwater projects."
      }
    ],
    pricing: "Commercial diving rates vary by project scope and complexity. Contact us to discuss your specific commercial diving needs in Victoria BC for a detailed quote."
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
