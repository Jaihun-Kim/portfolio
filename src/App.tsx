import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Plus, 
  ChevronDown, 
  Star, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Zap,
  Sparkles,
  ArrowRight,
  X
} from "lucide-react";

interface ProjectDetails {
  id: string;
  title: string;
  client: string;
  category: string;
  technologies: string[];
  tasks: string[];
  achievements: string[];
  capabilities: string[];
  icon: React.ReactNode;
  image: string;
}

const PROJECTS: ProjectDetails[] = [
  {
    id: "da-system",
    title: "Display Audio HW System",
    client: "AUTOMOTIVE OEM",
    category: "System Validation",
    technologies: ["Telechips CPU", "Infineon MCU", "CAN", "USB", "Wi-Fi", "BT", "GPS"],
    tasks: [
      "회로도 분석 및 부품 선정 검토",
      "전원 인가 절차 및 소모 전류 최적화 검증",
      "CAN통신 및 각 인터페이스(USB, Wi-Fi, BT) 기능 시험",
      "문제 발생 시 회로 및 신호 흐름 기반 원인 분석 경험 확보"
    ],
    achievements: [
      "다양한 인터페이스 환경에서 시스템 안정성 검증 수행",
      "실시간 신호 분석을 통한 회로 결함률 15% 감소 기여"
    ],
    capabilities: ["시스템 레벨 검증 능력", "인터페이스 기반 시험 대응"],
    icon: <Star className="text-ink/10" size={120} strokeWidth={0.5} />,
    image: "https://images.unsplash.com/photo-1617469771020-821dd3348d5f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "usb-pd-100",
    title: "USB PD 100W 2-Port",
    client: "AUTOMOTIVE OEM",
    category: "Power Design",
    technologies: ["Infineon CYPD7291", "High Power Design", "Thermal Management"],
    tasks: [
      "100W 고출력 전력 분배 회로 설계 및 검증",
      "PD 컨트롤러 파라미터 설정 및 충전 프로토콜 시험",
      "고전류 부하에 따른 발열 측정 및 기구 설계 피드백",
      "고효율 전력 경로 최적화 및 보호 회로 설계 역량 강화"
    ],
    achievements: [
      "고전력 환경에서 전원 동작 특성 및 발열 이슈 해결",
      "다양한 스마트 기기와의 호환성 테스트 100% 통과"
    ],
    capabilities: ["전원 회로 이해", "전력 기반 시험 경험"],
    icon: <Zap className="text-ink/10" size={120} strokeWidth={0.5} />,
    image: "https://images.unsplash.com/photo-1593121925328-369ec8459c1c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "wireless-15",
    title: "15W Wireless Charging",
    client: "AUTOMOTIVE OEM",
    category: "Wireless Power",
    technologies: ["Buck-Boost", "Charging IC", "WPC Standard"],
    tasks: [
      "WPC 규격 기반의 15W 무선 충전 송신부 회로 설계",
      "FOD(Foreign Object Detection) 및 보호 기능 동작 검증",
      "코일 배치에 따른 충전 효율 및 전자기 간섭 분석",
      "복합적 전원 IC 구조의 동작 신뢰성 검증 능력 확보"
    ],
    achievements: [
      "무선 전력 전달 구조 이해 및 시스템 최적화 수행",
      "전장 가이드라인을 준수하는 고신뢰성 충전 솔루션 확보"
    ],
    capabilities: ["전력 전달 구조 이해", "시스템 검증 경험"],
    icon: <Sparkles className="text-ink/10" size={120} strokeWidth={0.5} />,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "als-jig",
    title: "ALS Module Jig Board",
    client: "AUTOMOTIVE OEM",
    category: "Jig & Test Design",
    technologies: ["FFC interface", "Test Automation", "Jig Design"],
    tasks: [
      "모듈 검사용 FFC 인터페이스 지그 회로 설계",
      "양산 라인 도입을 위한 테스트 포인트 선정 및 신호 무결성 검토",
      "검사 자동화를 위한 제어 보드 연동 설계",
      "글로벌(벤츠) 양산 검증 프로세스 이해"
    ],
    achievements: [
      "검사 공정 효율성 30% 향상 및 불량 검출 정밀도 개선",
      "양산 전용 테스트 인터페이스 보드 설계 표준 확립"
    ],
    capabilities: ["시험 환경 구축 이해", "검증 시스템 설계 경험"],
    icon: <Star className="text-ink/10" size={120} strokeWidth={0.5} />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "usb-pd-60",
    title: "USB PD 60W Circuit",
    client: "AUTOMOTIVE OEM",
    category: "Circuit Design",
    technologies: ["OrCAD", "MPS MPF52000", "Circuit Architecture"],
    tasks: [
      "OrCAD를 활용한 60W 지원 USB PD 충전 회로도 설계",
      "전원 IC 특성에 맞춘 수동 소자 선정 및 회로 정수 최적화",
      "PCB 레이아웃 설계를 위한 부품 배치 가이드라인 수립",
      "주요 소자 데이터시트 분석 기반 회로 최적화"
    ],
    achievements: [
      "전원 회로 구조 및 고속 스위칭 레이아웃 설계 지식 습득",
      "저노이즈 전력 공급을 위한 필터 회로 구성 최적화"
    ],
    capabilities: ["회로 설계 능력", "전력 흐름 분석 능력"],
    icon: <Sparkles className="text-ink/10" size={120} strokeWidth={0.5} />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

const SectionHeader = ({ title, subtitle, showStar = true }: { title: string, subtitle?: string, showStar?: boolean }) => (
  <div className="flex items-center gap-3 mb-12">
    {showStar && <Sparkles className="text-ink/20" size={18} />}
    <h2 className="text-xl font-medium tracking-tight uppercase">{title}</h2>
    {subtitle && <span className="text-ink/40 text-sm ml-auto uppercase tracking-widest">{subtitle}</span>}
  </div>
);

const ServiceItem = ({ title, description, image }: { title: string, description: string, image: string }) => (
  <div className="border-t border-border py-8 flex flex-col md:flex-row md:items-center gap-8 px-4 overflow-hidden relative">
    <div className="md:w-1/3">
      <h3 className="text-2xl font-serif">{title}</h3>
    </div>
    <div className="md:w-1/2">
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  </div>
);

interface ProjectCardProps {
  project: ProjectDetails;
  onClick: () => void;
  key?: string;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div className="cursor-pointer" onClick={onClick}>
    <div className="aspect-[4/5] bg-[#F3F3EF] mb-4 flex items-center justify-center overflow-hidden relative">
       <img 
         src={project.image} 
         alt={project.title} 
         className="w-full h-full object-cover"
         referrerPolicy="no-referrer"
       />
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h4 className="text-lg font-medium">{project.title}</h4>
        <p className="text-xs text-ink/40 uppercase tracking-widest mt-1">Client: {project.client}</p>
      </div>
      <span className="bg-accent/40 px-2 py-0.5 rounded text-[10px] font-bold uppercase">{project.category}</span>
    </div>
  </div>
);

const Modal = ({ project, onClose }: { project: ProjectDetails | null, onClose: () => void }) => (
  <AnimatePresence>
    {project && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-bg w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 p-10 md:p-16 shadow-2xl rounded-sm"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-ink/40 hover:text-ink transition-colors"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
               <div className="aspect-square bg-accent/10 flex items-center justify-center mb-8 overflow-hidden">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="space-y-6">
                 <div>
                   <h5 className="text-[10px] uppercase font-bold tracking-[0.3em] text-ink/30 mb-2">Technologies</h5>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map(tech => (
                       <span key={tech} className="bg-ink/5 px-2 py-1 text-[10px] font-bold uppercase">{tech}</span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h5 className="text-[10px] uppercase font-bold tracking-[0.3em] text-ink/30 mb-2">Capabilities</h5>
                   <ul className="space-y-1">
                     {project.capabilities.map(cap => (
                       <li key={cap} className="text-xs font-bold italic tracking-tight">{cap}</li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

            <div className="md:w-2/3">
              <span className="bg-accent/40 px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-4 inline-block">{project.category}</span>
              <h2 className="text-5xl font-serif mb-2">{project.title}</h2>
              <p className="text-muted uppercase text-xs font-bold tracking-[0.3em] mb-12">Client: {project.client}</p>

              <div className="space-y-12">
                <section>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-accent" /> 주요 수행 업무
                  </h4>
                  <ul className="space-y-3">
                    {project.tasks.map((task, i) => (
                      <li key={i} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent font-bold">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-accent" /> 성과 및 역할
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((ach, i) => (
                      <li key={i} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent font-bold">•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <details className="group border-b border-border py-6 cursor-pointer">
    <summary className="list-none flex justify-between items-center text-lg font-medium uppercase tracking-tight">
      {question}
      <Plus className="group-open:rotate-45 transition-transform duration-300" size={20} />
    </summary>
    <div className="mt-4 text-muted leading-relaxed max-w-2xl">
      {answer}
    </div>
  </details>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <div className="min-h-screen bg-bg">
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-100 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-serif text-2xl font-bold tracking-tight">Jaihun.</span>
            <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest opacity-60">
              <a href="#" className="hover:opacity-100 italic transition-opacity">Home</a>
              <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
              <div className="flex items-center gap-1 group cursor-pointer">
                <span className="hover:opacity-100 transition-opacity">Expertise</span>
                <ChevronDown size={14} />
              </div>
              <a href="#blog" className="hover:opacity-100 transition-opacity">Insights</a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="mailto:jhkim9977@naver.com" className="bg-accent px-6 py-2 rounded-md text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-md transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 max-w-[1400px] mx-auto overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2/3 h-full opacity-[0.1] pointer-events-none select-none -z-10">
            <img 
              src="https://images.unsplash.com/photo-1635332252130-99427b38dcd3?auto=format&fit=crop&q=80&w=1200" 
              alt="Technical Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="editorial-grid items-center relative gap-12">
            <div className="col-span-12 lg:col-span-7 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[6.5rem] font-serif leading-[0.9] tracking-tight mb-8"
              >
                Hi, I'm <br />
                <span className="italic">Jaihun Kim</span> <br />
                HW Engineer.
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-border/50 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-sm mt-8 relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Zap size={18} className="text-ink" />
                </div>
                <p className="text-muted text-sm leading-relaxed mb-8 italic">
                  "시제품 검증 및 동작 테스트부터 양산 검사 지그 설계까지, 전장 시스템의 신뢰성 확보를 위한 모든 과정을 전문적으로 수행합니다. 복합적인 회로 및 인터페이스 분석 능력을 통해 최적화된 하드웨어 솔루션을 제공합니다."
                </p>
                <a href="#work" className="bg-accent/10 text-ink text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded flex items-center justify-center gap-2 hover:bg-accent transition-colors w-fit">
                  View Portfolio <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl opacity-50" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative w-full aspect-[4/5] md:aspect-square bg-[#F3F3EF] overflow-hidden"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                    alt="Automotive Hardware Engineering" 
                    className="w-full h-full object-cover transition-all duration-700 brightness-75 contrast-125"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 border-[20px] border-bg pointer-events-none" />
                  <div className="absolute bottom-10 left-10 right-10 flex items-end">
                    <div className="bg-bg p-6 max-w-[220px] shadow-2xl">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-60">Featured Work</p>
                      <h3 className="text-sm font-bold uppercase leading-tight tracking-tight">Automotive System Hardware</h3>
                    </div>
                  </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-border">
          <div className="flex justify-between items-baseline mb-16">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-xs font-bold uppercase tracking-[0.3em]">Core Competencies</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">Key Capabilities</span>
          </div>
          
          <div className="divide-y divide-border">
            <ServiceItem 
              title="Automotive System Validation" 
              description="전장 시스템 기반 시제품 검증 및 동작 테스트 수행. 시스템 레벨의 문제 분석 및 시험 대응에 특화된 역량 보유."
              image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
            />
            <ServiceItem 
              title="Power & Interface Analysis" 
              description="회로 및 인터페이스 기반의 심도 있는 문제 분석. 전원 회로 및 전력 구조에 대한 깊은 이해를 바탕으로 안정성 확보."
              image="https://images.unsplash.com/photo-1607990281513-2c110a25bb8c?auto=format&fit=crop&q=80&w=800"
            />
            <ServiceItem 
              title="Test Environment Design" 
              description="양산 검사용 Jig Board 설계를 통한 검증 환경 구축 및 프로세스 이해. SW/기구팀과의 긴밀한 협업을 통한 시스템 최적화."
              image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section id="work" className="py-24 px-6 max-w-[1400px] mx-auto border-t border-border">
          <SectionHeader title="Work Highlights" subtitle="Key Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {PROJECTS.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {/* Detailed Insights Section */}
        <section className="py-24 px-6 bg-[#F9F9F7]">
          <div className="max-w-[1400px] mx-auto editorial-grid items-center">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center mb-16">
              <h2 className="text-muted text-lg font-serif mb-4 uppercase tracking-[0.2em]">Detailed insights into my technical journey</h2>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:col-start-2">
              <div className="bg-accent/20 aspect-square flex flex-col items-center justify-center rounded-sm">
                 <span className="text-[10rem] font-serif font-black italic text-ink/80 leading-none">3+</span>
                 <span className="text-muted uppercase font-bold tracking-[0.3em] -mt-4">Years of Expertise</span>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-6">
              <div className="aspect-[16/9] bg-ink/5 border border-border relative overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200" 
                   alt="Proven Hardware Reliability"
                   className="w-full h-full object-cover grayscale opacity-40"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-4xl font-serif italic text-ink/20">PROVEN HW RELIABILITY</div>
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-24 px-6 max-w-[1400px] mx-auto">
          <div className="editorial-grid">
             <div className="col-span-12 md:col-span-5">
               <SectionHeader title="Technical FAQ" showStar={false} />
               <h3 className="text-4xl font-serif leading-tight">Expertise <br /> & Process.</h3>
             </div>
             <div className="col-span-12 md:col-span-7">
               <FAQItem 
                question="전장 제품 개발에서 가장 중요하게 생각하는 경험은 무엇인가요?" 
                answer="단순한 설계를 넘어 시제품 검증부터 양산 검사 지그 보드 설계까지 전 과정을 아우르는 실무 경험입니다. 특히 다중 인터페이스 시스템의 신뢰성을 확보하고 문제의 근본 원인을 분석하는 능력을 중요하게 생각합니다."
               />
               <FAQItem 
                question="협업 프로세스에서의 강점은 무엇인가요?" 
                answer="SW 및 기구팀과의 긴밀한 협업을 통해 시스템 레벨에서 발생하는 복합적인 이슈를 해결하는 데 강점이 있습니다. 시스템의 동작을 물리적/신호적으로 분석하여 최적의 솔루션을 제안합니다."
               />
               <FAQItem 
                question="전원 설계 및 검증 시의 주요 고려 사항은?" 
                answer="고전력 시스템(USB PD 100W 등)에서의 전력 경로 최적화와 열 관리, 그리고 보호 회로 구조를 최우선으로 고려합니다. 데이터시트 정밀 분석을 통해 설계 단계부터 안정성을 확보합니다."
               />
             </div>
          </div>
        </section>

        {/* Blog/News */}
        <section id="blog" className="py-24 px-6 max-w-[1400px] mx-auto border-t border-border">
          <div className="flex justify-between items-center mb-12">
            <SectionHeader title="Technical Insights" showStar={true} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { category: "Validation", title: "전장 Display Audio 시스템의 신뢰성 검증 및 신호 분석 프로세스", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", icon: <Star size={40} className="opacity-10" /> },
               { category: "Power", title: "USB PD 100W 고출력 전원 회로의 발열 최적화 및 보호 구조 설계", image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?auto=format&fit=crop&q=80&w=800", icon: <Zap size={40} className="opacity-10" /> },
               { category: "Manufacturing", title: "FFC 인터페이스 기반 양산 검사 지그 설계 및 테스트 자동화 전략", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", icon: <Sparkles size={40} className="opacity-10" /> }
             ].map((post, idx) => (
               <div key={idx} className="relative cursor-pointer">
                  <div className="aspect-video bg-ink/5 mb-6 flex items-center justify-center relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       {post.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{post.category}</span>
                  </div>
                  <h4 className="text-xl font-serif leading-tight">{post.title}</h4>
               </div>
             ))}
          </div>
        </section>

        {/* Huge CTA */}
        <section className="py-40 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=2000" 
              alt="Hardware Excellence" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="flex flex-col items-center justify-center gap-4 animate-bounce opacity-20 mb-8">
            <Star size={40} />
            <Star size={80} />
            <Star size={40} />
          </div>
          <h2 className="text-6xl md:text-[8rem] font-serif italic tracking-tighter leading-none mb-12">
            Let's Build <br /> <span className="not-italic">Hardware Excellence.</span>
          </h2>
          <a href="mailto:jhkim9977@naver.com" className="bg-ink text-bg px-12 py-6 rounded text-xl font-bold uppercase tracking-[0.3em] hover:bg-accent hover:text-ink transition-all shadow-2xl inline-block">
            Contact Me
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-accent/10 pt-24 pb-12 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="editorial-grid mb-24">
              <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
                <span className="font-serif text-3xl font-bold tracking-tight mb-6 block">Jaihun.</span>
                <p className="text-muted leading-relaxed max-sm">
                  HW 엔지니어로서 다양한 차량용 시스템 개발을 경험하며 회로 설계부터 검증까지 수행해왔습니다. 전원 및 인터페이스 기반 시스템을 이해하고 문제를 분석하는 역량을 바탕으로, 신뢰성 있는 제품 개발에 기여하는 엔지니어입니다.
                </p>
                <div className="mt-8 flex gap-4">
                  <Mail className="text-ink/40 hover:text-ink cursor-pointer transition-colors" />
                </div>
              </div>
              
              <div className="col-span-6 lg:col-span-2">
                <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-8">Expertise</h5>
                <ul className="space-y-4 text-sm text-ink/60 uppercase font-bold tracking-widest italic">
                  <li className="hover:text-ink cursor-pointer">Circuit Design</li>
                  <li className="hover:text-ink cursor-pointer">PCB Artwork</li>
                  <li className="hover:text-ink cursor-pointer">HW Validation</li>
                </ul>
              </div>
              
              <div className="col-span-6 lg:col-span-2">
                <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-8">Navigation</h5>
                <ul className="space-y-4 text-sm text-ink/60 uppercase font-bold tracking-widest italic">
                  <li className="hover:text-ink cursor-pointer">Home</li>
                  <li className="hover:text-ink cursor-pointer">Projects</li>
                  <li className="hover:text-ink cursor-pointer">Insights</li>
                </ul>
              </div>
              
              <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
                 <h5 className="font-bold text-xs uppercase tracking-[0.3em] mb-8">Get in touch</h5>
                 <a href="mailto:jhkim9977@naver.com" className="text-2xl font-serif italic border-b border-ink/20 pb-2 hover:border-ink transition-all">jhkim9977@naver.com</a>
                 <p className="mt-8 text-xs text-muted leading-relaxed max-xs italic">
                   Based in Korea, working on high-reliability automotive and power systems.
                 </p>
              </div>
            </div>
            
            <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
               <span>© 2026 JAIHUN KIM. ALL RIGHTS RESERVED.</span>
               <div className="flex gap-8">
                 <a href="#">Privacy Policy</a>
                 <a href="#">Terms & Conditions</a>
               </div>
               <span>Engineered for Reliability</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
