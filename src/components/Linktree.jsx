// Sample Link data
const links = [
  {
    title: "Main Website",
    url: "https://www.myportfolio.com",
    icon: "🌐",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/yourname",
    icon: "🔗",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/yourusername",
    icon: "📸",
  },
];

const Linktree = () => {
  return (
    <div className="font-sans bg-orange-50 text-[#333] align-middle md:max-w-lg p-3 shadow shadow-slate-500 rounded-[10px] m-3 grow">
      <h1 className="text-[2em] mb-3 text-[#368cef] font-semibold font-serif">
        My Links
      </h1>
      <div className="p-3 items-center grow">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex m-2 justify-center items-center bg-[#fff] text-[#333] p-4 rounded-[10px] shadow-md transition ease-in-out flex-grow border border-[#368cef] hover:bg-slate-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-[10px] text-[1.5rem] align-middle">
              {link.icon}
            </span>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Linktree;
