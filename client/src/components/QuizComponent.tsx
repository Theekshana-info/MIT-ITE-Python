import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizQuestion } from "@/data/quizzes";
import { CodeBlock } from "@/components/ui/code-block";
import { CheckCircle2, XCircle, Award, RotateCcw } from "lucide-react";

interface QuizComponentProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export function QuizComponent({ title, description, questions }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const getEncouragingMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! You're a Python master!";
    if (percentage >= 80) return "Excellent work! You really know your stuff!";
    if (percentage >= 60) return "Good job! You're getting there!";
    if (percentage >= 40) return "Keep practicing! You're making progress!";
    return "Don't give up! Review the material and try again!";
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
          <CardDescription className="text-lg mt-2">
            {getEncouragingMessage()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2" data-testid="text-final-score">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-muted-foreground">
              {percentage}% Correct
            </p>
          </div>
          <Button 
            onClick={resetQuiz} 
            variant="default" 
            size="lg" 
            className="w-full"
            data-testid="button-reset-quiz"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardDescription>
            Question {currentQuestion + 1} of {questions.length}
          </CardDescription>
          <CardDescription>
            Score: <span className="font-bold text-primary">{score}</span>
          </CardDescription>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            data-testid="progress-bar"
          />
        </div>
        <CardTitle className="text-xl" data-testid="text-question">
          {question.question}
        </CardTitle>
        {question.code && (
          <div className="mt-4" data-testid="question-code-block">
            <CodeBlock code={question.code} language="python" />
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = index === selectedAnswer;
            
            let buttonVariant: "outline" | "default" | "destructive" = "outline";
            let borderClass = "";
            
            if (isAnswered) {
              if (isSelected && isCorrect) {
                buttonVariant = "default";
                borderClass = "border-green-500 bg-green-50 dark:bg-green-950";
              } else if (isSelected && !isCorrect) {
                buttonVariant = "destructive";
                borderClass = "border-red-500 bg-red-50 dark:bg-red-950";
              } else if (isCorrect) {
                borderClass = "border-green-500 bg-green-50 dark:bg-green-950";
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${borderClass || "border-border hover-elevate"}
                  ${isAnswered ? "cursor-not-allowed" : "cursor-pointer active-elevate-2"}
                  ${!isAnswered && "hover:border-primary"}
                `}
                data-testid={`option-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold
                    ${isAnswered && isCorrect ? "bg-green-500 text-white" : 
                      isAnswered && isSelected && !isCorrect ? "bg-red-500 text-white" :
                      "bg-muted text-muted-foreground"}
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-foreground">{option}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`p-4 rounded-lg border ${
            selectedAnswer === question.correctAnswer
              ? "bg-green-50 dark:bg-green-950 border-green-500"
              : "bg-blue-50 dark:bg-blue-950 border-blue-500"
          }`}>
            <p className="text-sm font-semibold mb-2">
              {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
            </p>
            <p className="text-sm text-foreground">
              {question.explanation}
            </p>
          </div>
        )}

        {isAnswered && (
          <Button 
            onClick={handleNext} 
            variant="default" 
            size="lg" 
            className="w-full"
            data-testid="button-next"
          >
            {currentQuestion + 1 < questions.length ? "Next Question" : "See Results"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
