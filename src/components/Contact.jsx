const Contact = () => {
  return (
    <div className="font-sans bg-[#f5f5f5] text-[#333] align-middle w-full md:max-w-[400px] p-5 rounded-[10px] m-3 shadow shadow-slate-500">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Contact Information
      </h2>
      <div className="space-y-8">
        <p className="text-lg font-medium">
          <span className="font-semibold">Email:</span> contact@example.com
        </p>
        <p className="text-lg font-medium">
          <span className="font-semibold">Phone:</span> (123) 456-7890
        </p>
        <p className="text-lg font-medium">
          <span className="font-semibold">Address:</span> 123 Main St, City,
          State, 12345
        </p>
      </div>
    </div>
  );
};

export default Contact;
