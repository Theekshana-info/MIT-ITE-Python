/**
 * Coding Challenges Page
 * General coding challenges for all topics with topic filtering
 */

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Info, Code2, Trophy, Calculator, GitBranch, RefreshCw, Code, ListOrdered } from "lucide-react";
import { ChallengeList } from "@/components/ChallengeList";
import { ChallengeEditor } from "@/components/ChallengeEditor";
import { codingChallenges } from "@/data/codingChallenges";
import type { CodingChallenge } from "@/types/challenges";

interface CodingChallengesProps {
  searchQuery?: string;
}

// Topic configuration
const topics = [
  { id: "all", label: "All Topics", icon: Code2, tag: "" },
  { id: "operators", label: "Operators", icon: Calculator, tag: "operators" },
  { id: "conditionals", label: "Conditionals", icon: GitBranch, tag: "conditionals" },
  { id: "loops", label: "Loops", icon: RefreshCw, tag: "loops" },
  { id: "functions", label: "Functions", icon: Code, tag: "functions" },
  { id: "arrays", label: "Arrays / Lists", icon: ListOrdered, tag: "arrays" },
];

export default function CodingChallenges({ searchQuery = "" }: CodingChallengesProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<CodingChallenge | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  // Filter by selected topic
  const topicFilteredChallenges = selectedTopic === "all" 
    ? codingChallenges 
    : codingChallenges.filter(c => c.topicTag === topics.find(t => t.id === selectedTopic)?.tag);

  // Further filter by search query if needed
  const filteredChallenges = searchQuery
    ? topicFilteredChallenges.filter(
        (challenge: CodingChallenge) =>
          challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : topicFilteredChallenges;

  // Calculate stats for current topic
  const stats = {
    total: filteredChallenges.length,
  };

  // Get topic info
  const currentTopicInfo = topics.find(t => t.id === selectedTopic) || topics[0];
  const TopicIcon = currentTopicInfo.icon;

  // Handle next challenge navigation
  const handleNextChallenge = () => {
    if (!selectedChallenge) return;
    
    const currentIndex = filteredChallenges.findIndex(c => c.id === selectedChallenge.id);
    if (currentIndex >= 0 && currentIndex < filteredChallenges.length - 1) {
      setSelectedChallenge(filteredChallenges[currentIndex + 1]);
      window.scrollTo(0, 0); // Scroll to top when moving to next challenge
    }
  };

  const hasNextChallenge = selectedChallenge 
    ? filteredChallenges.findIndex(c => c.id === selectedChallenge.id) < filteredChallenges.length - 1
    : false;

  if (selectedChallenge) {
    return (
      <ChallengeEditor 
        challenge={selectedChallenge}
        onBack={() => setSelectedChallenge(null)}
        onNext={handleNextChallenge}
        hasNext={hasNextChallenge}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
          <Code2 className="w-10 h-10 text-primary" />
          Coding Challenges
        </h1>
        <p className="text-lg text-muted-foreground">
          Practice Python programming through hands-on coding challenges
        </p>
      </div>

      {/* Introduction Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-base">
            Choose a topic below, select a challenge, write your code, and run it to see the results!
          </CardDescription>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-semibold mb-1">Select a Topic</p>
                <p className="text-sm text-muted-foreground">
                  Use tabs below to filter by topic
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-semibold mb-1">Choose Challenge</p>
                <p className="text-sm text-muted-foreground">
                  Pick any challenge that interests you
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-semibold mb-1">Write & Run Code</p>
                <p className="text-sm text-muted-foreground">
                  Complete the task and test your solution
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                4
              </div>
              <div>
                <p className="font-semibold mb-1">Check Solution</p>
                <p className="text-sm text-muted-foreground">
                  View and run the solution if needed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Topic Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Select Topic</CardTitle>
          <CardDescription>Filter challenges by programming topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTopic} onValueChange={setSelectedTopic} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 gap-2 h-auto p-2">
              {topics.map((topic) => {
                const Icon = topic.icon;
                const count = topic.id === "all" 
                  ? codingChallenges.length 
                  : codingChallenges.filter(c => c.topicTag === topic.tag).length;
                
                return (
                  <TabsTrigger 
                    key={topic.id} 
                    value={topic.id}
                    className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{topic.label}</span>
                    <Badge variant="secondary" className="text-xs">
                      {count}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {topics.map((topic) => (
              <TabsContent key={topic.id} value={topic.id} className="mt-6">
                {/* Stats for current topic */}
                <div className="mb-6">
                  <Card className="max-w-xs">
                    <CardHeader className="pb-3">
                      <CardDescription className="text-xs uppercase tracking-wide">Total Challenges</CardDescription>
                      <CardTitle className="text-3xl">{stats.total}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>

                {/* Tips Alert */}
                {filteredChallenges.length > 0 && (
                  <Alert className="mb-6">
                    <Trophy className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Pro Tip:</strong> Try solving each challenge on your own first. 
                      Use hints if needed, and check the solution only after attempting. 
                      You can also run the solution code to see how it works!
                    </AlertDescription>
                  </Alert>
                )}

                {/* Challenge List */}
                <ChallengeList 
                  challenges={filteredChallenges}
                  onSelectChallenge={setSelectedChallenge}
                />

                {/* Empty State for topic with no challenges */}
                {filteredChallenges.length === 0 && (
                  <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                      <TopicIcon className="w-16 h-16 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {topic.id === "all" ? "No Challenges Yet" : `No ${topic.label} Challenges Yet`}
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-md">
                        Challenges for this topic are coming soon. Check back later or explore other topics!
                      </p>
                      {topic.id !== "all" && (
                        <Button onClick={() => setSelectedTopic("all")}>
                          View All Challenges
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
