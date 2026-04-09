import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-foreground mb-6">About Us</h1>
        <p className="text-muted-foreground">This is the about section</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
