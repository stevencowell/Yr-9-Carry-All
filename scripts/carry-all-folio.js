const STORE='carry-all_project_folio_v1';
const CARDS=[
  [
    "brief",
    "Project Brief and Success Criteria",
    "Show that you understand what the Barbecue Carry-All must achieve and how process evidence supports the finished product.",
    "Verified requirements, constraints and a checklist connecting function, quality, safety and evidence.",
    "What must your Carry-All do and show to be considered successful?",
    [
      "My Carry-All must…",
      "I will judge the finished Carry-All by…"
    ],
    "Carry-All surrounded by function, accuracy, workmanship, safety and evidence criteria."
  ],
  [
    "plans",
    "Working Drawing and Cutting List",
    "Explain how the supplied views, written dimensions and material notes control manufacture without scaling the image.",
    "Annotated plan reading, checked written dimensions, component list, quantities and teacher clarification where needed.",
    "How did the working drawing prevent a measuring or material error?",
    [
      "The written drawing shows…",
      "I cross-checked this feature by…"
    ],
    "Orthographic views leading to a verified Carry-All component and cutting list."
  ],
  [
    "whs",
    "WHS, SWMS and Risk Controls",
    "Show how hazards were managed through the real Carry-All sequence, not through a generic safety statement.",
    "Stage-specific SWMS, hazards, hierarchy of controls, school SOP references, teacher hold points and task-appropriate PPE.",
    "Which Carry-All hazard required the strongest practical control, and why?",
    [
      "The hazard was…",
      "The higher-order control was…"
    ],
    "Carry-All sequence beside the hierarchy of controls and teacher approval points."
  ],
  [
    "materials",
    "Materials, Culture and Responsible Use",
    "Record how material properties, defects, First Nations perspectives and responsible use informed decisions.",
    "Pine and plywood inspection, credible cultural research, cutting-layout choices, reusable off-cuts and waste-reduction evidence.",
    "How did material knowledge improve quality or reduce waste?",
    [
      "I selected this material because…",
      "A respectful source explained…",
      "I reduced waste by…"
    ],
    "Approved Carry-All stock annotated with grain, defect, usable areas and responsible-use decisions."
  ],
  [
    "joint-choice",
    "Required Construction and Comparative Joint Knowledge",
    "Use the supplied drawing to identify rebate-and-housing as the assessed construction, while explaining how box-pin and dovetail knowledge remains comparative only.",
    "Annotated drawing evidence, the 5 mm rebate-butt and housing notes where shown, a clear required-versus-comparative statement and teacher clarification where needed.",
    "How does the drawing prove which joints are required for this Carry-All?",
    [
      "The assessed Carry-All uses…",
      "Box-pin and dovetail are comparative only because…"
    ],
    "Supplied working drawing annotated to distinguish the required rebate-and-housing construction from alternative-joint theory."
  ],
  [
    "joint-making",
    "Mark-out and Rebate-and-Housing Construction",
    "Explain how consistent references, visible layout lines, waste identification and teacher-approved checks controlled the required rebates and housings.",
    "Face-side and face-edge marks, rebate/housing layout, waste identification, approved scrap practice, progressive fit checks and any teacher-approved correction.",
    "Which reference mark or fit check had the greatest effect on the rebate-and-housing quality?",
    [
      "My reference surfaces were…",
      "The rebate or housing check showed…"
    ],
    "Required rebate-and-housing features progressing from drawing interpretation to a controlled dry fit."
  ],
  [
    "structure",
    "Base Rebate, Housings and Internal Parts",
    "Show how the base, dividers and central handle were located and supported by the grooves shown on the drawing.",
    "Rebate/housing layout, matching positions, shoulder and depth checks, base fit, divider/handle alignment and dry-fit evidence.",
    "What proved that the internal parts would assemble in the correct position?",
    [
      "The drawing located…",
      "I checked matching housings by…"
    ],
    "Exploded Carry-All structure with the base rebate, housings, dividers and handle panel identified."
  ],
  [
    "handle",
    "Handle Design, Drawing and Shaping",
    "Explain how function, balance, clearance, appearance and approved constraints guided the handle.",
    "Handle ideas, orthogonal drawing, verified template, centre lines, staged shaping, symmetry and teacher-approved process checks.",
    "How did drawing and checking improve the final handle?",
    [
      "The handle needed to…",
      "The template transferred…",
      "I checked symmetry by…"
    ],
    "Handle development from design sketch to orthogonal view, template and shaped component."
  ],
  [
    "assembly",
    "Dry Fit, Adhesive and Clamping",
    "Record the irreversible assembly decisions and checks made before, during and after clamping.",
    "Complete dry-fit photograph, orientation labels, joint seating, base/internal-part fit, adhesive plan, clamp plan, squareness and twist checks.",
    "Which dry-fit or clamping check prevented the most serious assembly fault?",
    [
      "Before adhesive, I found…",
      "During clamping, I checked…"
    ],
    "Dry assembly changing into a square, supported and evenly clamped Carry-All."
  ],
  [
    "finish",
    "Surface Preparation and Approved Finish",
    "Explain how inspection, dust control and verified product directions produced a consistent finish.",
    "Scratch and glue-contamination checks, edge protection, ready-for-finish evidence, label/SDS notes, finish-stage records and observations.",
    "What evidence proved the surface and finish were ready to progress?",
    [
      "I knew the surface was ready when…",
      "The approved product required…"
    ],
    "Surface condition and approved finish stages connected by inspection gates."
  ],
  [
    "evidence",
    "Photos, Captions and Problem Solving",
    "Build a traceable story that proves a real decision, fault diagnosis and teacher-approved correction.",
    "Purposeful stage photos, captions using stage/action/check/result, problem-cause-check-correction evidence and learning.",
    "Which evidence item best proves that your process improved?",
    [
      "This evidence shows…",
      "The symptom was…",
      "I confirmed the cause by…"
    ],
    "Timeline of planning, making, checking, diagnosing and improving the Carry-All."
  ],
  [
    "evaluation",
    "PMI Evaluation and Final Quality",
    "Judge the completed Carry-All honestly against function, craftsmanship, safety, sustainability and the brief.",
    "Final product views, stability/handle/base/divider/joint checks, PMI evidence, one limitation and one realistic improvement.",
    "How successfully does your completed Carry-All meet the approved brief?",
    [
      "A plus supported by evidence is…",
      "A minus and its cause are…",
      "An interesting finding was…"
    ],
    "Final Carry-All with callouts for function, joint quality, finish, PMI and next improvement."
  ]
]
.map((c,i)=>({id:i+1,key:c[0],title:c[1],purpose:c[2],evidence:c[3],prompt:c[4],starters:c[5],visual:c[6]}));
const $=id=>document.getElementById(id), enc=new TextEncoder(), dec=new TextDecoder();
const safe=s=>String(s||'carry-all-folio').trim().replace(/[^a-z0-9]+/gi,'-').replace(/^-+|-+$/g,'').toLowerCase()||'carry-all-folio';
const status=s=>$('folioStatus').textContent=s;
function cards(){ $('folioCards').innerHTML=CARDS.map(c=>`<article class="folio-card"><div class="folio-number">${c.id}<span>Card</span></div><div class="folio-body"><div class="folio-head"><div><p class="section-kicker">Evidence card ${c.id}</p><h2>${c.title}</h2></div><label class="folio-complete"><input type="checkbox" data-done="${c.key}"> Complete</label></div><div class="folio-meta"><article><h3>Why this matters</h3><p>${c.purpose}</p></article><article><h3>Evidence to collect</h3><p>${c.evidence}</p><h3>Visual idea</h3><p>${c.visual}</p></article></div><div class="folio-response-grid"><div class="folio-field"><label for="response-${c.key}">${c.prompt}</label><textarea id="response-${c.key}" data-response="${c.key}" placeholder="Write your response here…"></textarea></div><div class="folio-field"><label for="note-${c.key}">Evidence note or photo caption</label><textarea id="note-${c.key}" data-note="${c.key}" placeholder="What does your photo, sketch or check prove?"></textarea><details class="sentence-starters"><summary>Sentence starters</summary><ul>${c.starters.map(s=>`<li>${s}</li>`).join('')}</ul></details></div></div><div class="photo-panel"><h3>Add one useful photo</h3><p>Use your own build photo, sketch or check. It is included in the ZIP backup.</p><label class="photo-upload">Choose photo<input type="file" accept="image/*" data-photo="${c.key}"></label><img class="photo-preview" data-preview="${c.key}" alt="${c.title} evidence preview"></div></div></article>`).join(''); }
function session(){const r={},n={},d={},p={};CARDS.forEach(c=>{r[c.key]=$(`response-${c.key}`).value;n[c.key]=$(`note-${c.key}`).value;d[c.key]=document.querySelector(`[data-done="${c.key}"]`).checked;const i=document.querySelector(`[data-preview="${c.key}"]`);if(i.dataset.data)p[c.key]={name:i.dataset.name||`${c.key}.jpg`,data:i.dataset.data};});return{version:1,project:'Year 9 Timber Carry-All Project Folio',savedAt:new Date().toISOString(),student:{first:$('studentFirst').value,last:$('studentLast').value,className:$('studentClass').value,date:$('sessionDate').value},responses:r,notes:n,done:d,photos:p};}
function setPhoto(k,p){const i=document.querySelector(`[data-preview="${k}"]`);i.src=p.data;i.dataset.data=p.data;i.dataset.name=p.name||`${k}.jpg`;i.style.display='block';}
function apply(x){const s=x.student||{};$('studentFirst').value=s.first||'';$('studentLast').value=s.last||'';$('studentClass').value=s.className||'';$('sessionDate').value=s.date||'';CARDS.forEach(c=>{$(`response-${c.key}`).value=x.responses?.[c.key]||'';$(`note-${c.key}`).value=x.notes?.[c.key]||'';document.querySelector(`[data-done="${c.key}"]`).checked=!!x.done?.[c.key];if(x.photos?.[c.key])setPhoto(c.key,x.photos[c.key]);});save(false);status('Saved folio restored.');}
function progress(){const x=session(),done=CARDS.filter(c=>x.responses[c.key].trim()&&x.notes[c.key].trim()).length;$('progressCount').textContent=`${done} of ${CARDS.length} evidence cards complete`;$('progressBar').style.width=`${done/CARDS.length*100}%`;}
function save(show=true){localStorage.setItem(STORE,JSON.stringify(session()));progress();if(show)status(`Saved ${new Date().toLocaleTimeString()}.`);}
function compress(file){return new Promise((ok,bad)=>{const r=new FileReader();r.onerror=bad;r.onload=()=>{const im=new Image();im.onerror=bad;im.onload=()=>{const scale=Math.min(1,1400/Math.max(im.width,im.height)),can=document.createElement('canvas');can.width=Math.round(im.width*scale);can.height=Math.round(im.height*scale);can.getContext('2d').drawImage(im,0,0,can.width,can.height);ok({name:file.name.replace(/\.[^.]+$/,'.jpg'),data:can.toDataURL('image/jpeg',.82)});};im.src=r.result;};r.readAsDataURL(file);});}
function crc(b){let c=-1;for(let v of b){c^=v;for(let i=0;i<8;i++)c=(c>>>1)^(0xedb88320&-(c&1));}return(c^-1)>>>0;}function w16(a,o,v){a[o]=v&255;a[o+1]=v>>>8&255}function w32(a,o,v){a[o]=v&255;a[o+1]=v>>>8&255;a[o+2]=v>>>16&255;a[o+3]=v>>>24&255}function join(a){let n=a.reduce((x,y)=>x+y.length,0),r=new Uint8Array(n),o=0;a.forEach(x=>{r.set(x,o);o+=x.length});return r}
function zip(files){const l=[],c=[];let o=0;const now=new Date(),t=now.getHours()<<11|now.getMinutes()<<5|Math.floor(now.getSeconds()/2),d=now.getFullYear()-1980<<9|now.getMonth()+1<<5|now.getDate();files.forEach(f=>{const n=enc.encode(f.name),z=crc(f.bytes),h=new Uint8Array(30+n.length);w32(h,0,0x04034b50);w16(h,4,20);w16(h,10,t);w16(h,12,d);w32(h,14,z);w32(h,18,f.bytes.length);w32(h,22,f.bytes.length);w16(h,26,n.length);h.set(n,30);l.push(h,f.bytes);const q=new Uint8Array(46+n.length);w32(q,0,0x02014b50);w16(q,4,20);w16(q,6,20);w16(q,12,t);w16(q,14,d);w32(q,16,z);w32(q,20,f.bytes.length);w32(q,24,f.bytes.length);w16(q,28,n.length);w32(q,42,o);q.set(n,46);c.push(q);o+=h.length+f.bytes.length});const cd=join(c),end=new Uint8Array(22);w32(end,0,0x06054b50);w16(end,8,files.length);w16(end,10,files.length);w32(end,12,cd.length);w32(end,16,o);return join([...l,cd,end])}
function dl(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1200)}function b64(s){const raw=(s||'').split(',')[1]||'',bin=atob(raw);return Uint8Array.from(bin,x=>x.charCodeAt(0));}
function getZip(){const x=session(),f=[{name:'carry-all-folio-session.json',bytes:enc.encode(JSON.stringify(x,null,2))}];Object.entries(x.photos).forEach(([k,p])=>f.push({name:`photos/${k}-${p.name}`.replace(/[^\w./-]/g,'-'),bytes:b64(p.data)}));dl(new Blob([zip(f)],{type:'application/zip'}),`${safe(`${x.student.first}-${x.student.last}`)}-carry-all-folio-backup.zip`);status('ZIP backup downloaded with answers and photos.');}
const r16=(b,o)=>b[o]|b[o+1]<<8,r32=(b,o)=>(b[o]|b[o+1]<<8|b[o+2]<<16|b[o+3]<<24)>>>0;
async function restore(f){try{if(f.name.toLowerCase().endsWith('.json'))return apply(JSON.parse(await f.text()));const b=new Uint8Array(await f.arrayBuffer());let o=0,json='';while(o<b.length&&r32(b,o)===0x04034b50){const size=r32(b,o+18),ns=r16(b,o+26),ex=r16(b,o+28),start=o+30+ns+ex,name=dec.decode(b.slice(o+30,o+30+ns));if(r16(b,o+8)!==0)throw Error();if(name==='carry-all-folio-session.json')json=dec.decode(b.slice(start,start+size));o=start+size}if(!json)throw Error();apply(JSON.parse(json));}catch{status('Could not read that backup. Use a ZIP or JSON downloaded from this folio.');}}
function init(){cards();$('sessionDate').value=new Date().toISOString().slice(0,10);try{const s=localStorage.getItem(STORE);if(s)apply(JSON.parse(s));}catch{localStorage.removeItem(STORE)}progress();document.addEventListener('input',e=>{if(e.target.matches('input,textarea'))save()});document.addEventListener('change',async e=>{if(e.target.matches('[data-photo]')){const f=e.target.files[0];if(f){setPhoto(e.target.dataset.photo,await compress(f));save()}e.target.value=''}else save()});$('downloadZip').onclick=getZip;$('downloadJson').onclick=()=>{const x=session();dl(new Blob([JSON.stringify(x,null,2)],{type:'application/json'}),`${safe(`${x.student.first}-${x.student.last}`)}-carry-all-folio-session.json`);status('JSON session downloaded.')};$('restoreSession').onclick=()=>$('restoreInput').click();$('restoreInput').onchange=e=>{if(e.target.files[0])restore(e.target.files[0]);e.target.value=''};$('printFolio').onclick=()=>window.print();$('clearFolio').onclick=()=>{if(confirm('Clear all saved Carry-All folio work from this browser?')){localStorage.removeItem(STORE);location.reload()}}}document.addEventListener('DOMContentLoaded',init);
