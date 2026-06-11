import { Detection } from "@/types/detection";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  latestDetection: Detection | null;
  detections: Detection[];
  totalCount: number;
  totalWeight: number;
}

function formatWeight(g: number): string {
  if (g >= 1000) return `${(g / 1000).toFixed(1)} kg`;
  return `${g} g`;
}

function getDateRange(detections: Detection[]): string {
  if (detections.length === 0) return "No data yet";
  const dates = detections.map((d) => new Date(d.createdAt).getTime());
  const earliest = new Date(Math.min(...dates));
  const latest = new Date(Math.max(...dates));

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  if (earliest.toDateString() === latest.toDateString()) return fmt(earliest);
  return `${fmt(earliest)} – ${fmt(latest)}`;
}

export default function HeroSection({
  latestDetection,
  detections,
  totalCount,
  totalWeight,
}: HeroSectionProps) {
  return (
    <section className={styles.hero} id="live-detection">
      <img
        src="/hero-bg.png"
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} />

      <div className={styles.content}>
        {/* Left: Event Info Card */}
        <div className={styles.infoCard}>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            LIVE
          </div>

          <h1 className={styles.eventName}>ZeroFest</h1>
          <p className={styles.tagline}>
            The future of smart waste management starts here. Join the movement
            towards a cleaner tomorrow through intelligent sorting and
            real-time tracking.
          </p>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {getDateRange(detections)}
            </span>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>
                {totalCount.toLocaleString()}
              </span>
              <span className={styles.statLabel}>Items</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>
                {formatWeight(totalWeight)}
              </span>
              <span className={styles.statLabel}>Collected</span>
            </div>
          </div>
        </div>

        {/* Right: Latest Detection Card */}
        <div className={styles.detectionCard}>
          <div className={styles.detectionHeader}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
            <span className={styles.detectionLabel}>Just Now</span>
          </div>

          {latestDetection ? (
            <>
              <h3 className={styles.detectionTitle}>
                {latestDetection.classification === "plastic"
                  ? "Plastic Bottle"
                  : latestDetection.classification === "paper"
                    ? "Paper Sheet"
                    : latestDetection.classification === "aluminum"
                      ? "Aluminum Can"
                      : latestDetection.classification === "glass"
                        ? "Glass Jar"
                        : `${latestDetection.classification} Item`}
              </h3>
              <p className={styles.detectionDetails}>
                {latestDetection.weight} g &bull; Classification:{" "}
                <span className={styles.classificationText}>
                  {latestDetection.classification}
                </span>
              </p>
              {latestDetection.decisionConfidence !== undefined && (
                <p className={styles.detectionConfidence}>
                  Confidence: {(latestDetection.decisionConfidence * 100).toFixed(0)}%
                </p>
              )}
            </>
          ) : (
            <p className={styles.detectionDetails}>Waiting for first detection…</p>
          )}

          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
          <span className={styles.progressLabel}>Scanning next item…</span>
        </div>
      </div>
    </section>
  );
}
