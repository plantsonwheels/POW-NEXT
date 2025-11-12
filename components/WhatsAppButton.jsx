import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappNumber = "919354001873"
  const message = "Hi, I am interested in Plants on Wheels services!"

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
