import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made by Govardhan Katta</p>
          <div className="mt-4">
            <a
              href="https://github.com/KattaGovardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mx-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
