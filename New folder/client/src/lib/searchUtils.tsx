import type { ReactNode } from "react";

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightSearchText(text: string, searchQuery: string): ReactNode {
  if (!searchQuery) return text;
  
  const escapedQuery = escapeRegExp(searchQuery);
  const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
  
  return parts.map((part, i) =>
    part.toLowerCase() === searchQuery.toLowerCase() ? (
      <mark key={i} className="search-highlight">{part}</mark>
    ) : (
      part
    )
  );
}
