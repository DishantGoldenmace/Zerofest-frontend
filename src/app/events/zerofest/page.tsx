"use client";

import { useEffect, useState, useCallback } from "react";
import { ZeroFestApiResponse } from "@/types/detection";
import { fetchZeroFestData } from "@/lib/api";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import EventProgress from "@/components/EventProgress/EventProgress";
import WasteDistribution from "@/components/WasteDistribution/WasteDistribution";
import LiveFeed from "@/components/LiveFeed/LiveFeed";
import ImpactStats from "@/components/ImpactStats/ImpactStats";
import MomentsGallery from "@/components/MomentsGallery/MomentsGallery";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import styles from "./zerofest.module.css";

const POLL_INTERVAL = 5000;

export default function ZeroFestPage() {
  const [data, setData] = useState<ZeroFestApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const result = await fetchZeroFestData();
      setData(result);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load detections"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [loadData]);

  if (loading && !data) {
    return (
      <>
        <Header />
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span className={styles.loadingText}>Loading ZeroFest…</span>
        </div>
      </>
    );
  }

  if (error && !data) {
    return (
      <>
        <Header />
        <div className={styles.error}>
          <div className={styles.errorIcon}>!</div>
          <h2 className={styles.errorTitle}>Connection Error</h2>
          <p className={styles.errorMessage}>{error}</p>
          <button className={styles.retryButton} onClick={loadData}>
            Retry
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <HeroSection
        latestDetection={data?.latestDetection ?? null}
        detections={data?.detections ?? []}
        totalCount={data?.totalCount ?? 0}
        totalWeight={data?.totalWeight ?? 0}
      />

      {/* Dashboard Grid */}
      <div className={styles.dashboard}>
        <div className={styles.topRow}>
          <EventProgress />
          <WasteDistribution
            distribution={data?.distribution ?? []}
            totalCount={data?.totalCount ?? 0}
          />
        </div>

        <div className={styles.bottomRow}>
          <LiveFeed detections={data?.detections ?? []} />
          <ImpactStats />
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.galleryWrap}>
        <MomentsGallery />
      </div>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
