const ContactCard = ({ name, role, email, phone, avatar }) => {
  return (
    <div className="font-sans text-[#333] align-middle md:max-w-lg p-5 shadow shadow-slate-500 rounded-[10px] m-3 mb-6 sm:mb-3 grow bg-orange-50">
      <div className="flex flex-col items-center p-4">
        <img
          className="w-28 h-28 rounded-full border-2 border-indigo-500 items-center"
          src={"/static/images/bisc-face.jpeg"}
          alt={`${name}'s avatar`}
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mandy Neighbor
          </h2>
          <p className="text-lg text-gray-600">Hairstylist</p>
        </div>
      </div>
      <div className="px-4 py-2 border-t">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Email:</span> mandy@email.com
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Phone:</span> 512-222-3333
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
