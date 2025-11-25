/**
 * ChallengeList Component
 * Displays a grid/list of coding challenges
 * Reusable for any topic's challenge set
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, ChevronRight } from "lucide-react";
import type { CodingChallenge } from "@/types/challenges";

interface ChallengeListProps {
  challenges: CodingChallenge[];
  onSelectChallenge: (challenge: CodingChallenge) => void;
}

export function ChallengeList({ challenges, onSelectChallenge }: ChallengeListProps) {
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const renderChallengeCard = (challenge: CodingChallenge, index: number) => (
    <Card 
      key={challenge.id}
      className="hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-primary/50"
      onClick={() => onSelectChallenge(challenge)}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Challenge {index + 1}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">
          {challenge.title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {truncateDescription(challenge.description)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="ghost" 
          className="w-full justify-between group"
          onClick={(e) => {
            e.stopPropagation();
            onSelectChallenge(challenge);
          }}
        >
          Start Challenge
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* All Challenges */}
      {challenges.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge, idx) => 
            renderChallengeCard(challenge, idx)
          )}
        </div>
      )}

      {/* Empty State */}
      {challenges.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Code2 className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-semibold mb-2">No Challenges Available</p>
            <p className="text-sm text-muted-foreground">
              Challenges will appear here once they are added.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
