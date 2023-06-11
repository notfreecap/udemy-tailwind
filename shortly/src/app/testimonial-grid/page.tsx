const Testimonial = () => {
  return (
    <main>
      <section className="container mx-auto max-w-7xl p-2 md:p-10">
        {/* grid container */}
        <div className="text-white grid md:grid-cols-4 gap-6">
          {/* box 1 */}
          <div className="py-48 rounded-xl md:col-span-2 bg-purple-700"></div>
          {/* box 2 */}
          <div className="py-32 rounded-xl bg-gray-700"></div>
          {/* box 3 */}
          <div className="hidden md:block py-96 row-span-2 rounded-xl bg-orange-700"></div>
          {/* box 4 */}
          <div className="py-32 rounded-xl bg-blue-700"></div>
          {/* box 5 */}
          <div className="py-48 rounded-xl md:col-span-2 bg-emerald-700"></div>
          {/* box 3 V2 */}
          <div className="md:hidden py-96 rounded-xl bg-orange-700"></div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
