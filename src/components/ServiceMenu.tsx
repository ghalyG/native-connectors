import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ServiceMenuProps {
  selectedService: string | null;
  onServiceSelect: (service: string) => void;
  selectedPerson: string | null;
  onPersonSelect: (person: string) => void;
}

const ServiceMenu = ({
  selectedService,
  onServiceSelect,
  selectedPerson,
  onPersonSelect,
}: ServiceMenuProps) => {
  const services = [
    "Dean's Office",
    "Vice Dean of Student Affairs",
    "E-Services",
    "Male Academic Advisors",
    "Female Academic Advisors",
    "Finance Department",
  ];

  const getPersonOptions = () => {
    switch (selectedService) {
      case "Male Academic Advisors":
        return [
          "Dr. Tariq",
          "Dr. Mukhtar",
          "Dr. Saeed",
          "Mr. Ali",
          "Mr. Rami",
          "Dr. Abdul Salam",
          "Mr. Ahmed Amira",
          "Mr. Khader",
          "Mr. Mohammed Abduldin",
        ];
      case "Female Academic Advisors":
        return [
          "Ms. Noura Al-Ghamdi",
          "Dr. Kholoud",
          "Ms. Alaa",
          "Dr. Alaa Abbas",
          "Dr. Kholoud Abdul Hamid",
          "Ms. Widad Al-Zahrani",
        ];
      case "E-Services":
        return ["Student Affairs Department", "Financial Affairs"];
      default:
        return [];
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <label className="text-sm font-medium">Select Service:</label>
        <Select onValueChange={onServiceSelect} value={selectedService || undefined}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedService && getPersonOptions().length > 0 && (
        <div className="grid gap-4">
          <label className="text-sm font-medium">Select Contact:</label>
          <Select onValueChange={onPersonSelect} value={selectedPerson || undefined}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a person to contact" />
            </SelectTrigger>
            <SelectContent>
              {getPersonOptions().map((person) => (
                <SelectItem key={person} value={person}>
                  {person}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default ServiceMenu;