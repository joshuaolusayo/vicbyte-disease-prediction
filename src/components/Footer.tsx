const Footer = () => {
  return (
    <div className="bg-black px-6 py-20 md:py-24 lg:py-32 grid gap-y-8 text-gray-200">
      <div className="container mx-auto">
        <p className="text-2xl text-center mb-0">
          &copy; MedPest {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
