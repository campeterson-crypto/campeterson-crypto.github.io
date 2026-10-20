// EDIT THIS: all personal info lives here.
const SITE={
  name:"Cameron Peterson", photo:"headshot.jpg", tagline:"One-line description of who you are.",
  bio:["Short bio paragraph 1.","Short bio paragraph 2."],
  email:"campeterson44@gmail.com", linkedin:"https://www.linkedin.com/in/cameronpeterson4/",
  projects:[{title:"AI Prompting Toolkit",desc:"Prompt Builder: fill a form, get a structured prompt.",url:"toolkit.html"}],
  essays:[], cv:[{role:"Role / Degree",org:"Organization",when:"20XX–20XX",note:""}]
};
function shell(active){
  const L=[["Home","index.html"],["Essays","essays.html"],["Projects","projects.html"],["CV","cv.html"]];
  document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap">
  ${SITE.photo?`<img src="${SITE.photo}" alt="">`:`<img alt="">`}<span class="name">${SITE.name}</span>
  <nav>${L.map(l=>`<a href="${l[1]}"${l[0]==active?' style="font-weight:bold"':''}>${l[0]}</a>`).join("")}</nav></div></header>`);
  document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap">Email: <span style="user-select:all">${SITE.email}</span> · <a href="${SITE.linkedin}">LinkedIn</a><br>© ${new Date().getFullYear()} ${SITE.name}</div></footer>`);
}
