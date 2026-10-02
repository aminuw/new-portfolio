import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veille Tech — Amine Agnaou',
  description: 'Ma veille technologique : restez à jour sur les dernières innovations en développement web et IA.',
};

export default function VeilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
