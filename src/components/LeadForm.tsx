import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download } from 'lucide-react';
import { toast } from 'sonner';
const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rodoConsent: false,
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rodoConsent) {
      toast.error("Wyrażenie zgody RODO jest wymagane");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Dziękujemy! Twój e-book został wysłany na podany adres email.");
    }, 1500);
  };
  return <motion.section className="w-full px-6 md:px-8 py-12 flex justify-center" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.4
  }}>
      <div className="max-w-md w-full">
        {!isSuccess ? <motion.div className="glass rounded-xl p-6 md:p-8 w-full" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-white font-playfair">
                  Pobierz bezpłatny przewodnik
                </h3>
                <p className="text-white/70 text-sm">
                  Wypełnij formularz, aby otrzymać bezpłatny e-book z najważniejszymi zmianami prawnymi
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Imię i nazwisko</label>
                  <input type="text" id="name" name="name" required placeholder="Imię i nazwisko" className="input-field" value={formData.name} onChange={handleChange} />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Adres email" className="input-field" value={formData.email} onChange={handleChange} />
                </div>
                
                <div>
                  <label htmlFor="company" className="sr-only">Nazwa firmy</label>
                  
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="rodoConsent" name="rodoConsent" className="checkbox-gold mt-1" checked={formData.rodoConsent} onChange={handleChange} />
                    <label htmlFor="rodoConsent" className="text-white/80 text-sm">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką RODO
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="marketingConsent" name="marketingConsent" className="checkbox-gold mt-1" checked={formData.marketingConsent} onChange={handleChange} />
                    <label htmlFor="marketingConsent" className="text-white/80 text-sm">
                      Wyrażam zgodę na otrzymywanie informacji marketingowych od Kancelarii Aventum
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-gold w-full flex items-center justify-center gap-2 group">
                {isSubmitting ? <div className="h-5 w-5 rounded-full border-2 border-aventum-navy border-t-transparent animate-spin"></div> : <>
                    <Download size={18} className="transition-transform group-hover:-translate-y-1" />
                    <span>Pobierz bezpłatny przewodnik</span>
                  </>}
              </button>
            </form>
          </motion.div> : <motion.div className="glass rounded-xl p-8 w-full text-center" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-aventum-gold/20 flex items-center justify-center">
                <Check size={32} className="text-aventum-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white">Dziękujemy!</h3>
              <p className="text-white/80">
                Twój e-book został właśnie wysłany na podany adres email.
              </p>
              <button onClick={() => setIsSuccess(false)} className="text-aventum-gold hover:underline mt-4">
                Powrót do formularza
              </button>
            </div>
          </motion.div>}
      </div>
    </motion.section>;
};
export default LeadForm;