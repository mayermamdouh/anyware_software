import { UserAvatar } from "./UserAvatar";
import type { Announcement } from "@/services/announcement";

type Props = {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
};

export default function Announcements({
  announcements,
  loading,
  error,
}: Props) {
  console.log("announcements: ", announcements);

  return (
    <section className="w-full bg-white flex flex-col py-3 px-4 sm:px-6 rounded-sm">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg sm:text-xl font-bold">Announcements</h4>
        <span className="text-primary font-bold cursor-pointer text-sm sm:text-base">
          All
        </span>
      </div>

      {loading && <p className="text-gray-500 text-sm">Loading...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {!loading && !error && announcements.length === 0 && (
        <p className="text-gray-500 text-sm">No announcements found.</p>
      )}

      <div className="flex flex-col gap-4 sm:gap-5">
        {announcements.map((item) => (
          <NoteComponent key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}

const NoteComponent = ({ item }: { item: Announcement }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-stretch">
      <div className="flex items-center gap-2 shrink-0 relative">
        <UserAvatar
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="User"
        />

        <div className="flex flex-col items-start justify-center">
          <h4 className="text-sm sm:text-md font-bold">{item.createdBy}</h4>
          <span className="text-muted text-xs lg:text-sm">
            {new Date(item.publishedAt).toLocaleString()}
          </span>
        </div>

        <div className="hidden lg:block bg-gray-200 w-0.5 self-stretch mx-4"></div>
      </div>

      <p className="text-sm lg:text-ms wrap-break-word">{item.content}</p>
      <div className="block lg:hidden bg-gray-200 h-0.5 w-full my-2"></div>
    </div>
  );
};
