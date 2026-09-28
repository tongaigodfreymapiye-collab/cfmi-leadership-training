const modules = [
  {code:'CFMI-LCM-101',title:'Foundations of Christian Doctrines',quiz:'https://docs.google.com/forms/d/e/1FAIpQLScmses9HK2iYZSh__kbwRE1JCVn4hmkour1JzPhh-AisYUXOw/viewform',manual:'https://drive.google.com/file/d/1D_W6ee9KQybGkwmOl4sqMSQXY_ZM3oqC/view?usp=drivesdk'},
  {code:'CFMI-LCM-102',title:'Leadership, Character & Power',quiz:'https://docs.google.com/forms/d/e/1FAIpQLSc5yaZ3V9mEvOpMDcaE8H_hTzXOGKBemRRs83_wfPYufJH-1A/viewform',manual:'https://drive.google.com/file/d/1Ct16EaENSKPPfoaGCcbvyZr-CcPIe9U2/view?usp=drivesdk'},
  {code:'CFMI-LCM-103',title:'The Family According to God’s Design',quiz:'https://docs.google.com/forms/d/e/1FAIpQLSfSaCngs2BboDHwVX5gEek-7NUSbyJFndzDp3n3JxL_uvK_CQ/viewform',manual:'https://drive.google.com/file/d/1R8KD1MVDDdPk5n9U2OL9iiopUjuh2LK7/view?usp=drivesdk'},
  {code:'CFMI-LCM-104',title:'Pastoral Care, Church Administration & Ministry Operations',quiz:'https://docs.google.com/forms/d/e/1FAIpQLSdbJQojNzukrPWsZEQ0TSVnm0XILSLOqaOqv-OZ7lnJDPSEpA/viewform',manual:'https://drive.google.com/file/d/1BzscJpHYqeQQGsPhfABI1m5X9YW8NTLc/view?usp=drivesdk'},
  {code:'CFMI-LCM-105',title:'Leadership Excellence',quiz:'https://docs.google.com/forms/d/e/1FAIpQLSf2AzHuBfTceVRL0JJ8dNBOvMe3NxlB_pwRPkM1uXizUtR6BQ/viewform',manual:'https://drive.google.com/file/d/1HTfkz6X9PQoK2_-LGKt16eTUPgG8V7wM/view?usp=drivesdk'}
];

const grid = document.getElementById('moduleGrid');
modules.forEach((m,i)=>{
  const card=document.createElement('article'); card.className='module';
  card.innerHTML=`<div class="module-top"><span class="code">${m.code}</span><span class="num">${String(i+1).padStart(2,'0')}</span></div><h3>${m.title}</h3><p>Study the official CFMI module manual, then complete the existing automated Final Quiz.</p><div class="module-actions"><a class="manual" target="_blank" rel="noopener" href="${m.manual}">Study Manual</a><a class="quiz" target="_blank" rel="noopener" href="${m.quiz}">Final Quiz</a></div>`;
  grid.appendChild(card);
});

document.getElementById('enterApp').addEventListener('click',()=>{
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  window.scrollTo({top:0,behavior:'instant'});
});
document.getElementById('homeBtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
