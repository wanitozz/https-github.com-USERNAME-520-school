const ADMIN_NUMBER = "254700520520";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const asset = (name) => `/images/${name}`;

const state = {
  heroIndex: 0,
  sound: false,
  audio: null,
  ambient: null,
  activeAdmin: "overview"
};

const navItems = [
  ["academy", "Academy"],
  ["streaming", "Streaming"],
  ["membership-funding", "Funding"],
  ["talent-discovery", "Talent"],
  ["critics", "Critics"],
  ["merchandise", "Merch"],
  ["film-jobs-board", "Jobs"],
  ["contact", "Contact"]
];

const ecosystemLinks = [
  ["about-us", "About Us", "Mission, founder, team, timeline, portfolio, services, and movement applications."],
  ["partners", "Partners & Clients", "Trust, case studies, logos, sponsor packages, workflows, and company profile."],
  ["critics", "Critics", "Anonymous comments, roasts, polls, memes, suggestions, and moderation."],
  ["merchandise", "Merchandise", "Drops, creator marketplace, inventory, payments, and advertiser placement."],
  ["membership-funding", "Membership & Funding", "Monthly membership, film funding, transparency, voting, and investor reports."],
  ["streaming", "Streaming", "Originals, shorts, documentaries, trailers, subtitles, watchlists, and recommendations."],
  ["talent-discovery", "Talent Discovery", "Reels, scripts, music, photos, portfolios, profiles, voting, and spotlights."],
  ["screenplay-marketplace", "Screenplay Marketplace", "Script uploads, selling, producer connections, previews, and funding goals."],
  ["film-jobs-board", "Film Jobs Board", "Casting calls, crew roles, internships, remote work, and applications."],
  ["equipment-rental", "Equipment Rental", "Cameras, drones, lights, lenses, sound, suites, bookings, and policies."],
  ["film-festival", "Film Festival", "Submissions, screenings, awards, livestreams, tickets, and audience voting."],
  ["documentary-research-hub", "Documentary Research Hub", "Archives, oral stories, timelines, maps, references, and preservation."],
  ["ai-creator-lab", "AI Creator Lab", "Tutorials, prompt packs, subtitle generation, search, analytics, and moderation."],
  ["live-tv-events", "Live TV / Events", "Livestreams, BTS broadcasts, workshops, premieres, Q&As, and interviews."],
  ["impact", "Impact", "Jobs, youth trained, counties reached, businesses supported, and creator success."],
  ["investor-relations", "Investor Relations", "Revenue model, projections, charts, audience metrics, packages, and roadmap."],
  ["creator-community", "Creator Community", "Profiles, collaboration rooms, production groups, discussions, and messaging."],
  ["press-media-kit", "Press / Media Kit", "Logos, guidelines, photos, releases, company bio, and contacts."],
  ["events", "Events", "Screenings, festivals, workshops, meetups, networking, and tickets."],
  ["careers", "Careers", "Open jobs, casting, crew hiring, remote roles, internships, and volunteer applications."],
  ["blog-journal", "Blog / Journal", "Essays, diaries, industry insights, articles, and behind-the-scenes writing."],
  ["contact", "Contact", "WhatsApp, email, social links, Google Maps, media inquiries, and forms."],
  ["admin", "Admin Dashboard", "Content, memberships, analytics, courses, moderation, revenue, merchandise, users, and AI."]
];

const heroSlides = [
  {
    image: "hero-nairobi-afterlight.jpg",
    title: ["520", "School"],
    eyebrow: "Kenyan stories. Future systems.",
    text: "A cinematic media-tech ecosystem where film school, streaming, community, funding, jobs, commerce, archives, and talent discovery move as one living platform."
  },
  {
    image: "frame-studio-520.jpg",
    title: ["Learn", "Make"],
    eyebrow: "Film academy and production lab",
    text: "Courses, mentorship, gear access, internships, AI workflows, and professional production pipelines built for young African creators."
  },
  {
    image: "frame-savannah-signal.jpg",
    title: ["Fund", "Release"],
    eyebrow: "Community-powered cinema",
    text: "Members and investors can back public film concepts, follow transparent budgets, vote on productions, and share in measurable cultural impact."
  }
];

const projects = [
  {
    slug: "after-the-rain",
    title: "After The Rain",
    format: "Feature film concept",
    image: "frame-mombasa-dreams.jpg",
    logline: "A Mombasa sound recordist returns home to document a disappearing neighborhood and finds the city speaking back.",
    tags: ["Drama", "Coastal Kenya", "In development"],
    budget: "KES 9.4M",
    progress: 64,
    team: "Director: Amani Njoroge, Producer: 520 Studio, Sound: Baraza Lab",
    timeline: "Research now, principal photography Q4 2026, festival release 2027"
  },
  {
    slug: "signal-hill",
    title: "Signal Hill",
    format: "Documentary series",
    image: "frame-savannah-signal.jpg",
    logline: "Young drone pilots map oral histories across counties where elders, farms, music, and technology collide.",
    tags: ["Documentary", "Archive", "Counties"],
    budget: "KES 12M",
    progress: 41,
    team: "Showrunner: Musa Omondi, Archive Lead: Wanjiku M, Drone Unit: Rift Film Crew",
    timeline: "County research Q2 2026, pilot episode Q3 2026"
  },
  {
    slug: "the-last-matinee",
    title: "The Last Matinee",
    format: "Short film",
    image: "frame-festival.jpg",
    logline: "On the night Nairobi's oldest cinema closes, five strangers fight to keep one final screening alive.",
    tags: ["Short", "Nairobi", "Crowdfunded"],
    budget: "KES 2.1M",
    progress: 82,
    team: "Writer: Kendi A, Cast: open submissions, Editor: 520 School graduates",
    timeline: "Casting now, production June 2026"
  }
];

const courseCategories = [
  "All",
  "Directing",
  "Cinematography",
  "Editing",
  "Sound Design",
  "Scriptwriting",
  "Acting",
  "Documentary filmmaking",
  "AI filmmaking",
  "Color grading",
  "Production design",
  "Drone cinematography",
  "Film business",
  "Distribution",
  "Marketing",
  "Creative entrepreneurship"
];

const courses = [
  ["Directing", "Director's Eye", "Turn emotion, blocking, visual grammar, and actor trust into scenes that feel alive.", "8 weeks", "Intermediate", "KES 24,500", "Nairobi, Kisumu, Mombasa", "Nairobi Creative Hub", "frame-director.jpg", "Amani Njoroge"],
  ["Cinematography", "Light For Story", "Camera movement, lenses, exposure, natural light, and cinematic language for lean African sets.", "6 weeks", "Beginner", "KES 18,000", "Nairobi, Nakuru", "Nairobi Creative Hub", "frame-mombasa-dreams.jpg", "Brian Mwangi"],
  ["Editing", "The Cut Room", "Rhythm, continuity, documentary structure, trailers, reels, and social-first post workflows.", "5 weeks", "Beginner", "KES 15,500", "Online, Nairobi", "Online Studio", "frame-studio-520.jpg", "Terry Atieno"],
  ["Sound Design", "Invisible Cinema", "Location sound, atmospheres, voice cleanup, Foley, music beds, and emotional mix decisions.", "4 weeks", "Intermediate", "KES 16,800", "Nairobi, Mombasa", "Mombasa Sound Room", "frame-archive.jpg", "Baraza Kibe"],
  ["Scriptwriting", "Story Engine", "Premise, structure, character pressure, dialogue, pitch decks, and Kenyan genre worldbuilding.", "8 weeks", "All levels", "KES 21,000", "Online, Eldoret, Nairobi", "Online Studio", "frame-community.jpg", "Kendi Akoth"],
  ["Acting", "Screen Presence", "Camera acting, auditions, self-tapes, emotional truth, movement, and professional set behavior.", "6 weeks", "All levels", "KES 17,500", "Nairobi, Kisumu", "Kisumu Arts Lab", "frame-director.jpg", "Neema Kariuki"],
  ["Documentary filmmaking", "Truth With Teeth", "Research, access, ethics, interview design, archival systems, and impact campaigns.", "10 weeks", "Advanced", "KES 28,000", "Online, Nairobi, Turkana pop-ups", "Nairobi Creative Hub", "frame-savannah-signal.jpg", "Musa Omondi"],
  ["AI filmmaking", "AI Creator Lab", "Prompt systems, image-to-video workflows, synthetic storyboards, voice tools, and ethical use.", "4 weeks", "Beginner", "KES 12,500", "Online, Nairobi", "Online Studio", "frame-ai-lab.jpg", "Lorna Wairimu"],
  ["Color grading", "African Skin, Real Light", "Resolve workflow, skin tones, documentary palettes, LUT discipline, and delivery specs.", "5 weeks", "Intermediate", "KES 19,000", "Nairobi", "Nairobi Creative Hub", "frame-mombasa-dreams.jpg", "Ivy Mutiso"],
  ["Production design", "Worlds You Can Touch", "Props, wardrobe, locations, texture, continuity, and production value on lean budgets.", "5 weeks", "Beginner", "KES 16,000", "Nairobi, Mombasa", "Mombasa Sound Room", "merch-poster.jpg", "Salim Omar"],
  ["Drone cinematography", "Sky Language", "Flight safety, composition, county landscapes, permits, mapping, and aerial story grammar.", "3 weeks", "Intermediate", "KES 22,000", "Nairobi, Naivasha, Eldoret", "Eldoret Field Unit", "frame-savannah-signal.jpg", "Dennis Kiptoo"],
  ["Film business", "The Producer's Ledger", "Budgeting, contracts, rights, payroll, investor reporting, and production company survival.", "6 weeks", "Advanced", "KES 25,000", "Online, Nairobi", "Online Studio", "frame-studio-520.jpg", "Faith Muthoni"],
  ["Distribution", "From Premiere To Platform", "Festivals, streaming windows, community screenings, captions, deliverables, and sales.", "4 weeks", "Intermediate", "KES 14,000", "Online", "Online Studio", "frame-festival.jpg", "Noel Otieno"],
  ["Marketing", "Audience Before Release", "Trailers, posters, short-form campaigns, press kits, premieres, and fan communities.", "4 weeks", "All levels", "KES 13,500", "Online, Nairobi", "Online Studio", "merch-poster.jpg", "Maureen Wekesa"],
  ["Creative entrepreneurship", "Build The Studio", "Pricing, clients, brand systems, teams, retainers, community, and creative business models.", "8 weeks", "All levels", "KES 23,000", "Nairobi, Online", "Nairobi Creative Hub", "frame-community.jpg", "Victor Okello"]
].map((item, index) => ({
  id: `course-${index}`,
  category: item[0],
  title: item[1],
  description: item[2],
  duration: item[3],
  difficulty: item[4],
  price: item[5],
  locations: item[6],
  center: item[7],
  image: item[8],
  instructor: item[9],
  online: "Live online cohort, offline downloads, WhatsApp support",
  mini: "MasterClass mini version: 90 minute cinematic session",
  full: "Full professional version: cohort projects, critique, certification",
  reviews: ["The most practical creative class I have taken.", "The mentor feedback felt like a real production room."],
  certification: "520 School certificate with portfolio review and production credits"
}));

const creators = [
  ["Wanjiku M.", "Archive researcher and documentary producer", "frame-archive.jpg", "Oral histories, impact docs, field interviews"],
  ["Dennis Kiptoo", "Drone cinematographer", "frame-savannah-signal.jpg", "Aerial landscape reels and county mapping"],
  ["Neema Kariuki", "Actor and casting lead", "frame-director.jpg", "Self-tapes, youth drama, screen tests"],
  ["Lorna Wairimu", "AI filmmaker", "frame-ai-lab.jpg", "Prompt packs, synthetic storyboards, AI edit tests"],
  ["Terry Atieno", "Editor", "frame-studio-520.jpg", "Trailers, short docs, music videos"],
  ["Salim Omar", "Production designer", "merch-poster.jpg", "Props, wardrobe, visual research"]
];

const products = [
  ["520 Origins Hoodie", "Heavy fleece, embroidered mark, numbered drop.", "merch-hoodie.jpg", "KES 4,800", "38 left"],
  ["County Cinema Cap", "Low profile cap for field shoots and festival queues.", "merch-cap.jpg", "KES 1,600", "71 left"],
  ["After The Rain Poster", "Museum matte poster from the first 520 slate.", "merch-poster.jpg", "KES 1,200", "120 left"],
  ["Creator Utility Pouch", "Cards, batteries, lav tape, drives, and set survival.", "frame-studio-520.jpg", "KES 2,200", "45 left"],
  ["Limited Crew Jacket", "Black shell, warm lining, reflective 520 detail.", "frame-community.jpg", "KES 6,900", "18 left"],
  ["Partner Brand Shelf", "Creator-made accessories rotating monthly.", "frame-festival.jpg", "From KES 900", "Open slots"]
];

const streamingRows = {
  Originals: projects,
  "Short films": [
    { title: "Sunday Best", image: "frame-community.jpg", logline: "A choir rehearsal turns into a family confession." },
    { title: "Two Shillings", image: "frame-mombasa-dreams.jpg", logline: "A conductor finds a lost memory in a bus receipt." },
    { title: "Night Shift", image: "frame-studio-520.jpg", logline: "An editor meets the ghost inside unfinished footage." }
  ],
  Documentaries: [
    { title: "Signal Hill", image: "frame-savannah-signal.jpg", logline: "Drone pilots and elders map oral histories." },
    { title: "Mtaa Archive", image: "frame-archive.jpg", logline: "Families digitize the photographs that built Nairobi." },
    { title: "Sound Of Coast", image: "frame-mombasa-dreams.jpg", logline: "Taarab, club sound, and the memory of port cities." }
  ],
  Trailers: [
    { title: "The Last Matinee", image: "frame-festival.jpg", logline: "The final screening before a cinema goes dark." },
    { title: "AI Test Reel 01", image: "frame-ai-lab.jpg", logline: "Experiments from the 520 AI Creator Lab." },
    { title: "Graduates 2026", image: "frame-director.jpg", logline: "A class film from the first directing cohort." }
  ]
};

const jobs = [
  ["Casting Call", "Lead actors for The Last Matinee", "Nairobi", "Paid", "Auditions May 28"],
  ["Camera Operator", "County documentary field unit", "Kisumu", "Contract", "Drone skill a plus"],
  ["Editing Intern", "Trailer and social cuts", "Remote", "Internship", "Portfolio required"],
  ["Sound Engineer", "Location dialogue and mix support", "Mombasa", "Paid", "Own kit preferred"],
  ["Production Assistant", "Festival prep and set logistics", "Nairobi", "Volunteer/Paid", "Entry friendly"],
  ["Motion Designer", "Streaming title cards", "Remote", "Contract", "After Effects or Blender"]
];

const featurePages = {
  "screenplay-marketplace": {
    eyebrow: "Screenplay marketplace",
    title: "Scripts should move like currency.",
    subtitle: "Upload scripts, sell options, pitch film concepts, meet producers, form writing rooms, and track funding goals from idea to production.",
    image: "frame-archive.jpg",
    stats: [["120", "Active scripts"], ["34", "Producer connections"], ["KES 8.2M", "Funding goals"]],
    cards: [
      ["Genre filtering", "Drama, comedy, thriller, animation, documentary, horror, sci-fi, and county-specific story worlds."],
      ["Writer profiles", "Credits, samples, pitch decks, collaboration status, representation needs, and availability."],
      ["Production status", "Drafting, optioned, packaging, funded, in production, festival, or streaming-ready."],
      ["Screenplay previews", "Watermarked first pages, loglines, tone references, and buyer-safe request flows."],
      ["Script selling", "Option requests, purchase inquiries, NDA prompts, and producer contact routing."],
      ["Collaboration", "Co-writers, directors, actors, researchers, and producers can build a team around a story."]
    ],
    form: "Pitch or upload a screenplay"
  },
  "equipment-rental": {
    eyebrow: "Equipment rental",
    title: "Tools for the next shot.",
    subtitle: "Rent cameras, drones, lights, lenses, microphones, stabilizers, and editing suites with availability, pickup locations, and clear policies.",
    image: "frame-studio-520.jpg",
    stats: [["86", "Items tracked"], ["5", "Pickup points"], ["24h", "Fast bookings"]],
    cards: [
      ["Cameras", "Cinema bodies, mirrorless kits, action cameras, and student-friendly starter bundles."],
      ["Drones", "Aerial kits with licensed pilots, county travel options, and flight safety checks."],
      ["Lights", "LED panels, tubes, practicals, stands, modifiers, and low-power documentary packs."],
      ["Lenses", "Prime sets, zooms, vintage looks, adapters, filters, and cleaning support."],
      ["Sound", "Shotguns, lavs, recorders, headphones, boom poles, and wind protection."],
      ["Editing suites", "Book calibrated stations for grading, edit reviews, and supervised exports."]
    ],
    form: "Request a rental booking"
  },
  "film-festival": {
    eyebrow: "Film festival",
    title: "Premieres with a pulse.",
    subtitle: "Submit films, screen online, sell tickets, livestream Q&As, vote for audience awards, and spotlight creators across the continent.",
    image: "frame-festival.jpg",
    stats: [["48", "Submissions open"], ["9", "Awards"], ["3", "Livestream stages"]],
    cards: [
      ["Festival submissions", "Shorts, features, docs, AI experiments, music videos, student films, and scripts."],
      ["Online screenings", "Timed windows, member access, subtitles, watch parties, and audience voting."],
      ["Awards", "Best Story, Best Documentary, New Voice, Sound, Edit, Cinematography, Audience, AI, Impact."],
      ["Livestreams", "Premieres, panels, creator interviews, workshops, and sponsor segments."],
      ["Tickets", "Early bird, student, day pass, county pass, creator pass, and VIP packages."],
      ["Spotlights", "Monthly films from emerging makers with critic notes and production breakdowns."]
    ],
    form: "Submit to the festival"
  },
  "documentary-research-hub": {
    eyebrow: "Documentary research hub",
    title: "Memory deserves infrastructure.",
    subtitle: "African history archives, oral storytelling, timelines, maps, interviews, and cultural preservation projects for filmmakers and researchers.",
    image: "frame-archive.jpg",
    stats: [["1,900", "Archive entries"], ["21", "Oral history maps"], ["14", "Research partners"]],
    cards: [
      ["African history archives", "Themes, locations, families, events, public records, community photography, and references."],
      ["Oral storytelling", "Elder interviews, translation notes, consent records, transcripts, and audio logs."],
      ["Interactive timelines", "County history, independence eras, music scenes, migration, sports, climate, and youth culture."],
      ["Maps", "Story locations, production permissions, field notes, safety notes, and visual references."],
      ["Interviews", "Research clips, archival sound, field photography, transcript search, and citation tools."],
      ["Preservation projects", "Digitization drives, community screenings, school partnerships, and local custodians."]
    ],
    form: "Contribute an archive lead"
  },
  "ai-creator-lab": {
    eyebrow: "AI creator lab",
    title: "Future tools, human stories.",
    subtitle: "AI filmmaking tutorials, prompt engineering, workflow breakdowns, prompt packs, experiments, moderation, subtitles, search, and analytics.",
    image: "frame-ai-lab.jpg",
    stats: [["56", "Prompt packs"], ["12", "AI workflows"], ["4", "Subtitle models"]],
    cards: [
      ["AI filmmaking tutorials", "Storyboards, concept frames, synthetic tests, edit planning, and responsible production use."],
      ["Prompt engineering", "Directing prompts, character consistency, style references, visual bibles, and shot lists."],
      ["Creator tools", "Smart search, auto-tagging, AI moderation, translation, heatmaps, and audience analytics."],
      ["Workflow breakdowns", "From idea to pitch deck, animatic, trailer, subtitles, thumbnails, and test audience."],
      ["Prompt packs", "Downloadable packs for film pitches, documentary research, posters, subtitles, and trailers."],
      ["Experiments", "AI voice tests, synthetic locations, archival restoration, recommendation engine prototypes."]
    ],
    form: "Join the AI lab"
  },
  "live-tv-events": {
    eyebrow: "Live TV and events",
    title: "The studio is always awake.",
    subtitle: "Livestreams, behind-the-scenes broadcasts, workshops, premieres, Q&As, creator interviews, and live community programming.",
    image: "frame-festival.jpg",
    stats: [["18", "Upcoming lives"], ["7", "Workshop rooms"], ["24/7", "Event replay shelf"]],
    cards: [
      ["Livestreams", "Premieres, screenings, pitch nights, campus broadcasts, and industry conversations."],
      ["Behind the scenes", "Set diaries, editing rooms, rehearsals, gear tests, and production breakdowns."],
      ["Workshops", "Directing labs, phone filmmaking, acting rooms, AI sessions, sound clinics, and color reviews."],
      ["Q&A sessions", "Audience questions, critic panels, investor rooms, member-only AMAs, and alumni talks."],
      ["Creator interviews", "Short sharp conversations with actors, writers, editors, producers, and designers."],
      ["Event replays", "Members can revisit sessions with chapters, transcripts, subtitles, and resources."]
    ],
    form: "Request a live session"
  },
  "creator-community": {
    eyebrow: "Creator community",
    title: "A network that actually makes things.",
    subtitle: "Profiles, collaboration rooms, production groups, messaging, discussion spaces, crew discovery, and practical creative networking.",
    image: "frame-community.jpg",
    stats: [["4,800", "Members"], ["260", "Active groups"], ["38", "County rooms"]],
    cards: [
      ["Profiles", "Credits, reels, skills, languages, gear, location, rates, availability, and collaboration tags."],
      ["Collaboration spaces", "Rooms for scripts, crews, production design, sound, color, acting, AI, and distribution."],
      ["Discussion rooms", "Moderated channels for industry questions, feedback, film essays, jobs, and production calls."],
      ["Production groups", "Create a project, invite crew, assign tasks, track stages, and share private updates."],
      ["Messaging", "Safe contact requests, verified creators, member-only DMs, and notification controls."],
      ["Networking", "Monthly mixers, portfolio reviews, screenings, mentorship circles, and county meetups."]
    ],
    form: "Create a creator profile"
  },
  "press-media-kit": {
    eyebrow: "Press and media kit",
    title: "Everything needed to tell the 520 story.",
    subtitle: "Logos, brand guidelines, press photos, company bio, releases, executive notes, media contacts, and download-ready assets.",
    image: "hero-nairobi-afterlight.jpg",
    stats: [["12", "Press assets"], ["4", "Brand lockups"], ["1", "Media desk"]],
    cards: [
      ["Logos", "Primary, dark, light, social, watermark, production slate, and academy lockups."],
      ["Brand guidelines", "Tone, color, typography, motion behavior, poster rules, and editorial usage."],
      ["Press photos", "Founder portraits, student labs, productions, merch drops, events, and behind-the-scenes."],
      ["Press releases", "Launch statement, funding slate, academy intake, festival call, and partnership announcements."],
      ["Company bio", "Short, medium, and long profiles for media, sponsors, grant applications, and decks."],
      ["Media contacts", "Press desk, partnerships, investor relations, production inquiries, and creator support."]
    ],
    form: "Request media access"
  },
  "events": {
    eyebrow: "Events",
    title: "Where the scene gathers.",
    subtitle: "Screenings, festivals, workshops, meetups, networking nights, premieres, portfolio reviews, and production clinics.",
    image: "frame-festival.jpg",
    stats: [["31", "Events listed"], ["12", "Counties"], ["6", "This month"]],
    cards: [
      ["Screenings", "Member nights, student films, documentaries, premieres, and partner cinema pop-ups."],
      ["Festivals", "Submission windows, jury rooms, online showcases, award nights, and creator spotlights."],
      ["Workshops", "Hands-on sessions for directing, sound, editing, AI tools, acting, and production design."],
      ["Meetups", "County hangouts, writer rooms, editor breakfasts, actor circles, and gear days."],
      ["Networking", "Client rooms, investor salons, alumni mixers, casting mixers, and community dinners."],
      ["Tickets", "M-PESA reservations, QR entry, livestream access, and member discounts."]
    ],
    form: "List or sponsor an event"
  },
  "careers": {
    eyebrow: "Careers",
    title: "Build the studio from inside.",
    subtitle: "Open jobs, casting opportunities, crew hiring, remote work, internships, and volunteer applications across the 520 ecosystem.",
    image: "frame-studio-520.jpg",
    stats: [["22", "Open roles"], ["9", "Internships"], ["16", "Casting needs"]],
    cards: [
      ["Open jobs", "Product, content, production, marketing, community, operations, events, and studio roles."],
      ["Casting opportunities", "Film roles, commercial talent, voice acting, extras, presenters, and motion capture tests."],
      ["Crew hiring", "DPs, editors, sound, production assistants, art department, makeup, drivers, and fixers."],
      ["Remote work", "Writers, researchers, subtitle editors, AI prompt builders, designers, and social editors."],
      ["Internships", "Academy pathways into productions, admin, archive, marketing, post, and live events."],
      ["Applications", "Portfolio upload, availability, location, skill tags, references, and WhatsApp confirmation."]
    ],
    form: "Apply to work with us"
  },
  "blog-journal": {
    eyebrow: "Blog and journal",
    title: "The thinking behind the frame.",
    subtitle: "Film essays, production diaries, African storytelling notes, industry insights, release breakdowns, and honest behind-the-scenes writing.",
    image: "frame-archive.jpg",
    stats: [["88", "Journal entries"], ["14", "Production diaries"], ["6", "Essay series"]],
    cards: [
      ["Film essays", "Close readings of African films, global influences, genre, performance, sound, and image."],
      ["Production diaries", "Budgets, mistakes, breakthroughs, locations, casting, post, festival lessons, and crew notes."],
      ["Storytelling articles", "Language, memory, youth culture, oral traditions, tech, cities, counties, and diaspora."],
      ["Industry insights", "Streaming, grants, distribution, brands, payments, rights, education, and creator economics."],
      ["Behind the scenes", "Set photography, moodboards, shot breakdowns, edit notes, and director conversations."],
      ["Newsletter", "Monthly field notes, jobs, courses, screenings, funding calls, and creator opportunities."]
    ],
    form: "Pitch an article"
  }
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function whatsAppLink(message) {
  return `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(message)}`;
}

function button(label, href = "#contact", className = "") {
  return `<a class="button ${className} magnetic" href="${href}">${label}</a>`;
}

function tags(items) {
  return `<div class="tag-row">${items.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
}

function sectionHead(kicker, title, text, action = "") {
  return `
    <div class="section-head reveal">
      <div>
        <span class="kicker">${kicker}</span>
        <h2>${title}</h2>
      </div>
      <div>
        <p>${text}</p>
        ${action ? `<div class="actions">${action}</div>` : ""}
      </div>
    </div>
  `;
}

function pageHero(page) {
  return `
    <section class="page-hero">
      <div class="page-hero__media"><img src="${asset(page.image)}" alt="" loading="eager"></div>
      <div class="page-hero__shade"></div>
      <div class="page-hero__inner">
        <p class="eyebrow reveal">${page.eyebrow}</p>
        <h1 class="reveal">${page.title}</h1>
        <div class="page-hero__copy reveal">
          <p class="lead">${page.subtitle}</p>
          <div class="hero__meta">
            ${(page.stats || []).map(([number, label]) => `<div class="stat-tile"><strong>${number}</strong><span>${label}</span></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function featureGrid(cards) {
  return `
    <div class="grid">
      ${cards.map(([title, text], index) => `
        <article class="text-card reveal ${index % 5 === 0 ? "text-card--wide" : ""}">
          <span class="kicker">${String(index + 1).padStart(2, "0")}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function inquiryForm(title, type = "General inquiry") {
  return `
    <div class="form-panel reveal">
      <h3>${title}</h3>
      <form data-whatsapp="${type}">
        <div class="field-grid">
          <label>Name<input name="name" required placeholder="Your name"></label>
          <label>Occupation<input name="occupation" placeholder="Role or company"></label>
        </div>
        <div class="field-grid">
          <label>Email<input name="email" type="email" placeholder="name@email.com"></label>
          <label>Phone<input name="phone" placeholder="+254..."></label>
        </div>
        <label>Message<textarea name="message" required placeholder="Tell us what you want to build."></textarea></label>
        <button class="button button--ember magnetic" type="submit">Send via WhatsApp</button>
      </form>
    </div>
  `;
}

function renderHome() {
  const slide = heroSlides[state.heroIndex];
  return `
    <div class="page">
      <section class="hero" id="homeHero">
        <div class="hero__media"><img src="${asset(slide.image)}" alt="Cinematic 520 School frame" loading="eager"></div>
        <div class="hero__shade"></div>
        <div class="hero__inner">
          <p class="eyebrow reveal">${slide.eyebrow}</p>
          <h1 class="reveal">${slide.title.map((line) => `<span>${line}</span>`).join("")}</h1>
          <div class="hero__copy reveal">
            <p class="lead">${slide.text}</p>
            <div class="hero__meta">
              <div class="stat-tile"><strong>4.8K</strong><span>Creators in motion</span></div>
              <div class="stat-tile"><strong>47</strong><span>Productions tracked</span></div>
              <div class="stat-tile"><strong>21</strong><span>Counties reached</span></div>
            </div>
          </div>
          <div class="hero__actions reveal">
            ${button("Enter the academy", "#academy", "button--primary")}
            ${button("Watch originals", "#streaming")}
            ${button("Fund a film", "#membership-funding", "button--ember")}
          </div>
        </div>
        <div class="hero__rail">
          ${heroSlides.map((_, index) => `<button class="rail-dot ${index === state.heroIndex ? "is-active" : ""}" data-hero-dot="${index}" aria-label="View hero ${index + 1}"></button>`).join("")}
        </div>
      </section>

      <div class="marquee" aria-hidden="true">
        <div class="marquee__track">
          ${["Film school", "Streaming", "Crowdfunding", "Jobs", "Talent", "Archive", "Merch", "Live TV", "AI Lab", "Production"].concat(["Film school", "Streaming", "Crowdfunding", "Jobs", "Talent", "Archive", "Merch", "Live TV", "AI Lab", "Production"]).map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>

      <section class="section">
        <div class="container">
          ${sectionHead("Featured films", "Stories that feel close enough to touch.", "Interactive fullscreen posters open into living project pages with budget, team, slate, timeline, and production movement.", button("See funding slate", "#membership-funding"))}
          <div class="poster-grid">
            ${projects.map((project) => `
              <a class="poster-card magnetic reveal" href="#project/${project.slug}">
                <img src="${asset(project.image)}" alt="${project.title}" loading="lazy">
                <div class="poster-card__body">
                  ${tags(project.tags)}
                  <h3>${project.title}</h3>
                  <p>${project.logline}</p>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="media-band">
        <img src="${asset("frame-studio-520.jpg")}" alt="520 School studio atmosphere" loading="lazy">
        <div class="media-band__content reveal">
          <span class="kicker">Intro reel</span>
          <h2>Learn. Shoot. Fund. Screen. Repeat.</h2>
          <div class="actions">
            ${button("Watch trailer", "#streaming", "button--primary")}
            ${button("Join the movement", "#join")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${sectionHead("Live statistics", "A startup dashboard with a heartbeat.", "The ecosystem tracks training, productions, community, revenue, impact, screenings, and creator growth in public-facing language.")}
          <div class="grid">
            ${[
              ["520+", "Youth trained through cohorts, pop-ups, and online labs"],
              ["KES 38M", "Projected creator economy value moving through the platform"],
              ["86", "Jobs, gigs, internships, and production opportunities listed"],
              ["14", "Course categories built around the real film economy"]
            ].map(([number, label]) => `<article class="metric-card reveal"><strong>${number}</strong><span>${label}</span></article>`).join("")}
          </div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="container split">
          <div class="feature-block reveal">
            <span class="kicker">African storytelling manifesto</span>
            <h2>We are not waiting for permission to look cinematic.</h2>
            <p>520 School exists for the young director with a phone, the editor learning at midnight, the actor sending self-tapes from a bedsitter, the documentarian preserving a grandmother's voice, and the investor who believes culture can create work.</p>
            <div class="actions">
              ${button("Read about us", "#about-us", "button--primary")}
              ${button("Submit talent", "#talent-discovery")}
            </div>
          </div>
          <div class="grid">
            ${[
              ["Featured creators", "Monthly spotlights for actors, writers, editors, photographers, sound designers, musicians, and AI filmmakers."],
              ["Featured courses", "Short cinematic mini classes and professional cohorts with certification, reviews, locations, and WhatsApp enrollment."],
              ["Upcoming productions", "Public concepts with synopses, budgets, milestones, voting, transparent reports, and crew opportunities."],
              ["Community highlights", "Testimonials, watch parties, campus chapters, county labs, meme walls, and chaotic useful feedback."]
            ].map(([title, text]) => `<article class="mini-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${sectionHead("Featured courses", "Master the frame, then own the business.", "The academy is built for practical Kenyan production realities: locations, online access, gear, mentorship, internships, reviews, and certification.", button("Open course catalog", "#academy"))}
          <div class="course-grid">
            ${courses.slice(0, 4).map(courseCard).join("")}
          </div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="container">
          ${sectionHead("Ecosystem map", "One platform, many doors.", "Every module is reachable from here: school, streaming, production, funding, talent, jobs, gear, festival, archive, AI, events, impact, press, careers, and admin.")}
          <div class="grid">
            ${ecosystemLinks.map(([slug, title, text]) => `
              <a class="text-card magnetic reveal" href="#${slug}">
                <span class="kicker">${slug.replace(/-/g, " ")}</span>
                <h3>${title}</h3>
                <p>${text}</p>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="manifesto reveal" id="join">
        <p>Join the movement building the future of African storytelling: one course, one film, one funded crew, one preserved memory at a time.</p>
        <div class="actions">
          ${button("Become a member", "#membership-funding", "button--primary")}
          ${button("Buy the drop", "#merchandise")}
          ${button("Talk to investors desk", "#investor-relations", "button--ember")}
        </div>
      </section>
    </div>
  `;
}

function courseCard(course) {
  const curriculum = encodeURIComponent(`520 School Curriculum: ${course.title}\n\nCategory: ${course.category}\nDuration: ${course.duration}\nDifficulty: ${course.difficulty}\nLocations: ${course.locations}\nNearest center: ${course.center}\nOnline option: ${course.online}\nInstructor: ${course.instructor}\nCertification: ${course.certification}`);
  return `
    <article class="course-card reveal" data-category="${course.category}">
      <div class="course-card__image">
        <img src="${asset(course.image)}" alt="${course.title}" loading="lazy">
      </div>
      <div class="course-card__body">
        ${tags([course.category, course.difficulty, course.duration])}
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
          <span><strong>${course.price}</strong>Pricing</span>
          <span><strong>${course.center}</strong>Nearest center</span>
          <span><strong>Online ready</strong>${course.online}</span>
        </div>
        <p><strong>Physical learning locations in Kenya:</strong> ${course.locations}</p>
        <p><strong>Instructor:</strong> ${course.instructor}. ${course.mini}. ${course.full}.</p>
        <p><strong>Student reviews:</strong> "${course.reviews[0]}" "${course.reviews[1]}"</p>
        <p><strong>Certification:</strong> ${course.certification}</p>
        <div class="actions">
          <a class="pill-button magnetic" download="520-school-${course.category.toLowerCase().replace(/\s+/g, "-")}-curriculum.txt" href="data:text/plain;charset=utf-8,${curriculum}">Curriculum</a>
          <a class="pill-button magnetic" href="${whatsAppLink(`Inquiry about ${course.title}`)}" target="_blank" rel="noreferrer">WhatsApp</a>
          <a class="pill-button magnetic" href="#contact">Enroll now</a>
        </div>
      </div>
    </article>
  `;
}

function renderAcademy() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "520 School film academy",
        title: "The academy for real sets, real stories, real futures.",
        subtitle: "Cinematic course catalog, motion-led cards, online and physical learning in Kenya, downloadable curricula, instructor profiles, student reviews, certification, scholarships, equipment access, mentorship, internships, and graduate stories.",
        image: "frame-director.jpg",
        stats: [["15", "Course categories"], ["5", "Learning centers"], ["2", "Course formats"]]
      })}
      <section class="section">
        <div class="container course-layout">
          <aside class="filter-panel reveal" aria-label="Course categories">
            ${courseCategories.map((category, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" data-filter="${category}">${category}</button>`).join("")}
          </aside>
          <div class="course-grid" id="courseGrid">${courses.map(courseCard).join("")}</div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container">
          ${featureGrid([
            ["Scholarships", "Need-based and county-partner scholarships for promising creators who can show commitment and a real story hunger."],
            ["Student projects showcase", "Every cohort ships scenes, reels, scripts, docs, trailers, or campaign pieces that live on the platform."],
            ["Equipment access", "Students can book starter kits, sound kits, lighting packs, editing suites, and supervised studio time."],
            ["Mentorship program", "Working filmmakers, editors, producers, actors, and founders guide portfolios and career decisions."],
            ["Internship opportunities", "Top students enter production crews, brand campaigns, live events, archive projects, and streaming teams."],
            ["Graduate success stories", "Alumni profiles track credits, jobs created, county impact, festival progress, and income growth."]
          ])}
        </div>
      </section>
    </div>
  `;
}

function renderAbout() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "About us",
        title: "Young creatives building a cinematic Kenya.",
        subtitle: "We are a group of young creatives and entrepreneurs telling stories that impact lives and transforming Kenyan storytelling into something authentic, cinematic, emotional, and globally respected.",
        image: "frame-community.jpg",
        stats: [["2026", "Launch year"], ["47", "Creative services"], ["1", "Movement"]]
      })}
      <section class="section">
        <div class="container split">
          <div class="feature-block reveal">
            <span class="kicker">Mission and vision</span>
            <h2>Train the storytellers. Build the platform. Fund the films.</h2>
            <p>Our mission is to make world-class film education, production infrastructure, distribution, jobs, and community accessible to African creators. Our vision is a continent where stories are owned, funded, preserved, and released by the people closest to them.</p>
            <div class="actions">${button("Submit talent", "#talent-discovery", "button--primary")}${button("Volunteer", "#careers")}${button("Upload portfolio", "#talent-discovery", "button--ember")}</div>
          </div>
          <div class="project-hero-image reveal"><img src="${asset("hero-nairobi-afterlight.jpg")}" alt="520 School cinematic Nairobi"></div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container">
          ${sectionHead("Our story", "From first camera test to ecosystem.", "The company starts as a creative group and grows into a school, production house, streaming shelf, funding engine, and talent marketplace.")}
          <div class="timeline">
            ${[
              ["First project", "A tiny no-budget documentary scene shot with borrowed sound gear became the proof that honest Kenyan stories could feel cinematic."],
              ["First cohort", "A practical training circle formed around directing, editing, sound, acting, and script feedback."],
              ["Most recent project", "The Last Matinee entered casting with a transparent crowdfunding board and open crew pathways."],
              ["Next chapter", "520 School expands courses, streaming, community, merchandise, jobs, archive work, and investor reporting."]
            ].map(([year, text]) => `<div class="timeline-item reveal"><strong>${year}</strong><div><h3>${text.split(".")[0]}.</h3><p>${text}</p></div></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          ${sectionHead("Creative services", "A studio for the whole story economy.", "Filmmaking, documentary production, photography, branding, AI content creation, animation, motion graphics, advertising, music production, event coverage, creative strategy, streaming production, social media campaigns, script consultation, editing, color, sound, and creative consulting.")}
          ${featureGrid([
            ["Founder section", "Founder profile space for vision, origin story, public note, press images, and investor-facing bio."],
            ["Meet the team", "Directors, producers, editors, instructors, technologists, designers, sound people, writers, and community leads."],
            ["Portfolio gallery", "Films, campaigns, photography, documentaries, posters, trailers, events, branded work, and experiments."],
            ["Behind the scenes", "Raw process, production stills, gear rooms, edit timelines, script sessions, rehearsals, and location scouting."],
            ["Talent discovery", "Open submissions for reels, scripts, photography, music, editing, acting, voice, and cinematography."],
            ["Applications", "Volunteer, internship, portfolio upload, and collaboration flows routed to WhatsApp and admin moderation."]
          ])}
        </div>
      </section>
    </div>
  `;
}

function renderPartners() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Partners and clients",
        title: "Proof, trust, and transparent collaboration.",
        subtitle: "Partner logos, client showcases, testimonial videos, case studies, campaign breakdowns, production workflows, financial transparency, sponsorship packages, and inquiry flows.",
        image: "hero-nairobi-afterlight.jpg",
        stats: [["32", "Partner conversations"], ["18", "Campaign concepts"], ["KES 14M", "Tracked production value"]]
      })}
      <section class="section">
        <div class="container">
          ${sectionHead("Trusted by builders", "A logo wall for brands that fund culture.", "Replace the placeholders with real partners as deals close. The structure is ready for sponsor tiers, client filters, and case study pages.")}
          <div class="logo-cloud reveal">
            ${["County Arts Desk", "Mtaa Studios", "Nairobi Tech Week", "Coast Sound Lab", "Creator Fund", "Impact Africa", "Youth Media Trust", "Festival Circuit", "Baraza Brands", "520 Originals"].map((logo) => `<span>${logo}</span>`).join("")}
          </div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container">
          ${featureGrid([
            ["Client showcase", "Campaign reels, branded documentaries, product films, event coverage, photography, and social content."],
            ["Testimonial videos", "Short client reactions, creator feedback, student outcomes, and sponsor statements."],
            ["Case studies", "Problem, creative insight, production method, deliverables, distribution, cost, and measurable impact."],
            ["Workflow explanations", "Brief, research, budget, treatment, production, post, approvals, delivery, reporting, and archive."],
            ["Financial transparency", "Budget bands, crew pay principles, sponsor usage reports, public funding milestones, and audit-friendly summaries."],
            ["Sponsorship packages", "Academy scholarships, film slates, live events, festivals, archive projects, merch drops, and creator grants."]
          ])}
          <div class="actions reveal">
            <a class="button button--primary magnetic" href="/520-school-company-profile.pdf" download>Company profile PDF</a>
            <a class="button button--ember magnetic" href="#contact">Collaboration inquiry</a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderCritics() {
  const comments = getComments().filter((comment) => comment.status === "approved");
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Critics corner",
        title: "Roast us. Save us. Make it useful.",
        subtitle: "A funny, chaotic, community-driven room for anonymous comments, reactions, roasts, memes, audience suggestions, wild pitches, polls, voice notes, emoji reactions, public discussions, and the Matusi section.",
        image: "frame-festival.jpg",
        stats: [["214", "Reactions"], ["38", "Roasts survived"], ["11", "Ideas promoted"]]
      })}
      <section class="section">
        <div class="container form-grid">
          <div>
            ${sectionHead("Public wall", "The audience is part of the writers room.", "Approved comments appear here after moderation. Submissions are saved locally in this prototype and routed to WhatsApp admin for review.")}
            <div class="comment-wall" id="commentWall">
              ${comments.map(commentTemplate).join("")}
            </div>
          </div>
          <div class="form-panel reveal">
            <h3>Pitch, roast, advise, or confess</h3>
            <form id="criticForm">
              <div class="field-grid">
                <label>Name<input name="name" placeholder="Anonymous is allowed"></label>
                <label>Occupation<input name="occupation" placeholder="Viewer, actor, critic..."></label>
              </div>
              <label>Category<select name="category">
                <option>Advice</option>
                <option>Criticism</option>
                <option>Funny comment</option>
                <option>Roast section</option>
                <option>Matusi section</option>
                <option>Pitch your crazy film idea</option>
                <option>Meme wall</option>
                <option>Voice note upload</option>
              </select></label>
              <label>Message<textarea name="message" required placeholder="Say it with chest, but keep it useful enough to survive moderation."></textarea></label>
              <button class="button button--ember magnetic" type="submit">Send to moderation</button>
            </form>
            <div class="poll" id="pollBox">
              <h3>Audience poll</h3>
              ${["More comedy originals", "More documentaries", "More brutal behind-the-scenes", "More AI experiments"].map((choice, index) => `<button data-poll="${choice}"><span>${choice}</span><strong>${getPoll(choice) + 12 + index * 3}</strong></button>`).join("")}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function commentTemplate(comment) {
  return `
    <article class="comment reveal">
      <strong>${escapeHtml(comment.name || "Anonymous")} <span class="tag">${escapeHtml(comment.category)}</span></strong>
      <p>${escapeHtml(comment.message)}</p>
    </article>
  `;
}

function renderMerch() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Merchandise",
        title: "Wear the movement.",
        subtitle: "A cinematic ecommerce surface for hoodies, caps, posters, creative accessories, film props, limited drops, partner creator brands, inventory, M-PESA, PayPal, cards, Flutterwave, and advertiser placements.",
        image: "merch-hoodie.jpg",
        stats: [["6", "Drop categories"], ["284", "Items tracked"], ["4", "Payment rails"]]
      })}
      <section class="section">
        <div class="container">
          ${sectionHead("Current drop", "Merch that feels like a film still.", "Hover-rich product cards, size selection, inventory cues, and checkout buttons scaffolded for M-PESA, PayPal, Visa/Mastercard, and Flutterwave.", `<a class="button button--ember magnetic" href="mailto:advertise@520school.africa?subject=Advertise%20on%20520%20School">Advertise Here</a>`)}
          <div class="product-grid">
            ${products.map(([title, text, image, price, stock]) => `
              <article class="product-card magnetic reveal">
                <img src="${asset(image)}" alt="${title}" loading="lazy">
                <div class="product-card__body">
                  ${tags([price, stock])}
                  <h3>${title}</h3>
                  <p>${text}</p>
                  <label>Size<select><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option></select></label>
                  <div class="product-card__tools">
                    <button class="pill-button" data-pay="M-PESA ${title}">M-PESA</button>
                    <button class="pill-button" data-pay="PayPal ${title}">PayPal</button>
                    <button class="pill-button" data-pay="Card ${title}">Visa/Mastercard</button>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container">
          ${featureGrid([
            ["Creator marketplace", "Partner creators can sell wardrobe, props, prints, zines, sound packs, presets, and production tools."],
            ["Inventory tracking", "Every product card is ready for SKU, size, quantity, reserved stock, and low-stock alerts."],
            ["Payment systems", "M-PESA STK Push, PayPal, Visa/Mastercard through Stripe, and Flutterwave checkout are mapped in the integration layer."],
            ["Product previews", "Cinematic hover states, quick size controls, creator notes, and limited edition drop language."]
          ])}
        </div>
      </section>
    </div>
  `;
}

function renderFunding() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Membership and funding",
        title: "Community can produce cinema.",
        subtitle: "Monthly membership unlocks content, courses, screenings, breakdowns, community, livestreams, and resources. Film funding lets members and investors back public concepts with transparent progress.",
        image: "frame-savannah-signal.jpg",
        stats: [["KES 23.5M", "Slate target"], ["3", "Public concepts"], ["1,240", "Members projected"]]
      })}
      <section class="section">
        <div class="container split">
          <div class="feature-block reveal">
            <span class="kicker">System 1</span>
            <h2>Monthly membership.</h2>
            <p>Exclusive content, premium courses, early screenings, production breakdowns, private creator community, networking opportunities, members-only livestreams, industry resources, subtitles, watchlists, and member-only streaming.</p>
            <div class="actions">
              ${button("Start membership", "#contact", "button--primary")}
              ${button("View streaming", "#streaming")}
            </div>
          </div>
          <div class="grid">
            ${["Exclusive content", "Premium courses", "Early screenings", "Production breakdowns", "Private community", "Industry resources"].map((item) => `<article class="mini-card reveal"><h3>${item}</h3><p>Member-ready access control, billing, and analytics hooks are prepared for production.</p></article>`).join("")}
          </div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container">
          ${sectionHead("System 2", "Produce a film with us.", "Public film concepts show synopses, intended budgets, funding progress, teams, timelines, stages, investor dashboards, community voting, profit reports, jobs created, and social impact.")}
          <div class="funding-board">
            ${projects.map((project) => `
              <article class="funding-card reveal">
                <img src="${asset(project.image)}" alt="${project.title}" loading="lazy">
                <div>
                  ${tags(project.tags)}
                  <h3>${project.title}</h3>
                  <p>${project.logline}</p>
                  <p><strong>Budget:</strong> ${project.budget}. <strong>Team:</strong> ${project.team}. <strong>Timeline:</strong> ${project.timeline}.</p>
                  <div class="progress" aria-label="${project.progress}% funded"><i style="width:${project.progress}%"></i></div>
                </div>
                <div class="actions">
                  <a class="pill-button" href="#project/${project.slug}">Open</a>
                  <button class="pill-button" data-vote="${project.slug}">Vote</button>
                  <a class="pill-button" href="#contact">Invest</a>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          ${featureGrid([
            ["Transparency dashboard", "Funding milestones, spend categories, crew pay, equipment costs, post-production needs, and release status."],
            ["Profit reports", "Member/investor summaries for revenue, recoupment, streaming performance, screenings, and sponsor activity."],
            ["Jobs created", "Crew days, internships, suppliers, county partners, casting, logistics, post roles, and live event work."],
            ["Social impact metrics", "Youth trained, counties reached, businesses supported, archive entries preserved, and community screenings."],
            ["Investor testimonials", "Space for credible voices, sponsor proof, founder updates, and impact-led investment narratives."],
            ["Community voting", "Members vote on concepts, posters, trailers, casting shortlists, screening cities, and bonus scenes."]
          ])}
        </div>
      </section>
    </div>
  `;
}

function renderStreaming() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Streaming platform",
        title: "A cinema shelf for African originals.",
        subtitle: "Netflix-style browsing with original films, short films, documentaries, trailers, exclusive content, continue watching, watchlists, Swahili and English subtitles, adaptive streaming, member-only content, cinematic player UI, categories, and recommendations.",
        image: "frame-mombasa-dreams.jpg",
        stats: [["108", "Titles mapped"], ["2", "Subtitle languages"], ["4K", "Cinematic masters"]]
      })}
      <section class="section">
        <div class="container">
          ${Object.entries(streamingRows).map(([row, items]) => `
            <div class="section-head reveal">
              <div><span class="kicker">${row}</span><h2>${row === "Originals" ? "Originals made here." : row}</h2></div>
              <p>${row === "Originals" ? "Featured films and funded concepts live beside member-only originals." : "Adaptive streaming rows are ready for metadata, watchlists, continue watching, and recommendations."}</p>
            </div>
            <div class="stream-row">
              ${items.map((item) => `
                <a class="stream-card magnetic reveal" href="${item.slug ? `#project/${item.slug}` : "#streaming"}">
                  <img src="${asset(item.image)}" alt="${item.title}" loading="lazy">
                  <div class="stream-card__body">
                    ${tags(["Swahili subs", "English subs", "Adaptive"])}
                    <h3>${item.title}</h3>
                    <p>${item.logline}</p>
                  </div>
                </a>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderTalent() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Talent discovery",
        title: "Find the next face, voice, hand, and eye.",
        subtitle: "Creators can upload acting reels, scripts, photography, music, editing portfolios, voice acting demos, and cinematography reels. Talent profiles include voting, spotlights, search, and filtering.",
        image: "frame-community.jpg",
        stats: [["620", "Profiles ready"], ["8", "Talent formats"], ["12", "Monthly spotlights"]]
      })}
      <section class="section">
        <div class="container">
          ${sectionHead("Featured creators", "A live directory for serious discovery.", "Search, filter, vote, shortlist, contact, and spotlight creators by craft, location, availability, language, and production history.", button("Upload portfolio", "#contact", "button--primary"))}
          <div class="creator-grid">
            ${creators.map(([name, role, image, skills]) => `
              <article class="creator-card magnetic reveal">
                <img src="${asset(image)}" alt="${name}" loading="lazy">
                <div class="creator-card__body">
                  ${tags(skills.split(", "))}
                  <h3>${name}</h3>
                  <p>${role}</p>
                  <div class="actions"><button class="pill-button" data-vote="${name}">Vote</button><a class="pill-button" href="#contact">Contact</a></div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section--tight">
        <div class="container form-grid">
          ${featureGrid([
            ["Upload system", "Acting reels, scripts, photography, music, editing portfolios, voice demos, cinematography reels, and pitch links."],
            ["Search and filtering", "Craft, county, skill, language, gear, rate, availability, union status, experience, and spotlight eligibility."]
          ])}
          ${inquiryForm("Submit your talent profile", "Talent submission")}
        </div>
      </section>
    </div>
  `;
}

function renderJobs() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Film jobs board",
        title: "Work should find the people who can do it.",
        subtitle: "Casting calls, crew hiring, editing jobs, sound engineer jobs, internships, volunteer opportunities, remote creative work, production assistants, and camera operators.",
        image: "frame-studio-520.jpg",
        stats: [["86", "Opportunities"], ["31", "Paid roles"], ["9", "Internship tracks"]]
      })}
      <section class="section">
        <div class="container">
          ${sectionHead("Open opportunities", "A practical board for the film economy.", "Every job card is ready for application forms, WhatsApp alerts, admin approval, and creator profile matching.")}
          <div class="jobs-grid">
            ${jobs.map(([type, title, place, pay, note], index) => `
              <article class="job-card magnetic reveal">
                <img src="${asset(["frame-director.jpg", "frame-studio-520.jpg", "frame-mombasa-dreams.jpg", "frame-savannah-signal.jpg"][index % 4])}" alt="${title}" loading="lazy">
                <div class="job-card__body">
                  ${tags([type, place, pay])}
                  <h3>${title}</h3>
                  <p>${note}</p>
                  <div class="job-card__tools"><a class="pill-button" href="#careers">Apply</a><a class="pill-button" href="${whatsAppLink(`Job inquiry: ${title}`)}" target="_blank" rel="noreferrer">WhatsApp</a></div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderImpact() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Impact",
        title: "Culture should leave receipts.",
        subtitle: "Jobs created, youth trained, counties reached, social impact, businesses supported, creator success stories, archive projects, and production opportunities tracked in public language.",
        image: "frame-savannah-signal.jpg",
        stats: [["520+", "Youth trained"], ["21", "Counties reached"], ["148", "Jobs created"]]
      })}
      <section class="section">
        <div class="container">
          <div class="grid">
            ${[
              ["148", "Jobs created across sets, post, events, research, marketing, gear, live production, and community screenings."],
              ["520+", "Youth trained through academy cohorts, workshops, online lessons, internships, and county labs."],
              ["21", "Counties reached through creators, screenings, research, archive leads, and event partnerships."],
              ["66", "Small businesses supported through vendors, transport, food, wardrobe, locations, design, and venues."],
              ["39", "Creator success stories tracked through credits, paid gigs, festival entries, clients, and portfolio growth."],
              ["1,900", "Archive entries planned across photos, interviews, maps, timelines, sound, scripts, and field notes."]
            ].map(([number, text]) => `<article class="metric-card reveal"><strong>${number}</strong><span>${text}</span></article>`).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderInvestors() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Investor relations",
        title: "The African story economy is investable.",
        subtitle: "Revenue model, business projections, growth charts, audience metrics, sponsorship opportunities, investor packages, transparency dashboards, and platform roadmap.",
        image: "hero-nairobi-afterlight.jpg",
        stats: [["9", "Revenue lines"], ["KES 38M", "Year one target"], ["6", "Roadmap quarters"]]
      })}
      <section class="section">
        <div class="container">
          ${featureGrid([
            ["Revenue model", "Membership, course tuition, streaming, production services, sponsorships, merch, ticketing, equipment rental, and marketplace fees."],
            ["Business projections", "Cohort growth, content licensing, creator marketplace GMV, events, production pipeline, and sponsor packages."],
            ["Growth charts", "Audience, watch time, course enrollment, community activity, funding velocity, retention, and conversion."],
            ["Audience metrics", "Creators, members, viewers, counties, languages, device type, subtitle use, and watchlist behavior."],
            ["Sponsorship opportunities", "Scholarships, film slates, festivals, county labs, creator grants, archive projects, live events, and merch drops."],
            ["Roadmap", "MVP, academy launch, streaming beta, funding dashboard, payments, admin, mobile app, and continental expansion."]
          ])}
          <div class="actions reveal">
            ${button("Request investor package", "#contact", "button--primary")}
            ${button("View funding dashboard", "#membership-funding", "button--ember")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Contact",
        title: "Bring the idea. We will find the frame.",
        subtitle: "WhatsApp integration, email forms, social links, Google Maps, media inquiries, collaboration inquiries, submissions, partnerships, and support flows.",
        image: "hero-nairobi-afterlight.jpg",
        stats: [["24h", "Reply target"], ["4", "Inquiry desks"], ["NBO", "Kenya base"]]
      })}
      <section class="section">
        <div class="container form-grid">
          <div>
            ${sectionHead("Reach us", "One door for the whole ecosystem.", "Use WhatsApp for fast coordination, or send a structured inquiry for media, production, academy, partnerships, funding, talent, and support.")}
            <div class="grid">
              ${[
                ["WhatsApp", `<a href="${whatsAppLink("Hello 520 School")}" target="_blank" rel="noreferrer">Chat with admin</a>`],
                ["Email", `<a href="mailto:hello@520school.africa">hello@520school.africa</a>`],
                ["Social", "@520school across creator platforms"],
                ["Location", `<a href="https://www.google.com/maps?q=Nairobi%20Kenya" target="_blank" rel="noreferrer">Nairobi, Kenya</a>`]
              ].map(([title, text]) => `<article class="mini-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join("")}
            </div>
            <div class="form-panel reveal" style="margin-top:14px; padding:0; overflow:hidden">
              <iframe title="520 School map" src="https://www.google.com/maps?q=Nairobi%20Kenya&output=embed" loading="lazy" width="100%" height="320" style="border:0; display:block"></iframe>
            </div>
          </div>
          ${inquiryForm("Send an inquiry", "Contact inquiry")}
        </div>
      </section>
    </div>
  `;
}

function renderAdmin() {
  const pending = getComments().filter((comment) => comment.status === "pending");
  const panes = {
    overview: `
      <h2>Command center</h2>
      <p class="lead">A backend admin system for uploading content, memberships, analytics, courses, moderation, revenue, merchandise, submissions, streaming, and users.</p>
      <div class="dashboard-grid">
        ${[
          ["KES 2.8M", "Revenue tracked"],
          ["1,240", "Members"],
          ["47", "Film submissions"],
          [pending.length, "Pending comments"]
        ].map(([number, label]) => `<article class="dashboard-card"><strong>${number}</strong><span>${label}</span></article>`).join("")}
      </div>
      ${adminTable([
        ["Module", "Status", "Owner", "Next action"],
        ["Streaming management", "Ready for CMS", "Content", "Connect Cloudinary"],
        ["Course management", "Catalog live", "Academy", "Add payments"],
        ["Membership management", "Billing scaffold", "Growth", "Connect Stripe/M-PESA"],
        ["Revenue tracking", "Dashboard mock", "Finance", "Connect PostgreSQL"]
      ])}
    `,
    content: `
      <h2>Content upload</h2>
      <p class="lead">Upload films, trailers, subtitles, thumbnails, course lessons, archive media, press assets, and live event replays.</p>
      ${inquiryForm("Upload content request", "Admin content upload")}
    `,
    moderation: `
      <h2>Moderation</h2>
      <p class="lead">Spam filtering, AI moderation, public approval, WhatsApp forwarding, anonymous comments, meme wall, polls, and Matusi section review.</p>
      <div class="comment-wall">
        ${pending.length ? pending.map((comment) => `
          <article class="comment">
            <strong>${escapeHtml(comment.name || "Anonymous")} <span class="tag">${escapeHtml(comment.category)}</span></strong>
            <p>${escapeHtml(comment.message)}</p>
            <div class="actions"><button class="pill-button" data-approve="${comment.id}">Approve</button><button class="pill-button" data-reject="${comment.id}">Reject</button></div>
          </article>
        `).join("") : `<article class="comment"><strong>No pending comments</strong><p>The wall is calm right now.</p></article>`}
      </div>
    `,
    revenue: `
      <h2>Revenue and payments</h2>
      <p class="lead">M-PESA, PayPal, Visa/Mastercard, Flutterwave, subscriptions, investor funding, merch, ticketing, rentals, courses, and sponsorship packages.</p>
      ${adminTable([
        ["Rail", "Use", "State", "Production need"],
        ["M-PESA", "STK Push", "Scaffolded", "Daraja credentials"],
        ["Stripe", "Cards and subscriptions", "Scaffolded", "Webhook handlers"],
        ["PayPal", "International checkout", "Scaffolded", "Client ID"],
        ["Flutterwave", "Pan-African payments", "Scaffolded", "Secret key"]
      ])}
    `,
    ai: `
      <h2>AI features</h2>
      <p class="lead">Subtitle generation, Swahili translation, recommendations, audience analytics, heatmaps, smart search, and AI moderation.</p>
      ${featureGrid([
        ["AI subtitles", "Queue uploaded films, detect dialogue, generate captions, and review Swahili/English tracks."],
        ["Recommendations", "Blend genre, watch time, course interest, creator follows, and funding votes."],
        ["Heatmaps", "Track drop-off, replay, click-through, trailer conversion, and membership intent."],
        ["Smart search", "Search stories, scripts, creators, courses, archive entries, jobs, and events."]
      ])}
    `
  };

  return `
    <div class="page">
      ${pageHero({
        eyebrow: "Admin dashboard",
        title: "Operate the whole ecosystem.",
        subtitle: "A powerful backend surface for content, memberships, analytics, courses, community moderation, revenue, merchandise, submissions, streaming, users, payments, and AI tools.",
        image: "frame-ai-lab.jpg",
        stats: [["10", "Admin modules"], ["4", "Payment rails"], ["7", "AI systems"]]
      })}
      <section class="section">
        <div class="container admin-layout">
          <aside class="admin-tabs reveal">
            ${Object.keys(panes).map((key) => `<button class="chip ${state.activeAdmin === key ? "is-active" : ""}" data-admin="${key}">${key.replace("-", " ")}</button>`).join("")}
          </aside>
          <div class="admin-pane reveal" id="adminPane">${panes[state.activeAdmin]}</div>
        </div>
      </section>
    </div>
  `;
}

function adminTable(rows) {
  return `<div class="table">${rows.map((row) => `<div class="table-row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div>`;
}

function renderGeneric(slug) {
  const page = featurePages[slug];
  return `
    <div class="page">
      ${pageHero(page)}
      <section class="section">
        <div class="container">
          ${featureGrid(page.cards)}
        </div>
      </section>
      <section class="section section--tight">
        <div class="container form-grid">
          <div class="manifesto reveal"><p>${page.title} Built for creators, crews, audiences, partners, and communities who want more than a normal media website.</p></div>
          ${inquiryForm(page.form, page.eyebrow)}
        </div>
      </section>
    </div>
  `;
}

function renderProject(slug) {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  return `
    <div class="page">
      ${pageHero({
        eyebrow: project.format,
        title: project.title,
        subtitle: project.logline,
        image: project.image,
        stats: [[project.budget, "Intended budget"], [`${project.progress}%`, "Funding progress"], ["Open", "Community voting"]]
      })}
      <section class="section">
        <div class="container project-detail">
          <div class="project-hero-image reveal"><img src="${asset(project.image)}" alt="${project.title} still"></div>
          <div class="grid">
            ${[
              ["Synopsis", project.logline],
              ["Team attached", project.team],
              ["Estimated timeline", project.timeline],
              ["Production stages", "Concept, research, casting, pre-production, principal photography, post, screenings, streaming, impact report."],
              ["Investor dashboard", "Budget, recoupment plan, jobs created, social impact metrics, profit reports, and milestones."],
              ["Community voting", "Members can vote on posters, casting shortlists, cities, scenes, and release extras."]
            ].map(([title, text]) => `<article class="text-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join("")}
          </div>
          <div class="actions reveal">
            ${button("Fund this project", "#membership-funding", "button--ember")}
            ${button("Join the crew", "#film-jobs-board")}
            ${button("Submit talent", "#talent-discovery", "button--primary")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function getComments() {
  const seed = [
    { id: "seed-1", name: "Anonymous Editor", category: "Advice", message: "Please make the behind-the-scenes longer than the trailer. We want the messy timeline screenshots.", status: "approved" },
    { id: "seed-2", name: "A Viewer From Rongai", category: "Funny comment", message: "If the villain is not stuck in traffic at least once, is it even a Nairobi film?", status: "approved" },
    { id: "seed-3", name: "Student DP", category: "Pitch your crazy film idea", message: "A boda rider discovers every passenger is from a different decade. Budget: two helmets and fear.", status: "approved" }
  ];
  try {
    return seed.concat(JSON.parse(localStorage.getItem("520-comments") || "[]"));
  } catch {
    return seed;
  }
}

function saveComments(comments) {
  localStorage.setItem("520-comments", JSON.stringify(comments.filter((comment) => !comment.id.startsWith("seed-"))));
}

function getPoll(choice) {
  return Number(localStorage.getItem(`520-poll-${choice}`) || 0);
}

function setPoll(choice) {
  localStorage.setItem(`520-poll-${choice}`, String(getPoll(choice) + 1));
}

function isSpam(text) {
  const lower = text.toLowerCase();
  const links = (lower.match(/https?:\/\//g) || []).length;
  const blocked = ["crypto profit", "free money", "click now"];
  return links > 1 || blocked.some((word) => lower.includes(word));
}

function mount() {
  const raw = location.hash.replace(/^#/, "") || "home";
  const [route, detail] = raw.split("/");
  const routes = {
    home: renderHome,
    academy: renderAcademy,
    "about-us": renderAbout,
    partners: renderPartners,
    critics: renderCritics,
    merchandise: renderMerch,
    "membership-funding": renderFunding,
    streaming: renderStreaming,
    "talent-discovery": renderTalent,
    "film-jobs-board": renderJobs,
    impact: renderImpact,
    "investor-relations": renderInvestors,
    contact: renderContact,
    admin: renderAdmin,
    join: renderHome
  };

  const app = $("#app");
  if (route === "project") {
    app.innerHTML = renderProject(detail);
  } else if (routes[route]) {
    app.innerHTML = routes[route]();
  } else if (featurePages[route]) {
    app.innerHTML = renderGeneric(route);
  } else {
    app.innerHTML = renderHome();
  }

  app.focus({ preventScroll: true });
  if (route === "join") {
    setTimeout(() => $("#join")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  bindInteractions(route);
  reveal();
  updateNav(route);
}

function bindInteractions(route) {
  $$(".magnetic, button, a").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      $("#cursor")?.classList.add("is-active");
      playTone(560, 0.035, 0.018);
    });
    element.addEventListener("mouseleave", () => $("#cursor")?.classList.remove("is-active"));
    element.addEventListener("click", () => playTone(240, 0.05, 0.03));
  });

  $$("[data-hero-dot]").forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      state.heroIndex = Number(buttonEl.dataset.heroDot);
      updateHomeHero();
    });
  });

  $$(".chip[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$(".chip[data-filter]").forEach((item) => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      const filter = chip.dataset.filter;
      $$(".course-card").forEach((card) => {
        card.style.display = filter === "All" || card.dataset.category === filter ? "" : "none";
      });
      reveal();
    });
  });

  $$("form[data-whatsapp]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [`520 School ${form.dataset.whatsapp}`];
      data.forEach((value, key) => lines.push(`${key}: ${value}`));
      window.open(whatsAppLink(lines.join("\n")), "_blank", "noopener");
      form.reset();
    });
  });

  $("#criticForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") || "");
    if (isSpam(message)) {
      alert("This looks like spam, so it was held by moderation.");
      return;
    }
    const stored = getComments().filter((comment) => !comment.id.startsWith("seed-"));
    const comment = {
      id: `local-${Date.now()}`,
      name: String(data.get("name") || "Anonymous"),
      occupation: String(data.get("occupation") || ""),
      category: String(data.get("category") || "Comment"),
      message,
      status: "pending"
    };
    stored.push(comment);
    saveComments(stored);
    window.open(whatsAppLink(`New critic submission\nName: ${comment.name}\nOccupation: ${comment.occupation}\nCategory: ${comment.category}\nMessage: ${comment.message}`), "_blank", "noopener");
    form.reset();
    alert("Sent to moderation and forwarded to WhatsApp admin.");
  });

  $$("[data-poll]").forEach((poll) => {
    poll.addEventListener("click", () => {
      setPoll(poll.dataset.poll);
      mount();
    });
  });

  $$("[data-pay]").forEach((pay) => {
    pay.addEventListener("click", () => {
      window.open(whatsAppLink(`Checkout request: ${pay.dataset.pay}`), "_blank", "noopener");
    });
  });

  $$("[data-vote]").forEach((vote) => {
    vote.addEventListener("click", () => {
      const key = `520-vote-${vote.dataset.vote}`;
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
      vote.textContent = "Voted";
    });
  });

  $$("[data-admin]").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeAdmin = tab.dataset.admin;
      mount();
    });
  });

  $$("[data-approve], [data-reject]").forEach((action) => {
    action.addEventListener("click", () => {
      const id = action.dataset.approve || action.dataset.reject;
      const stored = getComments().filter((comment) => !comment.id.startsWith("seed-"));
      const next = stored.map((comment) => comment.id === id ? { ...comment, status: action.dataset.approve ? "approved" : "rejected" } : comment);
      saveComments(next);
      mount();
    });
  });

  if (route === "home") {
    clearInterval(window.__heroTimer);
    window.__heroTimer = setInterval(() => {
      if ((location.hash.replace(/^#/, "") || "home") !== "home") return;
      state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
      updateHomeHero();
    }, 7200);
  }
}

function updateHomeHero() {
  const hero = $("#homeHero");
  if (!hero) return;
  const slide = heroSlides[state.heroIndex];
  const image = $(".hero__media img", hero);
  const eyebrow = $(".eyebrow", hero);
  const title = $("h1", hero);
  const lead = $(".lead", hero);
  if (image) image.src = asset(slide.image);
  if (eyebrow) eyebrow.textContent = slide.eyebrow;
  if (title) title.innerHTML = slide.title.map((line) => `<span>${line}</span>`).join("");
  if (lead) lead.textContent = slide.text;
  $$("[data-hero-dot]", hero).forEach((dot) => {
    dot.classList.toggle("is-active", Number(dot.dataset.heroDot) === state.heroIndex);
  });
}

function updateNav(route) {
  $$(".nav-links a").forEach((link) => {
    const hash = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("is-active", hash === route);
  });
}

function reveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initCursor() {
  const cursor = $("#cursor");
  if (!cursor) return;
  window.addEventListener("pointermove", (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  }, { passive: true });
}

function initNav() {
  const toggle = $("#navToggle");
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", document.body.classList.contains("menu-open") ? "true" : "false");
  });
  $("#navLinks")?.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
}

function initAudio() {
  $("#soundToggle")?.addEventListener("click", () => {
    state.sound = !state.sound;
    document.body.classList.toggle("sound-on", state.sound);
    if (state.sound) {
      state.audio = state.audio || new (window.AudioContext || window.webkitAudioContext)();
      startAmbient();
      playTone(180, 0.12, 0.04);
    } else {
      stopAmbient();
    }
  });
}

function playTone(freq = 360, duration = 0.05, gainValue = 0.02) {
  if (!state.sound || !state.audio) return;
  const osc = state.audio.createOscillator();
  const gain = state.audio.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, state.audio.currentTime);
  gain.gain.linearRampToValueAtTime(gainValue, state.audio.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, state.audio.currentTime + duration);
  osc.connect(gain).connect(state.audio.destination);
  osc.start();
  osc.stop(state.audio.currentTime + duration + 0.02);
}

function startAmbient() {
  if (!state.audio || state.ambient) return;
  const osc = state.audio.createOscillator();
  const gain = state.audio.createGain();
  osc.type = "triangle";
  osc.frequency.value = 62;
  gain.gain.value = 0.018;
  osc.connect(gain).connect(state.audio.destination);
  osc.start();
  state.ambient = { osc, gain };
}

function stopAmbient() {
  if (!state.ambient) return;
  state.ambient.gain.gain.exponentialRampToValueAtTime(0.0001, state.audio.currentTime + 0.2);
  state.ambient.osc.stop(state.audio.currentTime + 0.24);
  state.ambient = null;
}

function initParticles() {
  const canvas = $("#ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 58 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.6 + Math.random() * 1.8,
    s: 0.00018 + Math.random() * 0.00042,
    h: index % 3 === 0 ? "242,159,61" : index % 3 === 1 ? "43,213,165" : "230,80,63"
  }));

  function resize() {
    canvas.width = window.innerWidth * Math.min(devicePixelRatio, 2);
    canvas.height = window.innerHeight * Math.min(devicePixelRatio, 2);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;
    particles.forEach((particle) => {
      particle.y -= particle.s;
      particle.x += Math.sin(Date.now() * 0.00018 + particle.r) * 0.00004;
      if (particle.y < -0.05) particle.y = 1.05;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${particle.h},0.28)`;
      ctx.arc(particle.x * w, particle.y * h, particle.r * Math.min(devicePixelRatio, 2), 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  draw();
}

window.addEventListener("hashchange", mount);
window.addEventListener("load", () => {
  setTimeout(() => $("#loader")?.classList.add("is-hidden"), 500);
});

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initNav();
  initAudio();
  initParticles();
  mount();
});
