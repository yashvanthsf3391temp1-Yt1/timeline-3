import{j as e}from"./index-DlC1yEB1.js";import{r as l}from"./index-D5jfS-9e.js";import{S as h,D as x,W as S,a as v,M as y,A as L,d as I,e as R,f as z,g as A}from"./agenda-view-CDu5EFJS.js";import"./recurrence-editor-W0Bvt-MK.js";import{d as g}from"./dataSource-CVoIloeH.js";/* empty css               */import"./index-lf5wH9A6.js";const N=({logger:n})=>{const[t,i]=l.useState([]);return l.useEffect(()=>{const o=a=>{const r=a.detail,s=new Date().toLocaleTimeString();i(p=>[`${s} - ${r}`,...p].slice(0,50))};return n.addEventListener("log",o),()=>n.removeEventListener("log",o)},[n]),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("h4",{style:{margin:0},children:"Event trace"}),e.jsx("button",{onClick:()=>i([]),children:"Clear"})]}),e.jsx("div",{id:"event-trace",style:{height:510,overflow:"auto",border:"1px solid #e0e0e0",borderRadius:4,padding:8,background:"#fafafa"},children:t.length===0?e.jsx("div",{style:{color:"#666"},children:"Interact with the scheduler to see events here."}):e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map((o,a)=>e.jsx("li",{style:{padding:"4px 0",borderBottom:"1px dashed #e5e5e5"},children:o},a))})})]})},$=({enable:n=!0})=>{const t={dataSource:g,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},i=l.useRef(null);return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(h,{ref:i,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,13),defaultView:"TimelineDay",eventDrag:{enable:n,interval:15},rowAutoHeight:!0,eventResize:{enable:n,interval:30},eventSettings:t,headerRows:[],children:[e.jsx(x,{}),e.jsx(S,{showWeekend:!0}),e.jsx(v,{}),e.jsx(y,{maxEventsStack:3}),e.jsx(L,{}),e.jsx(I,{interval:1,startHour:"08:00",endHour:"18:00",maxEventsStack:5,timeScale:{enable:!0,slotCount:2,interval:30}}),e.jsx(R,{interval:1,startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:2,interval:60}}),e.jsx(z,{interval:2}),e.jsx(A,{interval:2,maxEventsStack:5,isTimeBasedEvents:!1})]})})})},M=({})=>{const n=l.useRef(new EventTarget),t=l.useMemo(()=>o=>{n.current.dispatchEvent(new CustomEvent("log",{detail:o}))},[]),i={dataSource:g,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"scheduler-control",style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"16px"},children:[e.jsxs(h,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:!0,rowAutoHeight:!0,eventSettings:i,onDragStart:()=>t("onDragStart"),onDrag:()=>t("onDrag"),onDragStop:()=>t("onDragStop"),children:[e.jsx(x,{}),e.jsx(S,{}),e.jsx(v,{}),e.jsx(y,{})]}),e.jsx(N,{logger:n.current})]})})},U=({enable:n=!0,interval:t=10,excludeSelectors:i="sf-all-day-cell",autoScroll:o=!0,scrollBy:a=5,timeDelay:r=10,navigationEnable:s=!1,navigationTimeDelay:p=2e3})=>{const V={dataSource:g,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(h,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:{enable:n,interval:t,excludeSelectors:i,scroll:{enable:o,scrollBy:a,timeDelay:r},navigation:{enable:s,timeDelay:p}},eventSettings:V,children:[e.jsx(x,{}),e.jsx(S,{}),e.jsx(v,{}),e.jsx(y,{})]})})})},_=({columnWidth:n=80,rowHeight:t=50,headerHeight:i=45,dateColumnWidth:o=150,majorWidth:a=100})=>{const r={dataSource:g,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},s={"--sf-timeline-column-width":`${n}px`,"--sf-timeline-row-height":`${t}px`,"--sf-timeline-header-height":`${i}px`,"--sf-timeline-date-column-width":`${o}px`,"--sf-timeline-major-width":`${a}px`};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"scheduler-control",children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"CSS-Driven Timeline Customization"}),e.jsx("p",{style:{margin:0,fontSize:"13px",color:"#666"},children:"Use the controls below to dynamically adjust Timeline dimensions via CSS variables. This demonstrates the new CSS-driven approach that allows full user customization."})]}),e.jsxs(h,{style:s,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,13),defaultView:"TimelineDay",eventDrag:{enable:!0,interval:15},eventResize:{enable:!0,interval:30},eventSettings:r,children:[e.jsx(I,{interval:1,startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:2,interval:30}}),e.jsx(R,{interval:1,timeScale:{enable:!0,slotCount:2,interval:60}}),e.jsx(z,{interval:2}),e.jsx(A,{interval:2,maxEventsStack:3})]})]})})},Q={title:"Scheduler/Drag and Drop",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},c={render:n=>e.jsx($,{...n}),args:{enable:!0},parameters:{controls:{include:["enable"]}},argTypes:{enable:{control:"boolean"}}},d={render:n=>e.jsx(U,{...n}),args:{enable:!0,interval:15,excludeSelectors:"sf-all-day-cell",autoScroll:!0,scrollBy:5,timeDelay:10,navigationEnable:!1,navigationTimeDelay:2e3},parameters:{controls:{include:["enable","interval","excludeSelectors","autoScroll","scrollBy","timeDelay","navigationEnable","navigationTimeDelay"]}},argTypes:{enable:{control:"boolean"},interval:{control:"number"},excludeSelectors:{control:"text"},autoScroll:{control:"boolean"},scrollBy:{control:"number"},timeDelay:{control:"number"},navigationEnable:{control:"boolean"},navigationTimeDelay:{control:"select",options:[1e3,2e3,3e3,4e3,5e3]}}},m={render:()=>e.jsx(M,{})},u={render:n=>e.jsx(_,{...n}),args:{columnWidth:80,rowHeight:50,headerHeight:45,dateColumnWidth:150,majorWidth:100},parameters:{controls:{include:["columnWidth","rowHeight","headerHeight","dateColumnWidth","majorWidth"]},docs:{description:{story:"Demonstrates CSS-driven Timeline dimension customization using CSS variables. Adjust the controls to see real-time changes to cell widths, row heights, and header dimensions. This approach allows users to customize dimensions via inline styles, external CSS, or SCSS variables without modifying component internals."}}},argTypes:{columnWidth:{control:{type:"range",min:30,max:150,step:5},description:"Width of each timeline grid column (--sf-timeline-column-width)"},rowHeight:{control:{type:"range",min:30,max:100,step:5},description:"Height of timeline grid rows (--sf-timeline-row-height)"},headerHeight:{control:{type:"range",min:30,max:80,step:5},description:"Height of header rows (--sf-timeline-header-height)"},dateColumnWidth:{control:{type:"range",min:80,max:250,step:10},description:"Width of date label cells (--sf-timeline-date-column-width)"},majorWidth:{control:{type:"range",min:60,max:200,step:10},description:"Width of hour/major time cells (--sf-timeline-major-width)"}}};var f,j,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <EventDragSample {...args} />,
  args: {
    enable: true
  },
  parameters: {
    controls: {
      include: ['enable']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    }
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,D,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <CustomizedSample {...args} />,
  args: {
    enable: true,
    interval: 15,
    excludeSelectors: 'sf-all-day-cell',
    autoScroll: true,
    scrollBy: 5,
    timeDelay: 10,
    navigationEnable: false,
    navigationTimeDelay: 2000
  },
  parameters: {
    controls: {
      include: ['enable', 'interval', 'excludeSelectors', 'autoScroll', 'scrollBy', 'timeDelay', 'navigationEnable', 'navigationTimeDelay']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    },
    interval: {
      control: 'number'
    },
    excludeSelectors: {
      control: 'text'
    },
    autoScroll: {
      control: 'boolean'
    },
    scrollBy: {
      control: 'number'
    },
    timeDelay: {
      control: 'number'
    },
    navigationEnable: {
      control: 'boolean'
    },
    navigationTimeDelay: {
      control: 'select',
      options: [1000, 2000, 3000, 4000, 5000]
    }
  }
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var C,E,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <DragEventsSample />
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var k,H,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <TimelineCSSCustomization {...args} />,
  args: {
    columnWidth: 80,
    rowHeight: 50,
    headerHeight: 45,
    dateColumnWidth: 150,
    majorWidth: 100
  },
  parameters: {
    controls: {
      include: ['columnWidth', 'rowHeight', 'headerHeight', 'dateColumnWidth', 'majorWidth']
    },
    docs: {
      description: {
        story: 'Demonstrates CSS-driven Timeline dimension customization using CSS variables. Adjust the controls to see real-time changes to cell widths, row heights, and header dimensions. This approach allows users to customize dimensions via inline styles, external CSS, or SCSS variables without modifying component internals.'
      }
    }
  },
  argTypes: {
    columnWidth: {
      control: {
        type: 'range',
        min: 30,
        max: 150,
        step: 5
      },
      description: 'Width of each timeline grid column (--sf-timeline-column-width)'
    },
    rowHeight: {
      control: {
        type: 'range',
        min: 30,
        max: 100,
        step: 5
      },
      description: 'Height of timeline grid rows (--sf-timeline-row-height)'
    },
    headerHeight: {
      control: {
        type: 'range',
        min: 30,
        max: 80,
        step: 5
      },
      description: 'Height of header rows (--sf-timeline-header-height)'
    },
    dateColumnWidth: {
      control: {
        type: 'range',
        min: 80,
        max: 250,
        step: 10
      },
      description: 'Width of date label cells (--sf-timeline-date-column-width)'
    },
    majorWidth: {
      control: {
        type: 'range',
        min: 60,
        max: 200,
        step: 10
      },
      description: 'Width of hour/major time cells (--sf-timeline-major-width)'
    }
  }
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const X=["EventDrag","Customization","UserEndEvents","TimelineCSSDimensions"];export{d as Customization,c as EventDrag,u as TimelineCSSDimensions,m as UserEndEvents,X as __namedExportsOrder,Q as default};
