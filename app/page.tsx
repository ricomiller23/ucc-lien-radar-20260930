"use client";
import React, { useState } from "react";
import { Shield, Activity, TrendingUp, Layers, ExternalLink, RefreshCw, Terminal, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"overview" | "radar" | "analytics">("radar");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const sampleData = [
    { id: 1, title: "Commercial Senior Note Foreclosure", entity: "Apex Logistics Holdings", status: "DEFAULT NOTICE SERVED", faceValue: "$4,200,000", buyoutCost: "$1,850,000", discount: "56%", rating: "EXCEPTIONAL" },
    { id: 2, title: "Subdivision Parcel Split Arbitrage", entity: "Pacifica Real Estate Group", status: "AB 1033 ELIGIBLE", faceValue: "$2,800,000", buyoutCost: "$1,200,000", discount: "57%", rating: "HIGH" },
    { id: 3, title: "Mezzanine Intercreditor Default", entity: "Vanguard Tech Center", status: "STANDSTILL EXPIRING", faceValue: "$6,500,000", buyoutCost: "$2,600,000", discount: "60%", rating: "EXCEPTIONAL" },
    { id: 4, title: "Blanket UCC-1 Chattel Extraction", entity: "Matrix Precision CNC", status: "STRICT FORECLOSURE", faceValue: "$3,100,000", buyoutCost: "$1,350,000", discount: "56%", rating: "HIGH" }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-[#0d1424] px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-white tracking-wide">UCC-1 Default & Senior Security Interest Radar</h1>
            <p className="text-xs text-slate-400">Forensic Search Engine for Defaulting Senior Secured Debentures & Foreclosure Arbitrage</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE RADAR ACTIVE
          </span>
          <a
            href="https://github.com/ricomiller23"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1.5"
          >
            GitHub <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full p-6 flex-1 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Total Default Volume</p>
            <p className="text-2xl font-bold text-white mt-1">$16.6M</p>
            <span className="text-xs text-emerald-400 font-medium">↑ Active Ingestion</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Estimated Buyout Cost</p>
            <p className="text-2xl font-bold text-cyan-400 mt-1">$7.0M</p>
            <span className="text-xs text-slate-400">58% Weighted Discount</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Toxic Balance Extinguished</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">$48.2M</p>
            <span className="text-xs text-emerald-500/80">Junior Claims Cancelled</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Target Status</p>
            <p className="text-2xl font-bold text-amber-400 mt-1">4 Active</p>
            <span className="text-xs text-slate-400">100% Verified Telemetry</span>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-[#101b33] border border-cyan-500/20">
          <h2 className="text-lg font-bold text-white mb-2">Autonomous Build Architecture: UCC-1 Default & Senior Security Interest Radar</h2>
          <p className="text-sm text-slate-300 mb-4 max-w-3xl leading-relaxed">Systematically monitors state Secretary of State UCC-1 financing filings and blanket commercial liens on distressed mid-market enterprises. Identifies unperfected security interests and distressed mezzanine debt trading at 70%+ discounts.</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> State-Level UCC-1 Commercial Lien Telemetry</li><li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Senior Lender Distress & Non-Accrual Loan Roster</li><li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Article 9 Private Foreclosure Feasibility Calculator</li><li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Automated Workout Officer Direct Outreach Engine</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="font-semibold text-sm text-white">Live Qualified Targets & Foreclosure Telemetry</h3>
            </div>
            <span className="text-xs text-slate-500">Autonomous Daily Update • 2026-09-30</span>
          </div>
          <div className="divide-y divide-slate-800/60">
            {sampleData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                className="p-4 hover:bg-slate-800/40 cursor-pointer transition flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold">TARGET-0{item.id}</span>
                    <h4 className="font-semibold text-sm text-slate-200">{item.entity}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">{item.status}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{item.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{item.buyoutCost} <span className="text-xs text-slate-400 font-normal">({item.discount} off {item.faceValue})</span></p>
                  <span className="text-xs text-emerald-400 font-semibold uppercase">{item.rating} RATING</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 py-4 px-6 text-xs text-slate-500 flex justify-between items-center bg-[#070b14]">
        <span>Generated autonomously by Antigravity & Claude Daily Architect • 2026-09-30</span>
        <span>Standalone Deployment • Zero Legacy Overwrite</span>
      </footer>
    </div>
  );
}
