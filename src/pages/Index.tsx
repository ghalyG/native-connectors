import { useState } from "react";
import { Card } from "@/components/ui/card";
import ServiceMenu from "@/components/ServiceMenu";
import ContactOptions from "@/components/ContactOptions";
import { toast } from "sonner";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setSelectedPerson(null);
  };

  const handlePersonSelect = (person: string) => {
    setSelectedPerson(person);
  };

  const handleContact = (method: "email" | "chat", person: string) => {
    if (method === "email") {
      // In a real app, this would open an email client
      toast.success(`Opening email client for ${person}`);
    } else {
      // In a real app, this would open a chat window
      toast.success(`Opening chat with ${person}`);
    }
  };

  return (
    <div className="min-h-screen bg-college-light">
      <header className="bg-college-navy text-white py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to Al-Baha College of Native Sciences
        </h1>
        <p className="text-lg text-college-gold">Please select your desired service</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-6">
          <ServiceMenu
            selectedService={selectedService}
            onServiceSelect={handleServiceSelect}
            selectedPerson={selectedPerson}
            onPersonSelect={handlePersonSelect}
          />
          
          {selectedPerson && (
            <ContactOptions
              person={selectedPerson}
              onContact={handleContact}
            />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Index;