import Card from "../components/Card";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title={"sovereinity"} value={"shall"} link={"may"} />
          <Card title={"sovereinity"} value={"shall"} link={"may"} />
          <Card title={"sovereinity"} value={"shall"} link={"may"} />
        </div>
      </div>
    </section>
  );
};

export default Services;
