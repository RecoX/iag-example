function SectionWrapper({ title, children }) {
  return (
    <section className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
}

export default SectionWrapper;
