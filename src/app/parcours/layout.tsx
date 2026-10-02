import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parcours — Amine Agnaou',
  description: 'Mon parcours académique, mes expériences professionnelles et mes certifications.',
};

export default function ParcoursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
