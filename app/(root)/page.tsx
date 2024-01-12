import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="wrapper grid grid-col-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 py-10 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
        <section
          id="events"
          className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        >
          <h2 className="h2-bold">
            Trust by <br /> Thousands of Events
          </h2>
          <div className="flex flex-col w-full gap-5 md:flex-row">
            Search Category Filter
          </div>
          <Collection
            data={[]}
            emptyTitle="No Events found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={1}
            totalPages={2}
          />
        </section>
      </section>
    </>
  );
}
