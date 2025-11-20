export type Announcement = {
  _id: string;
  title: string;
  content: string;
  publishedAt: string;
  createdBy?: string;
  attachments?: string[];
  isUrgent?: boolean;
  courseId?: string;
};

export async function getAnnouncements(): Promise<Announcement[]> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/announcement`);
  if (!res.ok) throw new Error("Failed to fetch announcements");

  const json = await res.json();
  return json?.data?.announcements || [];
}
