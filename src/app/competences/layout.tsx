import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expertise — Amine Agnaou',
  description: 'Découvrez mes compétences techniques, langages et outils de développement web et mobile.',
};

export default function CompetencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
