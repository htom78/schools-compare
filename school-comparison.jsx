import { useState } from "react";
import { t } from "./src/data/i18n.js";
import { schoolsData, countryFlag } from "./src/data/schools.js";
import { citiesData, ratings, sampleTimetables } from "./src/data/cities.js";

const MONTHS_SHORT = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function RatingDots({ value, max = 5 }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px" }}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: i < value ? "#A8895C" : "rgba(0,0,0,0.08)", display: "inline-block" }} />
      ))}
    </span>
  );
}

function getLocal(obj, lang, field) {
  const suffix = lang === "zh" ? "Zh" : lang === "ja" ? "Ja" : "En";
  return obj[field + suffix] || obj[field] || "";
}

function formatMonths(m, lang) {
  if (m === 12) return lang === "en" ? "1 year" : "1年";
  if (lang === "zh") return `${m} 个月`;
  if (lang === "ja") return `${m} ヶ月`;
  return `${m} months`;
}

function formatFee(manYen, lang) {
  if (lang === "en") return `¥${(manYen * 10000).toLocaleString("en-US")}`;
  const s = manYen.toFixed(1).replace(/\.0$/, "");
  return `${s} 万円`;
}

// 月均气温·降水表（来源：JTB 各国 PDF「平均気温と降水量」）
function MonthlyTempTable({ data, L }) {
  const maxRain = Math.max(...data.rain);
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, fontVariantNumeric: "tabular-nums" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "3px 4px", color: "#8A7A60", fontWeight: 500 }}></th>
            {MONTHS_SHORT.map((m) => (
              <th key={m} style={{ padding: "3px 2px", color: "#8A7A60", fontWeight: 500, textAlign: "center" }}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { label: L.tempHigh, vals: data.high, color: "#9B6E47" },
            { label: L.tempLow, vals: data.low, color: "#6B8A5E" },
          ].map((row) => (
            <tr key={row.label} style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "3px 4px", color: row.color, whiteSpace: "nowrap" }}>{row.label}</td>
              {row.vals.map((v, i) => (
                <td key={i} style={{ padding: "3px 2px", textAlign: "center", color: "#4A3F32" }}>{v}°</td>
              ))}
            </tr>
          ))}
          <tr style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <td style={{ padding: "3px 4px", color: "#8A7A60", whiteSpace: "nowrap" }}>{L.tempRain}</td>
            {data.rain.map((v, i) => (
              <td key={i} style={{ padding: "3px 2px", textAlign: "center" }}>
                <div style={{ fontSize: 9, color: "#8A7A60" }}>{v}</div>
                <div style={{ height: 18, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                  <div style={{ width: 5, height: `${Math.max(2, (v / maxRain) * 18)}px`, backgroundColor: "#A8895C", opacity: 0.55, borderRadius: 1 }} />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 示例课表（来源：JTB 各国 PDF「サンプル時間割」）
function SampleTimetable({ country, lang, L }) {
  const tt = sampleTimetables[country];
  if (!tt) return null;
  const header = tt[lang === "zh" ? "headerZh" : lang === "ja" ? "headerJa" : "headerEn"];
  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              {header.map((h, i) => (
                <th key={i} style={{ padding: "4px 5px", textAlign: i === 0 ? "left" : "center", color: "#8A7A60", fontWeight: 500, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tt.rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: "4px 5px", textAlign: ci === 0 ? "left" : "center",
                    color: ci === 0 ? "#A8895C" : "#4A3F32",
                    fontWeight: ci === 0 ? 500 : 400,
                    whiteSpace: "nowrap",
                    fontVariantNumeric: "tabular-nums",
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ fontSize: 10.5, color: "#8A7A60", marginTop: 6, lineHeight: 1.6 }}>{L.timetableNote}</div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [activeTab, setActiveTab] = useState("city");
  const [filterCountry, setFilterCountry] = useState("ALL");
  const [selectedSchool, setSelectedSchool] = useState(null);

  const L = t[lang];
  const filtered = filterCountry === "ALL" ? schoolsData : schoolsData.filter((s) => s.country === filterCountry);
  const selected = schoolsData.find((s) => s.id === selectedSchool);

  const serifFont = lang === "ja" ? '"Noto Serif JP", serif' : lang === "zh" ? '"Noto Serif SC", serif' : '"IBM Plex Serif", serif';
  const sansFont = lang === "ja" ? '"Noto Sans JP", "IBM Plex Sans", sans-serif' : lang === "zh" ? '"Noto Sans SC", "IBM Plex Sans", sans-serif' : '"IBM Plex Sans", sans-serif';

  const labelStyle = { fontSize: 11, letterSpacing: "0.05em", color: "#A8895C", marginBottom: 6, fontWeight: 500 };

  return (
    <div style={{ fontFamily: sansFont, backgroundColor: "#FAF8F3", color: "#2C2418", minHeight: "100vh", fontSize: 14, lineHeight: 1.75 }}>
      {/* Header */}
      <div style={{ padding: "28px 24px 18px", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0, lineHeight: 1.4, fontFamily: serifFont, color: "#1F1A14" }}>{L.title}</h1>
          <p style={{ fontSize: 13, color: "#8A7A60", margin: "6px 0 0", lineHeight: 1.6 }}>{L.subtitle}</p>
        </div>
        <div style={{ display: "flex", gap: 0, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 2, overflow: "hidden", flexShrink: 0, marginTop: 4 }}>
          {[["zh","中文"],["ja","日本語"],["en","EN"]].map(([l, label]) => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "5px 12px", fontSize: 12, fontFamily: "inherit", border: "none", cursor: "pointer",
              backgroundColor: lang === l ? "#E8E0D0" : "transparent", color: lang === l ? "#1F1A14" : "#8A7A60",
              fontWeight: lang === l ? 600 : 400, transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, padding: "0 24px", borderBottom: "1px solid rgba(0,0,0,0.06)", backgroundColor: "#F5F1E8" }}>
        {[{ key: "city", label: L.tabCity }, { key: "school", label: L.tabSchool }, { key: "compare", label: L.tabCompare }].map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
            padding: "12px 18px", fontSize: 13, fontFamily: "inherit",
            fontWeight: activeTab === tab.key ? 600 : 400, color: activeTab === tab.key ? "#1F1A14" : "#8A7A60",
            backgroundColor: "transparent", border: "none",
            borderBottom: activeTab === tab.key ? "2px solid #A8895C" : "2px solid transparent",
            cursor: "pointer", transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ padding: "20px 24px 40px" }}>

        {/* CITY TAB */}
        {activeTab === "city" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {citiesData.map((city) => (
              <div key={city.name} style={{ backgroundColor: "#FAF8F3", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <span style={{ fontSize: 18, fontWeight: 600, fontFamily: serifFont }}>{city.flag} {getLocal(city, lang, "name")}</span>
                    {lang !== "en" && <span style={{ fontSize: 12, color: "#8A7A60", marginLeft: 10 }}>{city.name}</span>}
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: 10.5, fontWeight: 500, padding: "2px 8px", borderRadius: 2,
                      color: city.directFlightStatus === "yes" ? "#6B8A5E" : "#9B6E47",
                      backgroundColor: city.directFlightStatus === "yes" ? "rgba(107,138,94,0.1)" : "rgba(155,110,71,0.1)",
                    }}>
                      ✈ {city.directFlightStatus === "yes" ? L.flightYes : L.flightNo}
                    </span>
                    {city.livability && <span style={{ fontSize: 11, color: "#A8895C", fontWeight: 500 }}>{L.livabilityScore} {city.livability}/100</span>}
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={labelStyle}>{L.climateLabel}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{getLocal(city, lang, "climate")}</p>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={labelStyle}>{L.monthlyTemp}</div>
                  <MonthlyTempTable data={city.monthlyTemp} L={L} />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={labelStyle}>{L.cultureLabel}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{getLocal(city, lang, "culture")}</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 16 }}>
                  {[
                    { label: L.exchangeRate, value: getLocal(city, lang, "exchangeRate") },
                    { label: L.timeDiff, value: getLocal(city, lang, "timeDiff") },
                    { label: L.directFlight, value: getLocal(city, lang, "directFlight") },
                    { label: L.busHours, value: getLocal(city, lang, "busHours") },
                    { label: L.safety, value: getLocal(city, lang, "safety") },
                  ].map((item) => (
                    <div key={item.label} style={{ padding: "10px 12px", backgroundColor: "#F5F1E8", borderRadius: 2 }}>
                      <div style={{ fontSize: 10.5, color: "#A8895C", fontWeight: 500, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.65 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 200px" }}>
                    <div style={{ fontSize: 11, color: "#6B8A5E", marginBottom: 4, fontWeight: 500 }}>{L.pros}</div>
                    {getLocal(city, lang, "pros").map((p, i) => <div key={i} style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>{p}</div>)}
                  </div>
                  <div style={{ flex: "1 1 200px" }}>
                    <div style={{ fontSize: 11, color: "#9B6E47", marginBottom: 4, fontWeight: 500 }}>{L.cons}</div>
                    {getLocal(city, lang, "cons").map((c, i) => <div key={i} style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>{c}</div>)}
                  </div>
                </div>
                <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.04)", fontSize: 11, color: "#8A7A60" }}>
                  {L.candidateSchools}：{schoolsData.filter((s) => s.city === city.name).map((s) => s.name).join("、")}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SCHOOL TAB */}
        {activeTab === "school" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {[
                { key: "ALL", label: `${L.all} (10)` },
                { key: "AU", label: `🇦🇺 ${L.australia} (4)` },
                { key: "NZ", label: `🇳🇿 ${L.newZealand} (3)` },
                { key: "CA", label: `🇨🇦 ${L.canada} (2)` },
                { key: "US", label: `🇺🇸 ${L.usa} (1)` },
              ].map((f) => (
                <button key={f.key} onClick={() => { setFilterCountry(f.key); setSelectedSchool(null); }} style={{
                  padding: "6px 12px", fontSize: 12, fontFamily: "inherit",
                  backgroundColor: filterCountry === f.key ? "#E8E0D0" : "transparent",
                  border: `1px solid ${filterCountry === f.key ? "#A8895C" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: 2, cursor: "pointer", color: filterCountry === f.key ? "#1F1A14" : "#8A7A60",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}>{f.label}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1.2fr" : "1fr 1fr", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {filtered.map((s) => (
                  <div key={s.id} onClick={() => setSelectedSchool(selectedSchool === s.id ? null : s.id)} style={{
                    padding: "16px 18px", backgroundColor: selectedSchool === s.id ? "#F0EBE0" : "#FAF8F3",
                    border: selectedSchool === s.id ? "1.5px solid #A8895C" : "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 4, cursor: "pointer", transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                      <span style={{ fontSize: 11, letterSpacing: "0.05em", color: "#8A7A60" }}>
                        {countryFlag[s.country]} {getLocal(s, lang, "city")}
                        <span style={{ marginLeft: 6, color: "#A8895C" }}>· {L[s.locTypeKey]}</span>
                        {s.isPrivate && <span style={{ marginLeft: 6, color: "#A8895C", fontWeight: 500 }}>★ {L.privateSchool}</span>}
                      </span>
                      <span style={{ fontSize: 11, color: "#8A7A60" }}>{s.type === "girls" ? L.girls : L.coed}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#2C2418", lineHeight: 1.4, marginBottom: 4 }}>
                      {s.name}
                      {s.isSisterSchool && <span style={{ marginLeft: 6, fontSize: 10, color: "#9B6E47", fontWeight: 500 }}>◇ {L.sisterSchool}</span>}
                    </div>
                    {lang !== "en" && <div style={{ fontSize: 12, color: "#6B5D4D" }}>{getLocal(s, lang, "name")}</div>}
                    <div style={{ marginTop: 10, display: "flex", gap: 16, fontSize: 11, color: "#8A7A60", flexWrap: "wrap" }}>
                      <span>{L.students} {s.students}</span>
                      <span>{L.intl} {s.intlStudents}</span>
                      {s.founded && <span>{L.founded} {s.founded}{L.year}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {selected && (
                <div style={{ backgroundColor: "#F5F1E8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "20px", position: "sticky", top: 12, alignSelf: "start" }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#A8895C", letterSpacing: "0.05em" }}>
                      {countryFlag[selected.country]} {getLocal(selected, lang, "city")} · {L[selected.locTypeKey]} · {selected.type === "girls" ? L.girls : L.coed} · {selected.grades}{L.gradeLabel}
                      {selected.isPrivate && <span style={{ marginLeft: 6 }}>· ★ {L.privateSchool}</span>}
                    </div>
                    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "6px 0 2px", fontFamily: serifFont }}>{selected.name}</h2>
                    {lang !== "en" && <div style={{ fontSize: 13, color: "#6B5D4D" }}>{getLocal(selected, lang, "name")}</div>}
                    {selected.isSisterSchool && (
                      <div style={{ display: "inline-block", marginTop: 8, padding: "3px 10px", fontSize: 11, color: "#9B6E47", backgroundColor: "rgba(155,110,71,0.1)", borderRadius: 2, fontWeight: 500 }}>
                        ◇ {L.sisterSchool}
                      </div>
                    )}
                    {selected.website && (
                      <div>
                        <a
                          href={selected.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={L.websiteHint}
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            marginTop: 10, padding: "5px 10px",
                            fontSize: 11, letterSpacing: "0.05em",
                            color: "#A8895C", textDecoration: "none",
                            backgroundColor: "#FAF8F3",
                            border: "1px solid rgba(168, 137, 92, 0.3)",
                            borderRadius: 2,
                            transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F0EBE0"; e.currentTarget.style.borderColor = "#A8895C"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FAF8F3"; e.currentTarget.style.borderColor = "rgba(168, 137, 92, 0.3)"; }}
                        >
                          <span>{L.website}</span>
                          <span aria-hidden="true" style={{ fontSize: 10 }}>↗</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
                    {[{ val: selected.students, label: L.students }, { val: selected.intlStudents, label: L.intl }, { val: selected.founded || "—", label: L.founded }].map((d, i) => (
                      <div key={i} style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#FAF8F3", borderRadius: 2 }}>
                        <div style={{ fontSize: 20, fontWeight: 600, fontFamily: '"IBM Plex Sans", sans-serif', fontVariantNumeric: "tabular-nums" }}>{d.val}</div>
                        <div style={{ fontSize: 11, color: "#8A7A60" }}>{d.label}</div>
                      </div>
                    ))}
                  </div>

                  {[
                    { label: L.schoolFeatures, content: getLocal(selected, lang, "highlights").map((h, i) => (
                      <div key={i} style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.8, paddingLeft: 12, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#A8895C" }}>·</span>{h}
                      </div>
                    )) },
                    { label: L.location, content: (
                      <div style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.75 }}>
                        <span style={{ display: "inline-block", marginRight: 6, padding: "1px 7px", fontSize: 10.5, color: "#A8895C", backgroundColor: "rgba(168,137,92,0.1)", borderRadius: 2 }}>{L[selected.locTypeKey]}</span>
                        {getLocal(selected, lang, "location")}
                      </div>
                    ) },
                    { label: L.reviews, content: (
                      <div style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.75 }}>
                        <div style={{ fontWeight: 500, color: "#2C2418", marginBottom: 2 }}>{getLocal(selected, lang, "reviewScore")}</div>
                        <div>{getLocal(selected, lang, "reviewSummary")}</div>
                        <div style={{ fontSize: 10.5, color: "#8A7A60", marginTop: 4 }}>{selected.reviewSource}</div>
                        <div style={{ fontSize: 10.5, color: "#8A7A60", marginTop: 4, lineHeight: 1.6 }}>{L.reviewNote}</div>
                      </div>
                    ) },
                    { label: L.climate, content: (
                      <div style={{ fontSize: 12, color: "#4A3F32", lineHeight: 1.8 }}>
                        {L.climateType}：{getLocal(selected.climate, lang, "type")}{"　"}
                        {L.summer} {selected.climate.summer}　{L.winter} {selected.climate.winter}<br />
                        {L.rain}：{getLocal(selected.climate, lang, "rain")}{"　"}
                        {L.humidity}：{getLocal(selected.climate, lang, "humidity")}
                      </div>
                    ) },
                    { label: L.activities, content: <div style={{ fontSize: 13, color: "#4A3F32", lineHeight: 1.7 }}>{getLocal(selected, lang, "activities")}</div> },
                    { label: L.accommodation, content: <div style={{ fontSize: 13, color: "#4A3F32" }}>{getLocal(selected, lang, "accommodation")}</div> },
                    selected.englishReq && {
                      label: L.englishReq,
                      content: (
                        <div style={{ fontSize: 12.5, color: "#4A3F32", lineHeight: 1.75 }}>
                          {selected.englishReq[lang]}
                          <div style={{ fontSize: 10.5, color: "#8A7A60", marginTop: 6, lineHeight: 1.6 }}>{L.englishNote}</div>
                        </div>
                      ),
                    },
                    selected.jtbPrograms && {
                      label: `${L.jtbTitle} · ${L.jtbDeparture}`,
                      content: (
                        <div>
                          {getLocal(selected, lang, "jtbRegional") && (
                            <div style={{ fontSize: 11, color: "#A8895C", marginBottom: 6, fontStyle: "italic" }}>
                              · {getLocal(selected, lang, "jtbRegional")}
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {selected.jtbPrograms.map((p, i) => (
                              <div key={i} style={{
                                display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12,
                                alignItems: "center", padding: "8px 12px",
                                backgroundColor: "#FAF8F3", borderRadius: 2,
                                border: "1px solid rgba(168, 137, 92, 0.12)",
                              }}>
                                <span style={{ fontSize: 12, fontWeight: 600, color: "#A8895C", minWidth: 48 }}>{formatMonths(p.months, lang)}</span>
                                <span style={{ fontSize: 12, color: "#6B5D4D", fontVariantNumeric: "tabular-nums" }}>
                                  {getLocal(p, lang, "schedule")}
                                  <span style={{ marginLeft: 8, fontSize: 10.5, color: "#9B6E47", backgroundColor: "rgba(155,110,71,0.1)", padding: "1px 6px", borderRadius: 2 }}>
                                    {L.visa}: {getLocal(p, lang, "visa")}
                                  </span>
                                </span>
                                <span style={{ fontSize: 13, fontWeight: 600, color: "#2C2418", fontFamily: '"IBM Plex Sans", sans-serif', fontVariantNumeric: "tabular-nums" }}>{formatFee(p.feeManYen, lang)}</span>
                              </div>
                            ))}
                          </div>
                          <div style={{ fontSize: 10.5, color: "#8A7A60", marginTop: 8, lineHeight: 1.6 }}>{L.jtbDisclaimer}</div>
                        </div>
                      ),
                    },
                    { label: `${L.sampleTimetable}`, content: <SampleTimetable country={selected.country} lang={lang} L={L} /> },
                  ].filter(Boolean).map((section, i) => (
                    <div key={i} style={{ marginBottom: 16 }}>
                      <div style={labelStyle}>{section.label}</div>
                      {section.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* COMPARE TAB */}
        {activeTab === "compare" && (
          <div>
            <h3 style={{ fontSize: 16, fontFamily: serifFont, fontWeight: 600, margin: "0 0 14px" }}>{L.fourDimensions}</h3>
            <div style={{ overflowX: "auto", marginBottom: 28 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, lineHeight: 1.6 }}>
                <thead>
                  <tr style={{ borderBottom: "1.5px solid rgba(0,0,0,0.12)" }}>
                    {[L.school, L.climateComfort, L.cultureEnv, L.schoolHistory, L.academicQuality].map((h, i) => (
                      <th key={i} style={{ textAlign: i === 0 ? "left" : "center", padding: "8px 10px", fontWeight: 500, color: "#8A7A60", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ratings.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 10px" }}>
                        <div style={{ fontWeight: 500, color: "#2C2418" }}>{row.name}</div>
                        <div style={{ fontSize: 11, color: "#8A7A60" }}>{row.city}</div>
                      </td>
                      {[row.climate, row.culture, row.history, row.academic].map((v, j) => (
                        <td key={j} style={{ textAlign: "center", padding: "8px 6px" }}><RatingDots value={v} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 16, fontFamily: serifFont, fontWeight: 600, margin: "0 0 14px" }}>{L.analysisTitle}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} style={{ backgroundColor: "#F5F1E8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 4, padding: "16px 18px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#A8895C", marginBottom: 8 }}>{L[`rec${n}Title`]}</div>
                  <p style={{ fontSize: 13, color: "#4A3F32", margin: 0, lineHeight: 1.7 }}>{L[`rec${n}Body`]}</p>
                </div>
              ))}
            </div>
            <div style={{ padding: "14px 16px", backgroundColor: "#F0EBE0", borderRadius: 4, fontSize: 12, color: "#6B5D4D", lineHeight: 1.7 }}>{L.disclaimer}</div>
          </div>
        )}
      </div>
    </div>
  );
}
