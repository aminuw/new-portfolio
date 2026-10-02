import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Amine Agnaou',
  description: 'Contactez-moi pour discuter de votre projet ou pour une opportunité d\'alternance.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
