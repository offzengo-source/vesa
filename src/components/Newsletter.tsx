import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#e0e1dd] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#1c1d21]/15">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase">
          ACCÈS PRIVILÉGIÉ AUX DROPS
        </span>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1c1d21]">
          ÊTRE INFORMÉ DU PROCHAIN DROP
        </h2>
        <p className="text-xs sm:text-sm text-[#1c1d21]/75 max-w-md mx-auto">
          Nos séries sont produites en quantités limitées. Pas de spam, uniquement les dates de sortie et réassorts.
        </p>

        {subscribed ? (
          <div className="p-3 bg-[#023e8a] text-white text-xs font-bold tracking-wider uppercase">
            MERCI. VOUS SEREZ NOTIFIÉ EN PRIORITÉ LORS DU PROCHAIN DROP.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="VOTRE ADRESSE EMAIL"
              required
              className="flex-1 px-4 py-3 bg-white text-[#1c1d21] border border-[#1c1d21]/30 placeholder:text-[#1c1d21]/40 text-xs font-semibold tracking-wider uppercase focus:outline-none focus:border-[#023e8a]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#1c1d21] hover:bg-[#023e8a] text-white text-xs font-bold tracking-widest uppercase italic transition-colors shrink-0"
            >
              S'INSCRIRE &gt;
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
