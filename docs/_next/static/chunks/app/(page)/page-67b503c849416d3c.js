(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29,548,854,402],{2731:function(e,o,r){Promise.resolve().then(r.bind(r,4286)),Promise.resolve().then(r.bind(r,7208)),Promise.resolve().then(r.bind(r,9832)),Promise.resolve().then(r.bind(r,5273)),Promise.resolve().then(r.bind(r,7644)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,8712)),Promise.resolve().then(r.bind(r,7269))},8712:function(e,o,r){"use strict";r.r(o),r.d(o,{ContactForm:function(){return c}});var s=r(7437),l=r(2265),t=r(9501),n=r(5971),a=r(4013),i=r(2926);let c=()=>{let{register:e,handleSubmit:o,formState:{errors:r},reset:c}=(0,t.cI)(),[d,u]=(0,l.useState)({loading:!1,message:"Send Message",color:"#fc7622",colorHover:"#d66219"}),m=async e=>{try{u({loading:!0,message:"Sending...",color:"#d66219",colorHover:"#d66219"});let o={name:e.name,email:e.email,message:e.message};await i.ZP.send("service_tnq5efl","template_wihkgsn",o,"NQUd1751pPVcQNUfm"),u({loading:!1,message:"Message sent successfully!",color:"#23A455",colorHover:"#1a8845"}),c(),setTimeout(()=>{u({loading:!1,message:"Send Message",color:"#fc7622",colorHover:"#d66219"})},3e3)}catch(e){console.error("Failed to send the message:",e),u({loading:!1,message:"An error occurred. Please try again.",color:"#dc3545",colorHover:"#fc3545"}),setTimeout(()=>{u({loading:!1,message:"Send Message",color:"#fc7622",colorHover:"#d66219"})},3e3)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("form",{onSubmit:o(m),className:"bg-section-gradient-top p-8 rounded-lg shadow-xl space-y-6",style:{backgroundColor:"#252525"},children:[(0,s.jsx)(n.Z,{label:"Your Name",variant:"outlined",fullWidth:!0,error:!!r.name,helperText:r.name?r.name.message:"",...e("name",{required:"Name is required"}),InputLabelProps:{style:{color:"#E5E7EB"}},InputProps:{style:{backgroundColor:"#252525",color:"#fc7622",borderColor:"#fc7622"}},sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#fc7622"},"&.Mui-focused fieldset":{borderColor:"#fc7622"}}}}),(0,s.jsx)(n.Z,{label:"Your Email",variant:"outlined",fullWidth:!0,type:"email",error:!!r.email,helperText:r.email?r.email.message:"",...e("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/,message:"Only Gmail addresses are allowed"}}),InputLabelProps:{style:{color:"#E5E7EB"}},InputProps:{style:{backgroundColor:"#252525",color:"#fc7622",borderColor:"#fc7622"}},sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#fc7622"},"&.Mui-focused fieldset":{borderColor:"#fc7622"}}}}),(0,s.jsx)(n.Z,{label:"Message",variant:"outlined",fullWidth:!0,multiline:!0,rows:4,error:!!r.message,helperText:r.message?r.message.message:"",...e("message",{required:"Message is required"}),InputLabelProps:{style:{color:"#E5E7EB"}},InputProps:{style:{backgroundColor:"#252525",color:"#fc7622",borderColor:"#fc7622"}},sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#fc7622"},"&.Mui-focused fieldset":{borderColor:"#fc7622"}}}}),(0,s.jsx)(a.Z,{type:"submit",variant:"contained",fullWidth:!0,sx:{backgroundColor:d.color,"&:hover":{backgroundColor:d.colorHover},color:"#F3F4F6",fontWeight:"bold"},disabled:d.loading,children:d.message})]})})}},7269:function(e,o,r){"use strict";r.r(o),r.d(o,{ExpandableSideMenu:function(){return v}});var s=r(7437),l=r(2265),t=r(9832),n=r(5273),a=r(7644),i=r(1386),c=r(2908),d=r(6837),u=r(4997),m=r(2440),b=r(7675),f=r(4026),g=r(328),x=r(4117),h=r(7648),p=r(9376);let v=()=>{let[e,o]=(0,l.useState)(!1),r=()=>{o(!e)},v=[{text:"Home",icon:(0,s.jsx)(d.Z,{}),link:"/"},{text:"Projects",icon:(0,s.jsx)(u.Z,{}),link:"/projects"},{text:"Contact",icon:(0,s.jsx)(m.Z,{}),link:"/contact"},{text:"Platforms",icon:(0,s.jsx)(b.Z,{}),link:"/platforms"},{text:"About Us",icon:(0,s.jsx)(f.Z,{}),link:"/about-us"}],j=(0,p.usePathname)();return(0,s.jsxs)("div",{children:[e&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>{o(!1)}}),(0,s.jsxs)("div",{className:"fixed top-0 left-0 h-screen bg-background-primary transition-all duration-300 z-50 ".concat(e?"w-64":"w-16"),children:[(0,s.jsx)("div",{className:"flex justify-end p-2 mb-4 bg-card-base",children:(0,s.jsx)(t.default,{className:"text-text-base bg-button-secondary hover:bg-button-secondary-hover",onClick:r,children:e?(0,s.jsx)(g.Z,{}):(0,s.jsx)(x.Z,{})})}),(0,s.jsx)(n.default,{children:v.map((o,l)=>(0,s.jsx)(h.default,{href:o.link,onClick:e?r:()=>{},children:(0,s.jsxs)(a.default,{className:"hover:bg-button-secondary-hover text-text-base mb-6 cursor-pointer \n                  ".concat(j===o.link&&"bg-button-secondary","\n                  "),children:[(0,s.jsx)(i.Z,{className:"text-text-base",children:o.icon}),e&&(0,s.jsx)(c.Z,{primary:o.text})]})},l))})]})]})}}},function(e){e.O(0,[614,971,117,744],function(){return e(e.s=2731)}),_N_E=e.O()}]);