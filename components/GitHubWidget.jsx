"use client";
import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";

const USER = "ruzzhdontmiss";

// Silk-blue themed contribution levels — matches site palette
const LEVEL_COLORS = [
  "rgba(61,111,180,0.07)",  // 0 — empty
  "rgba(61,111,180,0.22)",  // 1 — light
  "rgba(61,111,180,0.48)",  // 2 — medium
  "rgba(45,74,115,0.72)",   // 3 — strong
  "rgba(29,58,95,0.92)",    // 4 — full
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function GitHubWidget() {
  const [weeks, setWeeks] = useState(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data.contributions)) { setError(true); return; }
        const days = data.contributions;
        setTotal(days.reduce((s, d) => s + d.count, 0));
        const ws = [];
        for (let i = 0; i < days.length; i += 7) ws.push(days.slice(i, i + 7));
        setWeeks(ws);
      })
      .catch(() => setError(true));
  }, []);

  // Build month labels: one label per month-start, positioned by week index
  // Each column = 12px cell + 3px gap = 15px
  const COL_W = 15;
  const monthLabels = [];
  if (weeks) {
    let lastMonth = null;
    weeks.forEach((week, wi) => {
      if (!week[0]?.date) return;
      const m = new Date(week[0].date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ wi, label: MONTHS[m] });
        lastMonth = m;
      }
    });
  }

  const totalWidth = weeks ? weeks.length * COL_W - 3 : 0;

  return (
    <section id="github" className="github-section">
      <div className="section-inner">
        <SectionHead
          title="GitHub"
          desc={total ? `${total.toLocaleString()} contributions in the last year.` : "Contribution activity."}
        />

        {!error && !weeks && (
          <p className="gh-loading">Loading contributions…</p>
        )}
        {error && (
          <p className="gh-loading" style={{ opacity: 0.5 }}>
            Could not load contribution data.
          </p>
        )}

        {weeks && (
          <div className="gh-cal-wrap">
            {/* Month labels — absolutely positioned so they sit exactly above their column */}
            <div style={{ position: "relative", height: "18px", width: totalWidth, marginBottom: "4px" }}>
              {monthLabels.map(({ wi, label }) => (
                <span
                  key={label + wi}
                  style={{
                    position: "absolute",
                    left: wi * COL_W,
                    top: 0,
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    color: "var(--ink-soft)",
                    opacity: 0.65,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Day grid */}
            <div className="gh-cal-grid">
              {weeks.map((week, wi) => (
                <div key={wi} className="gh-cal-week">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className="gh-cal-cell"
                      title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                      style={{ background: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0] }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="gh-see-all">
          <a href={`https://github.com/${USER}?tab=repositories`} target="_blank" rel="noreferrer">
            [ View repos ]
          </a>
        </div>
      </div>
    </section>
  );
}
