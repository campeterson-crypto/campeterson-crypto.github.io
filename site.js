// ============================================================
// EDIT THIS BLOCK: all of your personal info lives here.
// Empty lists ([]) hide their section, so nothing half-done shows.
// ============================================================
const SITE={
  name:"Cameron Peterson",
  photo:"headshot-sq.jpg",
  intro:"Hi! I'm Cameron. This site is where I keep my projects, a growing set of AI prompting tools, and my CV.",
  about:[],          // paragraphs, e.g. ["I'm a … at …", "Outside of work I …"]
  email:"campeterson44@gmail.com",
  linkedin:"https://www.linkedin.com/in/cameronpeterson4/",
  experience:[],     // {role:"", org:"", where:"", when:"2024 – Present", points:["", ""]}
  education:[],      // {degree:"", school:"", when:"", note:""}
  skills:[],         // ["Excel", "SQL", …]
  tools:[
    {title:"Prompt Builder",url:"toolkit.html",desc:"Pick one of 12 task types, fill in what you know, and copy a structured prompt into any LLM."},
    {title:"Cover Letter Builder",url:"cover-letter.html",desc:"Paste a job description and your background to get a prompt that writes a specific, non-generic cover letter."}
  ],
  projects:[],       // {title:"", url:"", desc:""}: anything beyond the toolkit
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
