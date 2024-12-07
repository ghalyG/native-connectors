import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

interface ContactOptionsProps {
  person: string;
  onContact: (method: "email" | "chat", person: string) => void;
}

const ContactOptions = ({ person, onContact }: ContactOptionsProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Contact {person}</h3>
      <div className="flex gap-4">
        <Button
          onClick={() => onContact("email", person)}
          className="flex-1 bg-college-navy hover:bg-college-navy/90"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email
        </Button>
        <Button
          onClick={() => onContact("chat", person)}
          className="flex-1 bg-college-gold hover:bg-college-gold/90"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Online Chat
        </Button>
      </div>
    </div>
  );
};

export default ContactOptions;