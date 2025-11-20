import { Button } from "./ui/button";

export default function HereSection() {
  return (
    <section className="w-full bg-white rounded-sm">
      <div className="flex flex-col gap-4 px-4 sm:px-10 py-5 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl bg-linear-to-r from-secondary via-primary to-primary bg-clip-text text-transparent font-bold">
          EXAMS TIME
        </h1>

        <p className="text-gray-700 text-sm sm:text-base">
          Here we are, Are you ready to fight? Don't worry, we prepared some
          tips <br className="sm:hidden" /> to be ready for your exams
        </p>

        <p className="text-primary text-sm sm:text-base">
          "Nothing happens until something". Alet Eisten
        </p>

        <Button className="w-full sm:w-44 self-start">View exams tips</Button>
      </div>
    </section>
  );
}
