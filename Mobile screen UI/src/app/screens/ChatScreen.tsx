import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Send, Phone, MapPin } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";

interface Message {
  id: string;
  text: string;
  sender: "user" | "driver";
  timestamp: string;
}

export function ChatScreen() {
  const navigate = useNavigate();
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm on my way to your location.",
      sender: "driver",
      timestamp: "2:45 PM",
    },
    {
      id: "2",
      text: "Great! How long until you arrive?",
      sender: "user",
      timestamp: "2:46 PM",
    },
    {
      id: "3",
      text: "About 15 minutes. I'm currently at Main Street.",
      sender: "driver",
      timestamp: "2:47 PM",
    },
    {
      id: "4",
      text: "Perfect, thank you!",
      sender: "user",
      timestamp: "2:47 PM",
    },
    {
      id: "5",
      text: "No problem! I'll call you when I'm nearby.",
      sender: "driver",
      timestamp: "2:48 PM",
    },
  ]);

  const driverInfo = {
    name: "Michael Johnson",
    rating: 4.9,
    vehicle: "Tow Truck #247",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim() === "") return;

    const newMessage: Message = {
      id: String(messages.length + 1),
      text: messageText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessageText("");

    // Simulate driver response after 2 seconds
    setTimeout(() => {
      const driverResponse: Message = {
        id: String(messages.length + 2),
        text: "Got it, thanks for letting me know!",
        sender: "driver",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, driverResponse]);
    }, 2000);
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        {/* Header */}
        <div className="bg-white border-b border-border">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/tracking")}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-foreground" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] w-10 h-10 rounded-full flex items-center justify-center text-white text-sm">
                  MJ
                </div>
                <div>
                  <h1 className="text-foreground">{driverInfo.name}</h1>
                  <p className="text-xs text-muted-foreground">{driverInfo.vehicle}</p>
                </div>
              </div>
            </div>
            <button
              className="bg-[#FF6B00] p-2 rounded-full hover:bg-[#FF7A1A] transition-colors"
              aria-label="Call driver"
            >
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] ${
                  message.sender === "user"
                    ? "bg-[#FF6B00] text-white"
                    : "bg-white border border-border text-foreground"
                } rounded-2xl px-4 py-3`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-white border-t border-border">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setMessageText("Where are you now?")}
              className="px-4 py-2 bg-[#FFF4ED] text-[#FF6B00] rounded-full text-sm whitespace-nowrap hover:bg-[#FFE8D6] transition-colors"
            >
              Where are you?
            </button>
            <button
              onClick={() => setMessageText("How long until you arrive?")}
              className="px-4 py-2 bg-[#FFF4ED] text-[#FF6B00] rounded-full text-sm whitespace-nowrap hover:bg-[#FFE8D6] transition-colors"
            >
              ETA?
            </button>
            <button
              onClick={() => setMessageText("I'm waiting near the parking lot")}
              className="px-4 py-2 bg-[#FFF4ED] text-[#FF6B00] rounded-full text-sm whitespace-nowrap hover:bg-[#FFE8D6] transition-colors"
            >
              I'm waiting
            </button>
          </div>
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="bg-white border-t border-border p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-[#F5F5F5] rounded-full border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-[#FF6B00] p-3 rounded-full hover:bg-[#FF7A1A] transition-colors disabled:opacity-50"
              disabled={messageText.trim() === ""}
              aria-label="Send message"
            >
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>
      </div>
    </MobileContainer>
  );
}
