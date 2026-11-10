/* SHIFT DYNAMICS · Supabase-connected MVP
 * Only PUBLIC project URL and PUBLISHABLE key may appear here.
 * Never put secret/service_role keys or candidate answers in GitHub source.
 */
(() => {
'use strict';
const PROJECT_URL = 'https://htqoiegerivtlgmewwwt.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_6235lirtp6IvcMogMPvGSA_z5EAO_Hb';
const FILE_LIMIT = 50 * 1024 * 1024;
const I18N_STORAGE_KEY = 'sd_assessment_language';
const I18N = {
 ko: {
  heroTitle:'AI 활용 역량 검사',step1:'01 · 로그인',step2:'02 · 실무 과제 수행',step3:'03 · 결과물 제출',
  loginTitle:'시험 로그인',loginHelp:'담당자로부터 발급받은 아이디와 비밀번호로 로그인하세요.',
  loginIdLabel:'아이디',passwordLabel:'비밀번호',signIn:'로그인 →',signOut:'로그아웃',
  loginPlaceholder:'아이디',passwordPlaceholder:'비밀번호',
  assignedTitle:'배정된 시험',securityTitle:'시험 문제 보안 안내',
  securityBody:'시험 문제와 첨부자료를 외부에 유출하거나 복사·촬영·배포·공유하는 행위를 금지합니다.',
  supportPrefix:'오류 또는 문의사항이 있으신 경우,',supportSuffix:'로 남겨주세요.',
  leaveWarning:'시험 진행 중 새로고침·로그아웃·페이지 이탈 시 재접속할 수 없습니다.',
  timeRemaining:'남은 시간',examHelp:'AI 도구를 활용하여 실무 문제를 해결하고, 과정과 결과물을 제출하세요.',
  questionList:'문항 목록',answerLabel:'답안 작성',
  answerPlaceholder:'답안을 작성하세요.',fileLabel:'결과물 첨부',
  savePending:'자동저장 대기',previous:'← 이전',saveDraft:'임시저장',next:'다음 →',submit:'시험 최종 제출 →',
  finishedTitle:'시험이 종료되었습니다.\n좋은 결과 있으시길 바랍니다.',
  finishedHelp:'제출된 시험 문제와 답안은 다시 열람할 수 없습니다.',finishedList:'시험 목록 보기',
  candidateRole:'후보자',welcome:'{name}님, 배정된 시험을 확인하세요.',noAssigned:'배정된 시험이 없습니다.',
  period:'응시 기간',duration:'제한시간',startExam:'시험 시작',question:'문항',characters:'자',
  statusActive:'진행 중',statusSubmitted:'제출 완료',statusTimedOut:'시간 만료',statusTerminated:'응시 이탈 종료',
  statusWaiting:'응시 대기',statusExpired:'응시기간 종료',statusAvailable:'응시 가능',
  signOutConfirm:'시험 도중 로그아웃하면 제출 및 종료 처리되어 다시 응시할 수 없습니다. 계속하시겠습니까?',
  logoutFail:'답안을 종료 저장하지 못했습니다. 다시 시도하세요.',
  loginFail:'로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.',
  sessionFail:'로그인 상태 확인 실패',startConfirm:'시험을 시작하면 제한시간이 진행됩니다. 새로고침·로그아웃·이탈 시 재접속이 차단됩니다. 시작하시겠습니까?',
  questionLoadFail:'시험 문제를 불러오지 못했습니다. 관리자에게 문의하세요.',
  saveWaiting:'저장 대기',saveError:'저장 오류',saveDone:'서버 저장 완료',saveAvailable:'자동저장 사용',
  savedNotice:'현재 문항을 서버에 저장했습니다.',saveClosed:'시험이 이미 종료되어 답안을 저장할 수 없습니다.',
  switchError:'답안을 저장하지 못해 문항을 이동하지 않았습니다.',
  maxFiles:'한 문항에 파일은 최대 10개까지 첨부할 수 있습니다.',uploading:'첨부파일 업로드 중',
  candidateUploadLimit:'파일당 최대 50MB',overSize:'50MB를 초과했습니다.',uploadFail:'첨부파일 업로드/저장 실패',
  attachmentLink:'파일 보기 / 다운로드',previewFail:'미리보기 불가',removeFile:'첨부 목록에서 제거',
  submitConfirm:'최종 제출하면 답안을 다시 확인하거나 수정할 수 없습니다. 제출하시겠습니까?',finishFail:'시험 종료에 실패했습니다.',
 },
 en: {
  heroTitle:'AI Competency Assessment',step1:'01 · Sign in',step2:'02 · Complete the task',step3:'03 · Submit your work',
  loginTitle:'Assessment Sign-in',loginHelp:'Sign in with the user ID and password provided by the recruitment team.',
  loginIdLabel:'User ID',passwordLabel:'Password',signIn:'Sign in →',signOut:'Sign out',
  loginPlaceholder:'User ID',passwordPlaceholder:'Password',
  assignedTitle:'Assigned Assessments',securityTitle:'Assessment Confidentiality',
  securityBody:'Copying, photographing, distributing, sharing, or disclosing assessment questions and reference materials externally is prohibited.',
  supportPrefix:'For technical issues or inquiries, contact',supportSuffix:'.',
  leaveWarning:'Refreshing, signing out, or leaving this page during the assessment will prevent re-entry.',
  timeRemaining:'Time remaining',examHelp:'Use AI tools to solve the practical task, and submit your approach and final deliverables.',
  questionList:'Questions',answerLabel:'Your Answer',
  answerPlaceholder:'Write your answer.',fileLabel:'Attach deliverables',
  savePending:'Waiting to save',previous:'← Previous',saveDraft:'Save draft',next:'Next →',submit:'Submit assessment →',
  finishedTitle:'Your assessment has ended.\nWe wish you the best.',
  finishedHelp:'The submitted questions and answers are no longer available for review.',finishedList:'View assessments',
  candidateRole:'Candidate',welcome:'{name}, please review your assigned assessments.',noAssigned:'No assessments have been assigned.',
  period:'Available',duration:'Time limit',startExam:'Start assessment',question:'Question',characters:'characters',
  statusActive:'In progress',statusSubmitted:'Submitted',statusTimedOut:'Time expired',statusTerminated:'Ended due to interruption',
  statusWaiting:'Not yet available',statusExpired:'Availability ended',statusAvailable:'Available now',
  signOutConfirm:'Signing out during an assessment will close it and prevent re-entry. Continue?',
  logoutFail:'Could not save and end your assessment. Please try again.',
  loginFail:'Sign-in failed. Check your user ID and password.',
  sessionFail:'Could not verify your sign-in session',startConfirm:'Starting the assessment will begin the time limit. You cannot re-enter after refreshing, signing out, or leaving. Start now?',
  questionLoadFail:'Could not load assessment questions. Contact the recruitment team.',
  saveWaiting:'Pending save',saveError:'Save error',saveDone:'Saved to server',saveAvailable:'Autosave enabled',
  savedNotice:'This answer has been saved to the server.',saveClosed:'The assessment has ended. Your answer can no longer be saved.',
  switchError:'Unable to move to the next question because your answer could not be saved.',
  maxFiles:'You can attach up to 10 files per question.',uploading:'Uploading attachments',
  candidateUploadLimit:'Maximum 50 MB per file',overSize:'exceeds 50 MB.',uploadFail:'File upload or save failed',
  attachmentLink:'View / download file',previewFail:'Preview unavailable',removeFile:'Remove attachment',
  submitConfirm:'Once submitted, you cannot view or edit your answers. Submit now?',finishFail:'Could not finalize the assessment.',
 }
};
let selectedLanguage = (() => { try { return localStorage.getItem(I18N_STORAGE_KEY) === 'en' ? 'en' : 'ko'; } catch { return 'ko'; } })();
function language(){ return profile?.role === 'admin' ? 'ko' : selectedLanguage; }
function tr(key, values={}){
 let msg=I18N[language()][key] ?? I18N.ko[key] ?? key;
 return Object.entries(values).reduce((v,[k,val])=>v.replaceAll(`{${k}}`,String(val)),msg);
}
function translateSaveIndicator(){
 const el=$('autosave-state');if(!el)return;
 const old=el.textContent || '';
 const prefix={
  '자동저장 대기':'savePending','Waiting to save':'savePending',
  '저장 대기':'saveWaiting','Pending save':'saveWaiting',
  '자동저장 사용':'saveAvailable','Autosave enabled':'saveAvailable',
  '첨부파일 업로드 중':'uploading','Uploading attachments':'uploading'
 };
 if(prefix[old])el.textContent=tr(prefix[old]);
 else if(/^(서버 저장 완료|Saved to server) · /.test(old))el.textContent=tr('saveDone')+old.slice(old.indexOf(' · '));
 else if(/^(저장 오류|Save error): /.test(old))el.textContent=tr('saveError')+old.slice(old.indexOf(':'));
}
function applyLanguage(){
 const current=language(); document.documentElement.lang=current;
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=tr(el.dataset.i18n).replace(/\\n/g,'\n');});
 document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=tr(el.dataset.i18nPlaceholder);});
 document.querySelectorAll('.language-choice').forEach(btn=>{btn.setAttribute('aria-pressed',String(btn.dataset.lang===current));});
 translateSaveIndicator();
 const switcher=$('language-switch');
 if(switcher)switcher.hidden=profile?.role==='admin'||!['login','candidate','exam','finished'].some(v=>!$(v+'-view').hidden);
 const user=$('header-user');if(user&&profile)user.textContent=`${profile.display_name} · ${profile.role==='admin'?'관리자':tr('candidateRole')}`;
 if(profile?.role==='candidate'&&!$('candidate-view').hidden){
   $('candidate-welcome').textContent=tr('welcome',{name:profile.display_name});renderCandidateList();
 }
 if(active&&!$('exam-view').hidden){
   const q=activeQuestions[currentIndex];if(q){
     $('answer-count').textContent=`${$('answer-input').value.length} ${tr('characters')}`;
     $('question-index-label').textContent=`${tr('question').toUpperCase()} ${String(currentIndex+1).padStart(2,'0')}`;
     const nav=$('question-nav');blank(nav);
     activeQuestions.forEach((item,i)=>nav.append(action(`${tr('question')} ${i+1}${activeAnswers[item.id]?.content?' ✓':''}`,()=>switchQuestion(i),'question-button'+(currentIndex===i?' active':''))));
   }
 }
 // Changing a display language never starts, saves, submits, or resets an attempt.
}
function selectLanguage(v){
 if(!['ko','en'].includes(v)||profile?.role==='admin')return;
 selectedLanguage=v;
 try{localStorage.setItem(I18N_STORAGE_KEY,v);}catch{}
 applyLanguage();
}

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = d => d ? new Date(d).toLocaleString(language()==='en'?'en-US':'ko-KR',{hour12:false}) : '—';
const now = () => Date.now();
const uuid = () => crypto.randomUUID();
const slug = s => String(s).replace(/[^a-zA-Z0-9가-힣_.-]/g,'_').slice(0,65);
const errorMessage = err => err?.message || String(err || '알 수 없는 오류');
let api, profile=null, session=null, all={profiles:[],templates:[],questions:[],assignments:[],attempts:[],answers:[],bank:[]};
let currentTab='candidates', active=null, activeQuestions=[], activeAnswers={}, currentIndex=0;
let saveTimer=null,tickTimer=null,epoch=0, saving=Promise.resolve(), changedSeq=0, savedSeq=0;
let timerExpired=false;
let showClosedList=false;
const finishMarkerKey = () => profile?.id ? `sd_assessment_finished_${profile.id}` : null;
function pinFinishedScreen(){ const key=finishMarkerKey(); if(key){try{sessionStorage.setItem(key,'1');}catch{}} showClosedList=false; }
function hasPinnedFinishedScreen(){ const key=finishMarkerKey();if(!key)return false;try{return sessionStorage.getItem(key)==='1';}catch{return false;} }
function clearFinishedScreenPin(){ const key=finishMarkerKey();if(key){try{sessionStorage.removeItem(key);}catch{}} }

let editingTemplate=null;
let editingBank=null;
let bankSavedAttachments=[];
let bankReady=true;
let bankDetailRequest=0;
let pdfObjectUrls=new WeakMap();
const closedStatuses = ['submitted','timed_out','terminated'];
function notice(msg, bad=false){ const e=$('notice');e.textContent=msg;e.className='notice'+(bad?' error':'');e.hidden=false;window.scrollTo({top:0,behavior:'smooth'}); }
// Lightweight, non-scrolling confirmation for adding a question from the bank.
let bankToastTimer=null;
function bankToast(message){
 const toast=$('bank-action-toast');
 clearTimeout(bankToastTimer);
 toast.textContent=message;
 toast.hidden=false;
 bankToastTimer=setTimeout(()=>{toast.hidden=true;},3200);
}
// Numbering reflects the actual DOM order, which is also the saved sort_order.
function updateQuestionNumbers(){
 const editors=[...$('question-editors').querySelectorAll(':scope > .question-editor')];
 editors.forEach((box,index)=>{
  const n=index+1;
  const heading=box.querySelector('.question-editor-heading');
  if(heading)heading.textContent=`문항 ${n}`;
  const description=box.querySelector('.question-editor-source');
  if(description)description.textContent=box._bankSourceTitle?`문제은행: ${box._bankSourceTitle}`:'직접 작성 문항';
  box.dataset.questionNumber=String(n);
  box.setAttribute('aria-label',`문항 ${n}`);
  const textarea=box.querySelector('.question-text');
  if(textarea)textarea.setAttribute('aria-label',`문항 ${n} 문제 설명`);
 });
 const counter=$('template-question-count');
 if(counter)counter.textContent=`총 ${editors.length}개 문항`;
}

function clearNotice(){ $('notice').hidden=true; }
function view(name){['setup','login','admin','candidate','exam','finished'].forEach(k=>$(k+'-view').hidden=k!==name); $('header-actions').hidden=['setup','login'].includes(name);applyLanguage();clearNotice();window.scrollTo(0,0);}
function check({data,error}) {if(error) throw error;return data;}
function bool(v){return !!v;}
function ensureAdmin(){if(profile?.role!=='admin') throw Error('관리자 전용 기능입니다.');}
function setBusy(form,b){form?.classList.toggle('loading',b);}
function labelStatus(a,t){if(t){return ({active:'statusActive',submitted:'statusSubmitted',timed_out:'statusTimedOut',terminated:'statusTerminated'})[t.status]?tr(({active:'statusActive',submitted:'statusSubmitted',timed_out:'statusTimedOut',terminated:'statusTerminated'})[t.status]):t.status;} if(now()<new Date(a.available_from).getTime())return tr('statusWaiting');if(now()>=new Date(a.available_until).getTime())return tr('statusExpired');return tr('statusAvailable');}
function getAttempt(id){return all.attempts.find(t=>t.assignment_id===id);}
function getTemplate(id){return all.templates.find(t=>t.id===id);}
function getCandidate(id){return all.profiles.find(p=>p.id===id);}
function newEl(tag,className,text){const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=String(text);return e;}
function action(text,fn,cls='button button-outline button-small'){const e=newEl('button',cls,text);e.type='button';e.addEventListener('click',()=>Promise.resolve(fn()).catch(err=>notice(errorMessage(err),true)));return e;}
function blank(el){el.replaceChildren();}
function formatLocal(d){const x = new Date(d), pad=n=>String(n).padStart(2,'0');return `${x.getFullYear()}-${pad(x.getMonth()+1)}-${pad(x.getDate())}T${pad(x.getHours())}:${pad(x.getMinutes())}`;}
function fields(){return $('candidate-form')}
async function init(){
 if(PROJECT_URL.includes('YOUR_PROJECT_REF') || PUBLISHABLE_KEY.includes('YOUR_SUPABASE_')){view('setup');return;}
 if(!window.supabase?.createClient){view('setup');notice('Supabase JavaScript 라이브러리를 불러오지 못했습니다. 인터넷 연결과 CDN 접근을 확인하세요.',true);return;}
 api=window.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});
 bindEvents();
 try{const {data:{session:s}}=await api.auth.getSession();if(s)await afterAuth(s);else view('login');}
 catch(err){view('login');notice(`${tr('sessionFail')}: ${errorMessage(err)}`,true);}
}
function bindEvents(){
 document.querySelectorAll('.language-choice').forEach(b=>b.addEventListener('click',()=>selectLanguage(b.dataset.lang)));
 $('login-form').addEventListener('submit',login);
 $('logout-btn').addEventListener('click',logout);$('finished-logout').addEventListener('click',logout);
 $('finished-exams').addEventListener('click',async()=>{ if(active)return; clearFinishedScreenPin();showClosedList=true; try{await refreshCandidate();}catch(err){notice(errorMessage(err),true);} });
 document.querySelectorAll('.admin-tab').forEach(b=>b.addEventListener('click',()=>selectTab(b.dataset.tab)));
 document.querySelectorAll('[data-refresh]').forEach(b=>b.addEventListener('click',async()=>{await refreshAdmin();notice('현재 데이터를 불러왔습니다.')}));
 $('candidate-form').addEventListener('submit',createCandidate);
 $('template-form').addEventListener('submit',saveTemplate);
 $('template-cancel').addEventListener('click',resetTemplateEditor);
 $('bank-form').addEventListener('submit',saveBankQuestion);
 $('bank-cancel').addEventListener('click',resetBankForm);
 $('bank-body').addEventListener('input',renderBankPreview);
 keepTextSelectionOnToolbarClick($('bank-bold'));
 $('bank-bold').addEventListener('click',()=>boldSelectedText($('bank-body')));
 $('bank-search').addEventListener('input',renderBankList);
 $('bank-picker-search').addEventListener('input',renderBankPicker);
 $('open-bank-picker').addEventListener('click',()=>{if(!bankReady){notice('먼저 question_bank.sql을 실행하세요.',true);return;} $('bank-picker').hidden=false;renderBankPicker();$('bank-picker').scrollIntoView({behavior:'smooth',block:'nearest'});});
 $('close-bank-picker').addEventListener('click',()=>{$('bank-picker').hidden=true;});
 $('add-question').addEventListener('click',()=>addQuestionEditor());
 $('assignment-form').addEventListener('submit',createAssignment);
 $('save-answer').addEventListener('click',()=>saveDraft(true));
 $('prev-question').addEventListener('click',()=>switchQuestion(currentIndex-1));
 $('next-question').addEventListener('click',()=>switchQuestion(currentIndex+1));
 $('answer-input').addEventListener('input',()=>{if(!active)return;const q=activeQuestions[currentIndex];if(!q)return;activeAnswers[q.id]??={content:'',attachments:[]};activeAnswers[q.id].content=$('answer-input').value;changedSeq++;$('autosave-state').textContent=tr('saveWaiting');$('answer-count').textContent=`${$('answer-input').value.length} ${tr('characters')}`;scheduleSave();});
 $('answer-files').addEventListener('change',uploadAnswerFiles);
 $('submit-exam').addEventListener('click',()=>finishExam('submitted'));
 const t=new Date();$('assign-start').value=formatLocal(t);$('assign-end').value=formatLocal(new Date(t.getTime()+48*3600000));
 document.addEventListener('visibilitychange',()=>{if(active && document.visibilityState==='hidden')saveDraft(false).catch(()=>{});});
 // Page reload destroys in-memory exam instance. On next login, close_interrupted_exams
 // marks any leftover attempt as terminated. This does not claim instant crash detection.
}
async function login(ev){
 ev.preventDefault();const f=ev.currentTarget;setBusy(f,true);
 try{const raw=$('login-id').value.trim();const email=raw.includes('@')?raw:raw.toLowerCase()+'@login.shiftdynamics.ai';
 const {data,error}=await api.auth.signInWithPassword({email,password:$('login-password').value});if(error)throw error;
 $('login-password').value='';await afterAuth(data.session);
 }catch(err){notice(tr('loginFail')+' '+errorMessage(err),true);}finally{setBusy(f,false);}
}
async function afterAuth(s){
 session=s;const data=check(await api.from('profiles').select('id,username,display_name,role').eq('id',s.user.id).single());profile=data;
 if(profile.role==='admin'){await refreshAdmin();view('admin');selectTab(currentTab);}else{
  // IMPORTANT: a reload/new browser session cannot resume an already-started exam.
  check(await api.rpc('close_interrupted_exams'));
  await refreshCandidate();
 }
}
async function logout(){
 if(active){if(!confirm(tr('signOutConfirm')))return;
  try{await finishExam('logout',true);}catch(err){notice(tr('logoutFail')+' '+errorMessage(err),true);return;}
 }
 await api.auth.signOut();clearFinishedScreenPin();showClosedList=false;profile=null;session=null;active=null;clearInterval(tickTimer);clearTimeout(saveTimer);view('login');
}
function selectTab(name){currentTab=name;document.querySelectorAll('.admin-tab').forEach(e=>e.classList.toggle('active',e.dataset.tab===name));
 ['candidates','templates','assignments','progress','submissions'].forEach(k=>$('admin-'+k).hidden=k!==name);
 if(name==='submissions')$('answer-detail').hidden=true;
}
async function edge(action,payload){
 ensureAdmin();const {data:{session:s}}=await api.auth.getSession();if(!s)throw Error('세션이 만료되었습니다.');
 const resp=await fetch(`${PROJECT_URL}/functions/v1/manage-candidates`,{
  method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${s.access_token}`,'apikey':PUBLISHABLE_KEY},body:JSON.stringify({action,...payload})
 });let result;try{result=await resp.json();}catch{throw Error('서버 함수 응답 오류: Edge Function 및 APP_ORIGIN 설정 확인');}
 if(!resp.ok)throw Error(result.error||'요청이 실패했습니다.');return result;
}
async function refreshAdmin(){
 ensureAdmin();check(await api.rpc('admin_expire_exams'));
 const names=['profiles','exam_templates','questions','assignments','attempts','answers'];
 const results=await Promise.all(names.map(n=>api.from(n).select('*')));
 results.forEach(check);
 [all.profiles,all.templates,all.questions,all.assignments,all.attempts,all.answers]=results.map(r=>r.data||[]);
 all.profiles=all.profiles.filter(p=>p.role==='candidate');
 // The original assessment remains usable if the question-bank migration was not run yet.
 const br=await api.from('question_bank').select('*').order('created_at',{ascending:false});
 bankReady=!br.error;
 all.bank=br.error?[]:(br.data||[]);
 $('bank-setup-warning').hidden=bankReady;
 for(const el of $('bank-form').querySelectorAll('input,textarea,button'))el.disabled=!bankReady;
 $('open-bank-picker').disabled=!bankReady;
 renderBankList();renderBankPicker();
 renderCandidates();renderTemplates();renderSelectors();renderProgress();renderSubmissions();
}
async function createCandidate(ev){ev.preventDefault();const f=ev.currentTarget;setBusy(f,true);
 try{await edge('create',{username:$('candidate-id').value.trim(),name:$('candidate-name').value.trim(),password:$('candidate-password').value});f.reset();await refreshAdmin();notice('후보자 계정을 생성했습니다. 아이디와 초기 비밀번호를 안전하게 전달하세요.');}
 catch(err){notice(errorMessage(err),true);}finally{setBusy(f,false);}
}
function renderCandidates(){const list=$('candidate-list');blank(list);
 if(!all.profiles.length){list.append(newEl('p','empty','등록된 후보자가 없습니다.'));return;}
 for(const p of all.profiles){const row=newEl('div','manage-item');const info=newEl('div','manage-item-info');info.append(newEl('strong','',p.display_name),newEl('small','',p.username));row.append(info,action('삭제',()=>deleteCandidate(p),'button button-danger button-small'));list.append(row);}
}
async function deleteCandidate(p){if(!confirm(`${p.display_name} 후보자와 모든 시험 배정·답안이 삭제됩니다. 먼저 결과를 백업하세요. 계속하시겠습니까?`))return;
 if(prompt('삭제할 후보자의 아이디를 정확히 입력하세요.')!==p.username)return;
 await edge('delete',{id:p.id});await refreshAdmin();notice('후보자를 삭제했습니다. 저장소에 남은 첨부파일은 별도 정리할 수 있습니다.');
}
// V19: Escape-safe selective emphasis. Supports bold spanning multiple lines and
// adjacent marked spans; unmatched markers remain literal. Never use innerHTML.
function formattedQuestion(textValue){
 const fragment=document.createDocumentFragment();
 const text=String(textValue??'');
 let cursor=0;
 while(cursor<text.length){
  const open=text.indexOf('**',cursor);
  if(open===-1){fragment.append(document.createTextNode(text.slice(cursor)));break;}
  const close=text.indexOf('**',open+2);
  if(close===-1){fragment.append(document.createTextNode(text.slice(cursor)));break;}
  if(open>cursor)fragment.append(document.createTextNode(text.slice(cursor,open)));
  const content=text.slice(open+2,close);
  if(content.trim()){
   const strong=document.createElement('strong');strong.textContent=content;fragment.append(strong);
  }else fragment.append(document.createTextNode('**'+content+'**'));
  cursor=close+2;
 }
 return fragment;
}
function renderStoredFiles(box){
 const area=box.querySelector('.stored-attachments');blank(area);
 for(const f of box._attachments){
  const row=newEl('div','stored-file');row.append(newEl('span','',f.name));
  row.append(action('첨부 제거',()=>{
   box._attachments=box._attachments.filter(x=>x.path!==f.path);
   box._removedPaths.push(f.path);renderStoredFiles(box);
  },'button button-danger button-small'));
  area.append(row);
 }
}
// Bold button works as a toggle: select plain text to bold it, or select an
// already-marked span to remove bold. Preserve the textarea selection when
// clicking the toolbar button (mousedown normally moves focus to the button).
function boldSelectedText(textarea){
 const from=textarea.selectionStart,to=textarea.selectionEnd;
 if(from===to){notice('먼저 굵게 표시할 문장을 드래그하여 선택하세요.',true);textarea.focus();return;}
 const source=textarea.value,chosen=source.slice(from,to);
 let replacement,selectionFrom=from,selectionTo=to;
 if(chosen.startsWith('**')&&chosen.endsWith('**')&&chosen.length>4){
  replacement=chosen.slice(2,-2);selectionTo=from+replacement.length;
 }else if(source.slice(Math.max(0,from-2),from)==='**'&&source.slice(to,to+2)==='**'){
  // Selection contains the content only, but its surrounding markers exist.
  textarea.setRangeText(chosen,from-2,to+2,'select');
  textarea.setSelectionRange(from-2,to);textarea.dispatchEvent(new Event('input',{bubbles:true}));textarea.focus();return;
 }else{
  replacement=`**${chosen}**`;selectionFrom=from+2;selectionTo=selectionFrom+chosen.length;
 }
 textarea.setRangeText(replacement,from,to,'preserve');
 textarea.setSelectionRange(selectionFrom,selectionTo);
 textarea.dispatchEvent(new Event('input',{bubbles:true}));textarea.focus();
}
function keepTextSelectionOnToolbarClick(button){
 button.addEventListener('mousedown',event=>event.preventDefault());
}
function renderBankPreview(){const box=$('bank-preview');blank(box);box.append(formattedQuestion($('bank-body').value));}
function renderBankStoredFiles(){
 const host=$('bank-stored-files');blank(host);
 if(!bankSavedAttachments.length){host.append(newEl('p','file-hint','등록된 참고자료가 없습니다.'));return;}
 for(const f of bankSavedAttachments){
  const row=newEl('div','stored-file');row.append(newEl('span','',f.name));
  row.append(action('목록에서 제거',()=>{bankSavedAttachments=bankSavedAttachments.filter(x=>x.path!==f.path);renderBankStoredFiles();},'button button-danger button-small'));
  host.append(row);
 }
}
function resetBankForm(){
 editingBank=null;bankSavedAttachments=[];$('bank-form').reset();
 $('bank-form-heading').textContent='문제은행에 새 문제 등록';$('bank-save').textContent='문제은행에 저장';$('bank-cancel').hidden=true;
 renderBankPreview();renderBankStoredFiles();
}
function editBankQuestion(b){
 editingBank=b;bankSavedAttachments=Array.isArray(b.attachments)?[...b.attachments]:[];
 $('bank-title').value=b.title;$('bank-category').value=b.category||'';$('bank-body').value=b.body;
 $('bank-form-heading').textContent='문제은행 문제 수정';$('bank-save').textContent='문제 수정 저장';$('bank-cancel').hidden=false;
 renderBankPreview();renderBankStoredFiles();$('bank-form-heading').scrollIntoView({behavior:'smooth',block:'start'});
}
async function saveBankQuestion(ev){
 ev.preventDefault();ensureAdmin();if(!bankReady)throw Error('문제은행 SQL 설치가 필요합니다.');
 const form=ev.currentTarget;setBusy(form,true);
 try{
  const data={title:$('bank-title').value.trim(),category:$('bank-category').value.trim(),body:$('bank-body').value.trim()};
  if(!data.title||!data.body)throw Error('문제 이름과 본문을 입력하세요.');
  let b=editingBank;
  if(!b)b=check(await api.from('question_bank').insert({...data,attachments:[]}).select().single());
  const stored=await uploadMaterialFiles('bank',b.id,[...$('bank-files').files]);
  check(await api.from('question_bank').update({...data,attachments:[...bankSavedAttachments,...stored],updated_at:new Date().toISOString()}).eq('id',b.id));
  resetBankForm();await refreshAdmin();notice('문제은행에 저장했습니다. 기존 템플릿에 복사된 문제는 변경되지 않습니다.');
 }catch(err){notice('문제은행 저장 오류: '+errorMessage(err)+' 일부 파일이 저장되었을 수 있으므로 목록을 확인하세요.',true);}
 finally{setBusy(form,false);}
}
async function deleteBankQuestion(b){
 if(!confirm(`문제은행에서 "${b.title}" 문제를 삭제하시겠습니까? 이미 템플릿에 복사된 문제는 그대로 남습니다. 연결되지 않은 Storage 파일은 별도로 정리해야 합니다.`))return;
 check(await api.from('question_bank').delete().eq('id',b.id));
 if(editingBank?.id===b.id)resetBankForm();
 await refreshAdmin();notice('문제은행에서 삭제했습니다. 기존 템플릿 및 해당 답안에는 영향을 주지 않습니다.');
}
function filteredBank(term){
 const q=String(term||'').trim().toLocaleLowerCase();
 return all.bank.filter(b=>!q||[b.title,b.category,b.body].some(s=>String(s||'').toLocaleLowerCase().includes(q)));
}
function renderBankList(){
 const host=$('bank-list');blank(host);
 if(!bankReady)return;
 const items=filteredBank($('bank-search').value);
 if(!items.length){host.append(newEl('p','empty',all.bank.length?'검색 결과가 없습니다.':'등록된 문제가 없습니다. 위에서 먼저 문제를 등록하세요.'));return;}
 for(const b of items){
  const row=newEl('div','manage-item'),info=newEl('div','manage-item-info'),actions=newEl('div','manage-actions');
  const title=action(b.title,()=>showBankQuestion(b),'template-title-button');
  const n=Array.isArray(b.attachments)?b.attachments.length:0;
  info.append(title,newEl('small','',`${b.category||'미분류'} · 첨부 ${n}개 · ${b.body.length}자`));
  actions.append(action('템플릿에 추가',()=>addBankToTemplate(b),'button button-outline button-small'),action('수정',()=>editBankQuestion(b),'button button-outline button-small'),action('삭제',()=>deleteBankQuestion(b),'button button-danger button-small'));
  row.append(info,actions);host.append(row);
 }
}
async function showBankQuestion(b){
 const host=$('bank-detail'),request=++bankDetailRequest;blank(host);host.hidden=false;
 host.append(newEl('h3','',b.title),newEl('p','muted small',b.category||'미분류'));
 const text=newEl('p','template-question-body');text.append(formattedQuestion(b.body));host.append(text);
 const attachments=newEl('div','attachments');host.append(attachments);
 if((b.attachments||[]).length){await appendAttachmentViews(attachments,'exam-materials',b.attachments);if(request!==bankDetailRequest)return;}
 else attachments.append(newEl('p','file-hint','첨부자료 없음'));
}
function renderBankPicker(){
 const host=$('bank-picker-list');blank(host);if(!bankReady)return;
 const items=filteredBank($('bank-picker-search').value);
 if(!items.length){host.append(newEl('p','empty','일치하는 문제가 없습니다.'));return;}
 for(const b of items){
  const row=newEl('div','bank-picker-item'),info=newEl('div','manage-item-info');
  info.append(newEl('strong','',b.title),newEl('small','',`${b.category||'미분류'} · ${(b.attachments||[]).length}개 첨부`),newEl('p','bank-preview-excerpt',b.body.replace(/\*\*/g,'').slice(0,160)));
  const already=[...document.querySelectorAll('.question-editor')].some(el=>el._bankSourceId===b.id);
  const btn=action(already?'추가됨':'추가',()=>addBankToTemplate(b),'button button-primary button-small');btn.disabled=already;
  row.append(info,btn);host.append(row);
 }
}
function addBankToTemplate(b){
 if(!bankReady){notice('문제은행 설치가 필요합니다.',true);return;}
 const duplicate=[...document.querySelectorAll('.question-editor')].some(el=>el._bankSourceId===b.id);
 if(duplicate){notice('이 템플릿 초안에 이미 추가한 문제입니다.',true);return;}
 const editors=[...document.querySelectorAll('.question-editor')];
 // Replace only a pristine blank editor; never overwrite a draft the admin wrote.
 if(editors.length===1&&!editors[0]._questionId&&!editors[0]._bankSourceId&&!editors[0].querySelector('.question-text').value.trim()&&!editors[0].querySelector('.question-files').files.length)editors[0].remove();
 const box=addQuestionEditor(b.body,null,b);renderBankPicker();
 bankToast(`문항 ${box.dataset.questionNumber}: 템플릿에 추가되었습니다.`);
}
async function cloneBankFiles(templateId,questionId,files){
 const cloned=[];
 for(const f of files){
  const ext=String(f.path||'').match(/\.[a-zA-Z0-9]{1,12}$/)?.[0]||'';
  const path=`${templateId}/${questionId}/${uuid()}${ext}`;
  const result=await api.storage.from('exam-materials').copy(f.path,path);
  if(result.error)throw Error(`문제은행 첨부자료 "${f.name}" 복사 실패: ${errorMessage(result.error)}. Storage 읽기·쓰기 권한을 확인하세요.`);
  cloned.push({...f,path});
 }
 return cloned;
}
function addQuestionEditor(text='',q=null,bank=null){
 const box=newEl('div','question-editor');box._questionId=q?.id||null;
 box._bankSourceTitle=bank?.title||null;
 const heading=newEl('div','question-editor-header');
 heading.append(newEl('strong','question-editor-heading','문항'),newEl('span','question-editor-source',''));
 box.append(heading);
 box._attachments=Array.isArray(q?.attachments)?[...q.attachments]:Array.isArray(bank?.attachments)?[...bank.attachments]:[];
 box._bankSourceId=bank?.id||null;
 box._removedPaths=[];
 const title=newEl('label','', bank ? `문제은행에서 추가: ${bank.title}` : '실무 문제 설명');
 const textarea=newEl('textarea','question-text');textarea.required=true;textarea.placeholder='문제 설명을 입력하세요. 일부 문장을 선택하여 굵게 표시할 수 있습니다.';textarea.value=text;
 const toolbar=newEl('div','question-toolbar');
 const boldButton=action('선택 영역 굵게 / 해제',()=>boldSelectedText(textarea),'button button-outline button-small');
 keepTextSelectionOnToolbarClick(boldButton);
 toolbar.append(boldButton,newEl('span','file-hint','문장을 드래그하여 선택한 뒤 누르세요. 다시 누르면 해제됩니다. 여러 줄 선택도 지원합니다.'));
 const previewTitle=newEl('label','','문항 미리보기');
 const preview=newEl('div','question-preview template-question-body');
 const refreshPreview=()=>{blank(preview);preview.append(formattedQuestion(textarea.value));};
 textarea.addEventListener('input',refreshPreview);
 const filesLabel=newEl('label','','문제 참고자료 (이미지, PDF, 텍스트 등)');
 const stored=newEl('div','stored-attachments');
 const fileInput=newEl('input','question-files');fileInput.type='file';fileInput.multiple=true;fileInput.accept='image/*,.pdf,.txt,.csv,.json,.md,.docx,.xlsx,.pptx';
 box.append(title,textarea,toolbar,previewTitle,preview,filesLabel,stored,fileInput,newEl('p','file-hint','파일당 최대 50MB · 기존 첨부파일 유지 또는 제거 가능'));
 const orderControls=newEl('div','question-order-controls');
 orderControls.append(action('↑ 위로',()=>{const prior=box.previousElementSibling;if(prior?.classList.contains('question-editor')){$('question-editors').insertBefore(box,prior);updateQuestionNumbers();}},'button button-outline button-small'));
 orderControls.append(action('↓ 아래로',()=>{const next=box.nextElementSibling;if(next?.classList.contains('question-editor')){$('question-editors').insertBefore(next,box);updateQuestionNumbers();}},'button button-outline button-small'));
 box.append(orderControls);
 box.append(action('문항 제거',()=>{
  if(document.querySelectorAll('.question-editor').length>1){box.remove();updateQuestionNumbers();renderBankPicker();}
  else notice('최소 1개 문항이 필요합니다.',true);
 },'button button-danger button-small'));
 $('question-editors').append(box);refreshPreview();renderStoredFiles(box);updateQuestionNumbers();
 return box;
}
function resetTemplateEditor(){
 editingTemplate=null;$('template-form').reset();$('question-editors').replaceChildren();addQuestionEditor();
 $('template-form-heading').textContent='시험 템플릿 생성';$('template-save').textContent='시험 템플릿 저장 +';$('template-cancel').hidden=true;
}
async function editTemplate(t){
 ensureAdmin();
 // Avoid changing already-assigned assessments or cascading deletion of existing answers.
 const {data:assigned,error:assignError}=await api.from('assignments').select('id').eq('template_id',t.id).limit(1);
 if(assignError)throw assignError;
 if(assigned?.length){notice('이미 후보자에게 배정된 템플릿은 수정할 수 없습니다. 시험 기록을 보호하려면 신규 템플릿을 생성하세요.',true);return;}
 const {data:qs,error}=await api.from('questions').select('*').eq('template_id',t.id).order('sort_order');
 if(error)throw error;
 editingTemplate=t;$('template-title').value=t.title;$('template-position').value=t.position;
 $('question-editors').replaceChildren();if(qs?.length)qs.forEach(q=>addQuestionEditor(q.body,q));else addQuestionEditor();
 $('template-form-heading').textContent='시험 템플릿 수정';$('template-save').textContent='변경사항 저장';$('template-cancel').hidden=false;
 $('template-form-heading').scrollIntoView({behavior:'smooth',block:'start'});
}
async function uploadMaterialFiles(templateId,questionId,files){
 const attachments=[];
 for(const file of files){
  if(file.size>FILE_LIMIT)throw Error(`${file.name}: 파일당 50MB 초과`);
  const extension=file.name.includes('.')?file.name.split('.').pop().toLowerCase().replace(/[^a-z0-9]/g,''):'';
  const path=`${templateId}/${questionId}/${uuid()}${extension?'.'+extension:''}`;
  check(await api.storage.from('exam-materials').upload(path,file,{contentType:file.type||'application/octet-stream',upsert:false}));
  attachments.push({name:file.name,path,type:file.type,size:file.size});
 }
 return attachments;
}
async function saveTemplate(ev){
 ev.preventDefault();ensureAdmin();const form=ev.currentTarget;setBusy(form,true);
 try{
  const editors=[...document.querySelectorAll('.question-editor')];if(!editors.length)throw Error('최소 1개 문항이 필요합니다.');
  const rows=editors.map((box,i)=>({box,id:box._questionId,body:box.querySelector('.question-text').value.trim(),order:i+1,files:[...box.querySelector('.question-files').files],keep:box._attachments,removed:box._removedPaths,bank:box._bankSourceId}));
  if(rows.some(x=>!x.body))throw Error('내용이 비어 있는 문항이 있습니다.');
  let t=editingTemplate;
  if(t){
   // Query live assignments, not the cached list: this protects concurrent admins.
   const {data:assigned,error}=await api.from('assignments').select('id').eq('template_id',t.id).limit(1);
   if(error)throw error;
   if(assigned?.length)throw Error('템플릿 수정 중 시험 배정이 생성되었습니다. 데이터 보호를 위해 수정을 중단했습니다.');
   check(await api.from('exam_templates').update({title:$('template-title').value.trim(),position:$('template-position').value.trim()}).eq('id',t.id));
  }else{
   t=check(await api.from('exam_templates').insert({title:$('template-title').value.trim(),position:$('template-position').value.trim()}).select().single());
  }
  const oldQs=editingTemplate?check(await api.from('questions').select('id,attachments').eq('template_id',t.id)):[];
  const retainedIds=new Set();const pathsToRemove=[];
  for(const x of rows){
   let questionId=x.id;
   if(questionId){
    retainedIds.add(questionId);
    const uploaded=await uploadMaterialFiles(t.id,questionId,x.files);
    check(await api.from('questions').update({sort_order:x.order,body:x.body,attachments:[...x.keep,...uploaded]}).eq('id',questionId).eq('template_id',t.id));
    pathsToRemove.push(...x.removed);
   }else{
    const q=check(await api.from('questions').insert({template_id:t.id,sort_order:x.order,body:x.body}).select().single());
    questionId=q.id;
    const copied=x.bank?await cloneBankFiles(t.id,questionId,x.keep):[];
    const uploaded=await uploadMaterialFiles(t.id,questionId,x.files);
    if(copied.length||uploaded.length)check(await api.from('questions').update({attachments:[...copied,...uploaded]}).eq('id',questionId));
   }
  }
  for(const old of oldQs||[]){
   if(!retainedIds.has(old.id)){
    check(await api.from('questions').delete().eq('id',old.id).eq('template_id',t.id));
    pathsToRemove.push(...(Array.isArray(old.attachments)?old.attachments:[]).map(f=>f.path));
   }
  }
  let cleanupWarning='';
  const targets=[...new Set(pathsToRemove.filter(Boolean))];
  if(targets.length){const {error}=await api.storage.from('exam-materials').remove(targets);if(error)cleanupWarning=` 일부 제거한 첨부파일이 Storage에 남았을 수 있습니다: ${errorMessage(error)}`;}
  resetTemplateEditor();await refreshAdmin();notice('시험 템플릿이 저장되었습니다.'+cleanupWarning,!!cleanupWarning);
 }catch(err){notice('템플릿 저장 오류: '+errorMessage(err)+' 일부 변경사항이 저장되었을 수 있으니 템플릿 상세에서 확인하세요.',true);}finally{setBusy(form,false);}
}
function renderTemplates(){const list=$('template-list');blank(list);$('template-detail').hidden=true;
 if(!all.templates.length){list.append(newEl('p','empty','등록된 시험 템플릿이 없습니다.'));return;}
 for(const t of all.templates){
  const row=newEl('div','manage-item'),info=newEl('div','manage-item-info');
  info.append(action(t.title,()=>showTemplate(t),'template-title-button'),newEl('small','',`${t.position} · ${all.questions.filter(q=>q.template_id===t.id).length}문항`));
  const buttons=newEl('div','manage-actions');
  buttons.append(action('수정',()=>editTemplate(t),'button button-outline button-small'),action('삭제',()=>deleteTemplate(t),'button button-danger button-small'));
  row.append(info,buttons);list.append(row);
 }
}
let templateDetailRequest = 0;
async function showTemplate(t){
 const box=$('template-detail');
 const requestId=++templateDetailRequest;
 blank(box);
 box.hidden=false;
 box.setAttribute('aria-busy','true');
 box.append(newEl('h3','',t.title),newEl('p','muted small',`지원 포지션: ${t.position}`));
 const status=newEl('p','muted small','문항을 불러오는 중입니다…');
 box.append(status);
 try{
  // 상세보기는 관리자 권한으로 해당 템플릿의 문항을 새로 조회합니다.
  // 전체 목록 조회의 건수 제한이나 오래된 캐시에 의존하지 않습니다.
  const {data,error}=await api.from('questions')
    .select('id, template_id, sort_order, body, attachments')
    .eq('template_id',t.id)
    .order('sort_order',{ascending:true});
  if(error)throw error;
  if(requestId!==templateDetailRequest)return;
  status.remove();
  const qs=data||[];
  box.append(newEl('p','template-detail-count',`총 ${qs.length}개 문항`));
  if(!qs.length){
   box.append(newEl('p','empty','저장된 문항이 없습니다. 템플릿 생성 과정에서 오류가 발생했는지 확인해 주세요.'));
   return;
  }
  for(const [i,q] of qs.entries()){
   if(requestId!==templateDetailRequest)return;
   const section=newEl('section','template-question');
   section.append(newEl('strong','template-question-number',`문항 ${i+1}`));
   const questionText=newEl('p','template-question-body');questionText.append(formattedQuestion(q.body||'(문항 내용 없음)'));section.append(questionText);
   const files=Array.isArray(q.attachments)?q.attachments:[];
   if(files.length){
    section.append(newEl('p','template-attachment-heading',`첨부자료 (${files.length}개)`));
    const attachments=newEl('div','attachments');
    section.append(attachments);
    box.append(section);
    // 중요: 첨부파일 함수는 대상 요소의 자식들을 지우므로
    // 문항 본문(section)이 아닌 전용 컨테이너(attachments)를 전달합니다.
    await appendAttachmentViews(attachments,'exam-materials',files);
   }else{
    section.append(newEl('p','file-hint','첨부자료 없음'));
    box.append(section);
   }
  }
 }catch(err){
  if(requestId!==templateDetailRequest)return;
  status.textContent=`문항을 불러오지 못했습니다: ${errorMessage(err)}`;
  status.className='notice error';
 }finally{
  if(requestId===templateDetailRequest)box.removeAttribute('aria-busy');
 }
}

async function deleteTemplate(t){const count=all.assignments.filter(a=>a.template_id===t.id).length;
 if(!confirm(`${t.title} 템플릿을 삭제하면 연결된 시험 ${count}건과 답안도 삭제됩니다. 계속하시겠습니까?`))return;
 if(prompt('삭제할 시험 템플릿 이름을 정확히 입력하세요.')!==t.title)return;
 check(await api.from('exam_templates').delete().eq('id',t.id));await refreshAdmin();notice('시험 템플릿을 삭제했습니다. 스토리지의 고아 파일은 별도로 정리하세요.');
}
function renderSelectors(){for(const [id,items,map] of [['assign-candidate',all.profiles,p=>[p.id,`${p.display_name} (${p.username})`]],['assign-template',all.templates,t=>[t.id,`${t.title} · ${t.position}`]]]){
 const sel=$(id),old=sel.value;blank(sel);sel.append(new Option('선택하세요',''));
 for(const item of items){const [value,name]=map(item);sel.append(new Option(name,value));}sel.value=old&&items.some(i=>i.id===old)?old:'';
 }}
async function createAssignment(ev){ev.preventDefault();ensureAdmin();const form=ev.currentTarget;setBusy(form,true);
 try{const start=new Date($('assign-start').value),end=new Date($('assign-end').value);
 if(!Number.isFinite(start.getTime())||!Number.isFinite(end.getTime())||start>=end)throw Error('응시 시작·종료 시각을 확인하세요.');
 const template=getTemplate($('assign-template').value);if(!template)throw Error('시험 템플릿을 선택하세요.');
 check(await api.from('assignments').insert({candidate_id:$('assign-candidate').value,template_id:template.id,exam_title:template.title,available_from:start.toISOString(),available_until:end.toISOString(),duration_minutes:Number($('assign-duration').value)}));
 await refreshAdmin();notice('시험 배정이 완료되었습니다.');
 }catch(err){notice(errorMessage(err),true);}finally{setBusy(form,false);}
}
function renderProgress(){const tbody=$('progress-rows');blank(tbody);
 for(const a of [...all.assignments].sort((x,y)=>new Date(y.created_at)-new Date(x.created_at))){const t=getAttempt(a.id),p=getCandidate(a.candidate_id),tr=document.createElement('tr');
 for(const val of [`${p?.display_name||'삭제됨'} (${p?.username||''})`,a.exam_title,`${fmt(a.available_from)} ~ ${fmt(a.available_until)} / ${a.duration_minutes}분`,labelStatus(a,t)])tr.append(newEl('td','',val));
 const td=newEl('td');td.append(action('배정 삭제',()=>deleteAssignment(a),'button button-danger button-small'));tr.append(td);tbody.append(tr);}
 if(!all.assignments.length)tbody.append(emptyRow(5,'배정된 시험이 없습니다.'));
}
function emptyRow(n,text){const tr=document.createElement('tr'),td=newEl('td','empty',text);td.colSpan=n;tr.append(td);return tr;}
async function deleteAssignment(a){if(!confirm(`해당 시험 배정과 답안을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`))return;
 check(await api.from('assignments').delete().eq('id',a.id));await refreshAdmin();notice('시험 배정을 삭제했습니다.');
}
function renderSubmissions(){const tbody=$('submission-rows');blank(tbody);
 for(const a of all.assignments){const t=getAttempt(a.id);if(!t||!closedStatuses.includes(t.status))continue;
 const p=getCandidate(a.candidate_id),tr=document.createElement('tr');for(const val of [`${p?.display_name||''} (${p?.username||''})`,a.exam_title,`${labelStatus(a,t)} · ${fmt(t.finished_at)}`])tr.append(newEl('td','',val));
 const td=newEl('td');td.append(action('답안 보기',()=>showSubmission(a)),action('PDF 다운로드',()=>exportPDF(a)));tr.append(td);tbody.append(tr);
 }if(!tbody.children.length)tbody.append(emptyRow(4,'제출된 답안이 없습니다.'));
}
async function showSubmission(a){const box=$('answer-detail');blank(box);box.hidden=false;const p=getCandidate(a.candidate_id);
 box.append(newEl('h2','',`${p?.display_name||''} · ${a.exam_title}`));
 const qs=all.questions.filter(q=>q.template_id===a.template_id).sort((x,y)=>x.sort_order-y.sort_order);
 for(const [i,q] of qs.entries()){const ans=all.answers.find(x=>x.assignment_id===a.id&&x.question_id===q.id),d=newEl('div','detail-block');d.append(newEl('strong','',`문항 ${i+1}`),newEl('p','',q.body.replace(/\*\*/g,'')),newEl('strong','', '후보자 답안'),newEl('p','',ans?.content||'(답안 없음)'));box.append(d);if((ans?.attachments||[]).length){const attachments=newEl('div','attachments');d.append(attachments);await appendAttachmentViews(attachments,'answer-files',ans.attachments);}}
 box.scrollIntoView({behavior:'smooth'});
}
async function refreshCandidate(){
 const [ar,attemptsResult]=await Promise.all([api.from('assignments').select('*').eq('candidate_id',profile.id).order('created_at',{ascending:false}),api.from('attempts').select('*').eq('candidate_id',profile.id)]);
 all.assignments=check(ar)||[];all.attempts=check(attemptsResult)||[];
 $('candidate-welcome').textContent=tr('welcome',{name:profile.display_name});renderCandidateList();
 const hasPending=all.assignments.some(a=>!getAttempt(a.id)&&now()>=new Date(a.available_from).getTime()&&now()<new Date(a.available_until).getTime());
 const allClosed=all.assignments.length>0 && all.assignments.every(a=>!!getAttempt(a.id)&&getAttempt(a.id).status!=='active');
 if(hasPinnedFinishedScreen() || (allClosed && !showClosedList)) view('finished');else view('candidate');
}
function renderCandidateList(){const list=$('candidate-exams');blank(list);
 if(!all.assignments.length){list.append(newEl('div','card empty',tr('noAssigned')));return;}
 for(const a of all.assignments){const t=getAttempt(a.id),row=newEl('div','exam-list-item'),text=newEl('div');text.append(newEl('h2','',a.exam_title),newEl('p','',`${tr('period')}: ${fmt(a.available_from)} ~ ${fmt(a.available_until)}\n${tr('duration')}: ${a.duration_minutes} ${language()==='en'?'min':'분'} · ${labelStatus(a,t)}`));
 row.append(text);if(!t&&now()>=Date.parse(a.available_from)&&now()<Date.parse(a.available_until)){row.append(action(tr('startExam'),()=>startExam(a),'button button-primary'));}
 else row.append(newEl('span','muted small',labelStatus(a,t)));
 list.append(row);
 }
}
async function startExam(a){if(active)return; if(!confirm(tr('startConfirm')))return;
 try{const t=check(await api.rpc('start_exam',{p_assignment:a.id}));
  active={...a,...t};timerExpired=false;epoch++;changedSeq=0;savedSeq=0;activeAnswers={};
  const qs=check(await api.from('questions').select('*').eq('template_id',a.template_id).order('sort_order'));
  activeQuestions=qs||[];if(!activeQuestions.length)throw Error(tr('questionLoadFail'));
  const exam=check(await api.from('exam_templates').select('*').eq('id',a.template_id).single());
  $('exam-position-label').textContent=exam.position;$('active-exam-title').textContent=a.exam_title;
  currentIndex=0;renderQuestion();view('exam');tick();tickTimer=setInterval(tick,1000);
 }catch(err){await refreshCandidate();notice(errorMessage(err),true);}
}
function draftFor(q){return activeAnswers[q.id]??(activeAnswers[q.id]={content:'',attachments:[]});}
function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>saveDraft(false).catch(err=>{$('autosave-state').textContent=tr('saveError')+': '+errorMessage(err);}),900);}
function saveDraft(showSuccess=false){if(!active)return Promise.resolve();clearTimeout(saveTimer);
 const q=activeQuestions[currentIndex];if(!q)return Promise.resolve();
 const value={...draftFor(q),attachments:[...draftFor(q).attachments]};const revision=changedSeq,assignment=active.id;
 saving=saving.catch(()=>{}).then(async()=>{
  const result=check(await api.rpc('save_exam_answer',{p_assignment:assignment,p_question:q.id,p_content:value.content,p_attachments:value.attachments}));
  if(!result.ok){await onClosed();throw Error(tr('saveClosed'));}
  savedSeq=Math.max(savedSeq,revision);if(active && active.id===assignment){$('autosave-state').textContent=`${tr('saveDone')} · ${fmt(result.saved_at)}`;}
 });
 if(showSuccess)return saving.then(()=>notice(tr('savedNotice')));
 return saving;
}
async function switchQuestion(index){if(!active||index<0||index>=activeQuestions.length)return;
 try{await saveDraft();currentIndex=index;renderQuestion();}catch(err){notice(tr('switchError')+' '+errorMessage(err),true);}
}
async function renderQuestion(){const q=activeQuestions[currentIndex];if(!q)return;
 $('question-index-label').textContent=`${tr('question').toUpperCase()} ${String(currentIndex+1).padStart(2,'0')}`;
 blank($('question-title'));$('question-title').append(formattedQuestion(q.body));$('progress-label').textContent=`${currentIndex+1} / ${activeQuestions.length} 문항`;
 const draft=draftFor(q);$('answer-input').value=draft.content;$('answer-count').textContent=`${draft.content.length} ${tr('characters')}`;$('autosave-state').textContent=tr('saveAvailable');
 $('answer-files').value='';$('prev-question').disabled=currentIndex===0;$('next-question').disabled=currentIndex===activeQuestions.length-1;
 const nav=$('question-nav');blank(nav);for(const [i,item] of activeQuestions.entries())nav.append(action(`${tr('question')} ${i+1}${activeAnswers[item.id]?.content?' ✓':''}`,()=>switchQuestion(i),'question-button'+(currentIndex===i?' active':'')));
 await appendAttachmentViews($('question-attachments'),'exam-materials',q.attachments||[]);
 await appendAttachmentViews($('answer-attachments'),'answer-files',draft.attachments||[],true);
}
async function uploadAnswerFiles(ev){if(!active)return;const q=activeQuestions[currentIndex],draft=draftFor(q);const files=[...ev.target.files];if(files.length+draft.attachments.length>10){notice(tr('maxFiles'),true);return;}
 $('autosave-state').textContent=tr('uploading');$('answer-files').disabled=true;
 try{for(const f of files){if(f.size>FILE_LIMIT)throw Error(`${f.name}: ${tr('overSize')}`);

const extension = f.name.includes('.')
  ? f.name.split('.').pop().toLowerCase().replace(/[^a-z0-9]/g, '')
  : '';

const path = `${active.id}/${profile.id}/${uuid()}${extension ? '.' + extension : ''}`;

 check(await api.storage.from('answer-files').upload(path,f,{contentType:f.type||'application/octet-stream'}));
 draft.attachments.push({path,name:f.name,type:f.type,size:f.size});changedSeq++;
 }
 await saveDraft();await appendAttachmentViews($('answer-attachments'),'answer-files',draft.attachments,true);
 }catch(err){notice(tr('uploadFail')+': '+errorMessage(err),true);}finally{$('answer-files').disabled=false;$('answer-files').value='';}
}
async function appendAttachmentViews(host,bucket,files,allowRemove=false){
 for(const oldUrl of pdfObjectUrls.get(host)||[])URL.revokeObjectURL(oldUrl);pdfObjectUrls.delete(host);blank(host);
 for(const f of files){const d=newEl('div','attachment-item'),name=newEl('strong','',f.name);d.append(name);
 try{const {data,error}=await api.storage.from(bucket).createSignedUrl(f.path,120);if(error)throw error;
 const url=data.signedUrl,dlink=newEl('a','',tr('attachmentLink'));dlink.dataset.i18n='attachmentLink';dlink.href=url;dlink.target='_blank';dlink.rel='noopener noreferrer';d.append(dlink);
 if(/^image\//.test(f.type||'')){const img=newEl('img');img.src=url;img.alt=f.name;d.append(img);}
 else if(f.type==='application/pdf'||/\.pdf$/i.test(f.name)){
  const openLink=newEl('a','','PDF 바로 보기 / 새 창');openLink.target='_blank';openLink.rel='noopener noreferrer';
  const response=await fetch(url);if(!response.ok)throw Error('PDF 파일을 가져오지 못했습니다.');
  const blob=await response.blob();const pdfUrl=URL.createObjectURL(new Blob([blob],{type:'application/pdf'}));
  let pdfs=pdfObjectUrls.get(host);if(!pdfs){pdfs=[];pdfObjectUrls.set(host,pdfs);}pdfs.push(pdfUrl);
  openLink.href=pdfUrl;d.append(openLink);
  const iframe=newEl('iframe','pdf-preview');iframe.src=pdfUrl+'#toolbar=1&navpanes=0';iframe.title=f.name;iframe.loading='lazy';d.append(iframe);
 }
 else if(/^text\//.test(f.type||'')||/\.(txt|csv|json|md)$/i.test(f.name)){
  // Text is fetched via signed URL; HTML is never injected into the document.
  const text=await fetch(url).then(r=>r.ok?r.text():Promise.reject(Error('미리보기 불가')));
  d.append(newEl('pre','',text.slice(0,20000)));
 }
 }catch(err){d.append(newEl('p','file-hint',`${tr('previewFail')}: ${errorMessage(err)}`));}
 if(allowRemove){const removeButton=action(tr('removeFile'),async()=>{if(!active)return;
  const arr=draftFor(activeQuestions[currentIndex]).attachments;const idx=arr.findIndex(x=>x.path===f.path);if(idx>=0)arr.splice(idx,1);changedSeq++;await saveDraft();await renderQuestion();
 },'button button-danger button-small');removeButton.dataset.i18n='removeFile';d.append(removeButton);}
 host.append(d);
 }
}
function tick(){if(!active)return;const diff=Date.parse(active.deadline_at)-now();
 if(diff<=0){$('countdown').textContent='00:00';if(!timerExpired){timerExpired=true;finishExam('time_limit',true).catch(err=>notice(errorMessage(err),true));}return;}
 const s=Math.ceil(diff/1000);$('countdown').textContent=`${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
}
async function finishExam(reason='submitted',skipConfirm=false){if(!active)return;
 if(!skipConfirm&&!confirm(tr('submitConfirm')))return;
 clearTimeout(saveTimer);await saving;
 const q=activeQuestions[currentIndex],a=draftFor(q);
 const result=check(await api.rpc('finish_exam',{p_assignment:active.id,p_question:q.id,p_content:a.content,p_attachments:a.attachments,p_reason:reason}));
 if(!closedStatuses.includes(result.status))throw Error(tr('finishFail'));
 clearInterval(tickTimer);active=null;activeQuestions=[];activeAnswers={};pinFinishedScreen();view('finished');
}
async function onClosed(){clearInterval(tickTimer);clearTimeout(saveTimer);active=null;activeQuestions=[];activeAnswers={};pinFinishedScreen();view('finished');}

// Browser-only Korean PDF generator, no extra dependency. Text is rasterized (not searchable).
function blobDownload(name,blob){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),15000);}
function makePdf(jpegs,W=595.28,H=841.89){const enc=new TextEncoder(),parts=[],offsets=[0];let pos=0;const push=x=>{const b=typeof x==='string'?enc.encode(x):x;parts.push(b);pos+=b.length;};
 const obj=(id,str)=>{offsets[id]=pos;push(`${id} 0 obj\n${str}\nendobj\n`);};push('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');const ids=jpegs.map((_,i)=>3+i*3);obj(2,`<< /Type /Pages /Kids [${ids.map(n=>`${n} 0 R`).join(' ')}] /Count ${ids.length} >>`);
 jpegs.forEach((im,i)=>{const p=ids[i],img=p+1,content=p+2;obj(p,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /I${i} ${img} 0 R >> >> /Contents ${content} 0 R >>`);offsets[img]=pos;push(`${img} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${im.w} /Height ${im.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.bytes.length} >>\nstream\n`);push(im.bytes);push('\nendstream\nendobj\n');const draw=`q\n${W} 0 0 ${H} 0 0 cm\n/I${i} Do\nQ\n`;obj(content,`<< /Length ${enc.encode(draw).length} >>\nstream\n${draw}endstream`);});const xref=pos,max=2+jpegs.length*3;push(`xref\n0 ${max+1}\n0000000000 65535 f \n`);for(let i=1;i<=max;i++)push(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);push(`trailer\n<< /Size ${max+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);return new Blob(parts,{type:'application/pdf'});}
function bytesFromDataUrl(u){const v=atob(u.split(',')[1]),b=new Uint8Array(v.length);for(let i=0;i<v.length;i++)b[i]=v.charCodeAt(i);return b;}
async function exportPDF(a){ensureAdmin();const p=getCandidate(a.candidate_id),t=getAttempt(a.id),qs=all.questions.filter(q=>q.template_id===a.template_id).sort((x,y)=>x.sort_order-y.sort_order);
 const W=1240,H=1754,M=78,BOTTOM=H-95,TEXTW=W-2*M,pg=[];let canvas,ctx,y;
 function page(){canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.fillStyle='#121212';ctx.fillRect(M,55,80,7);ctx.font='700 20px sans-serif';ctx.fillText('SHIFT DYNAMICS · AI ASSESSMENT',M,100);y=145;}
 function complete(){pg.push({w:W,h:H,bytes:bytesFromDataUrl(canvas.toDataURL('image/jpeg',.86))});}
 function next(){complete();page();}function requireSpace(h){if(y+h>BOTTOM)next();}
 function write(value,size=24,bold=false){ctx.font=`${bold?'700':'400'} ${size}px sans-serif`;const lh=Math.round(size*1.55);for(const paragraph of String(value??'').replace(/\r/g,'').split('\n')){let row='';for(const ch of paragraph){if(row&&ctx.measureText(row+ch).width>TEXTW){requireSpace(lh);ctx.fillStyle='#121212';ctx.fillText(row,M,y+size);y+=lh;row=ch;}else row+=ch;}requireSpace(lh);ctx.fillStyle='#121212';ctx.fillText(row,M,y+size);y+=lh;}y+=12;}
 async function files(fs){for(const f of fs||[]){write(`첨부: ${f.name}`,18);
 if(/^image\//.test(f.type||'')){try{const {data,error}=await api.storage.from('answer-files').createSignedUrl(f.path,120);if(error)throw error;const img=new Image();img.crossOrigin='anonymous';await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;img.src=data.signedUrl;});const scale=Math.min(TEXTW/img.width,425/img.height);const w=img.width*scale,h=img.height*scale;requireSpace(h+20);ctx.drawImage(img,M,y,w,h);y+=h+18;}catch{write('(이미지 표시 실패 — 원본 첨부파일 별도 확인)',18);}}
 }}
 try{page();write('AI PRACTICAL ASSESSMENT',38,true);write(`후보자: ${p?.display_name||''} (${p?.username||''})`,24);write(`시험: ${a.exam_title}`,24);write(`시작: ${fmt(t?.started_at)} · 종료: ${fmt(t?.finished_at)}`,20);write(`상태: ${labelStatus(a,t)}`,20);
 for(const [i,q] of qs.entries()){requireSpace(145);ctx.strokeStyle='#ddd';ctx.beginPath();ctx.moveTo(M,y);ctx.lineTo(W-M,y);ctx.stroke();y+=20;write(`문항 ${i+1}`,29,true);write(q.body.replace(/\*\*/g,''),23);write('후보자 답안',21,true);const ans=all.answers.find(x=>x.assignment_id===a.id&&x.question_id===q.id);write(ans?.content||'(답안 없음)',23);await files(ans?.attachments);}
 complete();blobDownload(`SD_답안_${slug(p?.username||a.candidate_id)}_${slug(a.exam_title)}.pdf`,makePdf(pg));notice('PDF 다운로드를 시작했습니다. Word·Excel 등은 파일명만 포함되므로 원본 파일은 답안 보기에서 내려받으세요.');
 }catch(err){notice('PDF 생성 실패: '+errorMessage(err),true);}
}

addQuestionEditor();
resetBankForm();
init();
})();
