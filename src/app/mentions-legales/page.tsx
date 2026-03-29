import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="w-full relative selection:bg-zinc-950 selection:text-white dark:selection:bg-orange-600 dark:selection:text-white pb-32">
      <section className="pt-48 px-4 md:px-12 max-w-4xl mx-auto">
        <Link href="/" className="font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors uppercase tracking-widest mb-16 inline-block">
          ← Retour
        </Link>

        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-16">
          Mentions <span className="italic font-light">Légales.</span>
        </h1>

        <div className="space-y-12 font-mono text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-4 font-sans">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par Amine AGNAOU, développeur indépendant basé à Orléans, France.
              <br />Email : agnaouamine17@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-4 font-sans">2. Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.
              <br />Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-4 font-sans">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-4 font-sans">4. Données personnelles & Cookies</h2>
            <p className="mb-4">
              D&apos;une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant.
            </p>
            <p>
              <strong>Cookies :</strong> Ce site utilise uniquement des cookies strictement nécessaires à la bonne expérience utilisateur (sauvegarde de vos préférences d'affichage et état des popups). Aucune donnée n'est recueillie à des fins publicitaires ou revendue à des tiers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
