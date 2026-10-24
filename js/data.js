/* ============================================================
   PORTFOLIO CONTENT — edit this file to update the site.
   Images live in /assets. Videos use YouTube IDs (the part
   after "v=" in a YouTube link).
   ============================================================ */
window.PORTFOLIO = {
  contact: {
    email: "kunalurkudeatwork@gmail.com",
    whatsapp: "917999725760",
    linkedin: "https://www.linkedin.com/in/kunalurkude",
    x: "https://twitter.com/kunalurkude7",
    instagram: "https://instagram.com/kunal_mov",
    youtube: "https://www.youtube.com/channel/UCiCt3Yi_ekvfp7gOpF6hScQ",
    github: "https://github.com/kunalurkude"
  },

  /* Video editing portfolio */
  videos: [
    { group: "Event promos & trailers", id: "vujC3UX2Hpk", title: "AGRESITA 2020 event promo", note: "SSIPMT techno-cultural fest" },
    { group: "Event promos & trailers", id: "xrWShGT6Yi0", title: "Mechanical Engineering Association promo", note: "MEA SSIPMT, 2020–21" },
    { group: "Event promos & trailers", id: "fmoCMa3ipCM", title: "Metrage event trailer", note: "Ad-film making competition" },
    { group: "Event promos & trailers", id: "yxK4LzRPTTM", title: "El Carrete event trailer", note: "Video editing competition" },
    { group: "Event promos & trailers", id: "WSR69o7XE60", title: "Benny Dayal live performance teaser", note: "AGRESITA 2020" },
    { group: "Online events", id: "S5f8dP4Tli4", title: "SSIPMT's Got Talent 4: grand finale", note: "Online event" },
    { group: "Online events", id: "hOdh2tPrHNc", title: "Metrage grand premiere", note: "Online event" },
    { group: "Online events", id: "EZQ1aatg8gA", title: "El Carrete grand premiere", note: "Online event" },
    { group: "Product videos", id: "U471wYBcINE", title: "Hamar Electric reveal", note: "Evrex Automotive" },
    { group: "Product videos", id: "xguco9tBNP4", title: "Evrex Dyno reveal", note: "Evrex Automotive" },
    { group: "Product videos", id: "O4GqrEEXUkU", title: "Introducing Evrex Learning", note: "Promotional video" },
    { group: "Product videos", id: "EQfY_g2-GAw", title: "Evrex 1st anniversary", note: "Brand film" }
  ],

  /* YouTube content */
  explainers: [
    { id: "Hhc2kOyztLw", title: "The world of space travel", note: "Science explained" },
    { id: "Gn4JfZHCwpU", title: "Real flying cars", note: "Science explained" },
    { id: "vA9U3R1zFkQ", title: "Why do electric vehicles catch fire?", note: "Science explained" },
    { id: "WSN3snuTdZM", title: "Predestination paradox explained", note: "In Hindi" },
    { id: "qND-Y_SmGug", title: "MPFI system explained", note: "Automobile engineering" }
  ],
  aiVideos: [
    { id: "saPcrHHhbzA", title: "DALL·E 2: first impressions & demo" },
    { id: "LfPz1vtk9_U", title: "This AI tool explains code in one click" },
    { id: "QX_AFgpfoPY", title: "Photo to cartoon with an AI tool" },
    { id: "4Cbga8RXFFk", title: "Animate old photos with Deep Nostalgia" },
    { id: "JZAE6NX68Ew", title: "Top 7 websites for mechanical engineers" }
  ],
  designSeries: { id: "QusLx4QMxOQ", playlist: "PLbzgg1GuNEKTQ4NoSkpMSBcY4HU68FoLZ", title: "Why is design important? (Episode 1)" },

  /* Design portfolio */
  logos: [
    { src: "assets/design/logo-evrex.webp", text: "Evrex Automotive, an EV startup" },
    { src: "assets/design/logo-evrex-mono.webp", text: "Evrex monogram" },
    { src: "assets/design/logo-samuniverse.webp", text: "Samuniverse, a science & tech YouTube channel" },
    { src: "assets/design/logo-evrex-learnings.webp", text: "Evrex Learnings, an online course platform" },
    { src: "assets/design/logo-artville.webp", text: "Artville, an interior design company" },
    { src: "assets/design/logo-agresita.webp", text: "AGRESITA 2020, a college fest representing growth" }
  ],
  posters: [
    "poster-hamar", "poster-why-ev", "poster-benny-dayal", "poster-learn-graphic-design", "poster-campus-ambassador",
    "poster-learn-ev", "poster-metrage", "poster-dussehra", "poster-learn-android", "poster-voice-of-agresita",
    "poster-webinar", "poster-learn-iot", "poster-agresita-partner"
  ],
  thumbnails: [
    "thumb-dalle2", "thumb-flying-cars", "thumb-denigma", "thumb-mech-websites", "thumb-dyno",
    "thumb-arduino", "thumb-el-carrete", "thumb-alumni-1", "thumb-alumni-3", "thumb-alumni-5"
  ],

  /* Software */
  apps: [
    { name: "Flashfuse Labs", kind: "Studio site", text: "My studio for fast, private Progressive Web Apps.", url: "https://kunalurkude.github.io/flashfuse/" },
    { name: "Tally Pro", kind: "PWA · Teachers", text: "Total exam marks paper by paper with auto-add and a live grand total.", url: "https://kunalurkude.github.io/tallymarks/" },
    { name: "EV Studio", kind: "Web app · EV", text: "Range, running cost and battery-pack builder for electric vehicles.", url: "https://kunalurkude.github.io/battery/" },
    { name: "EV Studio Pro", kind: "Web app · EV", text: "Advanced battery suite with real-world conditions and 30+ real cells.", url: "https://evrex.in/studio/" },
    { name: "nue", kind: "PWA · News & stocks", text: "Daily news around the topics you follow, with an NSE, BSE and US stock watchlist and plain-words technical analysis.", url: "https://kunalurkude.github.io/nue/" },
    { name: "Student Points & Marks Tracker", kind: "Tool · School", text: "Class leaderboard and marks manager that syncs with Google Sheets.", url: "https://brightonatl.github.io/leader/" },
    { name: "TaskPulse", kind: "Tool · Productivity", text: "Material-design task manager with free Google Sheets cloud sync.", url: "https://brightonatl.github.io/taskpulse/" }
  ],
  sites: [
    { name: "Evrex Learning", kind: "WordPress", img: "assets/sites/evrex-learning.webp", url: "https://learn.evrex.in/" },
    { name: "MEA SSIPMT", kind: "Wix", img: "assets/sites/mea-ssipmt.webp", url: "https://mea-ssipmt.wixsite.com/2008" },
    { name: "Bright Champs", kind: "Notion + Super", img: "assets/sites/brightchamps.webp", url: "https://brightchamps.super.site/" },
    { name: "Samuniverse", kind: "HTML · CSS · JS", img: "assets/design/logo-samuniverse.webp", url: "https://kunalurkude.github.io/Samuniverse/" }
  ],

  /* Robotics learning resources (hosted on my Notion site) */
  robotics: [
    { name: "Learn the basics of Arduino", text: "What Arduino is, why it's used, and core functions like setup() and pinMode().", url: "https://kunalurkude.super.site/robotics/arduino-projects" },
    { name: "Open Arduino projects", text: "Beginner LED and sensor projects with code.", url: "https://kunalurkude.super.site/robotics/topics/projects" },
    { name: "Learn the breadboard", text: "Layout diagrams and simple LED circuits with a battery and with Arduino.", url: "https://kunalurkude.super.site/robotics/topics/learn-breadboard" },
    { name: "Open repository", text: "Open-source code from my robotics projects, starting with OLED Eyes.", url: "https://kunalurkude.super.site/robotics/topics/open-libraries" }
  ],

  skills: [
    { group: "Engineering", items: ["Electric vehicle development", "Battery pack design", "SolidWorks", "AutoCAD", "3D modelling (CAD/CAM)", "Design for manufacturing", "Product design", "Robotics", "Arduino & Raspberry Pi", "Internet of Things", "3D printing"] },
    { group: "Design & media", items: ["UI/UX design (Figma)", "Adobe Illustrator", "Adobe Premiere Pro", "Design thinking", "Microsoft PowerPoint (advanced)"] },
    { group: "Code & AI", items: ["Web development", "WordPress", "Machine learning & computer vision", "Generative AI", "Prompt engineering", "Claude & AI tools"] },
    { group: "Leadership", items: ["Startup leadership (CTO)", "Project management", "Event management", "Mentoring & teaching", "Presentation & communication"] }
  ]
};
