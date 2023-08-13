export default function About() {
  return (
    <main className="h-full flex flex-col justify-between">
      <div className="grid gap-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3 font-tilt-prism">
            About this project
          </h2>
          <p>
            This is a final year project carried out by{" "}
            <span className="font-semibold">JAMIU, Ismail Ayodeji</span> as
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
      <div className="bg-black text-white py-10 text-center -m-6">
        <a
          href="https://github.com/joshuaolusayo"
          target="_blank"
          className="font-tilt-prism text-[5vw]"
        >
          Stay in touch
        </a>
      </div>
    </main>
  );
}
