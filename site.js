// ============================================================
// EDIT THIS BLOCK: all of your personal info lives here.
// Empty lists ([]) hide their section, so nothing half-done shows.
// ============================================================
const SITE={
  name:"Cameron Peterson",
  photo:"headshot-sq.jpg",
  // Home page: keep it conversational, no resume stats.
  intro:"Hi! I'm Cameron, a first-year MBA student at Berkeley Haas. I came here from finance, most recently private credit in New York, and I've gotten hooked on building small AI tools that make that kind of work faster. This site is where those tools live.",
  // Top of the CV page: the story, in plain sentences.
  about:[
    "I'm an MBA candidate at UC Berkeley's Haas School of Business, focused on corporate strategy and strategic finance roles in tech.",
    "Before Haas, I spent four years at Deloitte doing FP&A on the Alphabet (Google) account, first as an analyst and then as a consultant leading a small team across the US and India. From there I joined Churchill Asset Management in New York as an Associate on the fund modeling team, where I worked on the firm's first joint venture, fund sales, and the risk and liquidity analysis that went to the CFO and Board.",
    "Somewhere along the way I got interested in how AI changes finance work. I was in the beta group that tested Deloitte's first generative AI tool for FP&A, and these days I build my own tools with Claude Code, like a Canvas-integrated calendar and assignment tracker for my Haas cohort and the prompting toolkit on this site.",
    "Outside of work, I once rode a bike 4,350 miles from Seattle to Washington, D.C. to raise money for people with disabilities. I ski (Snowbird and Alta are my favorites), surf, golf, and fly fish whenever I can get to Key West. I'm also on the hunt for the best Dutch crunch sandwich in San Francisco; recommendations welcome."
  ],
  email:"campeterson44@gmail.com",
  linkedin:"https://www.linkedin.com/in/cameronpeterson4/",
  // CV page only: this is where the numbers belong.
  experience:[
    {role:"Associate, Fund Modeling",org:"Churchill Asset Management",where:"New York, NY",when:"2025 – 2026",
     note:"$55B+ middle-market private credit manager",
     points:[
      "Spearheaded Churchill's first-ever $150M joint venture and follow-on deal, triangulating eight competitor JV structures from sparse, inconsistent data to build the firm's asset selection framework and a repeatable process for future partnerships",
      "Led a $320M fund sale from diligence to close with Product, Legal and the Investment Committee, bringing $120M of new capital into the acquiring fund",
      "Stress-tested tail-risk scenarios across four funds with $6.2B of aggregate exposure; flagged a fund nearing its leverage limit and presented liquidity findings to the CFO and Board, who reduced fund leverage as a result",
      "Built quarterly budget-vs-actual models in Excel and Power BI for 10+ private credit funds ($33B in fund assets), reducing forecast errors by ~70%",
      "Owned master models projecting $2.4B in cash flows for 15 investors, and built plug-and-play investor-level models that cut IR turnaround from 5 days to 3"]},
    {role:"Consultant, Engagement Financial Advisory (FP&A)",org:"Deloitte",where:"New York, NY",when:"2021 – 2025",
     note:"Alphabet (Google) client account · Consultant 2023–2025, Analyst 2021–2023",
     points:[
      "Selected for the beta group that tested and validated the FP&A practice's first generative AI tool for project profitability, cutting scenario analysis time 30% ahead of rollout to 2,000+ practitioners",
      "Designed and launched a $300M client-rebate program, automating a manual reconciliation process for real-time monitoring and reporting; trained 220 colleagues to drive adoption",
      "Drove $775K of incremental FY23 revenue across a ~$40M portfolio with a Power BI staffing model that matched subject experts to roles at lowest cost and flagged at-risk projects early",
      "Partnered with Principals and MDs on monthly variance analysis across the Alphabet account, improving forecast accuracy 20% for revenue, costs and margins",
      "Led a five-person team of project financial analysts across the US and India, delivering the fewest escalated risk incidents of the six business-unit teams"]},
    {role:"Finance Intern",org:"Cymbidium Medical",where:"Boulder, CO",when:"2020 – 2021"},
    {role:"Commercial Real Estate Intern",org:"Tebo Properties",where:"Boulder, CO",when:"2020"}
  ],
  education:[
    {degree:"Master of Business Administration",school:"UC Berkeley, Haas School of Business",when:"2026 – 2028",
     note:"Berkeley Haas Merit Scholarship · Haas Technology, FinTech, Finance and Blockchain Clubs"},
    {degree:"B.S.B.A., dual emphasis in Finance and Real Estate",school:"University of Colorado Boulder, Leeds School of Business",when:"2018 – 2021"},
    {degree:"Study abroad",school:"Charles University, Prague",when:"Spring 2020"}
  ],
  extras:[           // {label:"", text:""}
    {label:"Volunteer",text:"Rode 4,350 miles across 15 states in 67 days, Seattle to Washington, D.C., with The Ability Experience's Journey of Hope to raise funds and awareness for people with disabilities; beat the fundraising goal by $1.5K"},
    {label:"Leadership",text:"Operations Lead, Deloitte Green Team: ran sustainability initiatives reaching 5,000+ colleagues at Deloitte's Rockefeller Center office, including composting, river clean-ups and guest speakers"}
  ],
  skills:["Excel","Power BI","SQL","Financial modeling","FP&A","Private credit","AI & automation","Claude Code"],
  certs:["SQL for Data Science"],
  tools:[
    {title:"Prompt Builder",url:"toolkit.html",desc:"Pick one of 12 task types, fill in what you know, and copy a structured prompt into any LLM."},
    {title:"Cover Letter Builder",url:"cover-letter.html",desc:"Paste a job description and your background to get a prompt that writes a specific, non-generic cover letter."}
  ],
  finance:[
    {title:"Budget Planner",url:"budget.html",desc:"Plan a monthly budget with income, expenses by category, savings goals, a 50/30/20 check and a debt payoff plan."}
  ],
  projects:[         // {title:"", url:"", desc:""}: anything beyond the toolkit (url optional)
    {title:"Haas cohort calendar",desc:"A Canvas-integrated calendar and assignment tracker for my MBA cohort, built with Claude Code."}
  ],
  essays:[]          // {title:"", url:"", date:"Oct 2026"}
};

// ---------- shared page chrome ----------
const NAV=[["Home","index.html"],["Projects","projects.html"],["Essays","essays.html"],["CV","cv.html"]];
function shell(active){
  const nav=NAV.filter(l=>l[0]!="Essays"||SITE.essays.length);
  document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#m">Skip to content</a><header><div class="wrap">
  <a class="brand" href="${NAV[0][1]}"><img src="${SITE.photo}" alt="" width="28" height="28"><span>${SITE.name}</span></a>
  <nav aria-label="Main">${nav.map(l=>`<a href="${l[1]}"${l[0]==active?' class="on" aria-current="page"':''}>${l[0]}</a>`).join("")}</nav></div></header>`);
  document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap">
  <span class="sel">${SITE.email}</span><a href="${SITE.linkedin}">LinkedIn</a><span>© ${new Date().getFullYear()} ${SITE.name}</span></div></footer>`);
}
const band=(html,cls="")=>`<section class="band ${cls}"><div class="wrap">${html}</div></section>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ---------- shared toolkit helpers ----------
function wireCopy(btn,pre){
  btn.addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(pre.textContent);btn.textContent="Copied ✓"}
    catch{getSelection().selectAllChildren(pre);btn.textContent="Press Ctrl+C"}
    setTimeout(()=>btn.textContent="Copy prompt",1600);
  });
}
function renderChecks(ul,items){
  ul.innerHTML=items.length?items.map(x=>`<li>${x}</li>`).join(""):`<li class="ok">Looks complete. Copy it into ChatGPT, Claude or Gemini.</li>`;
}
const words=t=>t.split(/\s+/).filter(Boolean).length;
