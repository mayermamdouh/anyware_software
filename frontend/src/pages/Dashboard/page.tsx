import Announcements from "@/components/Announcements";
import AppBar from "@/components/AppBar";
import { AppSidebar } from "@/components/AppSidebar";
import HereSection from "@/components/HereSection";
import WhatsDue from "@/components/WhatsDue";
import { getAnnouncements, type Announcement } from "@/services/announcement";
import { getQuizzes, type Quiz } from "@/services/quiz";
import { useEffect, useState } from "react";

export default function Dashboard() {
  // I wanted to use React 19's new `use()` hook to fetch data directly in components,
  // but I discovered that in TypeScript projects it doesn’t work yet because `@types/react`
  // doesn’t include type definitions for `use()`. So I’m using useEffect/useState instead.

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const [annLoading, setAnnLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);

  const [annError, setAnnError] = useState<string | null>(null);
  const [quizError, setQuizError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    setAnnLoading(true);
    setAnnError(null);
    try {
      const data = await getAnnouncements();
      setAnnouncements(data);
    } catch (err: any) {
      setAnnError(err.message);
    } finally {
      setAnnLoading(false);
    }
  };

  const fetchQuizzes = async () => {
    setQuizLoading(true);
    setQuizError(null);
    try {
      const data = await getQuizzes();
      setQuizzes(data);
    } catch (err: any) {
      setQuizError(err.message);
    } finally {
      setQuizLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    fetchQuizzes();
  }, []);

  return (
    <div className="flex w-full">
      <AppSidebar />
      <div className="flex flex-col w-full gap-5 ml-16 lg:ml-64 transition-all duration-300 ease-in-out">
        <AppBar />
        <div className="mx-5">
          <HereSection />
        </div>
        <div className="flex flex-col lg:flex-row items-stretch mx-5 gap-5 mb-5">
          <div className="lg:flex-4 w-full ">
            <Announcements
              announcements={announcements}
              loading={annLoading}
              error={annError}
            />
          </div>
          <div className="lg:flex-1 w-full">
            <WhatsDue
              quizzes={quizzes}
              loading={quizLoading}
              error={quizError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
