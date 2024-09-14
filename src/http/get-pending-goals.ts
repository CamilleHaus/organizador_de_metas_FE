type TPendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<TPendingGoalsResponse> {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();

  return data.pendingGoals;
}
