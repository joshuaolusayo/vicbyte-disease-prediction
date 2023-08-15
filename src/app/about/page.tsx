export default function About() {
  return (
    <main className="h-full flex flex-col justify-between container mx-auto pt-16 px-6">
      <div className="grid gap-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
            About this project
          </h2>
          <p>
            This is a final year project{" "}
            <span className="font-semibold">
              A predictive model for selected disease using neural network
              approach
            </span>{" "}
            carried out by{" "}
            <span className="font-semibold">OLUFEMI, Victor Ayodeji</span> as
            partial fulfillment for the award of Bachelor of Science in Computer
            Science, University of Ilorin, Nigeria.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
            Terms of Use:
          </h2>
          <p>
            This is an open source project. Feel free to use it in anyway you
            like. However, I would appreciate if you let me know so as to see
            the awesome stuffs you&quot;re doing with it.
          </p>
        </div>
      </div>
      <div className="text-center mb-16">
        <a
          href="https://github.com/joshuaolusayo"
          target="_blank"
          className="font-tektur text-[8vw] md:text-[6vw]"
        >
          Stay in touch
        </a>
      </div>
    </main>
  );
}
