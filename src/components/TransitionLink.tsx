'use client';

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TransitionLinkProps extends Omit<LinkProps, 'onClick'> {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  onClick,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const currentPath = usePathname();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (onClick) onClick(e);

    if (currentPath === href) return;

    // Dispatch a custom event to trigger the Liquid/Oceanic transition overlay
    window.dispatchEvent(new CustomEvent('page-transition-start', { detail: href }));
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};
