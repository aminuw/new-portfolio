import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets — Amine Agnaou',
  description: 'Galerie de mes projets récents, démontrant mes compétences en développement frontend et backend.',
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
