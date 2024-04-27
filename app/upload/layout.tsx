export default function UploadLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-10">
      {children}
    </section>
  );
}
