'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  LayoutDashboard, Book, FileEdit, Video, Calendar, MessageCircle, 
  Moon, Sun, Settings, CalendarDays, HelpCircle, Bell, ChevronDown, 
  PlayCircle, Clock, CheckCircle2, TrendingUp, FileText, BookOpen 
} from 'lucide-react';

export function InteractiveDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setScale(Math.min(1, width / 1280));
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  const navItemClass = "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] font-medium transition-colors hover:bg-slate-100 dark:hover:bg-[#252627] text-slate-600 dark:text-[#97979A]";
  const navItemActiveClass = "flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400";

  return (
    <div ref={containerRef} className="w-full relative">
      <div 
        className={`w-[1280px] origin-top-left absolute top-0 left-0 text-left overflow-hidden rounded-[16px] md:rounded-[24px] border ${isDarkMode ? 'dark border-[#2A2D31]' : 'border-slate-200'}`}
        style={{
          transform: `scale(${scale})`,
        }}
      >
      
      {/* Shimmering Glass Top Border */}
      {isDarkMode && (
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-50"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="flex h-[800px] w-full bg-slate-50 dark:bg-[#0F0F11] text-slate-900 dark:text-white font-['Inter_Tight'] transition-colors duration-300">
        
        {/* Sidebar */}
        <motion.aside 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[220px] flex flex-col border-r border-slate-200 dark:border-[#2A2D31] p-5 bg-white dark:bg-[#090909] shrink-0 z-10 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 text-[18px] font-bold text-indigo-600 dark:text-indigo-400 mb-8 px-2 tracking-tight">
            HelloTutor
          </div>

          <div className="mb-8">
            <div className="text-[11px] font-bold text-slate-400 dark:text-[#5D6168] uppercase tracking-wider mb-3 px-2">Main Menu</div>
            <div className="space-y-1">
              <a href="#" className={navItemActiveClass} onClick={e => e.preventDefault()}>
                <LayoutDashboard className="w-[18px] h-[18px]" /> Dashboard
              </a>
              <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
                <Book className="w-[18px] h-[18px]" /> Lessons
              </a>
              <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
                <FileEdit className="w-[18px] h-[18px]" /> Homework
              </a>
              <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
                <Video className="w-[18px] h-[18px]" /> Recordings
              </a>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-[11px] font-bold text-slate-400 dark:text-[#5D6168] uppercase tracking-wider mb-3 px-2">Personal</div>
            <div className="space-y-1">
              <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
                <Calendar className="w-[18px] h-[18px]" /> Calendar
              </a>
              <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
                <MessageCircle className="w-[18px] h-[18px]" /> Messages
              </a>
            </div>
          </div>

          <div className="mt-auto pt-4">
            {/* Dark Mode Toggle */}
            <div className="flex bg-slate-100 dark:bg-[#1C1E21] p-1 rounded-full mb-4">
              <button 
                onClick={() => setIsDarkMode(false)}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-full text-[13px] font-medium transition-all ${!isDarkMode ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-[#97979A] dark:hover:text-[#E2E3E5]'}`}
              >
                <Sun className="w-[16px] h-[16px]" /> Light
              </button>
              <button 
                onClick={() => setIsDarkMode(true)}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-full text-[13px] font-medium transition-all ${isDarkMode ? 'bg-[#252627] text-white shadow-sm border border-[#2A2D31]' : 'text-slate-500 hover:text-slate-700 dark:text-[#97979A] dark:hover:text-[#E2E3E5]'}`}
              >
                <Moon className="w-[16px] h-[16px]" /> Dark
              </button>
            </div>
            
            <a href="#" className={navItemClass} onClick={e => e.preventDefault()}>
              <Settings className="w-[18px] h-[18px]" /> Settings
            </a>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          
          {/* Top Header */}
          <motion.header 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[72px] shrink-0 flex items-center justify-between px-8 bg-white/80 dark:bg-[#1C1C1D]/80 backdrop-blur border-b border-slate-200 dark:border-[#2A2D31] z-20 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 text-slate-500 dark:text-[#97979A] font-medium text-[14px]">
              <CalendarDays className="w-[18px] h-[18px]" />
              Today, 26 June 2026
            </div>
            
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-[#1C1E21] text-slate-500 dark:text-[#97979A] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <HelpCircle className="w-[18px] h-[18px]" />
              </button>
              <button className="relative w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-[#1C1E21] text-slate-500 dark:text-[#97979A] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Bell className="w-[18px] h-[18px]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-[#1C1E21]">2</span>
              </button>
              
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-[#1C1E21] cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[13px] shadow-sm">
                  HA
                </div>
                <div className="font-semibold text-[14px] text-slate-700 dark:text-[#E2E3E5] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Hamed
                </div>
                <ChevronDown className="w-[18px] h-[18px] text-slate-400" />
              </div>
            </div>
          </motion.header>

          {/* Page Content */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 p-8 overflow-y-auto"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-[30px] font-semibold text-slate-900 dark:text-white tracking-tight mb-1">
                Welcome back, Hamed!
              </h1>
              <p className="text-[16px] text-slate-500 dark:text-[#97979A]">
                Here's what's happening with your lessons today.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              
              {/* Top Row */}
              <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
                
                {/* Up Next Card */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1C1C1D] rounded-[16px] border border-slate-200 dark:border-[#2A2D31] p-6 relative overflow-hidden group transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-[14px]">
                      <PlayCircle className="w-[18px] h-[18px]" />
                      Up Next
                    </div>
                    <div className="bg-indigo-600 text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
                      Starts in 45m
                    </div>
                  </div>
                  
                  <h2 className="relative z-10 text-[26px] font-semibold text-slate-900 dark:text-white tracking-tight mb-4">
                    Maths W16, L17
                  </h2>
                  
                  <div className="relative z-10 flex flex-wrap gap-4 text-[14px] text-slate-500 dark:text-[#97979A] mb-6 font-medium">
                    <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#252627] px-3 py-1.5 rounded-lg border border-slate-100 dark:border-[#1C1E21]">
                      <CalendarDays className="w-[18px] h-[18px]" /> Today, 12:15 PM
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#252627] px-3 py-1.5 rounded-lg border border-slate-100 dark:border-[#1C1E21]">
                      <Clock className="w-[18px] h-[18px]" /> 60 min
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-wrap gap-3">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-lg shadow-sm shadow-indigo-600/20 transition-all">
                      Join Lesson
                    </button>
                    <button className="bg-white dark:bg-[#1C1C1D] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-[#E2E3E5] font-semibold py-2 px-5 rounded-lg border border-slate-200 dark:border-[#1C1E21] transition-all">
                      View Materials
                    </button>
                  </div>
                </motion.div>

                {/* Pending Tasks */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1C1C1D] rounded-[16px] border border-slate-200 dark:border-[#2A2D31] p-5 transition-colors duration-300">
                  <div className="mb-4">
                    <h3 className="text-[16px] font-bold text-slate-900 dark:text-white">Pending Tasks</h3>
                    <div className="text-[13px] text-slate-500 dark:text-[#97979A]">Homework & Assignments</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#252627] border border-slate-100 dark:border-[#2A2D31] group hover:border-orange-200 dark:hover:border-orange-900/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                          <FileText className="w-[20px] h-[20px]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[14px] text-slate-900 dark:text-white">Algebra Worksheet</div>
                          <div className="text-[12px] font-medium text-orange-600 dark:text-orange-400">Due Tomorrow</div>
                        </div>
                      </div>
                      <button className="text-[13px] font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-[#1C1C1D] border border-slate-200 dark:border-[#1C1E21] px-3 py-1.5 rounded-lg shadow-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                        Start
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#252627] border border-slate-100 dark:border-[#2A2D31] group hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                          <BookOpen className="w-[20px] h-[20px]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[14px] text-slate-900 dark:text-white">Physics Reading</div>
                          <div className="text-[12px] font-medium text-slate-500 dark:text-[#97979A]">Due Friday</div>
                        </div>
                      </div>
                      <button className="text-[13px] font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-[#1C1C1D] border border-slate-200 dark:border-[#1C1E21] px-3 py-1.5 rounded-lg shadow-sm hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                        Start
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Stats Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Enrolled Lessons', value: '12', icon: <Book className="w-[18px] h-[18px]" /> },
                    { label: 'Upcoming', value: '3', icon: <Clock className="w-[18px] h-[18px]" /> },
                    { label: 'Completed', value: '45', icon: <CheckCircle2 className="w-[18px] h-[18px]" /> },
                    { label: 'Total Hours', value: '128h', icon: <TrendingUp className="w-[18px] h-[18px]" /> },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-[#1C1C1D] rounded-[16px] border border-slate-200 dark:border-[#2A2D31] p-5 transition-all duration-300">
                      <div className="flex items-center justify-between text-slate-500 dark:text-[#97979A] text-[13px] font-medium mb-3">
                        {stat.label}
                        <span className="opacity-60">{stat.icon}</span>
                      </div>
                      <div className="text-[28px] font-bold text-slate-900 dark:text-white tracking-tight">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Chart Card */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1C1C1D] rounded-[16px] border border-slate-200 dark:border-[#2A2D31] p-6 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="text-[24px] font-bold text-slate-900 dark:text-white tracking-tight">
                          21.5 Hours
                        </h3>
                        <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[12px] font-bold">
                          <TrendingUp className="w-[14px] h-[14px]" /> +12.5% vs last month
                        </div>
                      </div>
                      <div className="text-[14px] text-slate-500 dark:text-[#97979A]">
                        Completed 14 lessons in the last 30 days
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <select className="border border-slate-200 dark:border-[#1C1E21] bg-white dark:bg-[#1C1C1D] text-slate-700 dark:text-[#E2E3E5] text-[13px] font-medium rounded-md px-3 py-1.5 outline-none cursor-pointer">
                        <option>Last 30 Days</option>
                        <option>Last 6 Months</option>
                        <option>This Year</option>
                      </select>
                      <div className="flex items-center gap-3 text-[13px] font-medium">
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-[#97979A]">
                          <div className="w-2.5 h-2.5 rounded bg-indigo-600"></div> Lessons
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-[#97979A]">
                          <div className="w-2.5 h-2.5 rounded bg-sky-500"></div> Hours
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CSS-based Bar Chart Mock */}
                  <div className="h-[220px] w-full flex items-end justify-between gap-1 mt-4 relative pb-6 border-b border-slate-100 dark:border-[#1C1E21]">
                    {/* Y-axis labels mock */}
                    <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[11px] text-slate-400">
                      <span>3h</span><span>2h</span><span>1h</span><span>0h</span>
                    </div>
                    {/* Grid lines */}
                    <div className="absolute left-8 right-0 top-1 h-px border-t border-dashed border-slate-200 dark:border-[#1C1E21] opacity-50"></div>
                    <div className="absolute left-8 right-0 top-[33%] h-px border-t border-dashed border-slate-200 dark:border-[#1C1E21] opacity-50"></div>
                    <div className="absolute left-8 right-0 top-[66%] h-px border-t border-dashed border-slate-200 dark:border-[#1C1E21] opacity-50"></div>
                    
                    <div className="ml-8 w-full h-full flex items-end justify-between px-2">
                      {[
                        [0, 0], [2, 3], [0, 0], [0, 0], [4, 6], [0, 0], [2, 2], [0, 0], [0, 0], [0, 0], 
                        [2, 4], [2, 3], [0, 0], [0, 0], [4, 5], [0, 0], [0, 0], [2, 2], [0, 0], [2, 4], 
                        [0, 0], [0, 0], [4, 6], [0, 0], [2, 3], [2, 5]
                      ].map((data, idx) => (
                        <div key={idx} className="relative h-full flex items-end gap-[1px] w-[14px] group">
                          {data[0] > 0 && (
                            <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${data[0] * 15}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + idx * 0.02, ease: "easeOut" }}
                              className="w-1/2 bg-indigo-600 rounded-t-sm" 
                            />
                          )}
                          {data[1] > 0 && (
                            <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${data[1] * 15}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.6 + idx * 0.02, ease: "easeOut" }}
                              className="w-1/2 bg-sky-500 rounded-t-sm" 
                            />
                          )}
                          {/* X-axis label */}
                          {idx % 4 === 0 && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-slate-400 whitespace-nowrap">
                              Jun {idx + 1}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Recent Activity */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-[#1C1C1D] rounded-[16px] border border-slate-200 dark:border-[#2A2D31] p-5 transition-colors duration-300">
                  <div className="mb-4">
                    <h3 className="text-[16px] font-bold text-slate-900 dark:text-white">Recent Activity</h3>
                    <div className="text-[13px] text-slate-500 dark:text-[#97979A]">Your latest lesson interactions</div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Maths W16, L17', date: 'Jun 1, 2026 • 12:13 PM' },
                      { title: 'Science W12, L3', date: 'May 6, 2026 • 8:29 AM' },
                      { title: 'English Lit: Essay Review', date: 'May 5, 2026 • 4:34 PM' },
                      { title: 'History W8, L2', date: 'May 3, 2026 • 5:18 PM' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-indigo-200 dark:bg-indigo-500/30 border-2 border-white dark:border-[#1C1E21]"></div>
                          <div>
                            <div className="font-medium text-[14px] text-slate-900 dark:text-white">{activity.title}</div>
                            <div className="text-[12px] text-slate-500 dark:text-[#97979A]">{activity.date}</div>
                          </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-[#252627] text-slate-600 dark:text-[#97979A] text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                          Scheduled
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.main>
          </div>
        </div>
      </div>
      {/* Spacer to maintain document flow height for the absolutely positioned scaled element */}
      <div style={{ height: `${800 * scale}px` }} />
    </div>
  );
}
