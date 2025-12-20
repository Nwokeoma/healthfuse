type ButtonProps = {
    href: string;
    children: React.ReactNode;
  };
  
  export default function Button({ href, children }: ButtonProps) {
    return (
      <a
        href={href}
        className="inline-block mt-5 px-6 py-3 border border-black text-sm font-medium"
      >
        {children}
      </a>
    );
  }
  