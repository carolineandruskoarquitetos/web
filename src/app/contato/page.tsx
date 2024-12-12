import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "@/constants";
import { createWhatsAppUrl } from "@/utils/whatsapp";

export default function ContatoPage() {
  return (
    <main className="pt-16 pb-8">
      <div className="w-full mb-8 md:mb-12">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4106.978436851878!2d-49.296979154073846!3d-25.44686601521166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3902684c1fb%3A0x5fd47225820dbbb7!2sCaroline%20Andrusko%20Arquitetos!5e0!3m2!1spt-BR!2sbr!4v1732914776315!5m2!1spt-BR!2sbr"
          width="100%"
          height="320"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container mx-auto pl-8 flex flex-col md:flex-row">
        <div className="flex-[4] md:basis-[40%] uppercase mb-8 md:mb-0 mr-8">
          <h1 className="text-2xl text-stone-400 tracking-widest mb-8">
            CONTATO
          </h1>
          <p>
            <Link
              href="tel:+554130959505"
              className="text-sm text-stone-500 font-medium hover:underline leading-7"
            >
              +55 41 3095 9505
            </Link>
          </p>
          <p>
            <Link
              href="mailto:contato@carolineandrusko.com.br"
              className="text-sm text-stone-500 font-medium hover:underline leading-7"
            >
              contato@carolineandrusko.com.br
            </Link>
          </p>
          <p className="text-sm text-stone-500 leading-7 mb-4">
            Rua Gonçalves Dias, 370
            <br />
            Batel – Curitiba – PR - CEP 80240 340
          </p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={createWhatsAppUrl(WHATSAPP_NUMBER)}
            className="flex w-fit mb-4 uppercase text-sm text-white font-medium hover:underline leading-7 bg-stone-950 focus:ring-4 focus:ring-stone-200 px-4 py-2 border border-stone-200"
          >
            WhatsApp - {PHONE_NUMBER}
          </Link>
        </div>
        <div className="flex-[6] md:basis-[60%] pe-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
