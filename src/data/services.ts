export interface ServicePage {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  ctaLabel: string;
  tagline: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  cardAlt: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  whatItIs: string[];
  commonNeeds: { title: string; body: string }[];
  considerations: string[];
  servicesProvided: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServicePage[] = [
  {
    slug: 'electrical-installation',
    path: '/electrical-installation-houston-tx',
    name: 'Electrical Installation',
    shortName: 'Electrical Installation',
    ctaLabel: 'Call for Electrical Installation',
    tagline: 'Complete electrical installation for Houston homes and businesses.',
    icon: 'Zap',
    cardImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician installing components inside a residential circuit breaker panel in Houston',
    heroAlt: 'Professional electrician using a drill on an indoor circuit breaker panel during an electrical installation',
    metaTitle: 'Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Need electrical installation in Houston, TX? S Branch Electric handles residential and commercial electrical installation. Call 832-484-0514.',
    h1: 'Electrical Installation in Houston, TX',
    intro: [
      'S Branch Electric provides electrical installation services for residential and commercial properties throughout Houston, Texas. Whether you are building a new space, upgrading an aging system, or adding new fixtures and circuits, calling a reliable electrician is the first step toward getting the job done safely.',
      'From the initial phone call through the completed installation, the work is handled with attention to detail and clear communication so you understand what is being installed and why.',
    ],
    whatItIs: [
      'Electrical installation covers the process of fitting, connecting, and energizing electrical components in a building. This includes wiring, panels, outlets, switches, lighting fixtures, breakers, and dedicated circuits for appliances.',
      'A proper installation follows the National Electrical Code (NEC) and local Houston permitting requirements. Every connection must be correctly sized, secured, and protected so that the system operates safely under load.',
    ],
    commonNeeds: [
      {
        title: 'New Construction & Additions',
        body: 'New homes, room additions, garage conversions, and accessory dwelling units all need full electrical systems installed from the ground up, from the service entrance to the last outlet.',
      },
      {
        title: 'Appliance & Equipment Hookups',
        body: 'Electric dryers, ranges, air conditioners, EV chargers, and other high-draw appliances often require dedicated circuits and proper grounding before they can be safely energized.',
      },
      {
        title: 'Renovation & Remodel Wiring',
        body: 'Kitchen and bath remodels frequently involve moving outlets, adding lighting, and upgrading circuits to meet modern code requirements and support new fixtures.',
      },
    ],
    considerations: [
      'Permit and inspection requirements vary by project scope and jurisdiction within the Houston area.',
      'Older Houston homes, especially those built before 1970, may have wiring that needs evaluation before new installations are added.',
      'Dedicated circuits should be sized to the appliance load with appropriate breaker protection.',
      'Surge protection at the panel can help protect newly installed equipment from Houston\'s frequent storm-related power spikes.',
    ],
    servicesProvided: [
      'Residential electrical installation',
      'Commercial electrical installation',
      'Dedicated appliance circuits',
      'Fixture and device installation',
      'Whole-home surge protection installation',
      'Wiring for renovations and additions',
    ],
    faqs: [
      {
        question: 'Do I need to call before starting an electrical installation in Houston?',
        answer:
          'Yes. Calling first lets us understand the scope of your project, discuss what you need installed, and confirm service availability for your specific Houston location. Every installation starts with a phone call to 832-484-0514.',
      },
      {
        question: 'Can S Branch Electric install dedicated circuits for appliances?',
        answer:
          'Yes. Dedicated circuits for electric dryers, ranges, air conditioners, and similar high-draw appliances are a common installation request. The circuit is sized to the appliance and protected with the correct breaker.',
      },
      {
        question: 'Does an electrical installation require a permit in Houston?',
        answer:
          'Many electrical installations in Houston require a permit and inspection. The specific requirement depends on the scope of the work. You can discuss your project details by calling 832-484-0514.',
      },
    ],
  },
  {
    slug: 'electrical-wiring',
    path: '/electrical-wiring-houston-tx',
    name: 'Electrical Wiring',
    shortName: 'Electrical Wiring',
    ctaLabel: 'Call for Electrical Wiring',
    tagline: 'New wiring, rewiring, and wiring repairs for Houston properties.',
    icon: 'Cable',
    cardImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Exposed electrical wiring in a wall during a residential wiring installation in Houston',
    heroAlt: 'Close-up of exposed electrical wiring in wall sockets ready for installation during a Houston wiring project',
    metaTitle: 'Electrical Wiring in Houston, TX | S Branch Electric',
    metaDescription:
      'Residential and commercial electrical wiring in Houston, TX. New wiring, rewiring, and wiring repairs by S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Wiring in Houston, TX',
    intro: [
      'Proper electrical wiring is the backbone of any safe and functional electrical system. S Branch Electric handles new wiring installations, rewiring for older Houston homes, and wiring repairs throughout the Houston area.',
      'Many homes in Houston neighborhoods like Spring Branch were built decades ago and still carry wiring that may not meet modern demands. A phone call is the quickest way to discuss what your wiring project involves.',
    ],
    whatItIs: [
      'Electrical wiring is the network of conductors that carries electricity from the service panel to every outlet, switch, and fixture in a building. Wiring must be correctly sized, routed, secured, and protected to handle the intended load safely.',
      'Common wiring types include non-metallic (NM) cable for general interior use, individual conductors in conduit for commercial settings, and specialty cabling for specific applications. The right choice depends on the location and load.',
    ],
    commonNeeds: [
      {
        title: 'Whole-Home Rewiring',
        body: 'Older Houston homes with outdated or degraded wiring benefit from complete rewiring to support modern electrical loads and eliminate fire hazards.',
      },
      {
        title: 'New Circuit Wiring',
        body: 'Adding circuits for new appliances, home offices, or workshop spaces requires correctly sized wire and proper breaker protection from the panel to the endpoint.',
      },
      {
        title: 'Damaged Wiring Repair',
        body: 'Storms, rodents, age, and improper modifications can damage wiring. Damaged conductors need to be located, replaced, and tested before the circuit is re-energized.',
      },
    ],
    considerations: [
      'Houston homes built before 1970 may have aluminum or knob-and-tube wiring that requires evaluation.',
      'Wire gauge must match the circuit amperage and the length of the run to prevent overheating.',
      'Wiring in attics and crawl spaces must be protected from physical damage and secured per code.',
      'Any rewiring work may trigger the need for panel upgrades if the existing panel lacks capacity.',
    ],
    servicesProvided: [
      'New wiring installation',
      'Whole-home and partial rewiring',
      'Dedicated circuit wiring',
      'Wiring inspection and evaluation',
      'Damaged wiring repair',
      'Wiring for remodels and additions',
    ],
    faqs: [
      {
        question: 'How do I know if my Houston home needs rewiring?',
        answer:
          'Common signs include frequently tripping breakers, flickering lights, discolored outlets, a burning smell near outlets or the panel, or wiring that is visibly old or damaged. If your home is several decades old and has never been updated, calling to have the wiring evaluated is a good first step.',
      },
      {
        question: 'Can you install wiring for a home addition in Houston?',
        answer:
          'Yes. Wiring for room additions, garage conversions, and accessory structures is a standard installation. Call 832-484-0514 to discuss the scope and confirm availability for your project.',
      },
      {
        question: 'Do you repair wiring damaged by storms?',
        answer:
          'Yes. Houston storms can cause water intrusion and physical damage to wiring. Damaged sections are located, replaced, and tested before being energized. Call to describe the situation and arrange service.',
      },
    ],
  },
  {
    slug: 'residential-electrical-installation',
    path: '/residential-electrical-installation-houston-tx',
    name: 'Residential Electrical Installation',
    shortName: 'Residential Installation',
    ctaLabel: 'Call for Residential Electrical Installation',
    tagline: 'Electrical installation for Houston homes and homeowners.',
    icon: 'Home',
    cardImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician examining a residential fuse box during a home electrical installation in Houston',
    heroAlt: 'An electrician carefully examines a residential fuse box indoors, ensuring electrical safety during a Houston home installation',
    metaTitle: 'Residential Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Residential electrical installation in Houston, TX for homes, additions, and upgrades. Call S Branch Electric at 832-484-0514.',
    h1: 'Residential Electrical Installation in Houston, TX',
    intro: [
      'S Branch Electric serves homeowners across Houston with residential electrical installation services. From a single new outlet to a full home wiring project, the work is performed with care for your property and attention to safety.',
      'Houston homeowners deal with a wide range of electrical needs, from aging wiring in older neighborhoods to new appliance installations in recently built homes. A direct phone call gets the conversation started.',
    ],
    whatItIs: [
      'Residential electrical installation is the work of installing, extending, or upgrading the electrical system in a single-family home, townhouse, or apartment. It covers everything from the service panel to the individual devices in each room.',
      'Residential work must comply with the NEC and local Houston codes, which address grounding, arc-fault and ground-fault protection, outlet spacing, and load calculations for the home.',
    ],
    commonNeeds: [
      {
        title: 'Panel & Breaker Installation',
        body: 'Homes adding circuits or upgrading service need panel work and breaker installation sized to the new load and the home\'s overall capacity.',
      },
      {
        title: 'Outlet & Switch Installation',
        body: 'Adding outlets for convenience, replacing old two-prong outlets with grounded three-prong receptacles, and installing dimmer or smart switches are common home requests.',
      },
      {
        title: 'Lighting Installation',
        body: 'Interior lighting, exterior fixtures, ceiling fans, and landscape lighting all require proper box support, wiring, and switching.',
      },
    ],
    considerations: [
      'GFCI protection is required in kitchens, baths, garages, and outdoor locations per current code.',
      'AFCI protection is required for most general-purpose living-area circuits in newer installations.',
      'Ceiling fan boxes must be rated for fan support and cannot use a standard light fixture box.',
      'Older Houston homes may need a panel upgrade before additional circuits can be added.',
    ],
    servicesProvided: [
      'Whole-home electrical installation',
      'Outlet and switch installation',
      'Lighting and ceiling fan installation',
      'Panel and breaker installation',
      'Dedicated appliance circuits',
      'Whole-home surge protection',
    ],
    faqs: [
      {
        question: 'Do you install outlets and switches in Houston homes?',
        answer:
          'Yes. Outlet and switch installation is one of the most common residential requests. This includes adding new receptacles, replacing outdated outlets with grounded GFCI receptacles, and installing dimmers or smart switches. Call 832-484-0514 to discuss your needs.',
      },
      {
        question: 'Can you install a ceiling fan where there was only a light fixture?',
        answer:
          'A ceiling fan requires a fan-rated junction box and proper support. If the existing box is a standard light fixture box, it needs to be replaced before the fan is installed. Call to discuss the specifics of your installation.',
      },
      {
        question: 'Do you handle electrical installation for older Houston homes?',
        answer:
          'Yes. Many Houston homes, particularly in areas like Spring Branch, were built decades ago. Older homes often need wiring evaluation, panel upgrades, and code-compliant updates before new installations. Call to discuss your home\'s situation.',
      },
    ],
  },
  {
    slug: 'commercial-electrical-installation',
    path: '/commercial-electrical-installation-houston-tx',
    name: 'Commercial Electrical Installation',
    shortName: 'Commercial Installation',
    ctaLabel: 'Call for Commercial Electrical Installation',
    tagline: 'Electrical installation for Houston commercial spaces.',
    icon: 'Building2',
    cardImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Complex network of electrical wiring and control panels in a commercial setting in Houston',
    heroAlt: 'Complex network of electrical wiring and control panels in an industrial commercial setting during installation',
    metaTitle: 'Commercial Electrical Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Commercial electrical installation in Houston, TX for offices, retail, and light commercial spaces. Call S Branch Electric at 832-484-0514.',
    h1: 'Commercial Electrical Installation in Houston, TX',
    intro: [
      'S Branch Electric offers commercial electrical installation services for businesses in Houston, Texas. From tenant build-outs to equipment hookups, commercial work requires a different level of planning and code compliance than residential projects.',
      'If your Houston business needs electrical installation work, calling directly is the fastest way to discuss the project scope and confirm availability.',
    ],
    whatItIs: [
      'Commercial electrical installation involves wiring and devices for business premises, including offices, retail spaces, restaurants, and light industrial facilities. Commercial systems often operate at higher voltages and use three-phase power, conduit wiring methods, and different device specifications than residential systems.',
      'Commercial installations must meet NEC commercial requirements and local Houston building codes, which address things like emergency lighting, exit signs, and load calculations specific to business occupancies.',
    ],
    commonNeeds: [
      {
        title: 'Tenant Build-Outs',
        body: 'New commercial tenants frequently need lighting, outlets, and circuits reconfigured to suit their business layout and equipment.',
      },
      {
        title: 'Equipment Hookups',
        body: 'Commercial kitchen equipment, HVAC units, and machinery often require dedicated three-phase circuits and proper disconnects.',
      },
      {
        title: 'Lighting & Signage',
        body: 'Commercial interior lighting, exterior building lighting, and illuminated signage all require compliant installation and proper circuit protection.',
      },
    ],
    considerations: [
      'Commercial installations may require different permitting and inspection pathways than residential work.',
      'Three-phase power and higher voltage circuits require specialized equipment and methods.',
      'Emergency and exit lighting has specific code requirements for commercial occupancies.',
      'Conduit wiring methods are common in commercial settings and require specific fittings and support.',
    ],
    servicesProvided: [
      'Commercial wiring installation',
      'Lighting and signage installation',
      'Dedicated equipment circuits',
      'Panel and subpanel installation',
      'Outlet and device installation',
      'Commercial troubleshooting and repair',
    ],
    faqs: [
      {
        question: 'Do you handle electrical installation for commercial spaces in Houston?',
        answer:
          'Yes. S Branch Electric offers commercial electrical installation services. Call 832-484-0514 to discuss your commercial project, the scope of work, and service availability for your Houston business location.',
      },
      {
        question: 'Can you install dedicated circuits for commercial equipment?',
        answer:
          'Yes. Dedicated circuits for commercial equipment, including three-phase circuits where appropriate, are part of commercial electrical installation. Call to discuss the equipment specifications and your location.',
      },
      {
        question: 'Do you install commercial lighting in Houston?',
        answer:
          'Yes. Commercial interior lighting, exterior building lighting, and related circuits can be installed. Call to discuss your lighting project and confirm availability.',
      },
    ],
  },
  {
    slug: 'electrical-panel-installation',
    path: '/electrical-panel-installation-houston-tx',
    name: 'Electrical Panel Installation',
    shortName: 'Panel Installation',
    ctaLabel: 'Call for Panel Installation',
    tagline: 'New electrical panel installation for Houston properties.',
    icon: 'LayoutGrid',
    cardImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Organized circuit breaker panel with color-coded wiring during a Houston panel installation',
    heroAlt: 'Close-up of an organized circuit breaker panel featuring color-coded electrical wiring during installation',
    metaTitle: 'Electrical Panel Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical panel installation in Houston, TX. New panel installation for homes and businesses by S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Panel Installation in Houston, TX',
    intro: [
      'The electrical panel is the central hub that distributes power throughout your property. S Branch Electric installs new electrical panels for Houston homes and businesses, whether for new construction, service upgrades, or replacement of outdated equipment.',
      'A correctly installed panel protects every circuit in the building. If you need a new panel installed, calling to discuss the details is the right first step.',
    ],
    whatItIs: [
      'An electrical panel, also called a breaker box or service panel, houses the main breaker and individual circuit breakers that protect and distribute electricity to each circuit in a building. The panel receives power from the utility and routes it through breakers to branch circuits.',
      'Panel installation involves mounting the panel enclosure, connecting the service entrance conductors, installing and labeling each breaker, connecting the branch circuit wiring, and verifying that everything is correctly bonded and grounded.',
    ],
    commonNeeds: [
      {
        title: 'New Construction Panels',
        body: 'New homes and commercial buildings need a panel installed and wired as part of the overall electrical system installation.',
      },
      {
        title: 'Service Upgrades',
        body: 'Adding a panel with higher amperage capacity to support additional circuits, new appliances, or a property expansion.',
      },
      {
        title: 'Replacement of Outdated Panels',
        body: 'Older panels, particularly certain brands known for failure, should be replaced with modern, safer equipment.',
      },
    ],
    considerations: [
      'Panel amperage must match the service entrance capacity and the calculated load of the building.',
      'The panel must be properly bonded and grounded to the grounding electrode system.',
      'Breakers must be correctly sized to each circuit\'s wire gauge.',
      'Panel installation typically requires a permit and inspection in Houston.',
    ],
    servicesProvided: [
      'New electrical panel installation',
      'Service upgrade panel installation',
      'Subpanel installation',
      'Breaker installation and labeling',
      'Grounding and bonding',
      'Panel relocation',
    ],
    faqs: [
      {
        question: 'How do I know if I need a new electrical panel in Houston?',
        answer:
          'Common reasons include adding significant new electrical load, a panel that is damaged or outdated, insufficient breaker space for new circuits, or a panel from a manufacturer with known reliability issues. Call 832-484-0514 to discuss your situation.',
      },
      {
        question: 'Does installing a new panel require a permit in Houston?',
        answer:
          'Yes, electrical panel installation typically requires a permit and inspection in Houston. Call to discuss your project, and we can talk through what is involved.',
      },
      {
        question: 'Can you install a subpanel in my Houston home?',
        answer:
          'Yes. Subpanels are commonly installed to provide additional circuit capacity for a garage, addition, or outbuilding, provided the main panel has the capacity to support it. Call to discuss whether a subpanel is right for your needs.',
      },
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    path: '/electrical-panel-upgrades-houston-tx',
    name: 'Electrical Panel Upgrades',
    shortName: 'Panel Upgrades',
    ctaLabel: 'Call for Panel Upgrades',
    tagline: 'Upgrade your electrical panel for safety and capacity in Houston.',
    icon: 'ArrowUpCircle',
    cardImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician working on a circuit breaker panel with colorful wires during a Houston panel upgrade',
    heroAlt: 'Hand of electrician working on a circuit breaker panel with colorful wires, ensuring safe electrical connections during a panel upgrade',
    metaTitle: 'Electrical Panel Upgrades in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical panel upgrades in Houston, TX. Increase capacity and safety with a panel upgrade from S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Panel Upgrades in Houston, TX',
    intro: [
      'If your Houston home or business has an electrical panel that can no longer keep up with demand, S Branch Electric performs electrical panel upgrades to increase capacity and improve safety. An upgrade replaces your existing panel with a newer, higher-capacity unit.',
      'Many Houston properties built decades ago still have panels sized for the electrical loads of their era, not today\'s appliance-heavy, multi-device households. A phone call can help you determine whether an upgrade makes sense.',
    ],
    whatItIs: [
      'An electrical panel upgrade is the replacement of an existing service panel with a new panel of equal or greater capacity. The most common upgrade is moving from a 100-amp or 150-amp panel to a 200-amp panel to support modern electrical loads.',
      'The upgrade includes replacing the panel enclosure, installing new breakers, reconnecting all existing branch circuits, and ensuring the service entrance, grounding, and bonding are adequate for the new capacity.',
    ],
    commonNeeds: [
      {
        title: 'Insufficient Capacity',
        body: 'Adding an EV charger, tankless water heater, or second HVAC unit often requires more amperage than an older panel can provide.',
      },
      {
        title: 'Frequent Breaker Tripping',
        body: 'Breakers that trip regularly under normal use are a sign that the panel is overloaded or that breakers are wearing out.',
      },
      {
        title: 'Outdated or Unsafe Panels',
        body: 'Certain older panel brands have a history of breaker failure. Upgrading replaces this equipment with modern, reliable breakers.',
      },
    ],
    considerations: [
      'A load calculation should be performed to determine the correct amperage for the upgrade.',
      'The service entrance conductors may need to be upsized along with the panel.',
      'Grounding and bonding must be brought up to current code during the upgrade.',
      'Panel upgrades require a permit and inspection in Houston.',
    ],
    servicesProvided: [
      '100-to-200-amp panel upgrades',
      'Service capacity upgrades',
      'Outdated panel replacement',
      'Breaker modernization',
      'Grounding and bonding upgrades',
      'Panel inspection and evaluation',
    ],
    faqs: [
      {
        question: 'How much does a panel upgrade cost in Houston?',
        answer:
          'Panel upgrade costs vary based on the amperage, the condition of the existing service entrance, and whether grounding or other components need updating. Call 832-484-0514 to discuss your panel and get a clearer picture of what is involved.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'A typical panel upgrade is completed in a single day, though the exact timeline depends on the scope. The power is off during the work. Call to discuss your specific situation.',
      },
      {
        question: 'Will I need a permit for a panel upgrade in Houston?',
        answer:
          'Yes. Panel upgrades require a permit and inspection in Houston. Call to discuss your upgrade project and we can talk through the process.',
      },
    ],
  },
  {
    slug: 'circuit-breaker-installation',
    path: '/circuit-breaker-installation-houston-tx',
    name: 'Circuit Breaker Installation',
    shortName: 'Breaker Installation',
    ctaLabel: 'Call for Circuit Breaker Installation',
    tagline: 'Circuit breaker installation and replacement in Houston.',
    icon: 'ShieldCheck',
    cardImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Electrician adjusting a circuit breaker panel during a Houston breaker installation',
    heroAlt: 'Focused electrician adjusting circuit breaker panel during a breaker installation, technology and skill in action',
    metaTitle: 'Circuit Breaker Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Circuit breaker installation in Houston, TX. New breakers, replacements, and dedicated circuit breakers by S Branch Electric. Call 832-484-0514.',
    h1: 'Circuit Breaker Installation in Houston, TX',
    intro: [
      'Circuit breakers protect every circuit in your home or business by cutting power when a fault or overload occurs. S Branch Electric installs and replaces circuit breakers for Houston properties, whether adding a new circuit or replacing a worn or failed breaker.',
      'A breaker that trips repeatedly or will not reset is not just an inconvenience, it can indicate a real problem. Calling to discuss the symptom is the safest way to address it.',
    ],
    whatItIs: [
      'A circuit breaker is an automatically operated electrical switch designed to protect a circuit from damage caused by overload or short circuit. Unlike fuses, breakers can be reset after they trip rather than replaced.',
      'Breaker installation involves selecting the correct breaker type and amperage for the circuit, seating it in the panel, connecting the conductor, and verifying proper operation. Standard, GFCI, AFCI, and dual-function breakers each serve different protection needs.',
    ],
    commonNeeds: [
      {
        title: 'New Circuit Breakers',
        body: 'Adding a new circuit for an appliance, outlet, or fixture requires a correctly sized breaker installed in the panel.',
      },
      {
        title: 'Breaker Replacement',
        body: 'Breakers that trip frequently, will not stay reset, or show signs of heat damage should be replaced promptly.',
      },
      {
        title: 'GFCI and AFCI Protection',
        body: 'Modern code requires GFCI protection in wet locations and AFCI protection in living areas. These can be installed as breaker-level protection in the panel.',
      },
    ],
    considerations: [
      'The breaker amperage must match the wire gauge of the circuit it protects.',
      'Not all breaker brands fit all panels. The replacement must be listed for your specific panel.',
      'GFCI and AFCI breakers provide protection at the panel level, which can be easier than installing individual GFCI receptacles.',
      'A breaker that trips immediately after reset may indicate a fault on the circuit, not a bad breaker.',
    ],
    servicesProvided: [
      'Standard breaker installation',
      'GFCI breaker installation',
      'AFCI breaker installation',
      'Dual-function breaker installation',
      'Breaker replacement',
      'Dedicated circuit breaker installation',
    ],
    faqs: [
      {
        question: 'Why does my circuit breaker keep tripping in my Houston home?',
        answer:
          'A breaker trips to protect the circuit from overload or a short circuit. Frequent tripping can mean the circuit is overloaded, there is a fault in the wiring or a connected device, or the breaker itself has worn out. Call 832-484-0514 to describe what is happening and arrange service.',
      },
      {
        question: 'Can you install a GFCI breaker in my panel?',
        answer:
          'Yes. GFCI breakers provide ground-fault protection for the entire circuit from the panel. This is common for bathroom, kitchen, garage, and outdoor circuits. Call to discuss which circuits need GFCI protection.',
      },
      {
        question: 'Can a tripping breaker be dangerous?',
        answer:
          'A tripping breaker is doing its job by cutting power to a faulted circuit. However, repeatedly resetting a tripping breaker without addressing the cause can be hazardous. Call to have the circuit and breaker evaluated.',
      },
    ],
  },
  {
    slug: 'lighting-installation',
    path: '/lighting-installation-houston-tx',
    name: 'Lighting Installation',
    shortName: 'Lighting Installation',
    ctaLabel: 'Call for Lighting Installation',
    tagline: 'Indoor and outdoor lighting installation in Houston.',
    icon: 'Lightbulb',
    cardImage:
      'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Modern suburban home at dusk beautifully lit with exterior lighting in Houston',
    heroAlt: 'Person screwing a light bulb into a new fashionable lamp during a lighting installation renovation',
    metaTitle: 'Lighting Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Lighting installation in Houston, TX. Indoor, outdoor, and landscape lighting installation by S Branch Electric. Call 832-484-0514.',
    h1: 'Lighting Installation in Houston, TX',
    intro: [
      'S Branch Electric installs indoor and outdoor lighting for homes and businesses throughout Houston. From a single fixture replacement to a full lighting upgrade, proper installation ensures your lights work safely and look the way they should.',
      'Good lighting transforms a space. Whether you are upgrading interior fixtures or adding exterior and landscape lighting, calling to discuss your project is the first step.',
    ],
    whatItIs: [
      'Lighting installation is the process of mounting, wiring, and connecting light fixtures to the electrical system. This includes selecting the correct box and support, routing wiring, installing switches and controls, and verifying safe operation.',
      'Different fixtures have different requirements. Recessed lighting needs IC-rated housings in insulated ceilings, ceiling fans need fan-rated boxes, and outdoor fixtures need wet-location-rated equipment.',
    ],
    commonNeeds: [
      {
        title: 'Indoor Lighting',
        body: 'Recessed can lighting, flush mounts, chandeliers, vanity lights, and under-cabinet lighting all require proper box support and wiring.',
      },
      {
        title: 'Outdoor & Landscape Lighting',
        body: 'Exterior wall lights, post lights, pathway lighting, and landscape accent lighting need wet-location-rated fixtures and GFCI-protected circuits.',
      },
      {
        title: 'Ceiling Fans',
        body: 'Ceiling fans require fan-rated junction boxes and may need dedicated support above the ceiling, especially on heavier installations.',
      },
    ],
    considerations: [
      'Outdoor lighting fixtures and boxes must be rated for wet or damp locations.',
      'Recessed lighting in insulated ceilings requires IC-rated housings.',
      'Ceiling fans require fan-rated boxes rated for the weight and motion of the fan.',
      'Dimmer switches must be compatible with the fixture type, especially LED fixtures.',
    ],
    servicesProvided: [
      'Indoor light fixture installation',
      'Recessed lighting installation',
      'Outdoor and landscape lighting',
      'Ceiling fan installation',
      'Dimmer and switch installation',
      'Lighting circuit installation',
    ],
    faqs: [
      {
        question: 'Can you install outdoor lighting at my Houston home?',
        answer:
          'Yes. Outdoor wall lights, post lights, and landscape lighting are common installation requests. Fixtures must be rated for wet locations and the circuits GFCI-protected. Call 832-484-0514 to discuss your outdoor lighting project.',
      },
      {
        question: 'Do you install recessed lighting in Houston homes?',
        answer:
          'Yes. Recessed can lighting is a popular upgrade for Houston homes. In insulated ceilings, IC-rated housings are used. Call to discuss how many fixtures you want and where.',
      },
      {
        question: 'Can you install a ceiling fan where a light fixture currently is?',
        answer:
          'It depends on the existing junction box. Ceiling fans require a fan-rated box with proper support. If the current box is a standard light fixture box, it needs to be replaced before the fan can be safely installed. Call to discuss your situation.',
      },
    ],
  },
  {
    slug: 'outlet-installation',
    path: '/outlet-installation-houston-tx',
    name: 'Outlet & Switch Installation',
    shortName: 'Outlet & Switch Installation',
    ctaLabel: 'Call for Outlet Installation',
    tagline: 'Outlet, receptacle, and switch installation in Houston.',
    icon: 'PlugZap',
    cardImage:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Gloved hands using a drill to install a power outlet on a wall in Houston',
    heroAlt: 'Gloved hands using a drill to install a power outlet on a wall, focusing on precision and safety during installation',
    metaTitle: 'Outlet & Switch Installation in Houston, TX | S Branch Electric',
    metaDescription:
      'Outlet and switch installation in Houston, TX. GFCI outlets, grounded receptacles, dimmers, and smart switches by S Branch Electric. Call 832-484-0514.',
    h1: 'Outlet & Switch Installation in Houston, TX',
    intro: [
      'S Branch Electric installs and replaces outlets, receptacles, and switches for Houston homes and businesses. Whether you need an additional outlet, a GFCI upgrade, or a new switch, proper installation ensures the device works safely and meets code.',
      'Outlets and switches are the most frequently used parts of your electrical system, and also some of the most common items that need adding, upgrading, or replacing.',
    ],
    whatItIs: [
      'Outlet and switch installation is the process of mounting a receptacle or switch in a wall box, connecting it to the circuit wiring, securing it, and verifying safe operation. Different locations and applications require different device types.',
      'GFCI (ground-fault circuit interrupter) receptacles are required in kitchens, baths, garages, and outdoors. AFCI protection is required for many living-area circuits. Smart switches and dimmers have specific wiring and neutral-wire requirements.',
    ],
    commonNeeds: [
      {
        title: 'Adding Outlets',
        body: 'Homes often need additional receptacles for convenience, to eliminate extension cords, or to support new furniture layouts and home offices.',
      },
      {
        title: 'GFCI Outlet Upgrades',
        body: 'Replacing old two-prong or non-GFCI receptacles with grounded GFCI outlets in kitchens, baths, garages, and outdoor locations to meet current code.',
      },
      {
        title: 'Switch & Dimmer Installation',
        body: 'Installing dimmers for lighting control, replacing worn switches, or upgrading to smart switches with proper neutral-wire connections.',
      },
    ],
    considerations: [
      'GFCI protection is required by code in all wet or damp locations.',
      'Two-prong ungrounded receptacles should be upgraded to grounded, GFCI-protected outlets.',
      'Smart switches and dimmers may require a neutral wire at the switch box, which older homes may not have.',
      'Each new outlet must be connected to a circuit with adequate capacity for the intended load.',
    ],
    servicesProvided: [
      'Standard outlet installation',
      'GFCI outlet installation',
      'Two-prong to three-prong upgrades',
      'Dimmer switch installation',
      'Smart switch installation',
      'Outlet and switch replacement',
    ],
    faqs: [
      {
        question: 'Can you add an outlet anywhere in my Houston home?',
        answer:
          'In most cases, yes. Adding an outlet involves routing wiring from an existing circuit or the panel to the new location, installing a box, and connecting the receptacle. The circuit must have adequate capacity. Call 832-484-0514 to discuss where you want the outlet.',
      },
      {
        question: 'Should I replace my old two-prong outlets?',
        answer:
          'Two-prong outlets indicate ungrounded wiring. Upgrading to grounded, GFCI-protected receptacles improves safety and meets current code in most locations. Call to discuss an upgrade for your home.',
      },
      {
        question: 'Can you install a smart switch in my Houston home?',
        answer:
          'Many smart switches can be installed, but they often require a neutral wire at the switch box. Older homes may not have a neutral available at every switch. Call to discuss the specific switch and location you have in mind.',
      },
    ],
  },
  {
    slug: 'electrical-troubleshooting',
    path: '/electrical-troubleshooting-houston-tx',
    name: 'Electrical Troubleshooting & Repairs',
    shortName: 'Troubleshooting & Repairs',
    ctaLabel: 'Call for Electrical Troubleshooting',
    tagline: 'Diagnose and repair electrical problems in Houston.',
    icon: 'Wrench',
    cardImage:
      'https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroImage:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    cardAlt: 'Digital multimeter with electrical tools and circuit breakers used for Houston electrical troubleshooting',
    heroAlt: 'Electrician using a multimeter to diagnose and fix wiring in a control panel during an electrical troubleshooting service call',
    metaTitle: 'Electrical Troubleshooting & Repairs in Houston, TX | S Branch Electric',
    metaDescription:
      'Electrical troubleshooting and repairs in Houston, TX. Diagnose power outages, tripping breakers, and faulty wiring with S Branch Electric. Call 832-484-0514.',
    h1: 'Electrical Troubleshooting & Repairs in Houston, TX',
    intro: [
      'When something goes wrong with your electrical system, S Branch Electric diagnoses and repairs the problem for Houston homes and businesses. Troubleshooting is the process of identifying the cause of an electrical issue and performing the correct repair.',
      'Electrical problems can be frustrating and potentially hazardous. Calling at the first sign of trouble, whether a tripping breaker or a dead outlet, is the safest approach.',
    ],
    whatItIs: [
      'Electrical troubleshooting is the systematic process of diagnosing the cause of an electrical problem. Using meters and testers, the electrician traces the issue through the circuit to find the failed connection, damaged conductor, overloaded branch, or faulty device.',
      'Once the cause is identified, the repair may involve replacing a breaker, fixing a loose connection, replacing damaged wiring, or upgrading a device. The goal is a safe, lasting repair, not just a temporary fix.',
    ],
    commonNeeds: [
      {
        title: 'Tripping Breakers',
        body: 'A breaker that trips repeatedly needs diagnosis to determine whether the circuit is overloaded, there is a fault in the wiring, or the breaker itself has failed.',
      },
      {
        title: 'Dead Outlets or Circuits',
        body: 'Outlets or entire circuits that stop working may have a tripped GFCI, a broken wire, a failed backstab connection, or a damaged breaker.',
      },
      {
        title: 'Flickering or Dimming Lights',
        body: 'Lights that flicker or dim when appliances turn on can indicate a loose connection, an overloaded circuit, or a neutral problem that needs diagnosis.',
      },
    ],
    considerations: [
      'Houston storms can cause water intrusion that leads to wiring and breaker problems.',
      'Older homes with backstabbed outlet connections are prone to failed connections.',
      'A tripping GFCI may be reacting to a real ground fault, not a bad device.',
      'Repeatedly resetting a tripping breaker without diagnosis can be hazardous.',
    ],
    servicesProvided: [
      'Breaker tripping diagnosis and repair',
      'Dead outlet and circuit repair',
      'Flickering light diagnosis',
      'GFCI tripping diagnosis',
      'Wiring fault location and repair',
      'Electrical system inspection',
    ],
    faqs: [
      {
        question: 'My breaker keeps tripping in Houston. What should I do?',
        answer:
          'Stop resetting the breaker and call 832-484-0514. A tripping breaker is protecting the circuit from an overload or fault. Repeatedly resetting it without fixing the cause can be hazardous. Describe what is happening and arrange a service call.',
      },
      {
        question: 'Some outlets in my Houston home stopped working. Can you fix that?',
        answer:
          'Yes. Dead outlets are a common troubleshooting request. The cause can be a tripped GFCI upstream, a failed connection, or a damaged breaker. Call to describe which outlets are affected and arrange diagnosis.',
      },
      {
        question: 'Do you diagnose flickering lights?',
        answer:
          'Yes. Flickering or dimming lights can indicate a loose connection, an overloaded circuit, or a neutral problem. These should be diagnosed promptly, as loose connections can create heat. Call to describe the symptom and arrange service.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByPath = (path: string) => services.find((s) => s.path === path);
