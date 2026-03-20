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

    const body = document.querySelector("body");
    
    // Create the black transition div dynamically
    const transitionDiv = document.createElement("div");
    transitionDiv.id = "page-transition";
    // Fixed, black, high z-index, covering viewport, initially below screen
    transitionDiv.className = "fixed top-[100%] left-0 w-full h-screen bg-zinc-950 z-[9999] transition-all duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)]";
    
    body?.appendChild(transitionDiv);

    // Trigger reflow to ensure the transition CSS applies
    void transitionDiv.offsetWidth;

    // Slide it up to cover screen
    transitionDiv.style.top = "0";

    // Wait for the animation to cover the screen
    await sleep(700);

    // Navigate to the next page
    router.push(href);
    
    // Wait slightly for the new page component to mount
    await sleep(150);

    // Slide it up to reveal next page
    transitionDiv.style.top = "-100%";
    
    // Clean up
    await sleep(700);
    transitionDiv.remove();
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};
