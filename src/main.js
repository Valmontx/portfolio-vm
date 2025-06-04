
const habilidades = [
    "JavaScript",
    "HTML",
    "CSS",
    "Sass",
    "React",
    "Vue Básico",
    "Node.js",
    "Firebase",
    "AWS Básico",
    "GitHub",
    "Git",
    "Bootstrap",
    "Tailwind",
    "Figma",
    "Moqups",
    "Marvel",
    "WordPress",
    "Canva",
    "Notion",
    "Jira",
]

const coloresTec = {
"JavaScript":"#f7df1e",     
  "HTML": "#e34c26",          
  "CSS": "#2965f1",            
  "Sass": "#cd6799",           
  "React": "#61dafb",          
  "Vue Básico": "#42b883",     
  "Node.js": "#3c873a",        
  "Firebase": "#ffcb2b",       
  "AWS Básico": "#ff9900",     
  "GitHub": "#24292e",         
  "Git": "#f05032",            
  "Bootstrap": "#7952b3",      
  "Tailwind": "#38bdf8",      
  "Figma": "#a259ff",          
  "Moqups": "#00b3e6",         
  "Marvel": "#e73535",         
  "WordPress": "#21759b",      
  "Canva": "#00c4cc",         
  "Jira": "#0052cc"          
}
 

const lista = document.getElementById("habilidades");

habilidades.forEach((habilidad) => {
    const li = document.createElement("li");
    li.textContent = habilidad;
    li.style.backgroundColor = coloresTec[habilidad] || "#888";
    lista.appendChild(li);
});