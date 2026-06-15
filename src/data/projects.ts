export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  tags: string[];
  techStack: string[];
  role: string;
  year: string;
  links: { label: string; href: string; type: "code" | "live" | "prototype" | "casestudy" }[];
  sections: { heading: string; body: string }[];
}

export const projects: Project[] = [
  {
    id: "mcp-claude-salesforce",
    title: "MCP + Claude Integration Across Salesforce Orgs",
    subtitle: "AI · MCP · Multi-Org Salesforce",
    description: "Implemented Model Context Protocol (MCP) across multiple Salesforce orgs, connecting Claude directly to live org data and actions for real-time AI-powered CRM workflows.",
    longDescription: [
      "Implemented Model Context Protocol (MCP) across multiple Salesforce orgs at Saasinct Solutions, connecting Claude directly to live org data and actions.",
      "Enables AI-powered workflows where Claude can read and interact with org data in real time — going beyond static prompts to true contextual intelligence inside the CRM.",
    ],
    tags: ["MCP Implementation", "Claude Integration", "Multi-Org Deployment", "AI Workflow Design"],
    techStack: ["MCP (Model Context Protocol)", "Claude API", "Salesforce", "Node.js"],
    role: "Solution Engineer & AI Implementer",
    year: "2024 – Present",
    links: [
      { label: "Case Study", href: "/projects/mcp-claude-salesforce", type: "casestudy" },
    ],
    sections: [
      {
        heading: "The Opportunity",
        body: "Salesforce holds the richest operational data in most businesses, but AI tools typically can't access it dynamically. MCP creates a bridge — letting Claude reach into live org data rather than relying on static exports.",
      },
      {
        heading: "Implementation",
        body: "Configured MCP servers to expose Salesforce data and actions as tools accessible to Claude. Implemented across multiple client orgs with different data models and permission structures.",
      },
      {
        heading: "Multi-Org Complexity",
        body: "Each client org has unique object models, field names, and permission layers. Handling this at scale required a systematic approach to configuration and thorough testing in sandbox environments before production deployment.",
      },
      {
        heading: "Impact",
        body: "Teams can now ask Claude questions about their live Salesforce data and trigger actions directly through conversation — collapsing workflows that previously required multiple manual steps.",
      },
    ],
  },
  {
    id: "real-estate-sf-org",
    title: "Real Estate Investing Salesforce Org",
    subtitle: "Salesforce · Flow Automation · Custom Objects",
    description: "Built a custom Salesforce org from scratch to manage real estate investing workflows — covering leads, properties, active deals, and contractors with automated pipelines and dashboards.",
    longDescription: [
      "Built a custom Salesforce org from scratch to manage real estate investing workflows. Designed a full custom object model covering leads, properties, active deals, and contractors.",
      "Automated data entry through Flows and built dashboards to track pipeline health and profitability — turning a manual process into a fully instrumented CRM.",
    ],
    tags: ["Custom Object Modeling", "Flow Automation", "Dashboard Design"],
    techStack: ["Salesforce", "Flow Builder", "Lightning App Builder"],
    role: "Salesforce Developer & Admin",
    year: "2024 – Present",
    links: [
      { label: "Case Study", href: "/projects/real-estate-sf-org", type: "casestudy" },
    ],
    sections: [
      {
        heading: "The Challenge",
        body: "Real estate investing involves tracking dozens of moving parts across leads, properties, deals, and contractors — with no out-of-the-box CRM solution that covers all of it cleanly.",
      },
      {
        heading: "Custom Object Model",
        body: "Designed a full relational object model in Salesforce: custom objects for Properties, Deals, Contractors, and an extended Lead object with real-estate-specific fields. Lookup and master-detail relationships tie the data together.",
      },
      {
        heading: "Automation via Flows",
        body: "Record-triggered Flows automate data entry tasks — field updates, status transitions, and task creation — reducing manual input and ensuring data consistency across the pipeline.",
      },
      {
        heading: "Dashboards & Reporting",
        body: "Built Lightning dashboards to surface pipeline health, deal stage breakdowns, and profitability metrics in real time — giving a clear picture of portfolio performance at a glance.",
      },
    ],
  },
  {
    id: "agentforce-implementation",
    title: "Agentforce Implementation",
    subtitle: "AI Agents · Prompt Engineering · Salesforce",
    description: "Configured Agentforce across client environments — building custom Agents, designing Prompt Templates, and testing agent behavior through the full setup lifecycle to user-facing deployment.",
    longDescription: [
      "Configured Agentforce across client environments at Saasinct Solutions, building custom Agents, designing Prompt Templates, and testing agent behavior through in-org chat interactions.",
      "Work spans the full setup lifecycle from initial configuration to user-facing deployment, with thorough testing at each stage.",
    ],
    tags: ["Agentforce Setup", "Prompt Template Design", "AI Agent Testing"],
    techStack: ["Salesforce Agentforce", "Einstein AI", "Prompt Builder"],
    role: "Solution Engineer",
    year: "2024 – Present",
    links: [
      { label: "Case Study", href: "/projects/agentforce-implementation", type: "casestudy" },
    ],
    sections: [
      {
        heading: "Overview",
        body: "Agentforce brings AI-powered agents natively into Salesforce — capable of answering questions, taking actions, and guiding users through complex workflows without leaving the CRM.",
      },
      {
        heading: "Agent Configuration",
        body: "Built custom Agents with defined topics, instructions, and action sets tailored to each client's business context. Configuration involved mapping business processes to the actions and guardrails the agent would need.",
      },
      {
        heading: "Prompt Template Design",
        body: "Designed reusable Prompt Templates that give agents consistent, well-structured instructions. Carefully worded to balance specificity (so the agent behaves predictably) with flexibility (so it handles edge cases gracefully).",
      },
      {
        heading: "Testing & Deployment",
        body: "Tested agent behavior extensively through in-org chat before any client-facing rollout — surfacing edge cases, refining instructions, and ensuring the agent responded correctly across a range of real-world inputs.",
      },
    ],
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation & Platform Integration",
    subtitle: "Pardot · Campaign Monitor · Mailchimp · Salesforce",
    description: "Implemented Marketing Cloud Account Engagement (Pardot) for multiple clients, configured email platform syncs with Salesforce, and built monthly HTML email campaigns and LinkedIn outreach automation.",
    longDescription: [
      "Implemented Marketing Cloud Account Engagement (Pardot) for multiple client organizations at Saasinct Solutions. Configured Mailchimp and Campaign Monitor to sync with Salesforce.",
      "Built monthly HTML email campaigns and managed LinkedIn outreach automation via MeetAlfred for B2B communication workflows.",
    ],
    tags: ["Pardot Implementation", "Platform Integration", "HTML Email Development"],
    techStack: ["Marketing Cloud Account Engagement", "Campaign Monitor", "Mailchimp", "MeetAlfred", "Salesforce"],
    role: "Solution Engineer",
    year: "2024",
    links: [
      { label: "Case Study", href: "/projects/marketing-automation", type: "casestudy" },
    ],
    sections: [
      {
        heading: "Pardot Implementation",
        body: "Stood up Marketing Cloud Account Engagement (Pardot) for multiple financial firm clients — including prospect syncing, form handlers, email templates, and engagement studio automation programs.",
      },
      {
        heading: "Platform Integrations",
        body: "Configured Mailchimp and Campaign Monitor to sync leads and contact data with Salesforce, ensuring marketing activity was reflected in the CRM and sales teams had full visibility into engagement.",
      },
      {
        heading: "HTML Email Campaigns",
        body: "Built and deployed monthly email campaigns in Campaign Monitor using custom HTML/CSS — responsive, on-brand templates that performed consistently across clients and email clients.",
      },
      {
        heading: "LinkedIn Outreach",
        body: "Configured MeetAlfred sequences for B2B LinkedIn outreach, automating connection requests and follow-up messaging while keeping communication personalized and compliant.",
      },
    ],
  },
  {
    id: "data-migration",
    title: "Large-Scale Data Migration",
    subtitle: "Data Loader · Excel · QA · Salesforce",
    description: "Supported a data migration across 8+ Salesforce objects managing over 1 million records — handling data cleanup in Excel, executing via Data Loader, and running QA validation throughout.",
    longDescription: [
      "Supported a data migration across 8+ Salesforce objects managing over 1 million records at Saasinct Solutions.",
      "Handled data cleanup and transformation in Excel, executed migration via Data Loader, and ran QA validation throughout to ensure data integrity in the new environment.",
    ],
    tags: ["Data Loader", "Excel", "QA Testing", "Data Integrity"],
    techStack: ["Salesforce Data Loader", "Microsoft Excel", "SOQL"],
    role: "Solution Engineer",
    year: "2024",
    links: [
      { label: "Case Study", href: "/projects/data-migration", type: "casestudy" },
    ],
    sections: [
      {
        heading: "Scope",
        body: "Migration of 1M+ records across 8+ Salesforce objects including Accounts, Contacts, Opportunities, and custom objects specific to the client's financial services data model.",
      },
      {
        heading: "Data Preparation",
        body: "Cleaned and transformed source data in Excel — deduplication, field mapping, null handling, and data type normalization — before any records were loaded into Salesforce.",
      },
      {
        heading: "Migration Execution",
        body: "Executed the migration in staged batches using Salesforce Data Loader, moving from least- to most-dependent objects to respect lookup relationships and avoid orphaned records.",
      },
      {
        heading: "QA Validation",
        body: "Ran SOQL queries and manual spot-checks at each stage to validate record counts, field values, and relationship integrity — ensuring the migrated data matched the source with no silent failures.",
      },
    ],
  },
  {
    id: "pure-plate",
    title: "Pure Plate Cookbook",
    subtitle: "Brand Design · Web Development · UX/UI",
    description:
      "A cookbook app that allows you to create your own recipe, with ingredients, directions, and a picture.",
    longDescription: [
      "Pure Plate is a cookbook app that allows you to create your own recipe, with ingredients, directions, and a picture. The design started back in 2017 by using Adobe InDesign and Adobe XD.",
      "I created a cookbook design and a Brand Book for a fictitious company and used them to start to build out the Pure Plate app. By combining typography, design, and web development skills, this is my most exciting app I've worked on.",
    ],
    tags: ["Adobe XD", "Web Dev", "Branding"],
    techStack: ["HTML/CSS", "JavaScript", "Adobe XD", "Adobe InDesign"],
    role: "Designer & Developer",
    year: "2017 – Present",
    links: [
      { label: "Code", href: "https://github.com/amarchiori", type: "code" },
      { label: "Case Study", href: "/projects/pure-plate", type: "casestudy" },
    ],
    sections: [
      {
        heading: "The Challenge",
        body: "Design a cohesive brand identity and functional cookbook app from scratch — bridging print design sensibility with interactive web development.",
      },
      {
        heading: "Brand Identity",
        body: "The brand book established typography, color palette, logo usage, and visual voice for Pure Plate. Every element of the app design traces back to decisions made in the brand guide.",
      },
      {
        heading: "Development",
        body: "The app was built using core web technologies, allowing users to add recipes with ingredients, directions, and photos. The interface mirrors the clean, editorial feel of the original cookbook design.",
      },
      {
        heading: "Outcome",
        body: "A fully functional recipe app backed by a polished brand system — demonstrating how design thinking and web development skills reinforce each other.",
      },
    ],
  },
  {
    id: "attivita",
    title: "Attività App",
    subtitle: "Prototype Design · UX/UI",
    description:
      "A prototype design for an activity app. The Italian word Attività means Activity — a fun, playful app for searching nearby activities.",
    longDescription: [
      "Attività is a prototype design for an activity discovery app. The Italian word Attività translates to \"Activity\" in English.",
      "A fun, playful app designed to help users search for nearby activities to do in their spare time — from local events to outdoor adventures.",
    ],
    tags: ["Prototype", "UX/UI", "Adobe XD"],
    techStack: ["Adobe XD", "UX Research", "Prototyping"],
    role: "UX/UI Designer",
    year: "2022",
    links: [
      { label: "Prototype", href: "#", type: "prototype" },
      { label: "Case Study", href: "/projects/attivita", type: "casestudy" },
    ],
    sections: [
      {
        heading: "Concept",
        body: "The idea was to create a light, approachable app that removes friction from the \"what should we do today?\" question — surfacing nearby activities in a visually engaging way.",
      },
      {
        heading: "Design Process",
        body: "Starting with user flows and wireframes, the design evolved into a high-fidelity prototype in Adobe XD. Emphasis was placed on playful but legible typography and a warm, inviting color palette.",
      },
      {
        heading: "Prototype Features",
        body: "The interactive prototype covers onboarding, activity discovery by category, map integration, and activity detail screens — giving stakeholders a realistic feel of the full user journey.",
      },
      {
        heading: "Reflection",
        body: "This project sharpened my ability to translate a casual concept into structured UX flows, balancing personality with usability.",
      },
    ],
  },
  {
    id: "pmn-caecilia",
    title: "PNM Caecilia Monograph",
    subtitle: "Typography · Print Design · Editorial",
    description:
      "A monograph presenting the history and utility of the PMN Caecilia typeface, with original custom glyphs.",
    longDescription: [
      "The aim of this monograph is to present the history and utility of a typeface entitled PMN Caecilia. It contains a brief introduction to the history of the typeface and its usage throughout time.",
      "I also added my own glyphs — new characters in the font — to fully grasp the structure of the typeface. These custom glyphs have been implemented throughout the text.",
    ],
    tags: ["Typography", "InDesign", "Print"],
    techStack: ["Adobe InDesign", "Glyphs App", "Print Production"],
    role: "Designer & Typographer",
    year: "2020",
    links: [
      { label: "Live", href: "#", type: "live" },
      { label: "Case Study", href: "/projects/pmn-caecilia", type: "casestudy" },
    ],
    sections: [
      {
        heading: "Research",
        body: "Extensive research into the history of PMN Caecilia — a slab serif typeface designed by Peter Matthias Noordzij — covering its design principles, historical context, and typographic classification.",
      },
      {
        heading: "Custom Glyphs",
        body: "To deepen my understanding of type structure, I designed original glyphs that complement the existing character set. Each glyph was crafted to maintain consistency with Caecilia's proportions and stroke contrast.",
      },
      {
        heading: "Editorial Layout",
        body: "The monograph layout was set entirely in Adobe InDesign, applying strict typographic grid systems, careful leading, and considered white space to create a publication-quality document.",
      },
      {
        heading: "Outcome",
        body: "A complete, print-ready monograph that demonstrates both research depth and typographic craft — one of the most detail-oriented projects in my portfolio.",
      },
    ],
  },
  {
    id: "animated-poster",
    title: "Animated Poster",
    subtitle: "Motion Design · After Effects · Animation",
    description:
      "An exercise in motion graphic creation — learning After Effects from scratch to produce a cohesive animated poster.",
    longDescription: [
      "This project was an exercise in learning and adapting to new skills, as well as understanding the process of creating a motion graphic. I had never done anything like this before and had to learn how to use After Effects, animate, and make sure that everything was lined up correctly.",
      "The biggest challenge was making sure everything flowed together — timing, easing, and compositional balance all had to work in harmony.",
    ],
    tags: ["After Effects", "Motion", "Animation"],
    techStack: ["Adobe After Effects", "Adobe Illustrator"],
    role: "Motion Designer",
    year: "2021",
    links: [
      { label: "Case Study", href: "/projects/animated-poster", type: "casestudy" },
    ],
    sections: [
      {
        heading: "The Brief",
        body: "Create a fully animated poster from scratch — pushing beyond static design into motion, with no prior After Effects experience at the start of the project.",
      },
      {
        heading: "Learning Curve",
        body: "The project required self-directed learning: keyframing, easing curves, layer parenting, and timing. Each element was animated independently before being composited into the final sequence.",
      },
      {
        heading: "Execution",
        body: "Illustrations were prepared in Adobe Illustrator and imported as layered assets into After Effects. Careful attention was paid to how each element entered and exited frame to maintain visual coherence.",
      },
      {
        heading: "Takeaway",
        body: "This project proved the value of learning by doing — the constraints of an unfamiliar tool pushed creative problem-solving and resulted in a motion piece I'm genuinely proud of.",
      },
    ],
  },
];
