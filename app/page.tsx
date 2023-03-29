import ExternalLink from '@/ui/ExternalLink';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <Contact />
      <AboutMe />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative h-12 w-12">
        <Image
          alt="Logo"
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          src="/static/images/logo.png"
        />
        <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
          ✨
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Ryan Waits</h1>
        <p className="text-quaternary">Product Developer in Austin, TX</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">About me</p>
      <div className="text-secondary flex flex-col gap-4">
        <p>
          Primary focus lies in the realm of blockchain technology, with a
          particular emphasis on the Stacks ecosystem and Bitcoin. With a strong
          foundation in dev tooling and other primitives, I have dedicated my
          career to building robust libraries and SDKs that empower others in
          the blockchain space.
        </p>
        <p>
          Current explorations involve the intersection of AI and blockchain
          technology, as I work on creating data assistants and refining tools
          to enhance learning experiences and information retention.
        </p>
        <p>
          Having studied economics and being a self-taught developer, my unique
          background has equipped me with the skills and knowledge to innovate
          and drive progress in the ever-evolving world of blockchain and AI.
        </p>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className="block items-center gap-4">
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <p className="text-secondary hover:text-primary transition-opacity duration-150">
          {title}
        </p>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-tertiary">Contact</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContactLink
          href="https://twitter.com/ryan_waits"
          title="ryan_waits"
          website="Twitter"
        />
        <ContactLink
          href="https://github.com/ryanwaits"
          title="ryanwaits"
          website="GitHub"
        />
        <ContactLink href="#" title="waits" website="CV" />
      </div>
    </div>
  );
}
