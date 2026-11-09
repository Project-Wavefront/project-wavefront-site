"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

interface Milestone {
  date: string; // Format: "YYYY-MM-DD"
  title: string;
  description: string;
  completed: boolean;
}

interface TimelineProps {
  milestones: Milestone[];
  startDate: string; // Format: "YYYY-MM"
  endDate: string; // Format: "YYYY-MM" or "YYYY-MM-DD"
}

export default function Timeline({
  milestones,
  startDate,
  endDate,
}: TimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Parse dates
  const parseDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const start = parseDate(`${startDate}-01`);
  const end = /^\d{4}-\d{2}-\d{2}$/.test(endDate)
    ? parseDate(endDate)
    : parseDate(`${endDate}-28`);

  // Calculate total days for more precise positioning
  const totalDays = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Calculate position for each milestone based on exact date (0-100%)
  const getMilestonePosition = (date: string) => {
    const milestoneDate = parseDate(date);
    const daysFromStart = Math.floor(
      (milestoneDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    return (daysFromStart / totalDays) * 100;
  };

  // Generate month labels (fewer labels for better spacing)
  const getMonthLabels = () => {
    const labels = [];
    const monthDiff =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    // Show label every 2-3 months for better readability
    const step = monthDiff > 18 ? 3 : monthDiff > 12 ? 2 : 1;

    for (let i = 0; i <= monthDiff; i += step) {
      const labelDate = new Date(start);
      labelDate.setMonth(start.getMonth() + i);

      const position =
        ((labelDate.getTime() - start.getTime()) /
          (end.getTime() - start.getTime())) *
        100;

      labels.push({
        month: labelDate.toLocaleString("default", { month: "short" }),
        year: labelDate.getFullYear(),
        position: Math.min(Math.max(position, 0), 100),
      });
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
      return [
        ...labels.filter((label) => label.position < 93),
        {
          month: `${end.toLocaleString("en-US", { month: "short" })} ${end.getDate()}`,
          year: end.getFullYear(),
          position: 100,
        },
      ];
    }

    return labels;
  };

  const monthLabels = getMonthLabels();
  const summerBreakStart = milestones.find(
    (milestone) => milestone.title === "Summer Break Begins",
  );
  const summerBreakEnd = milestones.find(
    (milestone) => milestone.title === "Summer Break Ends",
  );

  const summerBreakRange =
    summerBreakStart && summerBreakEnd
      ? {
          left: getMilestonePosition(summerBreakStart.date),
          right: getMilestonePosition(summerBreakEnd.date),
        }
      : null;

  return (
    <div className="w-full px-36 py-8">
      {/* Timeline Container */}
      <div className="relative w-full" style={{ minHeight: "320px" }}>
        {/* Month Labels */}
        <div className="absolute top-0 w-full h-8">
          {monthLabels.map((label, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{
                left: `${label.position}%`,
                transform: "translateX(-50%)",
              }}
            >
              <span className="font-semibold text-xs text-slate-400">
                {label.month}
              </span>
              {(idx === 0 ||
                label.month === "Jan" ||
                idx === monthLabels.length - 1) && (
                <span className="text-[10px] text-slate-500">{label.year}</span>
              )}
            </div>
          ))}
        </div>

        {/* Summer break interval */}
        {summerBreakRange && (
          <div
            aria-label="Summer break from May 10 through August 23, 2026"
            className="pointer-events-none absolute top-12 h-10 border-y border-red-400/25 bg-red-500/15"
            style={{
              left: `${summerBreakRange.left}%`,
              width: `${summerBreakRange.right - summerBreakRange.left}%`,
            }}
          >
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-red-300/80">
              Summer break
            </span>
          </div>
        )}

        {/* Timeline Line */}
        <div
          className={`absolute top-16 left-0 right-0 h-1 rounded-full ${milestones.every((milestone) => milestone.completed) ? "bg-emerald-600" : "bg-gradient-to-r from-emerald-600 via-slate-600 to-slate-700"}`}
        />

        {/* Milestones */}
        {milestones.map((milestone, index) => {
          const position = getMilestonePosition(milestone.date);
          const isActive = hoveredIndex === index || selectedIndex === index;
          const matchingDates = milestones.filter(
            (item) => item.date === milestone.date,
          );
          const duplicateIndex = milestones
            .slice(0, index)
            .filter((item) => item.date === milestone.date).length;
          const duplicateOffset =
            (duplicateIndex - (matchingDates.length - 1) / 2) * 32;

          // Alternate tooltip positions to avoid overlap
          const tooltipOffset = index % 2 === 0 ? "top-16" : "top-20";

          return (
            <div
              key={index}
              className="absolute top-12"
              style={{
                left: `${position}%`,
                transform: `translateX(calc(-50% + ${duplicateOffset}px))`,
                zIndex: isActive ? 100 : 10,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Milestone Dot */}
              <div className="relative flex flex-col items-center cursor-pointer group">
                {/* Vertical Line to Dot */}
                <div
                  className={`
                    w-0.5 transition-all duration-300
                    ${milestone.completed ? "bg-emerald-400 h-4" : "bg-slate-600 h-4"}
                  `}
                />

                <button
                  type="button"
                  aria-label={`${milestone.title}, ${parseDate(milestone.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
                  aria-expanded={isActive}
                  onFocus={(event) => {
                    setHoveredIndex(index);
                    event.currentTarget.scrollIntoView({
                      block: "nearest",
                      inline: "center",
                    });
                  }}
                  onBlur={() => setHoveredIndex(null)}
                  onClick={(event) => {
                    event.currentTarget.scrollIntoView({
                      block: "nearest",
                      inline: "center",
                    });
                    setHoveredIndex(null);
                    setSelectedIndex((current) =>
                      current === index ? null : index,
                    );
                  }}
                  className={`
                    rounded-full border-4 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
                    ${
                      milestone.completed
                        ? "bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/50"
                        : "bg-slate-700 border-slate-600"
                    }
                    ${isActive ? "w-6 h-6 scale-125" : "w-5 h-5"}
                  `}
                >
                  {milestone.completed && isActive && (
                    <CheckCircle2 className="absolute inset-0 w-full h-full text-white" />
                  )}
                </button>

                {/* Tooltip Card */}
                <div
                  className={`
                    absolute ${tooltipOffset} w-72 max-w-[calc(100vw-4rem)] bg-slate-900 border rounded-lg p-4 shadow-2xl
                    transition-all duration-300
                    ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}
                    ${milestone.completed ? "border-emerald-500/50" : "border-slate-700"}
                  `}
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {milestone.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h4
                        className={`font-bold text-sm mb-1 ${milestone.completed ? "text-emerald-400" : "text-slate-300"}`}
                      >
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-2">
                        {parseDate(milestone.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {milestone.description}
                  </p>
                  {milestone.completed && (
                    <div className="mt-2 text-[10px] text-emerald-500 font-semibold uppercase tracking-wide">
                      ✓ Completed
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
