//billboardTextures
let billboardTextures = {};
billboardTextures.terpSolutionsTexture = '../src/jsm/engineering_hub.png';
billboardTextures.bagHolderBetsTexture = '../src/jsm/jarvis.png';
billboardTextures.homeSweetHomeTexture = '../src/jsm/damechess.png';

//box textures
let boxTexture = {};
boxTexture.Github = '../src/jsm/githubLogo.png';
boxTexture.twitter = '../src/jsm/twitter.png';
boxTexture.LinkedIn = '../src/jsm/linkedInLogo.png';
boxTexture.mail = '../src/jsm/envelope.png';
boxTexture.globe = '../src/jsm/thunder.png';
boxTexture.skillsChart = '../src/jsm/skills_chart.jpg';
boxTexture.allSkills = '../src/jsm/allSkills.png';
boxTexture.lensFlareMain = '../src/jsm/lensflare0.png';

//material textures
let stoneTexture = '../src/jsm/stone.png';
let woodTexture = '../src/jsm/woodTexture.jpg';

//text
let inputText = {};
// Project Descriptions
inputText.engineeringHubDesc = 'Engineering Hub - Mumbai Hacks Finalist\n\nComprehensive LMS platform for Mumbai University students\nwith AI-powered doubt-solving chatbot (Gemini API) and\nWebRTC-enabled live peer tutoring with screen sharing.\n\nTech: MERN Stack, WebRTC, Socket.io, Gemini API';

inputText.jarvisDesc = 'Jarvis - Agentic AI Assistant\n\nVoice-activated AI assistant for system automation.\nExecutes system tasks, web browsing, and media control\nthrough natural language commands.\n\nTech: Python, NLP, OS Automation, Speech Recognition';

inputText.damechessDesc = 'DameChess.com - Commercial Chess Platform\n\nFull-stack commercial platform with multi-dashboard\necosystem (Admin, Instructor, Student, User).\nReal-time gameplay via Socket.io with JWT + RBAC security.\n\nTech: MERN Stack, Socket.io, MongoDB Aggregation, JWT';

// Achievements Section (replacing timeline)
inputText.achievements = 'ACHIEVEMENTS & RECOGNITION\n\n> MSME Hackathon Winner (Govt. of India, 2024)\n   Hand Gesture Presentation - Computer Vision\n\n> Mumbai Hacks Finalist (2024)\n   Engineering Hub Platform\n\n> Aavishkar Research Convention (Dec 2024)\n   State-Level Recognition\n\n> ML Engineer & Stakeholder - TechNewity Labs\n   Enterprise AI: chat.accudesign.in\n   Commercial Platform: DameChess.com\n\n> IoT Research Intern - SPIT College (2023)\n   Autonomous Navigation System\n\n> Academic Excellence - 9.3 CGPA\n   B.E. AI & ML, ARMIET Mumbai';

//SVG
let SVG = {};
SVG.reactLogo = '../src/jsm/react-svg.svg';

//URLs
let URL = {};
URL.terpsolutions = 'https://youtu.be/zziJyVeCPno?si=yH1F01PBPmLw3KUI';
URL.bagholderBets = 'https://youtu.be/8Hv1y3Tvn4Y?si=UQldGY5L6rZ1mTW9';
URL.homeSweetHomeURL = 'https://damechess.com';
URL.gitHub = 'https://github.com/Vpandey-tech';
URL.twitter = 'https://linkedin.com/in/vivek-pandey-90058b252'; // Mapping LinkedIn to Twitter button for now if no Twitter
URL.email = 'mailto:vp983351@gmail.com';
URL.githubBagholder = 'https://github.com/Vpandey-tech'; // Generic fallback
URL.githubHomeSweetHome = 'https://github.com/Vpandey-tech'; // Generic fallback
URL.devTo = 'http://vp5846113.wixstudio.com/portfolio';

export { billboardTextures, boxTexture, inputText, URL, stoneTexture, woodTexture };
