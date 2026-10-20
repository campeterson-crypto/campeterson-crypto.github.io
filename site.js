// EDIT THIS: all personal info lives here.
const SITE={
  name:"Cameron Peterson", photo:"headshot.jpg",
  intro:"Hi! I'm Cameron. One or two sentences about who you are and what this site is for.",
  bio:["Short bio paragraph 1.","Short bio paragraph 2."],
  email:"campeterson44@gmail.com", linkedin:"https://www.linkedin.com/in/cameronpeterson4/",
  projects:[{title:"AI Prompting Toolkit",desc:"Prompt Builder: pick a task, fill in what you know, and copy a structured prompt into any LLM.",url:"toolkit.html"}],
  essays:[], cv:[{role:"Role / Degree",org:"Organization",when:"20XX–20XX",note:""}]
};
function shell(active){
  const L=[["Home","index.html"],["Essays","essays.html"],["Projects","projects.html"],["CV","cv.html"]];
  document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap">
  <img src="${SITE.photo}" alt=""><a class="name" href="index.html">${SITE.name}</a>
  <nav>${L.map(l=>`<a href="${l[1]}"${l[0]==active?' class="on"':''}>${l[0]}</a>`).join("")}</nav></div></header>`);
  document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><span>${SITE.email}</span><a href="${SITE.linkedin}">LinkedIn</a><span>© ${new Date().getFullYear()} ${SITE.name}</span></div></footer>`);
}
function band(html){return `<section class="band"><div class="wrap">${html}</div></section>`}
