import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-y-10 pt-6">
      <div>
        <h2 className="text-[10vw] md:text-[8vw] lg:text-[6vw] text-center font-semibold mb-3 font-tektur px-4">
          Medical System Disease Prediction
        </h2>
        <div className="flex justify-center">
          <Image
            src="/assets/lab.jpg"
            alt="Lab image"
            width={4000}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto py-10">
          <div className="lg:col-span-2">
            <h3 className="text-[10vw] lg:text-[3vw] font-tektur">
              Welcome to
              <br />
              <span className="font-semibold">MedPest</span>
            </h3>
          </div>
          <div className="lg:col-span-3 text-xl text-gray-700 lg:text-2xl">
            <p className="leading-loose">
              At MedPredict, we combine cutting-edge technology with medical
              expertise to provide you with accurate and reliable disease
              prediction. Our platform is designed to empower individuals to
              take control of their health and make informed decisions. Whether
              you&quot;re a healthcare professional or an individual seeking
              insights into your health, MedPredict is here to assist you.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black px-6 py-20 md:py-24 lg:py-32 grid gap-y-8 text-gray-200">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-semibold mb-10 font-tektur text-5xl md:text-6xl text-white">
              Discover the Future of Healthcare: Disease Prediction
            </h2>
            <Link
              href="/predict"
              className="bg-transparent border-2 border-white px-12 py-3 text-white hover:bg-white hover:text-black hover:border-black duration-500 text-3xl"
            >
              Let&apos;s go
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 container mx-auto">
          <div className="lg:col-start-3 lg:col-span-3">
            <p className="mt-20 text-xl leading-relaxed">
              In a world flooded with information, extracting key insights from
              lengthy texts can be a time-consuming and challenging task. Our
              project addresses this issue by offering an advanced automated
              text summarization tool. Using state-of-the-art Natural Language
              Processing techniques and Artificial Intelligence algorithms, our
              solution condenses extensive text documents into concise
              summaries, preserving the core message while discarding redundant
              details.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-16 2xl:py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-[10vw] lg:text-[3vw] font-tektur text-center font-semibold">
              How It Works
            </h3>
            <ol className="mt-6 list-decimal ml-4 text-lg lg:text-xl grid gap-y-4 text-gray-600">
              <li>
                <span className="font-semibold">Input Your Information: </span>
                Create an account and provide essential health information,
                including medical history, lifestyle, and genetic factors.
              </li>
              <li>
                <span className="font-semibold">Data Analysis:: </span>
                Our advanced algorithm analyzes your data, considering various
                factors that contribute to disease development.
              </li>
              <li>
                <span className="font-semibold">Predictive Insights: </span>
                Receive detailed predictions about potential health risks,
                including a range of diseases and conditions.
              </li>
              <li>
                <span className="font-semibold">
                  Preventive Recommendations:{" "}
                </span>
                Access personalized recommendations for lifestyle changes,
                screenings, and interventions to reduce your risk factors.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="border-t py-10 lg:py-16 2xl:py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 py-10">
            <div className="lg:col-span-2">
              <h3 className="text-[10vw] lg:text-[3vw] font-tektur">
                Check it out now
              </h3>
            </div>
            <div className="lg:col-span-3 text-xl text-gray-700 lg:text-2xl">
              <p className="mb-8 text-gray-600 leading-relaxed">
                Experience the future of healthcare with MedPredict. Our mission
                is to empower you with knowledge and insights that can lead to
                healthier lives. Register today and unlock a new era of disease
                prediction and prevention. Remember, your health matters, and so
                does early detection. Discover the power of predictive
                healthcare with MedPredict.
              </p>
              <Link
                href="/predict"
                className="bg-transparent border-2 border-black px-12 py-3 text-black hover:bg-black hover:text-white hover:border-white duration-500 text-3xl"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
