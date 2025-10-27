import Link from "next/link";
export default function SnipppetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link href={"/"} className="text-blue-500 underline">
        back to home
      </Link>
      {children}
    </div>
  );
}
