/* SHIFT DYNAMICS · Supabase-connected MVP
 * Only PUBLIC project URL and PUBLISHABLE key may appear here.
 * Never put secret/service_role keys or candidate answers in GitHub source.
 */
(() => {
'use strict';
const PROJECT_URL = 'https://fcaqzxrklnmvsewdnvzk.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_oPhrp0skftb6RrIirsbZYg_48gOU2Rm';
const FILE_LIMIT = 10 * 1024 * 1024;
const I18N_STORAGE_KEY = 'sd_assessment_language';
const I18N = {
 ko: {
  footerData:'시험 데이터는 Supabase 서버에 저장됩니다.',heroTitle:'AI 활용 역량 검사',step1:'01 · 로그인',step2:'02 · 실무 과제 수행',step3:'03 · 결과물 제출',
  loginTitle:'시험 로그인',loginHelp:'담당자로부터 발급받은 아이디와 비밀번호로 로그인하세요.',
  loginIdLabel:'아이디 또는 관리자 이메일',passwordLabel:'비밀번호',signIn:'로그인 →',signOut:'로그아웃',
  loginPlaceholder:'SD-2026-001',passwordPlaceholder:'비밀번호',
  assignedTitle:'배정된 시험',securityTitle:'시험 문제 보안 안내',
  securityBody:'시험 문제와 첨부자료를 외부에 유출하거나 복사·촬영·배포·공유하는 행위를 금지합니다.',
  supportPrefix:'오류 및 문의사항이 발생할 경우,',supportSuffix:'로 남겨주세요.',
  leaveWarning:'시험 진행 중 새로고침·로그아웃·페이지 이탈 시 재접속할 수 없습니다.',
  timeRemaining:'남은 시간',examHelp:'AI 도구를 활용하여 실무 문제를 해결하고, 과정과 결과물을 제출하세요.',
  questionList:'문항 목록',answerLabel:'답안 작성 / AI 활용 과정 및 결과',
  answerPlaceholder:'문제 해결 과정, AI 사용 방법, 결과 검증 및 최종 결론',fileLabel:'결과물 첨부',
  savePending:'자동저장 대기',previous:'← 이전',saveDraft:'임시저장',next:'다음 →',submit:'시험 최종 제출 →',
  finishedTitle:'시험이 종료되었습니다.\n좋은 결과 있으시길 바랍니다.',
  finishedHelp:'제출된 시험 문제와 답안은 다시 열람할 수 없습니다.',
  questionAsProvided:'시험 문항과 참고자료는 관리자가 등록한 원문으로 제공됩니다.',
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
  overSize:'10MB를 초과했습니다.',uploadFail:'첨부파일 업로드/저장 실패',
  attachmentLink:'파일 보기 / 다운로드',previewFail:'미리보기 불가',removeFile:'첨부 목록에서 제거',
  submitConfirm:'최종 제출하면 답안을 다시 확인하거나 수정할 수 없습니다. 제출하시겠습니까?',finishFail:'시험 종료에 실패했습니다.',
 },
 en: {
  footerData:'Assessment data is stored securely in Supabase.',heroTitle:'AI Competency Assessment',step1:'01 · Sign in',step2:'02 · Complete the task',step3:'03 · Submit your work',
  loginTitle:'Assessment Sign-in',loginHelp:'Sign in with the user ID and password provided by the recruitment team.',
  loginIdLabel:'User ID or administrator email',passwordLabel:'Password',signIn:'Sign in →',signOut:'Sign out',
  loginPlaceholder:'SD-2026-001',passwordPlaceholder:'Password',
  assignedTitle:'Assigned Assessments',securityTitle:'Assessment Confidentiality',
  securityBody:'Copying, photographing, distributing, sharing, or disclosing assessment questions and reference materials externally is prohibited.',
  supportPrefix:'For technical issues or inquiries, contact',supportSuffix:'.',
  leaveWarning:'Refreshing, signing out, or leaving this page during the assessment will prevent re-entry.',
  timeRemaining:'Time remaining',examHelp:'Use AI tools to solve the practical task, and submit your approach and final deliverables.',
  questionList:'Questions',answerLabel:'Your answer / AI workflow and results',
  answerPlaceholder:'Describe your approach, how you used AI, how you verified the results, and your final conclusion.',fileLabel:'Attach deliverables',
  savePending:'Waiting to save',previous:'← Previous',saveDraft:'Save draft',next:'Next →',submit:'Submit assessment →',
  finishedTitle:'Your assessment has ended.\nWe wish you the best.',
  finishedHelp:'The submitted questions and answers are no longer available for review.',
  questionAsProvided:'Questions and reference files are shown in the original language provided by the administrator.',
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
  overSize:'exceeds 10 MB.',uploadFail:'File upload or save failed',
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
let api, profile=null, session=null, all={profiles:[],templates:[],questions:[],assignments:[],attempts:[],answers:[]};
let currentTab='candidates', active=null, activeQuestions=[], activeAnswers={}, currentIndex=0;
let saveTimer=null,tickTimer=null,epoch=0, saving=Promise.resolve(), changedSeq=0, savedSeq=0;
let timerExpired=false;
const closedStatuses = ['submitted','timed_out','terminated'];
function notice(msg, bad=false){ const e=$('notice');e.textContent=msg;e.className='notice'+(bad?' error':'');e.hidden=false;window.scrollTo({top:0,behavior:'smooth'}); }
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
 document.querySelectorAll('.admin-tab').forEach(b=>b.addEventListener('click',()=>selectTab(b.dataset.tab)));
 document.querySelectorAll('[data-refresh]').forEach(b=>b.addEventListener('click',async()=>{await refreshAdmin();notice('현재 데이터를 불러왔습니다.')}));
 $('candidate-form').addEventListener('submit',createCandidate);
 $('template-form').addEventListener('submit',createTemplate);
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
 await api.auth.signOut();profile=null;session=null;active=null;clearInterval(tickTimer);clearTimeout(saveTimer);view('login');
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
function addQuestionEditor(text=''){const box=newEl('div','question-editor');box.innerHTML='<label>실무 문제 설명</label><textarea class="question-text" required placeholder="예: AI를 활용하여 고객 제안서의 핵심 요구사항을 정리하고, 가정·검증 절차·결과물을 제출하세요."></textarea><label>문제 참고자료 (이미지, PDF, 텍스트 등)</label><input class="question-files" type="file" multiple accept="image/*,.pdf,.txt,.csv,.json,.md,.docx,.xlsx,.pptx"><p class="file-hint">파일당 최대 10MB · 브라우저에서 지원하는 형식은 화면에서 미리보기 제공</p>';
 box.querySelector('textarea').value=text;
 box.append(action('문항 제거',()=>{if(document.querySelectorAll('.question-editor').length>1)box.remove();else notice('최소 1개 문항이 필요합니다.',true);},'button button-danger button-small'));
 $('question-editors').append(box);
}
async function createTemplate(ev){ev.preventDefault();ensureAdmin();const form=ev.currentTarget;setBusy(form,true);
 let templateId=null;
 try{const editors=[...document.querySelectorAll('.question-editor')];if(!editors.length)throw Error('문항을 한 개 이상 추가하세요.');
 const template=check(await api.from('exam_templates').insert({title:$('template-title').value.trim(),position:$('template-position').value.trim()}).select().single());templateId=template.id;
 for(let i=0;i<editors.length;i++){
  const body=editors[i].querySelector('textarea').value.trim();if(!body)throw Error(`${i+1}번 문제 내용이 없습니다.`);
  const question=check(await api.from('questions').insert({template_id:templateId,sort_order:i+1,body}).select().single());
  const att=[];for(const file of editors[i].querySelector('input[type=file]').files){if(file.size>FILE_LIMIT)throw Error(`${file.name}: 10MB 초과`);

const extension = file.name.includes('.')
  ? file.name.split('.').pop().toLowerCase().replace(/[^a-z0-9]/g, '')
  : '';

const path = `${templateId}/${question.id}/${uuid()}${extension ? '.' + extension : ''}`;

   check(await api.storage.from('exam-materials').upload(path,file,{contentType:file.type||'application/octet-stream',upsert:false}));
   att.push({name:file.name,path,type:file.type,size:file.size});
  }
  if(att.length)check(await api.from('questions').update({attachments:att}).eq('id',question.id));
 }
 form.reset();$('question-editors').replaceChildren();addQuestionEditor();await refreshAdmin();notice('시험 템플릿이 저장되었습니다.');
 }catch(err){notice(`템플릿 저장 중 오류: ${errorMessage(err)}. 이미 생성된 일부 데이터는 관리자 화면에서 확인 후 정리하세요.`,true);}finally{setBusy(form,false);}
}
function renderTemplates(){const list=$('template-list');blank(list);$('template-detail').hidden=true;
 if(!all.templates.length){list.append(newEl('p','empty','등록된 시험 템플릿이 없습니다.'));return;}
 for(const t of all.templates){const row=newEl('div','manage-item'),info=newEl('div','manage-item-info');info.append(action(t.title,()=>showTemplate(t),'template-title-button'),newEl('small','',`${t.position} · ${all.questions.filter(q=>q.template_id===t.id).length}문항`));
 row.append(info,action('삭제',()=>deleteTemplate(t),'button button-danger button-small'));list.append(row);}
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
   section.append(newEl('p','template-question-body',q.body||'(문항 내용 없음)'));
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
 for(const [i,q] of qs.entries()){const ans=all.answers.find(x=>x.assignment_id===a.id&&x.question_id===q.id),d=newEl('div','detail-block');d.append(newEl('strong','',`문항 ${i+1}`),newEl('p','',q.body),newEl('strong','', '후보자 답안'),newEl('p','',ans?.content||'(답안 없음)'));box.append(d);if((ans?.attachments||[]).length){const attachments=newEl('div','attachments');d.append(attachments);await appendAttachmentViews(attachments,'answer-files',ans.attachments);}}
 box.scrollIntoView({behavior:'smooth'});
}
async function refreshCandidate(){
 const [ar,attemptsResult]=await Promise.all([api.from('assignments').select('*').eq('candidate_id',profile.id).order('created_at',{ascending:false}),api.from('attempts').select('*').eq('candidate_id',profile.id)]);
 all.assignments=check(ar)||[];all.attempts=check(attemptsResult)||[];
 $('candidate-welcome').textContent=tr('welcome',{name:profile.display_name});renderCandidateList();
 const hasPending=all.assignments.some(a=>!getAttempt(a.id)&&now()>=new Date(a.available_from).getTime()&&now()<new Date(a.available_until).getTime());
 const allClosed=all.assignments.length>0 && all.assignments.every(a=>!!getAttempt(a.id)&&getAttempt(a.id).status!=='active');
 if(allClosed) view('finished');else view('candidate');
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
 $('question-title').textContent=q.body;$('progress-label').textContent=`${currentIndex+1} / ${activeQuestions.length} 문항`;
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
async function appendAttachmentViews(host,bucket,files,allowRemove=false){blank(host);
 for(const f of files){const d=newEl('div','attachment-item'),name=newEl('strong','',f.name);d.append(name);
 try{const {data,error}=await api.storage.from(bucket).createSignedUrl(f.path,120);if(error)throw error;
 const url=data.signedUrl,dlink=newEl('a','',tr('attachmentLink'));dlink.dataset.i18n='attachmentLink';dlink.href=url;dlink.target='_blank';dlink.rel='noopener noreferrer';d.append(dlink);
 if(/^image\//.test(f.type||'')){const img=newEl('img');img.src=url;img.alt=f.name;d.append(img);}
 else if(f.type==='application/pdf'||/\.pdf$/i.test(f.name)){const iframe=newEl('iframe');iframe.src=url;iframe.title=f.name;d.append(iframe);}
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
 clearInterval(tickTimer);active=null;activeQuestions=[];activeAnswers={};view('finished');
}
async function onClosed(){clearInterval(tickTimer);clearTimeout(saveTimer);active=null;activeQuestions=[];activeAnswers={};view('finished');}

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
 for(const [i,q] of qs.entries()){requireSpace(145);ctx.strokeStyle='#ddd';ctx.beginPath();ctx.moveTo(M,y);ctx.lineTo(W-M,y);ctx.stroke();y+=20;write(`문항 ${i+1}`,29,true);write(q.body,23);write('후보자 답안',21,true);const ans=all.answers.find(x=>x.assignment_id===a.id&&x.question_id===q.id);write(ans?.content||'(답안 없음)',23);await files(ans?.attachments);}
 complete();blobDownload(`SD_답안_${slug(p?.username||a.candidate_id)}_${slug(a.exam_title)}.pdf`,makePdf(pg));notice('PDF 다운로드를 시작했습니다. Word·Excel 등은 파일명만 포함되므로 원본 파일은 답안 보기에서 내려받으세요.');
 }catch(err){notice('PDF 생성 실패: '+errorMessage(err),true);}
}

addQuestionEditor('AI 도구를 활용하여 주어진 실무 상황을 분석하고 해결 절차, 검증 방법, 최종 결과물을 제시하세요.');
init();
})();
