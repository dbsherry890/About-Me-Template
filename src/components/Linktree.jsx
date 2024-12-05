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
    <div className="font-sans bg-[#f5f5f5] text-[#333] align-middle w-full md:max-w-[400px] p-5 shadow shadow-slate-500 rounded-[10px] m-3">
      <h1 className="text-[2em] mb-5 text-[#368cef] pl-4">My Links</h1>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center bg-[#fff] text-[#333] p-4 rounded-[10px] shadow-md transition ease-in-out"
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
