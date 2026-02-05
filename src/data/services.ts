export type IconName =
  | "BarChart3"
  | "Target"
  | "Search"
  | "Users"
  | "Settings"
  | "RefreshCcw"
  | "ShoppingCart"
  | "Shield"
  | "Brain"
  | "GraduationCap";

export interface Service {
  slug: string;
  iconName: IconName;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

export const services: Service[] = [
  {
    slug: "digital-marketing-analytics",
    iconName: "BarChart3",
    title: "Digital Marketing Analytics",
    shortDescription:
      "We analyze and interpret digital marketing data to provide valuable insights into campaign effectiveness.",
    fullDescription:
      "Our Digital Marketing Analytics service goes beyond basic reporting to deliver actionable insights that drive real business results. We specialize in analyzing and interpreting complex marketing data to help you understand what's working, what isn't, and where your best opportunities lie.",
    benefits: [
      "Data-driven decision making",
      "Improved ROI on marketing spend",
      "Clear visibility into customer behavior",
      "Competitive advantage through insights",
      "Optimized marketing campaigns",
    ],
    features: [
      {
        title: "Custom Dashboard Development",
        description: "Tailored dashboards that visualize your most important KPIs in real-time.",
      },
      {
        title: "Conversion Tracking",
        description: "Advanced tracking setup to measure every touchpoint in the customer journey.",
      },
      {
        title: "Attribution Modeling",
        description: "Understand which channels and campaigns are truly driving conversions.",
      },
      {
        title: "Predictive Analytics",
        description: "Use AI to forecast trends and identify opportunities before competitors.",
      },
    ],
    process: [
      { step: 1, title: "Audit", description: "We analyze your current analytics setup and identify gaps." },
      { step: 2, title: "Implementation", description: "Set up comprehensive tracking across all channels." },
      { step: 3, title: "Analysis", description: "Deep dive into data to uncover actionable insights." },
      { step: 4, title: "Optimization", description: "Continuous improvement based on data-driven decisions." },
    ],
    caseStudy: {
      client: "E-commerce Retailer",
      challenge: "Unable to track customer journey across multiple touchpoints.",
      solution: "Implemented cross-device tracking and attribution modeling.",
      result: "35% increase in marketing ROI within 3 months.",
    },
  },
  {
    slug: "digital-marketing-strategy",
    iconName: "Target",
    title: "Digital Marketing Strategy",
    shortDescription:
      "Comprehensive digital marketing strategies tailored to each business's unique needs and goals.",
    fullDescription:
      "We develop comprehensive digital marketing strategies that align with your business objectives and target audience. Our strategic approach ensures every marketing dollar is invested wisely across the most effective channels for your specific industry and goals.",
    benefits: [
      "Clear roadmap for digital success",
      "Aligned marketing and business goals",
      "Efficient resource allocation",
      "Competitive market positioning",
      "Measurable outcomes and KPIs",
    ],
    features: [
      {
        title: "Market Research & Analysis",
        description: "Deep understanding of your market, competitors, and customer segments.",
      },
      {
        title: "Channel Strategy",
        description: "Identify and prioritize the most effective marketing channels for your business.",
      },
      {
        title: "Content Strategy",
        description: "Develop a content plan that resonates with your audience and drives engagement.",
      },
      {
        title: "Campaign Planning",
        description: "Detailed campaign roadmaps with timelines, budgets, and success metrics.",
      },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand your business, goals, and current state." },
      { step: 2, title: "Research", description: "Analyze market, competitors, and customer insights." },
      { step: 3, title: "Strategy Development", description: "Create a comprehensive digital strategy." },
      { step: 4, title: "Execution Support", description: "Help implement and optimize the strategy." },
    ],
  },
  {
    slug: "seo-services",
    iconName: "Search",
    title: "SEO Services & Strategy",
    shortDescription:
      "Improve organic visibility through keyword research, content optimization, and advanced SEO techniques.",
    fullDescription:
      "Our SEO services are designed to improve your organic visibility and drive qualified traffic to your website. We use a combination of technical optimization, content strategy, and link building to help you rank higher and attract more customers.",
    benefits: [
      "Increased organic traffic",
      "Higher search engine rankings",
      "Improved website authority",
      "Better user experience",
      "Long-term sustainable results",
    ],
    features: [
      {
        title: "Technical SEO Audit",
        description: "Comprehensive analysis of your website's technical health and performance.",
      },
      {
        title: "Keyword Research",
        description: "Identify high-value keywords that your target audience is searching for.",
      },
      {
        title: "On-Page Optimization",
        description: "Optimize content, meta tags, and structure for better rankings.",
      },
      {
        title: "Link Building",
        description: "Build high-quality backlinks to increase domain authority.",
      },
    ],
    process: [
      { step: 1, title: "SEO Audit", description: "Analyze current SEO performance and identify issues." },
      { step: 2, title: "Keyword Strategy", description: "Develop a targeted keyword strategy." },
      { step: 3, title: "Optimization", description: "Implement on-page and technical improvements." },
      { step: 4, title: "Link Building", description: "Build quality backlinks and authority." },
    ],
    caseStudy: {
      client: "B2B SaaS Company",
      challenge: "Low organic visibility in competitive market.",
      solution: "Comprehensive SEO strategy with technical fixes and content optimization.",
      result: "200% increase in organic traffic in 6 months.",
    },
  },
  {
    slug: "affiliate-marketing",
    iconName: "Users",
    title: "Affiliate Marketing",
    shortDescription:
      "Guidance on implementing and managing affiliate marketing programs.",
    fullDescription:
      "We help businesses establish and manage profitable affiliate marketing programs. From partner recruitment to performance optimization, we provide end-to-end support to maximize your affiliate channel revenue.",
    benefits: [
      "Performance-based marketing",
      "Expanded reach through partners",
      "Lower customer acquisition costs",
      "Scalable revenue growth",
      "Brand awareness expansion",
    ],
    features: [
      {
        title: "Program Setup",
        description: "Design and launch your affiliate program with the right structure and incentives.",
      },
      {
        title: "Partner Recruitment",
        description: "Identify and onboard high-quality affiliate partners in your niche.",
      },
      {
        title: "Performance Tracking",
        description: "Implement tracking to monitor affiliate performance and optimize results.",
      },
      {
        title: "Commission Management",
        description: "Set up fair and motivating commission structures.",
      },
    ],
    process: [
      { step: 1, title: "Program Design", description: "Create the affiliate program structure." },
      { step: 2, title: "Partner Recruitment", description: "Find and onboard quality affiliates." },
      { step: 3, title: "Launch", description: "Launch the program with proper tracking." },
      { step: 4, title: "Optimize", description: "Monitor and optimize for best results." },
    ],
  },
  {
    slug: "technology-implementation",
    iconName: "Settings",
    title: "Technology Implementation",
    shortDescription:
      "Expert advice on selecting and implementing digital tools like CRM systems and marketing automation.",
    fullDescription:
      "We advise on the selection and implementation of digital tools and technologies that align with your business objectives. From CRM systems to marketing automation platforms, we ensure you have the right technology stack to succeed.",
    benefits: [
      "Streamlined operations",
      "Better data management",
      "Improved team productivity",
      "Enhanced customer experience",
      "Scalable technology foundation",
    ],
    features: [
      {
        title: "Technology Assessment",
        description: "Evaluate your current tech stack and identify gaps and opportunities.",
      },
      {
        title: "Vendor Selection",
        description: "Help you choose the right tools for your specific needs and budget.",
      },
      {
        title: "Implementation Support",
        description: "Guide you through the implementation process for seamless adoption.",
      },
      {
        title: "Integration Services",
        description: "Connect your tools for seamless data flow across platforms.",
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current technology and needs." },
      { step: 2, title: "Selection", description: "Recommend and select the right tools." },
      { step: 3, title: "Implementation", description: "Deploy and configure the technology." },
      { step: 4, title: "Training", description: "Train your team on the new systems." },
    ],
  },
  {
    slug: "digital-transformation",
    iconName: "RefreshCcw",
    title: "Digital Transformation",
    shortDescription:
      "Guide your business through embracing digital technologies and transforming operations.",
    fullDescription:
      "We guide businesses through the process of embracing digital technologies and transforming their operations to become more digitally-focused. Our approach ensures a smooth transition while maximizing the benefits of digital innovation.",
    benefits: [
      "Modernized business processes",
      "Improved operational efficiency",
      "Enhanced customer experiences",
      "Data-driven culture",
      "Future-proof operations",
    ],
    features: [
      {
        title: "Digital Maturity Assessment",
        description: "Evaluate your organization's current digital capabilities.",
      },
      {
        title: "Transformation Roadmap",
        description: "Create a phased plan for digital transformation.",
      },
      {
        title: "Change Management",
        description: "Support organizational change and employee adoption.",
      },
      {
        title: "Process Automation",
        description: "Identify and automate manual processes for efficiency.",
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate digital maturity and readiness." },
      { step: 2, title: "Strategy", description: "Develop transformation roadmap." },
      { step: 3, title: "Implementation", description: "Execute transformation initiatives." },
      { step: 4, title: "Adoption", description: "Drive organizational change and adoption." },
    ],
    caseStudy: {
      client: "Traditional Manufacturer",
      challenge: "Legacy systems and manual processes hindering growth.",
      solution: "Comprehensive digital transformation with new systems and processes.",
      result: "40% improvement in operational efficiency.",
    },
  },
  {
    slug: "ecommerce-solutions",
    iconName: "ShoppingCart",
    title: "E-commerce Solutions",
    shortDescription:
      "Set up and optimize online stores, integrate payment gateways, and improve the customer journey.",
    fullDescription:
      "We assist businesses in setting up and optimizing their online stores for maximum conversions. From platform selection to checkout optimization, we ensure your e-commerce operation is built for success.",
    benefits: [
      "Increased online sales",
      "Improved conversion rates",
      "Better customer experience",
      "Streamlined operations",
      "Scalable infrastructure",
    ],
    features: [
      {
        title: "Platform Selection",
        description: "Choose the right e-commerce platform for your business needs.",
      },
      {
        title: "Store Setup",
        description: "Design and build a high-converting online store.",
      },
      {
        title: "Payment Integration",
        description: "Integrate secure payment gateways and checkout optimization.",
      },
      {
        title: "Conversion Optimization",
        description: "Optimize the shopping experience to maximize sales.",
      },
    ],
    process: [
      { step: 1, title: "Planning", description: "Define requirements and select platform." },
      { step: 2, title: "Development", description: "Build and customize the store." },
      { step: 3, title: "Integration", description: "Connect payments, shipping, and inventory." },
      { step: 4, title: "Launch & Optimize", description: "Launch and continuously improve." },
    ],
  },
  {
    slug: "digital-security",
    iconName: "Shield",
    title: "Digital Security & Risk Management",
    shortDescription:
      "Protect your business from cyber threats with security assessments and safeguard measures.",
    fullDescription:
      "We prioritize digital security to protect businesses from evolving cyber threats. Our experts assess vulnerabilities, develop robust security strategies, and implement effective measures to safeguard your digital assets.",
    benefits: [
      "Protected business data",
      "Reduced security risks",
      "Regulatory compliance",
      "Customer trust",
      "Business continuity",
    ],
    features: [
      {
        title: "Security Assessment",
        description: "Comprehensive evaluation of your security posture and vulnerabilities.",
      },
      {
        title: "Risk Management",
        description: "Identify, assess, and mitigate digital risks.",
      },
      {
        title: "Security Implementation",
        description: "Deploy security measures and best practices.",
      },
      {
        title: "Incident Response",
        description: "Prepare for and respond to security incidents.",
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current security posture." },
      { step: 2, title: "Strategy", description: "Develop security improvement plan." },
      { step: 3, title: "Implementation", description: "Deploy security measures." },
      { step: 4, title: "Monitoring", description: "Ongoing monitoring and response." },
    ],
  },
  {
    slug: "ai-powered-solutions",
    iconName: "Brain",
    title: "AI-Powered Solutions",
    shortDescription:
      "Cutting-edge AI technologies including chatbots, predictive analytics, and automation.",
    fullDescription:
      "We provide cutting-edge artificial intelligence technologies to enhance your digital presence and drive exceptional results. From AI chatbots to predictive analytics, we help you harness the power of AI for competitive advantage.",
    benefits: [
      "Enhanced customer experience",
      "Automated operations",
      "Predictive insights",
      "Personalized interactions",
      "Competitive advantage",
    ],
    features: [
      {
        title: "AI Chatbots",
        description: "Deploy intelligent chatbots for 24/7 customer support.",
      },
      {
        title: "Predictive Analytics",
        description: "Use AI to forecast trends and customer behavior.",
      },
      {
        title: "Marketing Automation",
        description: "AI-powered marketing automation for personalization at scale.",
      },
      {
        title: "Data Analysis",
        description: "Advanced AI analysis to uncover hidden insights.",
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Identify AI opportunities in your business." },
      { step: 2, title: "Design", description: "Design AI solutions tailored to your needs." },
      { step: 3, title: "Development", description: "Build and train AI models." },
      { step: 4, title: "Deployment", description: "Deploy and optimize AI solutions." },
    ],
    caseStudy: {
      client: "Financial Services Firm",
      challenge: "High volume of customer inquiries overwhelming support team.",
      solution: "Implemented AI chatbot with natural language processing.",
      result: "70% reduction in support tickets and 24/7 availability.",
    },
  },
  {
    slug: "training-education",
    iconName: "GraduationCap",
    title: "Training & Education",
    shortDescription:
      "Training programs on digital marketing, analytics, and emerging technologies for your team.",
    fullDescription:
      "We offer training programs and workshops to educate businesses and their employees on various digital topics. From social media management to digital advertising, we help your team develop the skills needed for digital success.",
    benefits: [
      "Skilled workforce",
      "Reduced dependency on agencies",
      "Better internal capabilities",
      "Continuous improvement culture",
      "Employee engagement",
    ],
    features: [
      {
        title: "Custom Training Programs",
        description: "Tailored training content for your specific needs and skill levels.",
      },
      {
        title: "Workshop Facilitation",
        description: "Interactive workshops for hands-on learning.",
      },
      {
        title: "Certification Programs",
        description: "Help your team earn industry certifications.",
      },
      {
        title: "Ongoing Support",
        description: "Post-training support and resources for continued learning.",
      },
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "Identify skill gaps and training needs." },
      { step: 2, title: "Curriculum Design", description: "Develop customized training content." },
      { step: 3, title: "Delivery", description: "Deliver training through preferred format." },
      { step: 4, title: "Follow-up", description: "Assess learning and provide ongoing support." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
