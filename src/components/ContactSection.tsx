import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">
            Contactez-nous
          </span>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
            Parlons de votre <span className="text-gradient-orange">projet</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Que vous ayez besoin d'un devis, d'un conseil technique ou d'une intervention urgente, 
              notre équipe est à votre disposition.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adresse", value: "Casablanca, Maroc" },
                { icon: Phone, label: "Téléphone", value: "+212 6 00 00 00 00" },
                { icon: Mail, label: "Email", value: "contact@esm.ma" },
                { icon: Clock, label: "Horaires", value: "Lun-Sam: 8h-18h | Urgence 24/7" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <select className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors">
              <option value="">Type de service</option>
              <option value="construction">Construction</option>
              <option value="ascenseurs">Ascenseurs</option>
              <option value="maintenance">Maintenance</option>
              <option value="renovation">Rénovation</option>
            </select>
            <textarea
              rows={4}
              placeholder="Décrivez votre projet..."
              className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3.5 font-heading text-base font-semibold text-primary-foreground glow-orange transition-all hover:scale-[1.02] hover:glow-orange-strong"
            >
              Envoyer le Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
