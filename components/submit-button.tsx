import { Send } from "lucide-react";
import React from "react";

interface PropsInterface {
  name: string;
  email: string;
  message: string;
}

function SubmitButton({ formData }: { formData: PropsInterface }) {
  return (
    <button
      type="submit"
      disabled={!formData.name || !formData.email || !formData.message}
      className="flex items-center justify-center gap-2 w-full md:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-accent text-accent-foreground rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 hover:cursor-pointer hover:opacity-80 active:opacity-60 transition-all duration-200 text-sm md:text-base"
    >
      <Send className="w-4 h-4" />
      Send Message
    </button>
  );
}

export default SubmitButton;
